export type DrumButton = {
  name: string;
  sound: string;
  keycode: Keycode;
}

export type Keycode = {
  name: string;
  eventCode: string;
}

export type DrumButtons = DrumButton[];
