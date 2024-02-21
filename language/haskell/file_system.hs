import System.IO

main :: IO ()
main = do
  contents <- openFile "note_haskell.txt"
  print contents
