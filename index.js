// declare customerName to be bob in global scope that returns the customerName
var customerName = 'bob';

// write a function called upperCaseCustomerName that modifies the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// setBestCustomer(): when called, declares a variable called `bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// overwriteBestCustomer(): a function overwrites the best customer
function overwriteBestCustomer(){
  bestCustomer ='maybe bob';
}
// changeLeastFavoriteCustomer(): unsuccessfully tries to reassign the least favorite customer
const leastFavoriteCustomer = "Mark";

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "Bob";
}