var ArrGpa = [];
function getScores() {
  var sem1sub = [];

  sem1sub.push(
    document.getElementById("1sub1").value,
    document.getElementById("1sub2").value,
    document.getElementById("1sub3").value,
    document.getElementById("1sub4").value,
    document.getElementById("1sub5").value,
    document.getElementById("1sub6").value,
    document.getElementById("1sub7").value,
    document.getElementById("1sub8").value,
    document.getElementById("1sub9").value
  );
  var sem2sub = [];
  sem2sub.push(
    document.getElementById("2sub1").value,
    document.getElementById("2sub2").value,
    document.getElementById("2sub3").value,
    document.getElementById("2sub4").value,
    document.getElementById("2sub5").value,
    document.getElementById("2sub6").value,
    document.getElementById("2sub7").value
  );

  // var GPA1 = GPA(sem1sub, c1);
  // var GPA2 = GPA(sem2sub, c2);

  ArrGpa.push(GPA(sem1sub, c1));
  ArrGpa.push(GPA(sem2sub, c2));

  var sumOfGPA = ArrGpa.reduce(function (x, y) {
    return x + y;
  }, 0);

  var CGPA = sumOfGPA / ArrGpa.length;
  document.getElementById("CGPA").innerHTML = "CGPA = " + CGPA;
}

// credits(data)

var c1 = [3, 4, 3, 3, 3, 3, 1, 2, 2];
var c2 = [3, 3, 4, 3, 3, 1, 2];
var c3 = [3, 3, 3, 3, 3, 3, 2, 2];
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
    } else {
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
  var csum = 0;
  for (var i = 0; i < c.length; i++) {
    csum += c[i];
  }
  var GPA = sum / csum;
  console.log(GPA);
  return GPA;
  // document.getElementById("GPA1").innerHTML = "sem 1 GPA = " + GPA;
}
