module Len where

myLength :: [a] -> Integer
myLength [] = 0
myLength (x:xs) = 1 + myLength xs

myAdd :: Integer -> Integer -> Integer
myAdd num1 num2 = num1 + num2

main :: IO ()
main = do
  print(myLength ([1, 2, 3] :: [Int]))
