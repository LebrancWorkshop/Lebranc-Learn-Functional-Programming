function recursiveFact(n) {
  if(n === 0 || n === 1) {
    return 1;
  } else {
    return n * recursiveFact(n - 1);
  }
};

console.log(recursiveFact(5));
