switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }

let browser_2;
if(browser_2 == 'Edge') {
alert( "You've got the Edge!" );
} else if(browser_2 == 'Chrome' 
|| browser_2 == 'Firefox' 
|| browser_2 == 'Safari' 
|| browser_2 == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
  case 0 : 
  alert('Число 0')
  break;

  case 1 : 
  alert('Число 1')
  break;

  case 2:
  case 3: 
  alert('Число 2, а может и 3')
  break;
}

