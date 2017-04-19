//use built in function toLocaleString to convert the number to currency
function converter(number){
  return number.toLocaleString('USD', {style: 'currency',
   currency: 'USD',
   minimumFractionDigits: 2, // smallest decimal is two number after decimal
   maximumFractionDigits: 2}); // largest decimal is two number after decimal
}


module.exports = converter; //export the function so it can be used in other modules
