// Combinator
const M = f => f(f); // Mockingbird (M-Combinator)
const I = x => x; // Idiot (I-Combinator) == Identity Function
const K = x => y => x; // Kestrel (K-Combinator)
const KI = x => y => y; // Kite (KI-Combinator)
const C = f => x => y => f(y)(x); // Cardinal (C-Combinator)
const B = f => g => x => f(g(x)); // Bluebird (B-Combinator)
const V = a => b => f => f(a)(b); // Vireo (V-Combinator)

// Boolean Algebra
const Tr = K; // True (Boolean) == Kestrel (Combonator)
const Fs = KI; // False (Boolean) == Kite (Combinator)
const and = x => y => x(y)(Fs); // AND Operator
const or = x => y => x(Tr)(y); // OR Operator
const not = x => x(Fs)(Tr); // NOT Operator

// Control Flow: Condition
const ifThenElse = p => x => y => p(x)(y); // If-Then-Else

// Church Numeral
const toNum = n => n(x => x + 1)(0); // Convert Church Numeral to Number
const n0 = f => x => x; // 0
const n1 = f => x => f(x); // 1
const n2 = f => x => f(f(x)); // 2
const n3 = f => x => f(f(f(x))); // 3
const n4 = f => x => f(f(f(f(x)))); // 4
const n5 = f => x => f(f(f(f(f(x))))); // 5
const n6 = f => x => f(f(f(f(f(f(x)))))); // 6
const n7 = f => x => f(f(f(f(f(f(f(x))))))); // 7
const n8 = f => x => f(f(f(f(f(f(f(f(x)))))))); // 8
const n9 = f => x => f(f(f(f(f(f(f(f(f(x))))))))); // 9
const n10 = f => x => f(f(f(f(f(f(f(f(f(f(x)))))))))); // 10

// Arithmetic
const succ = n => f => x => f(n)(f)(x); // Successor
const plus = m => n => f => x => m(n(f)(x)); // Plus
const mult = m => n => f => B; // Multiply
const pow = b => e => e(b); // Power

// Pairs
const pair = x => y => f => f(x)(y); // Pair
const first = p => p(Tr); // First
const second = p => p(Fs); // Second
const nil = x => Tr; // Nil
const nul = p => p(x => y => Fs); // Null

// Control Flow: Recursion


// Application

