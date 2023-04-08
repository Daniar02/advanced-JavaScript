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




}
export default init;