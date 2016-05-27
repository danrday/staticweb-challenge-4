
var n = false;

for (var x=1; x<10000; x++) {
  if (n) {
    break;
  }
  for (var i=1; i<=10; i++) {
    var medulo = x%i;
    if (medulo !== 0) {
      break;
    } else if (i === 10){
      alert("lowest number evenly divisible by the numbers 1-10 is: " + x);
      var n = true;
    }
    console.log(i);
  
}
}
