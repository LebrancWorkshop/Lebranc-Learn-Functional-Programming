// Combinator
const M = f => f(f); // Mockingbird (M-Combinator)
const I = x => x; // Idiot (I-Combinator) == Identity Function
const K = x => y => x; // Kestrel (K-Combinator)
const KI = x => y => y; // Kite (KI-Combinator)
const C = f => x => y => f(y)(x); // Cardinal (C-Combinator)
const T = a => b => b(a); // Thrush (T-Combinator)
const B = f => g => x => f(g(x)); // Bluebird (B-Combinator)
const V = a => b => f => f(a)(b); // Vireo (V-Combinator)
const H = a => b => c => a(b)(c)(b); // Hummingbird (H-Combinator)
const E = a => b => c => d => e => a(b(c(d)(e))); // Eagle (E-Combinator)
const L = a => b => a(b(b)); // Lark (L-Combinator)
const O = a => b => b(a(b)); // Owl (O-Combinator)
const R = a => b => c => b(c)(a); // Robin (R-Combinator)
const S = a => b => c => a(c)(b(c)); // Starling (S-Combinator)
const W = a => b => a(b)(b); // Warbler (W-Combinator)
const Q = a => b => c => b(a(c)); // Queer (Q-Combinator)
const F = a => b => c => c(b)(a); // Finch (F-Combinator)
const G = a => b => c => d => a(d(b(c))); // Goldfinch (G-Combinator)
const D = a => b => c => d => a(b(c(d))); // Dove (D-Combinator)
const A = a => b => a(b); // Apply (A-Combinator)
const BB = a => b => c => d => a(b(c)(d)); // Blackbird (BB-Combinator)
const P = a => b => c => d => a(b(d))(c(d)); // Phoenix (P-Combinator)
const Y = a => (b => b(b))(b => a(c => b(b)(c))); // Why (Y-Combinator) == Y-Fixed Point
const Z = a => M(b => a(M(b))); // Z-Fixed Point
const U = a => b => b(a(a)(b)); // Turing (U-Combinator)
const Psi = a => b => c => d => a(b(c))(b(d)); // Psi (Ψ-Combinator)

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

