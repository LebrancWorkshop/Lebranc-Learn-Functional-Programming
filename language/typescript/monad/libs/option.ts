export type Option<T> = Just<T> | None

export class Just<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  fmap<U>(func: (input: T) => U): Option<U> {
    return new Just<U>(func(this.value));
  }
};

export class None {
  fmap<U>(func: (input: any) => U): Option<U> {
    return new None();
  }
};
