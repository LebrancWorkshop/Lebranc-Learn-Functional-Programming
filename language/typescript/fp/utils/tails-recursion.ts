export function sumTails(numArr: number[], acc: number): number {
  if(numArr.length === 0) {
    return acc;
  }

  const [head, ...tails] = numArr;
  if(typeof head === 'undefined') {
    return 0;
  }

  return sumTails(tails, acc + head);
}
