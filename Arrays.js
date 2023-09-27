const strings = ["a", "b", "c", "d"];
// 4 * 4 = 16 bytes of storage

strings[2]; // c // O(1)
strings.push("e"); // O(1)
// ['a', 'b', 'c', 'd', 'e']
strings.pop(); // O(1)
// ['a', 'b', 'c', 'd']
strings.unshift("z"); // O(n)
// ['z', 'a', 'b', 'c', 'd']
// unshift took 5 operations to complete.
// ['a', 'b', 'c', 'd']
// [ 0    1    2    3 ] all indexes need to shift
// ['z', 'a', 'b', 'c', 'd']
// [      0    1    2    3 ]
// [ 0    1    2    3    4 ]