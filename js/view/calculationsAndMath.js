function init() {
    /* #################### Math, Округление #################### */
    // const arr = [1, -2, 10, 0, 19];
    // console.log(Math.max(...arr));
    // console.log(Math.round(1.499999));
    // console.log(Math.ceil(1.1));
    // console.log(Math.ceil(0.1));
    // console.log(Math.trunc(1.1111));
    // console.log(Number((1.499999).toFixed(1)));
    //
    // function random(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1) + min)
    // }
    // console.log(random(1, 20));

    /* #################### Интернационализация чисел #################### */
    // const options1 = {
    //     style: "currency",
    //     currency: 'RUB'
    // }
    // const options2 = {
    //     style: "currency",
    //     currency: 'USD'
    // }
    // const options3 = {
    //     style: "decimal"
    // }
    // const options4 = {
    //     style: "percent",
    // }
    // const options5 = {
    //     style: "unit",
    //     unit: "celsius"
    // }
    // console.log(new Intl.NumberFormat('ru-RU', options1).format(23000));
    // console.log(new Intl.NumberFormat('en-US', options2).format(23000));
    // console.log(new Intl.NumberFormat('ru-RU', options3).format(23000));
    // console.log(new Intl.NumberFormat('ru-RU', options4).format(0.1));
    // console.log(new Intl.NumberFormat('ru-RU', options5).format(0.1));

    /* #################### Упражнение - Конвертер валют #################### */
    /*
        Напишите функцию, которая принимает 3 параметра:
        - Сумма
        - Валюта исходная
        - Валюта для конвертации
        И возвращает строку уже сконвертированной суммы с постфиксом валюты. Если не смог, то null.
        Для примера 3 валюты.
    */

    // function convert(sum, initialCurrency, convertCurrency) {
    //     const allCurrencies = [
    //         { name: "USD", multiple: 1 },
    //         { name: "RUB", multiple: 1/60 },
    //         { name: "EUR", multiple: 1.1 }
    //     ];
    //     const initial = allCurrencies.find(c => c.name === initialCurrency);
    //     if (!initial) {
    //         return null;
    //     }
    //     const convert = allCurrencies.find(c => c.name === convertCurrency);
    //     if (!convert) {
    //         return null;
    //     }
    //     return new Intl
    //         .NumberFormat("ru-RU", { style: 'currency', currency: convert.name})
    //         .format(sum * initial.multiple / convert.multiple);
    // }
    //
    // console.log(convert(10000, "RUB", "USD"));
    // console.log(convert(10000, "RUB", "EUR"));
    // console.log(convert(100, "RUB", "USD"));
    // console.log(convert(100, "USD", "EUR"));
    // console.log(convert(100, "EUR", "RUB"));
    // console.log(convert(100, "TG", "RUB"));

}

export default init;