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
    /* #################### Упражнение - Функция запросов. #################### */
    /*
        Сделать функцию, которая принимает строку и текст ошибки и возвращает уже Promise с JSON из тела запроса
    */
    // function getData(url, errorMessage, method = "GET") {
    //     return fetch(url, {
    //         method
    //     })
    //         .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error(`${errorMessage} ${response.status}`)
    //                 }
    //                 return response.json()
    //             }
    //         )
    // }
    //
    // getData('https://dummyjson.com/products', 'Can not get products')
    //     .then(({ products }) => {
    //         console.log(products);
    //         return getData('https://dummyjson.com/products/' + products[0].id, 'Can not get product');
    //         }
    //     )
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         const el = document.querySelector('body');
    //         el.innerHTML = error.message
    //     })
    //     .finally(() => {
    //         console.log('Finally');
    //     });

    /* #################### Упражнение - Select выбора категорий. #################### */
    /*
        Сделать запрос на https: 'https://dummyjson.com/products/categories',
        получить список категорий и отобразить <select> выбора категорий.
    */
    // function createSelect(array) {
    //     const el = document.querySelector('body');
    //     el.innerHTML = `<div class="filter"><select>
    //         ${array.map(arrEl => `<option value="${arrEl}">${arrEl}</option>`)}
    //     </select></div>`
    // }
    //
    // function getCategories() {
    //     fetch('https://dummyjson.com/products/categories')
    //         .then(response => response.json())
    //         .then(data => createSelect(data))
    //         .catch(error => console.error(`Ошибка: ${error}`))
    // }
    // getCategories();


}
export default init