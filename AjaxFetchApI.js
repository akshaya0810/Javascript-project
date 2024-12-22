//1. Separate details of users with user id == 3 from the API:
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) 
  .then(data => {
    const userWithId3 = data.filter(user => user.id === 3);
    console.log("1)",userWithId3);
  })
  .catch(error => console.error('1)Error:', error));

  //2. JavaScript function to get the current date:
  function getCurrentDate() {
    const today = new Date();
    console.log("2)",today); 
    const formattedDate = today.toLocaleDateString();
    console.log('2)Current Date:', formattedDate); // Formatted Date
  }
  getCurrentDate();

  //3. FizzBuzz program from 1 to 100:
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("3)FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("3)Fizz");
    } else if (i % 5 === 0) {
      console.log("3)Buzz");
    } else {
      console.log("3)i",i);
    }
  }

  //4. Print all data with their id and title from the API:
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      console.log(`4)id: ${user.id}, 4)title: ${user.name}`);
    });
  })
  .catch(error => console.error('4)Error:', error));

  //5. Clone an array using different methods:
  const arr = [1, 2, 3, 4, 5];
  const clone1 = Object.assign([], arr);
  console.log('5)Cloned Array using Object.assign:', clone1);
  const clone2 = JSON.parse(JSON.stringify(arr));
  console.log('5)Cloned Array using JSON:', clone2);
  const clone3 = [...arr];
  console.log('5)Cloned Array using Spread Operator:', clone3);

  //6. Use filter method to separate all even numbers from 1 to 20:
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1); // Array from 1 to 20
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log('6)Even numbers:', evenNumbers);

  //7. Use filter method to separate all odd numbers from 1 to 20:
  const oddNumbers = numbers.filter(num => num % 2 !== 0);
  console.log('7)Odd numbers:', oddNumbers);

  //8. Check if a given number exists in an array:
  function checkIfExists(arr, num) {
    return arr.includes(num);
  }
  const myArray = [1, 2, 3, 4, 5];
  const numberToCheck = 3;
console.log("8)",checkIfExists(myArray, numberToCheck)); 
            