import { DrumButtons } from './types';

export const DrumButtonsList: DrumButtons = [
  {
    name: 'bounce',
    sound: '/assets/8bitkit-bounce.wav',
    keycode: {
      name: 'Q',
      eventCode: '81',
    }
  },
  {
    name: 'explosion',
    sound: '/assets/8bitkit-explosion-2.wav',
    keycode: {
      name: 'W',
      eventCode: '87',
    }
  },
  {
    name: 'coin',
    sound: '/assets/8bitkit-coin-3.wav',
    keycode: {
      name: 'E',
      eventCode: '69',
    }
  },
  {
    name: 'jump',
    sound: '/assets/8bitkit-jump-4.wav',
    keycode: {
      name: 'R',
      eventCode: '82',
    }
  },
  {
    name: 'select',
    sound: '/assets/8bitkit-select-2.wav',
    keycode: {
      name: 'T',
      eventCode: '84',
    }
  },
  {
    name: 'laser',
    sound: '/assets/8bitkit-laser-2.wav',
    keycode: {
      name: 'Y',
      eventCode: '89',
    }
  },
]