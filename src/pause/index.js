import React from 'react';
import { Component } from 'react';

import {
  ControlsTab,
  CustomPauseScreen,
  EditorScreen,
  CapcomBackground,
  KonamiBackground,
  NeoGeoBackground,
  ArcadeBackground,
  GamepadWhiteImage,
  KeyboardWhiteImage,
  PauseScreenButton,
  Resources,
  SaveStatesEditor,
  SaveWhiteImage,
  TEXT_IDS,
} from '@webrcade/app-common';

import './style.scss';

class GamepadControlsTab extends ControlsTab {
  renderRow(control, commonControlName, inputs) {
    let mapping = null;
    for (let i = 0; i < inputs.length; i++) {
      if (control === inputs[i][0]) {
        mapping = inputs[i][1];
      }
    }
    return mapping ? this.renderControl(commonControlName, mapping) : null;
  }

  render() {
    const { inputs } = this.props;

    return (
      <>
        {this.renderRow('start', 'start', inputs)}
        {this.renderRow('select', 'select', inputs)}
        {this.renderRow('dpad', 'dpad', inputs)}
        {this.renderRow('lanalog-dpad', 'lanalog', inputs)}
        {this.renderRow('ranalog-dpad', 'ranalog', inputs)}
        {this.renderRow('lanalog-x', 'lanalog', inputs)}
        {this.renderRow('lanalog-y', 'lanalog', inputs)}
        {this.renderRow('ranalog-x', 'ranalog', inputs)}
        {this.renderRow('ranalog-y', 'ranalog', inputs)}
        {this.renderRow('a', 'a', inputs)}
        {this.renderRow('b', 'b', inputs)}
        {this.renderRow('x', 'x', inputs)}
        {this.renderRow('y', 'y', inputs)}
        {this.renderRow('lbump', 'lbump', inputs)}
        {this.renderRow('rbump', 'rbump', inputs)}
        {this.renderRow('ltrig', 'ltrig', inputs)}
        {this.renderRow('rtrig', 'rtrig', inputs)}
      </>
    );
  }
}

class KeyboardControlsTab extends ControlsTab {
  renderKeyRows(keyInputs) {
    let ret = [];
    const buttons = [];
    const displayed = {};
    for (let i = 0; i < keyInputs.length; i++) {
      const key = keyInputs[i][0];
      const desc = keyInputs[i][1];
      if (!displayed[key]) {
        displayed[key] = true;
        if (
          key === 'Enter' ||
          key === 'ShiftRight' ||
          key === 'ArrowRight' ||
          key === 'ArrowLeft' ||
          key === 'ArrowUp' ||
          key === 'ArrowDown'
        ) {
          ret.push(this.renderKey(key, desc));
        } else {
          buttons.push(this.renderKey(key, desc));
        }
      }
    }

    ret = [...ret, ...buttons];
    return ret;
  }

  render() {
    const { keyInputs } = this.props;

    return <>{this.renderKeyRows(keyInputs)}</>;
  }
}

export class NeoPauseScreen extends Component {
  constructor() {
    super();
    this.state = {
      mode: this.ModeEnum.PAUSE,
      cloudEnabled: false,
      loaded: false
    };
  }

  ModeEnum = {
    PAUSE: 'pause',
    CONTROLS: 'controls',
    STATE: 'state',
  };

  ADDITIONAL_BUTTON_REFS = [React.createRef(), React.createRef()];

  componentDidMount() {
    const { loaded } = this.state;
    const { emulator } = this.props;

    if (!loaded) {
      let cloudEnabled = false;
      emulator.getSaveManager().isCloudEnabled()
        .then(c => { cloudEnabled = c; })
        .finally(() => {
          this.setState({
            loaded: true,
            cloudEnabled: cloudEnabled
          });
        })
    }
  }


  render() {
    const { ADDITIONAL_BUTTON_REFS, ModeEnum } = this;
    const {
      appProps,
      closeCallback,
      emulator,
      exitCallback,
      inputs,
      isEditor,
      isStandalone,
      keyInputs,
    } = this.props;
    const { cloudEnabled, loaded, mode } = this.state;

    const type = emulator.type;

    if (!loaded) {
      return null;
    }

    const additionalButtons = [
      <PauseScreenButton
        imgSrc={GamepadWhiteImage}
        buttonRef={ADDITIONAL_BUTTON_REFS[0]}
        label={Resources.getText(TEXT_IDS.VIEW_CONTROLS)}
        onHandlePad={(focusGrid, e) =>
          focusGrid.moveFocus(e.type, ADDITIONAL_BUTTON_REFS[0])
        }
        onClick={() => {
          this.setState({ mode: ModeEnum.CONTROLS });
        }}
      />
    ];

    if (cloudEnabled) {
      additionalButtons.push(
        <PauseScreenButton
          imgSrc={SaveWhiteImage}
          buttonRef={ADDITIONAL_BUTTON_REFS[1]}
          label={Resources.getText(TEXT_IDS.SAVE_STATES)}
          onHandlePad={(focusGrid, e) =>
            focusGrid.moveFocus(e.type, ADDITIONAL_BUTTON_REFS[1])
          }
          onClick={() => {
            this.setState({ mode: ModeEnum.STATE });
          }}
        />
      );
    }

    return (
    <>
      {mode === ModeEnum.PAUSE ? (
        <CustomPauseScreen
          appProps={appProps}
          closeCallback={closeCallback}
          exitCallback={exitCallback}
          isEditor={isEditor}
          isStandalone={isStandalone}
          additionalButtonRefs={ADDITIONAL_BUTTON_REFS}
          additionalButtons={additionalButtons}
        />
      ) : null}
      {mode === ModeEnum.CONTROLS ? (
        <EditorScreen
          inputs={inputs}
          keyInputs={keyInputs}
          onClose={closeCallback}
          tabs={[
            {
              image: GamepadWhiteImage,
              label: Resources.getText(TEXT_IDS.GAMEPAD_CONTROLS),
              content: <GamepadControlsTab inputs={inputs} />,
            },
            {
              image: KeyboardWhiteImage,
              label: Resources.getText(TEXT_IDS.KEYBOARD_CONTROLS),
              content: <KeyboardControlsTab keyInputs={keyInputs} />,
            },
          ]}
        />
      ) : null}
      {mode === ModeEnum.STATE ? (
        <SaveStatesEditor
          emptyImageSrc={
            type === 'fbneo-capcom' ? CapcomBackground :
              type === 'fbneo-konami' ? KonamiBackground :
                type === 'fbneo-neogeo' ? NeoGeoBackground : ArcadeBackground}
          emulator={emulator}
          onClose={closeCallback}
          showStatusCallback={emulator.saveMessageCallback}
        />
      ) : null}
    </>
    );
  }
}
