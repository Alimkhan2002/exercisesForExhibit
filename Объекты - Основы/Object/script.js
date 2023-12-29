// 1-e задание
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;


// 2-е задание
// let schedule = {
// };
// let isEmpty = true;

// for (let key in schedule){
//     isEmpty = false;
//     break;
// }

// if(isEmpty){
//     alert('Пустой')
// } else {
//     alert('Не пустой')
// }

// или

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// function isEmpty(obj) {
//     for (let key in obj) {
//       // если тело цикла начнет выполняться - значит в объекте есть свойства
//       return false;
//     }
//     return true;
//   }



// 3-е задание
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }

// let sum = 0;

// for (let key in salaries){
//     sum += salaries[key]; 
// }

// alert(sum);



// 3-е задание
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };



// function multiplyNumeric (menu) {
//     for(let key in menu){
//         let value = menu[key]
//         if (typeof value == 'number')
//         return key *= 2;
//     }
    
// }

// multiplyNumeric(menu);


