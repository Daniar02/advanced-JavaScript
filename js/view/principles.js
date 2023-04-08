function init() {
    /* #################### Абстракция и инкапсуляция #################### */
    /*
        Абстракция VS Инкапсуляция
            - Название
            - Режиссёр
            - Наш рейтинг
            - Длительность
            - Страна производства
            - Актёры
            - Трейлер
            ...
    */
    // class Film {
    //     #name;
    //     #author;
    //     rating;
    //     #length;
    //
    //     constructor(name, author, length ) {
    //         this.#name = name;
    //         this.#author = author;
    //         this.#length = length;
    //     }
    //     get name() {
    //         return this.#name;
    //     }
    //     get author() {
    //         return this.#author;
    //     }
    //     get length() {
    //         return this.#length;
    //     }
    // }
    //
    // const film = new Film('Avatar', 'Cameron', '2');
    // console.log(film);

    /* #################### Наследование #################### */
    /*
        ● Наследование.
            Наследование позволяет наследовать данные и функциональность другого класса.
            Это позволяет переиспользовать логику между классами.
    */
    // const Book = function(title, author) {
    //     this.title = title;
    //     this.author = author;
    // };
    //
    // Book.prototype.buy = function() {
    //     console.log('Buy');
    // };
    //
    // const AudioBook = function(title, author, lenMin) {
    //     Book.call(this, title, author);
    //     this.lenMin = lenMin;
    // };
    //
    // AudioBook.prototype = Object.create(Book.prototype);
    // AudioBook.prototype.constructor = AudioBook;
    //
    // AudioBook.prototype.log = function() {
    //     console.log(`${this.title} - ${this.lenMin}`)
    // }
    //
    // const book = new AudioBook('Lord Of The Rings', 'Tolkien', 20 * 60);
    // book.log();
    // book.buy();
    // console.log(book);
    //
    // console.log(book instanceof AudioBook);
    // console.log(book instanceof Book);

    /* #################### Наследование в ES6. #################### */
    // class Book {
    //     constructor(title, author) {
    //         this.title = title;
    //         this.author = author;
    //     }
    //     buy() {
    //         console.log('Buy');
    //     };
    //
    // }
    //
    // class AudioBook extends Book {
    //     constructor(title, author, lenMin) {
    //         super(title, author);
    //         this.lenMin = lenMin;
    //     }
    //
    //     log() {
    //         console.log(`${this.title} - ${this.lenMin}`)
    //     }
    // }
    //
    // const book = new AudioBook('Lord Of The Rings', 'Tolkien', 60 * 20);
    // book.log();
    // book.buy();

    /* #################### Override методов. #################### */
    // class Book {
    //     constructor(title, author) {
    //         this.title = title;
    //         this.author = author;
    //     }
    //
    //     info() {
    //         console.log(`${this.title} - ${this.author}`);
    //     }
    // }
    //
    // const book = new Book('lord Of The Rings', 'Tolkien');
    // book.info();
    //
    // class EBook extends Book {
    //     constructor(title, author, pages) {
    //         super(title, author);
    //         this.pages = pages;
    //     }
    //
    //     info() {
    //         console.log(`${this.title} - ${this.author} - ${this.pages}`);
    //     }
    //
    // }
    //
    // const book2 = new EBook('lord Of The Rings', 'Tolkien', 100);
    // book2.info();

    /* #################### Упражнение - Удар по орку #################### */
    /*
        Сделать класс врага со здоровьем и методом получения урона.
        Сделать класс меча, которые имеет силу и методу нанесения урона.
        Сделать класс орка, который в 50% случаев не получает урон.
    */
    // class Enemy {
    //     health
    //     constructor(health) {
    //         this.health = health;
    //     }
    //
    //     receiveDamage(damage) {
    //         this.health = this.health - damage;
    //         console.log(this.health);
    //     }
    // }
    //
    // class Sword {
    //     #damage
    //     constructor(damage) {
    //         this.#damage = damage;
    //     }
    //
    //     strike(enemy) {
    //         enemy.receiveDamage(this.#damage)
    //     }
    // }
    //
    // class Org extends Enemy {
    //     constructor(health) {
    //         super(health);
    //     }
    //
    //     receiveDamage(damage) {
    //         if (Math.random() > 0.5) {
    //             this.health = this.health - damage;
    //         }
    //         console.log(this.health);
    //     }
    //
    // }
    //
    // const enemy = new Enemy(10);
    // const org = new Org(10);
    // const sword = new Sword(3);
    // sword.strike(enemy);
    // sword.strike(org);

    /* #################### Полиморфизм #################### */
    /*
        Полиморфизм.
            ● Полиморфизм позволяет использовать объекты с одинаковым "интерфейсом" без
              информации о типе и внутренней структуре объекта.

            ● Полиморфизм - это представление одного интерфейса для разных типов данных.

            ● В языках программирования и теории типов полиморфизмом
              называется способность функции обрабатывать данные разных типов.

            ● Полиморфизм повышает коэффициент повторного использования кода,
              то есть уменьшает дублирование.

        Виды полиморфизма
            ● Ad-hock полиморфизм
            ● Параметрический полиморфизм
            ● Полиморфизм подтипов
    */

    /* #################### Паттерн Builder и chaining #################### */
    // class Wallet {
    //     balance = 0;
    //
    //     add(sum) {
    //         this.balance += sum;
    //         return this;
    //     }
    //
    //     remove(sum) {
    //         this.balance -= sum;
    //         return this;
    //     }
    // }
    //
    // const wallet = new Wallet();
    // const res = wallet.add(100).remove(10);
    // console.log(res)
    //
    // class Builder {
    //     house = {};
    //
    //     addRoof() {
    //         this.house.roof = 'Roof';
    //         return this;
    //     }
    //
    //     addFloor() {
    //         this.house.floor = 'Floor';
    //         return this;
    //     }
    //
    //     execute() {
    //         return this.house;
    //     }
    // }
    //
    // const res2 = new Builder().addRoof().addFloor().execute();
    // console.log(res2);

}
export default init;