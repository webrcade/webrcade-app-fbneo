import React from "react";
import { Component } from "react";

import {
  GamepadWhiteImage,
  ImageButton,
  PauseScreen,
  Resources,
  Screen,
  WebrcadeContext,
  XboxOneAButton,
  XboxOneBButton,
  XboxOneXButton,
  XboxOneYButton,
  XboxOneDpad,
  XboxOneLeftStick,
  XboxOneRightStick,
  XboxOneMenuButton,
  XboxOneWindowsButton,
  XboxOneLeftBumper,
  XboxOneRightBumper,
  XboxOneRightTrigger,
  XboxOneLeftTrigger,
  TEXT_IDS,
} from '@webrcade/app-common'

import './style.scss'

class CustomPauseScreen extends PauseScreen {
  getFocusGridComponents() {
    this.viewControlsButtonRef = React.createRef();
    const comps = super.getFocusGridComponents();
    const update = comps[0];
    update.push(this.viewControlsButtonRef);
    return comps;
  }

  getAdditionalButtons() {
    const { focusGrid, pauseStyles, viewControlsButtonRef } = this;
    const { onControlsCallback } = this.props;

    return (
      <ImageButton
        className={pauseStyles["pause-screen-image-button"]}
        imgSrc={GamepadWhiteImage}
        ref={this.viewControlsButtonRef}
        label={Resources.getText(TEXT_IDS.VIEW_CONTROLS)}
        onPad={e => focusGrid.moveFocus(e.type, viewControlsButtonRef)}
        onClick={() => { onControlsCallback() }}
      />
    );
  }
}

class ControlsScreen extends Screen {
  constructor() {
    super();

    this.okButtonRef = React.createRef();
    this.focusGrid.setComponents([[this.okButtonRef]]);
    this.contentRef = React.createRef();
    this.analogCallback = null;
  }

  focus() {
    const { okButtonRef } = this;

    if (this.gamepadNotifier.padCount > 0) {
      if (okButtonRef && okButtonRef.current) {
        okButtonRef.current.focus();
      }
    }
  }

  componentDidMount() {
    const { gamepadNotifier } = this;

    super.componentDidMount();    

    if (!this.analogCallback) {
      this.analogCallback = e => {
        if (e.type === 'r_analog_y') {
          if (this.contentRef.current) {
            const el = this.contentRef.current;
            const height = (el.scrollHeight - el.clientHeight);
            let adjust = el.scrollTop + (e.value * 10);
            if (adjust < 0) {
              adjust = 0;
            } else if (adjust > height) {
              adjust = height;
            }
            el.scrollTop = adjust;
          }    
        }
      };      
      gamepadNotifier.addAnalogCallback(this.analogCallback);
    }
  }

  componentWillUnmount() {
    const { gamepadNotifier } = this;

    super.componentWillUnmount();

    if (this.analogCallback) {
      gamepadNotifier.removeAnalogCallback(this.analogCallback);
    }
  }

  renderRow(control, imageSrc, inputs) {
    let mapping = null;
    for (let i = 0; i < inputs.length; i++) {
      if (control === inputs[i][0]) {
        mapping = inputs[i][1];
      }
    }
    return (mapping ?
      <>
        <div className={'controls-screen-content-container-row'}>
          <div className={'controls-screen-content-container-column'}>
            <img className={'controls-gamepad-button'} src={imageSrc} alt=""></img>
          </div>
          <div className={'controls-screen-content-container-column'}>
            {mapping}
          </div>
        </div>
      </> : null
    );
  }

  render() {
    const { okButtonRef, screenContext, screenStyles } = this;
    const { onClose, inputs } = this.props;

    return (
      <WebrcadeContext.Provider value={screenContext}>
        <div className={screenStyles['screen-transparency']} style={{ 'animation': 'none' }} />
        <div className={'controls-screen'}>
          <div className={'controls-screen-inner'}>
            <div className={'controls-screen-heading'}>
              <div className={'controls-screen-heading-group'}>
                <img className={'controls-screen-heading-group-image'} src={GamepadWhiteImage} alt=""></img>
                <span className={'controls-screen-heading-group-right-text'}>Gamepad Controls</span>
              </div>
            </div>
            <div className={'controls-screen-content'} ref={this.contentRef}>
              <div className={'controls-screen-content-container'}>
                {this.renderRow("start", XboxOneMenuButton, inputs)}
                {this.renderRow("select", XboxOneWindowsButton, inputs)}
                {this.renderRow("dpad", XboxOneDpad, inputs)}
                {this.renderRow("lanalog-dpad", XboxOneLeftStick, inputs)}
                {this.renderRow("ranalog-dpad", XboxOneRightStick, inputs)}
                {this.renderRow("lanalog-x", XboxOneLeftStick, inputs)}
                {this.renderRow("lanalog-y", XboxOneLeftStick, inputs)}
                {this.renderRow("ranalog-x", XboxOneRightStick, inputs)}
                {this.renderRow("ranalog-y", XboxOneRightStick, inputs)}
                {this.renderRow("a", XboxOneAButton, inputs)}
                {this.renderRow("b", XboxOneBButton, inputs)}
                {this.renderRow("x", XboxOneXButton, inputs)}
                {this.renderRow("y", XboxOneYButton, inputs)}
                {this.renderRow("lbump", XboxOneLeftBumper, inputs)}
                {this.renderRow("rbump", XboxOneRightBumper, inputs)}
                {this.renderRow("ltrig", XboxOneLeftTrigger, inputs)}
                {this.renderRow("rtrig", XboxOneRightTrigger, inputs)}
              </div>
            </div>
            <div className={'controls-screen-buttons'}>
              <ImageButton
                ref={okButtonRef}
                label={Resources.getText(TEXT_IDS.OK)}
                onClick={() => onClose()}
              />
            </div>
          </div>
        </div>
      </WebrcadeContext.Provider>
    );
  }
}

export class NeoPauseScreen extends Component {
  constructor() {
    super();
    this.state = {
      mode: this.ModeEnum.PAUSE,
    };
  }

  ModeEnum = {
    PAUSE: "pause",
    CONTROLS: "controls",
  }

  render() {
    const { ModeEnum } = this;
    const { appProps, closeCallback, exitCallback, inputs, isEditor } = this.props;
    const { mode } = this.state;

    return (
      mode === ModeEnum.PAUSE ? (
        <CustomPauseScreen
          appProps={appProps}
          closeCallback={closeCallback}
          exitCallback={exitCallback}
          isEditor={isEditor}
          onControlsCallback={() => {
            this.setState({ mode: ModeEnum.CONTROLS })
          }}
        />
      ) : (
        <ControlsScreen 
          inputs={inputs}
          onClose={closeCallback} />
      )
    );
  }
}
