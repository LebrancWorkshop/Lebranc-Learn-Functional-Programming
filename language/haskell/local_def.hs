petagorian :: Float -> Float -> Float
petagorian a b = sqrt (asquare + bsquare)
  where
    asquare = a * a
    bsquare = b * b

main :: IO ()
main = do
  let result = petagorian 3 4
  print result
