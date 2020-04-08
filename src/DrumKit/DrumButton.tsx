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

  async function callAfterDelay<T>(sleppTime: number, fn: (args: T) => any, args: T) {
    return await setTimeout(async () => {
      await fn(args)
    }, sleppTime)
  }

  const reverseStyle = (audio: HTMLAudioElement) => {
    setButtonClassName(initState.buttonClassName)
    if (audio.parentElement) {
      audio.parentElement.innerHTML = props.button.name;
    }
  }

  const changeStyle = (audio: HTMLAudioElement) => {
    setButtonClassName([...buttonClassName, 'SoundButton__playable'])
    callAfterDelay<HTMLAudioElement>(audio.duration * 1000, reverseStyle, audio)
  }

  const onPlayClick = () => {
    const audio = audioRef?.current;
    if (audio) {
      changeStyle(audio);
      audio.play();
    };
  }

  return (
    <button ref={buttonRef} className={buttonClassName.join(' ')} onClick={onPlayClick}>
      {props.button.name}
      <audio ref={audioRef} src={process.env.PUBLIC_URL + props.button.sound} />
    </button>

  )
}

