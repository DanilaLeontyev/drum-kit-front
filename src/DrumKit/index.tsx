import React from 'react';
import { DrumButtons } from './types';
import { DrumButton } from './DrumButton';

const DrumButtonsList: DrumButtons = [
  {
    name: 'A',
    sound: 'assets/8bitkit-explosion-6.wav',
  },
  {
    name: 'S',
    sound: 'assets/8bitkit-explosion-2.wav',
  },
  {
    name: 'D',
    sound: 'assets/8bitkit-explosion-3.wav',
  },
  {
    name: 'F',
    sound: 'assets/8bitkit-explosion-4.wav',
  },
  {
    name: 'G',
    sound: 'assets/8bitkit-explosion-5.wav',
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