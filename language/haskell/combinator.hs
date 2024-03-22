-- Kestrel
k :: a -> a -> a
k x y = x

-- Kite
ki :: a -> a -> a
ki x y = y

-- Idiot
i :: a -> a
i x = x

-- Thrush
t :: a -> a -> (a -> a)
t x y = x y

-- BlueBird
b :: (a -> a) -> (a -> a) -> (a -> a)
b f g x = f g x
