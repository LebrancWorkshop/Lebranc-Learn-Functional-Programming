const initialSuccess = 1;
const initialAll = 10;
const successRateList = [];

const round = 1000;

for(let i = 0; i < round; i++) {
  const successRate = ((initialSuccess + i) / (initialAll + i));
  successRateList.push(Number(successRate.toFixed(2)));
}

console.log(successRateList);

