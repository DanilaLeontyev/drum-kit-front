import React from 'react';
import { DrumButton as IDrumButton } from './types';

type DrumButtonProps = {
  button: IDrumButton;
  onClick: (button: IDrumButton) => void;
}

const initState = {
  buttonClassName: ['SoundButton'],
}

export const DrumButton = (props: DrumButtonProps) => {
  const buttonRef: React.RefObject<HTMLButtonElement> = React.useRef(null);

  const [buttonClassName, setButtonClassName] =
    React.useState<string[]>(initState.buttonClassName);

  const onPlayClick = async () => {
    props.onClick(props.button);
    const audio = new Audio(props.button.sound);
    audio.onloadedmetadata = () => {
      setButtonClassName([...initState.buttonClassName, 'SoundButton__playable']);
    }
    audio.onended = () => {
      setButtonClassName(initState.buttonClassName);
    }
    audio.currentTime = 0;
    audio.play();
  }
  return (
    <button
      data-key={props.button.keycode.eventCode}
      ref={buttonRef}
      className={buttonClassName.join(' ')}
      onClick={onPlayClick}>

      <p>{props.button.name}</p>
      <p>{props.button.keycode.name}</p>
    </button>
  )
}
