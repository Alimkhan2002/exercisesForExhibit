// callback
// function ask (question, yes, no){
//     if (confirm(question)) yes()
    
//     else no ()
// }
// function showOk () { alert('Соглы')};
// function showNo () { alert('Не соглы')};

// ask("Вы согласны?", showOk, showNo);



// function expression 
// let age = prompt('Возраст?', '');
// let welcome;

// if (age >= 18) {
//     welcome = function () {
//         alert('Привет')
//     }
// } else {
//     welcome = function () {
//     alert('Дитя');
//     }
// }

// welcome();

//или

// let age = prompt('Возраст?', '');
// let welcome = (age >= 18) ?
// function() {alert('Привет')} : 
// function() {alert('Дитя');};

// welcome();


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );
//Здесь функции объявляются прямо внутри вызова ask(...). У них нет имён, поэтому они называются анонимными. Такие функции недоступны снаружи ask (потому что они не присвоены переменным), но это как раз то, что нам нужно.






