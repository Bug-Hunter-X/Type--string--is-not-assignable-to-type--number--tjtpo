# Type 'string' is not assignable to type 'number'
This TypeScript code demonstrates a common type error: assigning a string to a number variable.  The `add` and `subtract` functions are correctly typed to accept and return numbers. However, if you were to pass strings to these functions (e.g., `add("5", "3")`), you'd encounter the error "Type 'string' is not assignable to type 'number'".  This error highlights TypeScript's strong typing system, preventing runtime errors by catching type mismatches at compile time.

## Solution
The solution involves ensuring that only numbers are passed into the functions. Input validation or type assertions could be employed to handle potential string inputs appropriately.