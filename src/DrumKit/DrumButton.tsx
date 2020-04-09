import React from 'react';
import { DrumButton as DrumButtonInterface } from './types';

type DrumButtonProps = {
  button: DrumButtonInterface;
}

const initState = {
  buttonClassName: ['SoundButton'],
}

export const DrumButton = (props: DrumButtonProps) => {
  const audioRef: React.RefObject<HTMLAudioElement> = React.useRef(null);
  const buttonRef: React.RefObject<HTMLButtonElement> = React.useRef(null);

  const [buttonClassName, setButtonClassName] =
    React.useState<string[]>(initState.buttonClassName)

  const onPlayClick = async () => {
    const audio = audioRef?.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setButtonClassName([...initState.buttonClassName, 'SoundButton__playable'])
      await setTimeout(() => {
        if (audio.ended) {
          setButtonClassName(initState.buttonClassName)
        }
      }, Math.floor(audio.duration * 1000 + 150))
    };
  }

  return (
    <button data-key={props.button.keycode.eventCode} ref={buttonRef} className={buttonClassName.join(' ')} onClick={onPlayClick}>
      <p>{props.button.name}</p>
      <p>{props.button.keycode.name}</p>
      <audio ref={audioRef} src={process.env.PUBLIC_URL + props.button.sound} />
    </button>

  )
}

