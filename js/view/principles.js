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

}
export default init;