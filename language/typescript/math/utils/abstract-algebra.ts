export interface Magma<T> {
  closure: (operand_01: T, operand_02: T) => T;
};

export interface Semigroup<T> extends Magma<T> {
  identity: () => T;
};
