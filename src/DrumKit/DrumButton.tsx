import React from 'react';
import { DrumButton as DrumButtonInterface } from './types';

type DrumButtonProps = {
  button: DrumButtonInterface;
}

const Style: React.CSSProperties = {
  border: '1px solid red',

}

export const DrumButton = (props: DrumButtonProps) => {
  const audioRef: React.RefObject<HTMLAudioElement> = React.useRef(null);

  const onPlayclick = () => {
    audioRef?.current?.play();
  }
  return (
    <div style={Style}>{props.button.name}
      <audio ref={audioRef} src={process.env.PUBLIC_URL + props.button.sound} />
      <button onClick={onPlayclick}>Play</button>
    </div>
  )
}