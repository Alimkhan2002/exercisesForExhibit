// let user = { name: "John" };

// Object.assign(user, { name: "Pete" });

// alert(user.name);



// два объекта равны только в том случае, если это один и тот же объект.

// Например, здесь a и b ссылаются на один и тот же объект, поэтому они равны:

// let a = {};
// let b = a; // копирование по ссылке

// alert( a == b ); // true, обе переменные ссылаются на один и тот же объект
// alert( a === b ); // true
// И здесь два независимых объекта не равны, даже если они выглядят одинаково (оба пусты):

// let a = {};
// let b = {}; // два независимых объекта

// alert( a == b ); // false





let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);

// теперь user = { name: "John", canView: true, canEdit: true }