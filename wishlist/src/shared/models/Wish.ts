export enum WishState {
  Completed,
  Uncompleted,
}

export class Wish {
  constructor(
    public content: string,
    public state: WishState = WishState.Uncompleted
  ) {}
}

export type WishFilterCallback = (wish: Wish) => boolean;

export class WishFilter {
  constructor(public name: string, public callback: WishFilterCallback) {}
}
