module HigherOrderFunction where

app :: (a -> b) -> a -> b
app f x = f x

main :: IO ()
main = do
  let result = app (\x -> x + 1) 1
  print result

