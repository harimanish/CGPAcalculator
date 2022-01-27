// sub marks(input)
var sub1 = 60;
var sub2 = 60;
var sub3 = 90;
var sub4 = 60;
var sub5 = 60;
var sub6 = 30;

// credits(data)
var c1 = 3;
var c2 = 3;
var c3 = 3;
var c4 = 2;
var c5 = 2;
var c6 = 3;

// sub arr[]
var sub = [];
sub.push(sub1, sub2, sub3, sub4, sub5, sub6);

// credit
var c = [];
c.push(c1, c2, c3, c4, c5, c6);

// total of c*sub
/*var array1 = [1, 2, 3, 4, 5];
var array2 = [5, 4, 3, 2, 1];

function sumProducts(array1, array2) {
  if (array1.length)
    return array1.pop() * array2.pop() + sumProducts(array1, array2);

  return 0;
}
*/
function GPA(sub, c) {
  // gradePoint function
  function gradePoints(parameter) {
    if (parameter > 89) {
      return 10;
    } else if (parameter > 79) {
      return 9;
    } else if (parameter > 69) {
      return 8;
    } else if (parameter > 59) {
      return 7;
    } else if (parameter > 49) {
      return 6;
    } else if (parameter <= 49 && parameter >= 0) {
      return 0;
    }
  }

  // range of marks
  var range = [];
  for (var i = 0; i < sub.length; i++) {
    range.push(gradePoints(sub[i]));
  }
  console.log(range);

  // 0mark 0c
  for (var i = 0; i < range.length; i++) {
    if (range[i] === 0) {
      c[i] = 0;
    }
  }
  console.log(c);

  // jhb
  var sum = 0;
  for (var i = 0; i < sub.length; i++) {
    sum += range[i] * c[i];
  }
  console.log(sum);

  var csum = c.reduce(function (x, y) {
    return x + y;
  }, 0);
  console.log(csum);
  var GPA = sum / csum;

  console.log(GPA);
}
GPA(sub, cd);
