// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

// function checkAge(age){
//    return (age > 18) ? true : confirm('Родители разрешили?') 
// }

// function checkAge(age){
//     return (age > 18) || confirm('Родители разрешили?');
// }

// __________________________________________________________________________

// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }

// function min (a, b) {
//     return a < b ? a : b;
// }
// __________________________________________________________________________

// function pow (a, b) {
//     return alert(a ** b);
// }

// pow(3, 4);

// или

// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n >= 1 && n % 1 == 0) {
//     alert( pow(x, n) );
//   } else {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   }
