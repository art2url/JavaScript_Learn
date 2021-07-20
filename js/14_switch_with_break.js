//Switch with break

//3 == too small
//4 == correct
//5 == too big
//default == I don't know such values

let a = 2 + 2;
switch (a) {
  case 3:
    alert('Маловато');
    break;
  case 4:
    alert('В точку!');
    break;
  case 5:
    alert('Перебор');
    break;
  default:
    alert("Нет таких значений");
}