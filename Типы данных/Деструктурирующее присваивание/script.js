let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
  // ...и она немедленно извлекает свойства в переменные
  function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    // title, items – взято из options,
    // width, height – используются значения по умолчанию
    alert( `${title} ${width} ${height}` ); // My Menu 200 100
    alert( items ); // Item1, Item2
  }
  
  showMenu(options);