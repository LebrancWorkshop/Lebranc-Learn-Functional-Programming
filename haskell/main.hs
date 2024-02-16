add :: Int -> Int -> Int
add num1 num2 = num1 + num2

main :: IO ()

main  = do
  let result = add 9 9
  print result

