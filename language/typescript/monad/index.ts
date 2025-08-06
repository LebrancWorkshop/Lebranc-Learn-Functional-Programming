// import { type Option, Just, None } from "./libs/option";
import { succ, add, mult } from "./utils/arithmatics";

// const zero: Option<number> = new Just(0);
// const nonSense: Option<number> = new None();
// const wow: Option<number> = new Just(99);

// const zeroOperand = zero.fmap(add);

import { some, type Option, ap } from "fp-ts/Option";
import { pipe } from "fp-ts/lib/function";


const foo = some(99);
const bar = some(100);
const addOption = some(add);
const multOption = some(mult);

const result = pipe(
  addOption,
  ap(foo),
  ap(bar),
);

const result02 = pipe(
  multOption,
  ap(result),
  ap(bar)
);


console.log(result02);
