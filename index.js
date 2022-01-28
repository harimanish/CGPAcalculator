// // sub marks(input)
// var sem1sub1 = 60;
// var sem1sub2 = 60;
// var sem1sub3 = 90;
// var sem1sub4 = 60;
// var sem1sub5 = 60;
// var sem1sub6 = 30;
// var sem1sub7 = 0;
// var sem1sub8 = 30;
// var sem1sub9 = 6;

function getScores() {
  var sem1sub = [
    getElementsByClassName("1sem1"),
    getElementsByClassName("1sem2"),
    getElementsByClassName("1sem3"),
    getElementsByClassName("1sem4"),
    getElementsByClassName("1sem5"),
    getElementsByClassName("1sem6"),
    getElementsByClassName("1sem7"),
    getElementsByClassName("1sem8"),
    getElementsByClassName("1sem9"),
  ];
}
console.log(sem1sub);
// credits(data)

var c1 = [3, 4, 3, 3, 3, 3, 1, 2, 2];

// sub arr[]
var sub = [];
sub.push(sub1, sub2, sub3, sub4, sub5, sub6);

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
  getScores();
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

  // 0mark 0c
  for (var i = 0; i < range.length; i++) {
    if (range[i] === 0) {
      c[i] = 0;
    }
  }

  // jhb
  var sum = 0;
  for (var i = 0; i < sub.length; i++) {
    sum += range[i] * c[i];
  }

  var csum = c.reduce(function (x, y) {
    return x + y;
  }, 0);

  var GPA = sum / csum;

  console.log(GPA);
}

GPA(sem1sub, c1);
