// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

// заменить стрелочной функцией

let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask (
    "Вы согласны?",
    () => alert("Соглы"),
    () => alert("Не соглы")
);

//() => это то во что превратилась анонимная функция function () {...}
