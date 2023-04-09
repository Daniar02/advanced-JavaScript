function init() {
    /* #################### Promises и fetch. #################### */
    /*
        Что такое Promise?
        Promise - это контейнер для значения, которое вернётся в будущем.
        ● Не нужно использовать callback
        ● Не нужно использовать события>

        fetch().
        С помощью функции fetch() можно отправлять сетевые запросы на сервер — как получать,
        так и отправлять данные. Метод возвращает промис с объектом ответа, где находится
        дополнительная информация (статус ответа, заголовки) и ответ на запрос.
        Как понять.
        Скопировать ссылку на секцию "Как понять"
        Браузер предоставляет глобальный API для работы с запросами и ответами HTTP.
        Раньше для подобной работы использовался XMLHttpRequest, однако fetch() более гибкая
        и мощная альтернатива, он понятнее и проще в использовании из-за того, что использует
    */
    // const res = fetch('https://dummyjson.com/products/1');
    // console.log(res);

    /* #################### Обработка promises. #################### */
    // fetch('https://dummyjson.com/products/1')
    //     .then((response) => {
    //         console.log(response);
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     })

    /* #################### Цепочка promise. #################### */
    // fetch('https://dummyjson.com/products')
    //     .then(
    //         response => {
    //             console.log(response);
    //             return response.json()
    //         }
    //     )
    //     .then(({ products }) => {
    //         console.log(products);
    //         return fetch('https://dummyjson.com/products/' + products[0].id);
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => console.log(error))
    //     .finally(() => {
    //         console.log('Finally');
    //     });



}
export default init