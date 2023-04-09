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

}
export default init