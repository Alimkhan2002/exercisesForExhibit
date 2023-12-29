// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert( new A() == new B() );


// function Calculator () {
//     this.read = function() {
//         this.a = +prompt('Первое число', '');
//         this.b = +prompt('Второе число', '');
//         }

//         this.sum = function() {
//             return this.a + this.b;
//         }
//         this.mul = function() {
//             return this.a * this.b;
//         }

// }

// let calc = new Calculator();
// calc.read();
// alert( "Sum=" + calc.sum() );
// alert( "Mul=" + calc.mul() );


// function Accumulator (value) {
    
//     this.read = function() {
//         this.a = +prompt('Сколько нужно добавить?', '');
//         this.b = +prompt('Сколько нужно добавить?', '');
//     }
//     this.sum = function(){
//         this.value = value + this.a + this.b;
//     }

// }

// let accumulator = new Accumulator(1); 

// accumulator.read();  
// accumulator.sum();

// alert(accumulator.value); // выведет сумму этих значений


function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Сколько нужно добавить?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);





