let user = {}; // пользователь без адреса

alert( user?.address?.street ); // undefined (без ошибки)

// пример с document.querySelector:

let html = document.querySelector('.elem')?.innerHTML; // будет undefined, если элемента нет


// Считывание адреса с помощью user?.address работает, даже если объект user не существует:

let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined