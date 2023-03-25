// 1 = 00000001
// 2 = 00000010
// Result of the below statement is 00000011
console.log(1 | 2); // Bitwise OR

console.log(1 & 2); // Bitwise AND
// Result of the above statement is 00000000

// Read, Write, Execute
// 00000100 (Read Permission Only)
// 00000110 (Read and Write Permission)
// 00000111 (Read, Write, and Execute Permission)

// Access Control System using Bitwise Operators Example
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = myPermission & readPermission ? "yes" : "no";

console.log(message);
