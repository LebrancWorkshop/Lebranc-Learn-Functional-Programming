const double = (num: number): number => num * 2;
const succ = (num: number): number => num + 1;
const succ_o_double = (num: number): number => succ(double(num)); // succ o double -> "succ" after "double"
const double_o_succ = (num: number): number => double(succ(num)); // double o succ -> "double" after "succ"
const dupp = (num: number): number[] => [num, num];

const decimalDigits: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const dupplicateDecimalDigits = decimalDigits.map(dupp);
const duppDecimalDigits = decimalDigits.flatMap(dupp);
console.log(duppDecimalDigits);
