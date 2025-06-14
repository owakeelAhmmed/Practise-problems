let name = prompt("Enter your name:");
console.log("Hello", name);
// ===================================================================
let sum = 0;
for (let i = 1; i <= 20; i++) {
  console.log(i);
  sum += i;
}
console.log("Sum is:", sum);

// ===================================================================
let year = parseInt(prompt("Enter a year:"));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

// ===================================================================
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// ===================================================================
const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

for (let i = 0; i < friends.length; i++) {
  if (friends[i].length > 5) {
    console.log(friends[i]);
  }
}


// ===================================================================

const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("Maximum number is:", max);



