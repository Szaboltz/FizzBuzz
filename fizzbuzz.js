var ct = 1;
var output = [];

function fizzBuzz() {
  if (ct % 3 === 0 && ct % 5 === 0) {
    output.push("fizzBuzz");
  } else if (ct % 3 === 0) {
    output.push("fizz");
  } else if (ct % 5 === 0) {
    output.push("buzz");
  } else {
    output.push(ct);
  }

  ct++;

  console.log(output);
}

fizzBuzz();
