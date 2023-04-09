function init() {
    /* #################### Асинхронный код в JS. #################### */
    /*
        Термины
            ● Конкурентность - за промежуток времени выполниться N задач
            ● Параллельность - выполняться кем-то ещё
            ● Многопоточность - способ конкурентного выполнения выделением рабочих потоков
            ● Асинхронная операция - передача операции для выполнения на стороне
    */

    /* #################### Запросы на сервер. #################### */
    /*
        AJAX
            Asynchronous JavaScript and XML позволяет нам асинхронно взаимодействовать
            с удалённым сервером для получения или отправки данных

        JSON
            JavaScript Object Notation - формат описание объектов в JavaScript
    */

    /* #################### Получение данных. #################### */
    // function req(id) {
    //     const request = new XMLHttpRequest();
    //     request.open('GET', 'https://dummyjson.com/products/' + id);
    //     request.send();
    //
    //     request.addEventListener('load', function () {
    //         const data = JSON.parse(this.responseText);
    //         console.log(data);
    //     });
    // }
    // req(1);
    // req(2);
    // req(3);

    /* #################### Упражнение - Расчёт цены. #################### */
    /*
        Получить среднюю цены 30 товаров из АРІ
        https://dummyjson.com/products
    */
    // const request = new XMLHttpRequest();
    // request.open("GET", "https://dummyjson.com/products");
    // request.send();
    //
    // request.addEventListener('load', function () {
    //     const { products } = JSON.parse(this.responseText);
    //     console.log(products);
    //     const sum = products.reduce((acc, p) => acc += p.price, 0);
    //     console.log(sum / products.length);
    // })

    /* #################### Проблемы callback. #################### */
    // const request = new XMLHttpRequest();
    // request.open('GET', 'https://dummyjson.com/products');
    // request.send();
    //
    // request.addEventListener('load', function () {
    //     const { products } = JSON.parse(this.responseText);
    //     console.log(products);
    //
    //     const request = new XMLHttpRequest();
    //     request.open('GET', 'https://dummyjson.com/products/' + products[0].id);
    //     request.send();
    //
    //     request.addEventListener('load', function () {
    //         const data = JSON.parse(this.responseText);
    //         console.log(data);
    //
    //         const request = new XMLHttpRequest();
    //         request.open('GET', 'https://dummyjson.com/products/' + products[1].id);
    //         request.send();
    //
    //         request.addEventListener('load', function () {
    //             const data = JSON.parse(this.responseText);
    //             console.log(data);
    //
    //         });
    //     });
    // });



}
export default init