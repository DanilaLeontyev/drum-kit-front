import React from 'react';
import { DrumButtons } from './types';
import { DrumButton } from './DrumButton';

const DrumButtonsList: DrumButtons = [
  {
    name: 'A',
    sound: 'some',
  },
  {
    name: 'S',
    sound: 'some',
  },
  {
    name: 'D',
    sound: 'some',
  },
  {
    name: 'F',
    sound: 'some',
  },
  {
    name: 'G',
    sound: 'some',
  },
]

export const DrumKit = () => {
  const audioCtx = new window.AudioContext();
  console.log(audioCtx);
  return (
    <div>
      {
        DrumButtonsList.map((button) => {
          return <DrumButton key={Math.random()} button={button} />
        })
      }
    </div>
  )
}