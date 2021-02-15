# Grokking Algorithms

## Big O notation

- Calculates the amount of operations it takes to finish an algorithim
  - Searching for an element with a simple search with a list of 8 will at worse take 8 operations. Where as with Binary search it would be log 8 === 3 as as its also known as 2 ³ (At worse 4 operations).
- Big O notation tells you how fast an algorithm will grow.
- Binary search is O(log n) where n is the number of operations & O stands for operations.
- O(n!) really slow algorithm (travellin salesperson).
- O(n²) nested for loops

## Linked lists

- Store the address of the next item in the list (Can be anywhere in memory).
- Great for insertions or deletions.
- Crap for random access as we need to read all the items to find where are item is.
  - E.G List of 6 items we want item 3. We would need to read all the items before 3 to find it.

## Divide and conquer

- Works by breaking a problem down into smaller & smaller pieces. Usually the base case is probably an empty array or an array with a size of 1.
- D&C is not an alogrithm that you can just apply. It's more of a way of thinking about a problem and how to apply D & C techqiues to it.
- Given a farm of 1680 \* 640 find the size of the biggest square you can use to fill up the farm.
  - Find the bigest square (640 because the farm is 640 in height).
  - Make as many boxes with 640. (640 + 640 + 400)
  - Subtract the biggest from the smallest (640 - 400 = 160).
  - 400 -160 = 240,
  - 240 - 160 = 80
  - 80 - 80 = 0 (80 is the answer).

## Quick sort

- Works by taking a piviot at random. E.G:
  - [1,2,3,4,5] pivot = [3]
  - Make two sub arrays by comparing the values against the pivot. So we should have two sub arrays where one array has all the values less than the pivot. While the other sub array has all the values greater than the pivot.
  - Call quicksort recurisvly on the sub arrays to sort them.
  - Concat the result quiksort([1,2]) + [3] + quicksort([4,5])
- Average runtime is (O n log n)!
- O(n log n) explained: A binary search only touches a small number of elements. If there's a billion elements, the binary search only touches ~30 of them.
  A quicksort touches every single element, a small number of times. If there's a billion elements, the quick sort touches all of them, about 30 times: about 30 billion touches total.
