# Haskell Notes

* type vars are always lower case.
* use lowercase a for anything.
  * E.G `f :: a -> a`
  * above function takes anything and returns anything
* `-fwarn-incomplete-patterns` this will warn you that patterns are not fully matched. set in ghci.
* Functions can accept functions as arguments but they need to be within brackets
  * `func :: (Integer -> Integer) -> Integer`

## Monads

* apply to programming in general
* Optionals are one instance of a functor
* State is an instance of Monads
* To be dry
