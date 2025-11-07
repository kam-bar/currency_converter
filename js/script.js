console.log("Witam serdecznie!");

const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

const calculateResult = (amount, currency) => {
    const rateEUR = 4.28;
    const rateGBP = 4.85;
    const rateUSD = 3.69;

    switch (currency) {
        case "EUR":
            return amount / rateEUR;
        case "GBP":
            return amount / rateGBP;
        case "USD":
            return amount / rateUSD;
        default:
            return null;
    }
};

const updateResult = (result, currency) => {
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    if (result === null) {
        alert("Nieznana waluta!");
        return;
    }

    updateResult(result, currency);
};

formElement.addEventListener("submit", onFormSubmit);