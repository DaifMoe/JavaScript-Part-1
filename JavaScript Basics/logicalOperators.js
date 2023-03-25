// In JavaScript we have three logical operators logical and, logical or, and not.

// Logical AND (&&)
// Returns True if both operands are True
// console.log(true && true); // True
// console.log(true && false); // False

// logical AND (&&) Real World Use Case for Loan Approval Application Example
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan); // True because both of the conditions are true so the whole statement is true

// Logical OR (||)
// Returns True if one of the operands is True
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log(eligibleForLoan); // True because one of the conditions is true so the whole statement becomes true

// NOT Operator (!)
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log("Eligible", eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);
