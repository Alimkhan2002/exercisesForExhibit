// alert( null || 2 || undefined );

// let value = NaN;
// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;
// alert(value);

// alert( alert(1) && alert(2) );

// let age = prompt('Возраст?', '');
// if (age >= 14 && age <= 90) {    по правилам '&&' нужно чтобы соответствие вписывалось как true && true
//     alert('В диапозоне 14-90')
// } else {
//     alert('Не в диапозоне 14-90');
// }


// let age = prompt('Возраст?', '');
// if (!(age >= 14 && age <= 90)) { 
//     alert('Не в диапозоне 14-90')
// } else {
//     alert('В диапозоне 14-90')
// }


// let age = prompt('Возраст?', '');
// if (age <= 14 || age >= 90) { 
//     alert('Не в диапозоне 14-90')
// } else {
//     alert('В диапозоне 14-90')
// }



let log = prompt('Имя', '')

if(log === 'Админ'){

    let pass = prompt('Пароль', '')

    if(pass === 'Лол') {
        alert('Добро пожаловать!')
    }
    else if(pass == '' || pass == null) {
        alert('Отмена')
    }
    else {
        alert('Неверный пароль')
    }
}
else if ((log == '' || log == null)) {
    alert('Отмена');
}
else{
    alert('Пошёл нах');
}









// let userName = prompt("Кто там?", '');

// if (userName === 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }