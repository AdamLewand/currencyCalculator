console.log("Cześć i czołem");

let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;

    let PHP = 11.97;
    let MYR = 0.96;
    let BRL = 1.14;

    amountElement.focus();

    let result;

    switch (currency) {
        case "PHP":
            result = amount / PHP;
            break;

        case "MYR":
            result = amount / MYR;
            break;

        case "BRL":
            result = amount / BRL;
            break;
    }
            resultElement.innerText = result.toFixed(2);
    })

