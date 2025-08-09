module Main where

myHead :: [a] -> Maybe a
myHead [] = Nothing
myHead (x: xs) = Just x

main :: IO()
main = do
    print (myHead ([1,2,3,4,5] :: [Int]))
    print (myHead ([] :: [Int]))

