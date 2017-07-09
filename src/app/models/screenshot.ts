export class Screenshot {
  img: string;
  description: string;
  liked: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
