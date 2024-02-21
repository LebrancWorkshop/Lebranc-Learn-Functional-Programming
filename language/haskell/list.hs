import Data.List

asc :: Int -> Int -> [Int]
asc n m
  | n < m = []
  | n == m = [n]
  | n > m = n : asc (n - 1) m

main :: IO ()
main = do
  let lis = [1, 2, 3, 4, 5]
  print $ tail lis
