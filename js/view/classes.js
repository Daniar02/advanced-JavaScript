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

    /* #################### Setters и getters #################### */
    // const task = {
    //     title: "Task1",
    //     dueTo: new Date("2023/04/08"),
    //
    //     get isOverdue() {
    //         return this.dueTo < new Date();
    //     },
    //
    //     set isOverdue(isOverdueTask) {
    //         if(!isOverdueTask) {
    //             this.dueTo = new Date();
    //         }
    //     }
    //
    // }
    // console.log(task.isOverdue);
    // task.isOverdue = false;
    // console.log(task);

    // class Task {
    //     constructor(title, dueTo) {
    //         this.title = title;
    //         this.dueTo = dueTo;
    //     }
    //     get isOverdue() {
    //         return this.dueTo < new Date();
    //     }
    //     set dueDate(data) {
    //         if (data < new Date()) {
    //             return;
    //         }
    //         this._dueDate = data
    //     }
    // }
    // const newTask = new Task("Task2", new Date());
    // console.log(newTask.dueDate = new Date("2024/1/1"));
    // console.log(newTask);

}

export default init