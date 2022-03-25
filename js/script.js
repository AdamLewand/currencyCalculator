{
    console.log("Cześć i czołem!");

    const calculateResult = (amount, currency) => {
        const PHP = 11.97;
        const MYR = 0.96;
        const BRL = 1.14;

        switch (currency) {
            case "PHP":
                return amount / PHP;

            case "MYR":
                return amount / MYR;

            case "BRL":
                return amount / BRL;
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");

        amountElement.focus();

        const amount = amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        resultElement.innerText = result.toFixed(2);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}