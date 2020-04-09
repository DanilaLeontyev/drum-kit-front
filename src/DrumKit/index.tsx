import './style.css';
import React from 'react';
import { DrumButton } from './DrumButton';
import { DrumButtonsList } from './DrumButtonsList';

const playSound = (e: KeyboardEvent) => {
  const button: HTMLButtonElement | null = document.querySelector(`button[data-key="${e.keyCode}"]`)
  if (button) {
    button.click()
  }
}

export const DrumKit = () => {
  React.useEffect(() => {
    window.onkeydown = playSound;
    return () => {
      window.onkeydown = null;
    }
  }, [])

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