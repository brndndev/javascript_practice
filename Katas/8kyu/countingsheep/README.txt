

8 kyu
21
8 kyu
Counting sheep...
73923687% of 8,93834,488 of 85,901tfKamran5 Issues Reported
JavaScript
Node v10.x
VIM
EMACS
Instructions
Output
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

FUNDAMENTALSARRAYS

powered by

Solution:
1
function countSheeps(arrayOfSheep) {
2
  // TODO May the force be with you
3
}
Sample Tests:
1
describe("Tests", () => {
2
  it("test", () => {
3
var array1 = [true,  true,  true,  false,
4
              true,  true,  true,  true ,
5
              true,  false, true,  false,
6
              true,  false, false, true ,
7
              true,  true,  true,  true ,
8
              false, false, true,  true ];
9
              
10
Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total")
11
  });
12
});
13
​
RESET
TEST
ATTEMPT
