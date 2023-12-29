let str = 'list-style-image';

function camelize() {
    return str
      .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
      .map(
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
  }

alert(camelize());


// function filterRange(arr, a, b) {
//   // добавлены скобки вокруг выражения для улучшения читабельности
//   return arr.filter(item => (a <= item && item <= b));
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)






// function filterRangeInPlace(arr, a, b){
//   // return a <= item && item <= b;
//   arr
//   .sort(
//     (item => a <= item && item <= b ? item : 0)
//   )
// };

// let arr = [5, 3, 8, 1];

// let filtered = filterRangeInPlace(arr, 1, 4)


// alert(arr);




// let arr = [5, 3, 8, 1];

// arr.sort(function(a, b){return (a <= item && item <= b)})

// alert( arr );



function compareNumeric(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
}
  
let arr = [5, 2, 1, -10, 8];

arr.sort(compareNumeric);

alert( arr ); // 8, 5, 2, 1, -10












