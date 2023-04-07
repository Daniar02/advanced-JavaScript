function init() {
    /*
        Особенности классов
        ● Классы не поднимаются вверх
        ● Классы как и функции могут быть переданы и возвращены из функций
        ● Тело класса всегда исполняется в strict режиме
    */

    /* #################### Классы #################### */
    // const Book = function(title, author) {
    //     this.title = title
    //     this.author = author
    //     this.isRead = false
    // }
    // Book.prototype.read = function () {
    //     this.isRead = true
    // }
    //
    // class BookClass {
    //     isRead = false;
    //
    //     constructor(title, author) {
    //         this.title = title;
    //         this.author = author;
    //     }
    //
    //     read() {
    //         this.isRead = true;
    //     }
    // }
    // const lordOfTheRing = new BookClass('lordOfTheRing', 'Tolkien');
    // console.log(lordOfTheRing);
    // lordOfTheRing.read();
    // console.log(lordOfTheRing instanceof BookClass);
    // console.log(lordOfTheRing.__proto__);
}

export default init