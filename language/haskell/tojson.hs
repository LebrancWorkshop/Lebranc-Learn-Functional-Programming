-- Module
module JSON where

-- Typeclass
class ToJSON a where
  toJSON :: a -> String

-- Data Type
data Book = Book String Double

-- Assign Type to Typeclass
instance ToJSON Book where
  toJSON (Book title price) =
    "{\"Title\": " ++ title ++ ", " ++ "\"Price\": " ++ show price ++ "}"

-- Assign Function
printJSON :: ToJSON a => a -> IO ()
printJSON value = putStrLn (toJSON value)

-- Main Function
main :: IO ()
main = do
  let book = Book "Hello and Bravo" 10.00
  printJSON book 
