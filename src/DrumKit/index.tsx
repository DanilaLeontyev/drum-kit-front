import './style.css';
import React from 'react';
import { DrumButtons } from './types';
import { DrumButton } from './DrumButton';

const DrumButtonsList: DrumButtons = [
  {
    name: 'bounce',
    sound: 'assets/8bitkit-bounce.wav',
  },
  {
    name: 'explosion',
    sound: 'assets/8bitkit-explosion-2.wav',
  },
  {
    name: 'coin',
    sound: 'assets/8bitkit-coin-3.wav',
  },
  {
    name: 'jump',
    sound: 'assets/8bitkit-jump-4.wav',
  },
  {
    name: 'select',
    sound: 'assets/8bitkit-select-2.wav',
  },
  {
    name: 'laser',
    sound: 'assets/8bitkit-laser-2.wav',
  },
]

export const DrumKit = () => {
  return (
    <div className="ButtonContainer">
      {
        DrumButtonsList.map((button) => {
          return <DrumButton key={Math.random()} button={button} />
        })
      }
    </div>
  )
}