// Get references to the form elements
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amount = document.getElementById("amount");
const convertBtn = document.getElementById("convert-btn");
const convertedAmount = document.getElementById("converted-amount");

// Add an event listener to the convert button
convertBtn.addEventListener("click", convert);

// Define the convert function
function convert() {
  // Get the selected currencies and amount
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amt = amount.value;

  // Make the API request to convert the currencies
  fetch(`https://openexchangerates.org/api/latest.json?app_id=26e4a5e109e849869e614dbf2a956b61&base=${from}&symbols=${to}`)
    .then(response => response.json())
    .then(data => {
      // Extract the exchange rate
      const exchangeRate = data.rates[to];

      // Calculate the converted amount
      const converted = amt * exchangeRate;

      // Display the converted amount
      convertedAmount.innerHTML = `${amt} ${from} is equal to ${converted} ${to}`;
    })
    .catch(error => console.log(error));
}
