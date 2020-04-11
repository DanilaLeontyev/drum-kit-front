import './style.css';
import React from 'react';
import { DrumButton } from './DrumButton';
import { DrumButtonsList } from './DrumButtonsList';
import { DrumButton as IDrumButton } from './types';

const playSound = (e: KeyboardEvent) => {
  const button: HTMLButtonElement | null = document.querySelector(`button[data-key="${e.keyCode}"]`)
  if (button) {
    button.click()
  }
}

export const DrumKit = () => {
  const [memory, setMemory] = React.useState<IDrumButton[]>([])

  React.useEffect(() => {
    window.onkeydown = playSound;
    return () => {
      window.onkeydown = null;
    }
  }, [])

  const onButtonClick = (button: IDrumButton) => {
    setMemory([...memory, button]);
  }

  const onResetClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    setMemory([])
  }

  const onPlayClick = () => {
    memory.forEach((sound) => {
      new Audio(sound.sound).play();
    })
  }

  return (
    <div className="DrumKit">
      <div className="ControlPanel">
        <button className="Controlbutton Controlbutton__reset" onClick={onResetClick}>Reset</button>
        <button className="Controlbutton Controlbutton__play" onClick={onPlayClick}>Play</button>
      </div>

      <div>
        {memory.map((button) => {
          return <div key={Math.random()}>{button.name}</div>
        })}
      </div>

      <div className="ButtonContainer">
        {
          DrumButtonsList.map((button) => {
            return (<DrumButton key={button.name} button={button} onClick={onButtonClick} />)
          })
        }
      </div>
    </div>
  )
}