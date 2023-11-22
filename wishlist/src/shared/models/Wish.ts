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
