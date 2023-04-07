function init() {
    /*
        Что же такое ООП?
        ● Объектно-ориентированное программирование - это парадигма
          программирования, основанного на концепции объектов.

        ● Объектами мы описываем реальные модели из жизни.

        ● Мы складываем все данные об объекте и его поведении внутрь.

        ● Из них мы строим приложения, позволяя им взаимодействовать между собой.

        ● ООП если вы пишете видеоигры "гонки" вы можете воспользоваться технологий ООП
          и запрограммировать объект "машины", а затем создать множество таких объектов
          обладающих одинаковым набором свойств и одинаковый функциональностью

        Для чего?
        ● ООП - разрабатывалось, как решение проблемы структурирования приложения.
        ● Благодаря ему, код становится более поддерживаемый, читаемый и структурированный.

        Принципы ООП
        ● Абстракция
            Выделение в моделируемом предмете важного для решения конкретной задачи по предмету,
            скрывая несущественные детали

        ● Инкапсуляция.
            Инкапсуляция обеспечиваем возможность приватных методов или свойства в классе,
            которые не были бы доступны извне.

        ● Наследование.
            Наследование позволяет наследовать данные и функциональность другого класса.
            Это позволяет переиспользовать логику между классами.

        ● Полиморфизм.
            Полиморфизм позволяет использовать объекты с одинаковым "интерфейсом" без
            информации о типе и внутренней структуре объекта.
    */

    /* #################### Реализация ООП в JS #################### */
    // const User = function (email, password) {
    //     this.email = email;
    //     this.password = password + '・・・';
    // }
    // const user1 = new User('a@a.ru', '123');
    // console.log(user1);
    // const user2 = new User('a2@a.ru', '123');
    // console.log(user2);
    // console.log(user2 instanceof User);
    // Создаётся пустой объект.
    // Вызывается User функция
    // this = пустому объекту
    // Объект связывается с prototype.
    // Возвращается объект

    /* #################### Prototype #################### */
    // const Book = function(title, author) {
    //     this.title = title
    //     this.author = author
    //     this.isRead = false
    // }
    // Book.prototype.read = function () {
    //     this.isRead = true
    // }
    //
    // Book.prototype.cover = "Parer";
    //
    // const lordOfTheRing = new Book('Lord of the ring', 'Tolkien');
    // lordOfTheRing.read()
    //
    // console.log(lordOfTheRing);
    // console.log(lordOfTheRing.cover);
    // console.log(lordOfTheRing.hasOwnProperty("cover"));
    // console.log(lordOfTheRing.hasOwnProperty("author"));
    //
    // console.log(lordOfTheRing.__proto__);
    // console.log(lordOfTheRing.__proto__ === Book.prototype);
    // console.log(Book.prototype.isPrototypeOf(lordOfTheRing));
    // console.log(Book.prototype.isPrototypeOf(Book));

}
export default init;