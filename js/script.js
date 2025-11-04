console.log("Witam serdecznie!");

const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    let result;
    const rateEUR = 4.28;
    const rateGBP = 4.85;
    const rateUSD = 3.69;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
        default:
            alert("Nieznana waluta!");
            return;
    }
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});
