import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let employee = {};

let firstName = prompt("First Name: ");
if(!firstName) {
    console.error(`Invalid First Name`);
    process.exit(1); 
}
employee.firstName = firstName;

let lastName = prompt("Last Name: ");
if(!lastName) {
    console.error(`Invalid Last Name`);
    process.exit(1);
}
employee.lastName = lastName;

let startDateYear = prompt ("Employee Start Year (1990-2026): ");
startDateYear = Number(startDateYear);
//Chec if it is a valid integer
if(!Number.isInteger(startDateYear)){
    console.error(`Enter valid start date year`);
    prompt.exit(1)
}
//Check if the number is in the range
if(startDateYear < 1990 || startDateYear > 2026) {
    console.error(`Enter valid start year within the correct range`)
    prompt.exit(1)
}

let startDateMonth = prompt("Employee Start Date Month (1-12): ")
startDateMonth = Number(startDateMonth);
//Chek if its a valid integer 
if(!Number.isInteger(startDateMonth)){
    console.error(`Enter valid start month`)
    prompt.exit(1);
}
//Check if the number is in the range
if(startDateMonth < 1 || startDateMonth > 12) {
    console.error(`Enter a start date month within the correct range`)
    process.exit(1)
}

let startDateDay = prompt("Employee Start Date Day (1-31): ")
startDateDay = Number(startDateDay);

if(!Number.isInteger(startDateDay)){
    console.error(`Enter a valid start date day`)
    process.exit(1)
}
if(startDateDay < 1 || startDateDay > 31){
    console.error(`Enter a day within the correct range`)
    process.exit(1)
}
if(startDateMonth === 2 && startDateDay > 28){
      console.error(`Enter a day within the correct range`)
      process.exit(1)
}

//Date elements are correct, create the date
employee.startDateDay = new Date(startDateYear, startDateMonth -1, startDateDay);

let isActive = prompt("Is employee currently active? (yes or no): ");
//check if incorrect value was entered
if (isActive !== "yes" && isActive !== "no"){
      console.error(`Enter yes or no`)
      process.exit(1)
}
employee.isActive = (isActive === "yes");

//Output Employee JSON
const json = JSON.stringify(employee, null, 2);
console.log(`Employee: ${json}`);