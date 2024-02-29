pelem :: (Eq a) => a -> [a] -> Bool
pelem _ [] = False
pelem num (x:xs) = (num == x) || pelem num xs

pnub :: (Eq a) => [a] -> [a]
pnub [] = []
pnub (x:xs)
  | pelem x xs = pnub xs
  | otherwise = x : pnub xs

isA :: [Int] -> Bool
isA [] = False
isA (x:y:xs)
  | x <= y  = isA (y:xs)
  | otherwise = False

main :: IO ()
main = do
  let result = pelem 3 [1,2,3,4,5]
  let result2 = pnub [1,2,3,4,5,5]
  print result2


