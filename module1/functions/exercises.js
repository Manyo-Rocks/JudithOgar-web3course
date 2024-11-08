// Recursive 

function isEven(n) {
    if (n < 0) {
      return "Input must be a positive whole number";
    }
    if (n === 0) {
      return true; 
    } else if (n === 1) {
      return false; 
    } else {
      return isEven(n - 2); 
    }
  }
  