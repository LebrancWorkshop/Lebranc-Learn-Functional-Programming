cartesian :: [Int] -> [Int] -> [(Int, Int)]
cartesian xs ys = [(x, y) | x <- xs, y <- ys]


main :: IO ()
main = do
  let result = cartesian [1, 2, 3] [2, 8, 9]
  print result
