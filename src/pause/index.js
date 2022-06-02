import React from "react";
import { Component } from "react";

import {
  ChevronLeftWhiteImage,
  ChevronRightWhiteImage,
  GamepadWhiteImage,
  ImageButton,
  KeyboardWhiteImage,
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
  ArrowUpKey,
  ArrowDownKey,
  ArrowLeftKey,
  ArrowRightKey,
  EnterKey,
  ShiftKey,
  AKey,
  CKey,
  DKey,
  SKey,
  VKey,
  XKey,
  ZKey,
  TEXT_IDS,
} from '@webrcade/app-common'

import './style.scss'

class CustomPauseScreen extends PauseScreen {
  getFocusGridComponents() {
    this.viewControlsButtonRef = React.createRef();
    const comps = super.getFocusGridComponents();
    comps[0].push(this.viewControlsButtonRef);
    return comps;
  }

  getAdditionalButtons() {
    const { focusGrid, pauseStyles, viewControlsButtonRef } = this;
    const { onControlsCallback } = this.props;

    return (
      <ImageButton
        className={pauseStyles["pause-screen-image-button"]}
        imgSrc={GamepadWhiteImage}
        ref={viewControlsButtonRef}
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
    this.tabLeftRef = React.createRef();
    this.tabRightRef = React.createRef();
    this.focusGrid.setComponents(
      [
        [this.tabLeftRef, this.tabRightRef],
        [this.okButtonRef]
      ]
    );
    this.analogCallback = null;

    this.state = {
      tabIndex: 0
    };
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
          if (this.contentRef) {
            const el = this.contentRef;
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

  getKeyImage(key) {
    switch (key) {
      case 'Enter':
        return EnterKey;
      case 'ShiftRight':
        return ShiftKey;
      case 'ArrowRight':
        return ArrowRightKey;
      case 'ArrowLeft':
        return ArrowLeftKey;
      case 'ArrowUp':
        return ArrowUpKey;
      case 'ArrowDown':
        return ArrowDownKey;
      case 'KeyZ':
        return ZKey;
      case 'KeyX':
        return XKey;
      case 'KeyC':
        return CKey;
      case 'KeyV':
        return VKey;
      case 'KeyA':
        return AKey;
      case 'KeyS':
        return SKey;
      case 'KeyD':
        return DKey;
      default:
        return "";
    }
  }

  renderKey(key, description) {
    return (
      <div key={key} className={'controls-screen-content-container-row'}>
        <div className={'controls-screen-content-container-column'}>
          <img className={'controls-gamepad-button'} src={this.getKeyImage(key)} alt=""></img>
        </div>
        <div className={'controls-screen-content-container-column'}>
          {description}
        </div>
      </div>
    );
  }

  renderKeyRows(keyInputs) {
    let ret = [];
    const buttons = [];
    const displayed = {};
    for (let i = 0; i < keyInputs.length; i++) {
      const key = keyInputs[i][0];
      const desc = keyInputs[i][1];
      if (!displayed[key]) {
        displayed[key] = true;
        if (key === 'Enter' || key === 'ShiftRight' || key === 'ArrowRight' ||
          key === 'ArrowLeft' || key === 'ArrowUp' || key === 'ArrowDown') {
          ret.push(this.renderKey(key, desc));
        } else {
          buttons.push(this.renderKey(key, desc));
        }
      }
    }

    ret = [...ret, ...buttons];
    return ret;
  }

  FADE_IN_CLASS = "controls-pause-content-fade-in";

  renderTabButton(isPrev) {
    const { tabLeftRef, tabRightRef, focusGrid } = this;
    const { tabIndex } = this.state;
    const MIN_TAB = 0;
    const MAX_TAB = 1;

    const disabled = (isPrev && tabIndex === MIN_TAB) || (!isPrev && tabIndex === MAX_TAB);

    const fadeOut = () => {
      this.headingRef.classList.remove(this.FADE_IN_CLASS);
      this.contentRef.classList.remove(this.FADE_IN_CLASS);
      this.contentRef.scrollTop = 0;
    }

    return (
      <ImageButton
        className={'controls-screen-heading-group-button' + (disabled ? ' controls-button-hide' : '')}
        disabled={disabled}
        ref={isPrev ? tabLeftRef : tabRightRef}
        onPad={e => focusGrid.moveFocus(e.type, tabRightRef)}
        imgSrc={isPrev ? ChevronLeftWhiteImage : ChevronRightWhiteImage}
        onClick={() => {
          if (!disabled) {
            fadeOut();
            const newIndex = (isPrev ? tabIndex - 1 : tabIndex + 1);
            if ((isPrev && newIndex === MIN_TAB) || (!isPrev && newIndex === MAX_TAB)) {
              setTimeout(() => {
                if (isPrev) {
                  tabRightRef.current.focus()
                } else {
                  tabLeftRef.current.focus();
                }
              }, 50);
            }
            this.setState({ tabIndex: newIndex });
          }
        }}
      />
    )
  }

  render() {
    const { okButtonRef, screenContext, screenStyles, focusGrid } = this;
    const { onClose, inputs, keyInputs } = this.props;
    const { tabIndex } = this.state;

    setTimeout(() => {
      this.headingRef.classList.add(this.FADE_IN_CLASS);
      this.contentRef.classList.add(this.FADE_IN_CLASS);
    }, 0);

    return (
      <WebrcadeContext.Provider value={screenContext}>
        <div className={screenStyles['screen-transparency']} style={{ 'animation': 'none' }} />
        <div className={'controls-screen'}>
          <div className={'controls-screen-inner'}>
            <div ref={(heading) => { this.headingRef = heading; }} className={'controls-screen-heading'}>
              <div className={'controls-screen-heading-group'}>
                {this.renderTabButton(true)}
                {tabIndex === 0 ? (
                  <>
                    <img className={'controls-screen-heading-group-image'} src={GamepadWhiteImage} alt=""></img>
                    <span className={'controls-screen-heading-group-right-text'}>Gamepad Controls</span>
                  </>
                ) : null}
                {tabIndex === 1 ? (
                  <>
                    <img className={'controls-screen-heading-group-image'} src={KeyboardWhiteImage} alt=""></img>
                    <span className={'controls-screen-heading-group-right-text'}>Keyboard Controls</span>
                  </>
                ) : null}
                {this.renderTabButton(false)}
              </div>
            </div>
            <div className={'controls-screen-content'}  ref={(content) => { this.contentRef = content; }}>
              {tabIndex === 0 ? (
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
              ) : null}
              {tabIndex === 1 ? (
                <div className={'controls-screen-content-container'}>
                  {this.renderKeyRows(keyInputs)}
                </div>
              ) : null}
            </div>
            <div className={'controls-screen-buttons'}>
              <ImageButton
                ref={okButtonRef}
                onPad={e => focusGrid.moveFocus(e.type, okButtonRef)}
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
    const { appProps, closeCallback, exitCallback, inputs, isEditor, keyInputs } = this.props;
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
          keyInputs={keyInputs}
          onClose={closeCallback} />
      )
    );
  }
}
