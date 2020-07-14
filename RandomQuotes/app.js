(function () {
// Array with the data
const quotes = [
  {quote: '"Life is what happens when you’re busy making other plans.', author: 'John Lennon"'},
  {quote: '"Get busy living or get busy dying."', author: 'Stephen King'},
  {quote: '"You only live once, but if you do it right, once is enough."', author: 'Mae West'},
  {quote: '"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."', author: 'Steve Jobs'},
  {quote: '"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it."', author: 'Henry Ford'}
];

// Add eventListener
document.querySelector('#btn').addEventListener('click', generateQuote);

// Function to generate a quote
function generateQuote () {
  let n = randomNumber(quotes);
  document.querySelector('#quote').textContent = quotes[n].quote;
  document.querySelector('#author').textContent = quotes[n].author;
};

// Function to get a random number
function randomNumber (arr) {
  let number = Math.floor(Math.random()*arr.length);
  return number;
}

})();





