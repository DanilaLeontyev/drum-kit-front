import React from 'react';
import { DrumButton as DrumButtonInterface } from './types';

type DrumButtonProps = {
  button: DrumButtonInterface;
}

const Style: React.CSSProperties = {
  border: '1px solid red',

}

export const DrumButton = (props: DrumButtonProps) => {
  return (
    <div style={Style}>{props.button.name}
      <audio src={props.button.sound} />
      <button>Play</button>
    </div>
  )
}