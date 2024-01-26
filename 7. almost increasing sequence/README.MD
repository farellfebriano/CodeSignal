# Almost Increasing Sequence

## Rules

Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence `a0`, `a1`, ..., `an` is considered to be a strictly increasing if `a0 < a1 < ... < an`. Sequence containing only one element is also considered to be strictly increasing.

## Example 1

For `sequence = [1, 3, 2, 1]`, the output should be
`solution(sequence) = false`.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

## Example 2

I `For sequence = [1, 3, 2]`, the output should be
`solution(sequence) = true.`

You can remove `3` from the array to get the strictly increasing sequence `[1, 2]`. Alternately, you can remove `2` to get the strictly increasing sequence `[1, 3]`.

## Input/Output

- [execution time limit] 4 seconds (js)

- [memory limit] 1 GB

- [input] array.integer sequence

Guaranteed constraints:
`2 ≤ sequence.length ≤ 105`,
`105 ≤ sequence[i] ≤ 105`.

- [output] boolean

Return `true` if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return `false`.

## Code

```javascript
/*
 NOTE
 this is a unique easy but hard problem. So read the explanation to gain 100% understandin
*/
function solution(sequence) {
  /*
  the main idea of this code it just simple iteration, if
  sequence[i]>sequence[i+1] add count+=1 and if the count
  is greater than 1 just return false

  However this wont work if
  - [1 , 2, 1, 2]

  hence we need to have a additional nested if loops
    we just need two conditional if statement because it only need 2 count to make it wrong
    1. sequence[i + 1] <= sequence[i - 1] in the same condition sequence[i] <= sequence[i - 2]
    the second if statement looks like to make sure if the i is the one is anomaly
  */
  let count = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (
        sequence[i + 1] <= sequence[i - 1] &&
        sequence[i] <= sequence[i - 2]
      ) {
        return false;
      }
    }
  }
  return count <= 1;
}
```

## Complexity

[Time] Complexity O(n)

- since, it only iterate the array once

[Space] Complexity O(1)

- since, it dosent add more memory
