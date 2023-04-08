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

    /* #################### Static #################### */
    // class Test {
    //     static a = 1;
    //     static test() {
    //         console.log("hello");
    //     }
    //     static {
    //         let b = 5;
    //         this.a = 5;
    //     }
    // }
    // Test.test();
    // console.log(Test.a);
    //
    // const Test2 = function () {
    //
    // }
    // Test2.hello = function() {
    //     console.log("Hello");
    // }
    // Test2.hello();

    /* #################### Приватные методы и свойства #################### */
    // class Car {
    //     #vin;
    //
    //     #changeVin() {
    //         console.log("change");
    //     }
    //     test() {
    //         // проверка
    //         this.#changeVin();
    //     }
    //     static #field = 3;
    //     static {
    //         this.#field = 3
    //     }
    // }
    // const car = new Car();
    // car.test();

    /* #################### Упражнение - класс пользователя. #################### */
    // class User {
    //     #login;
    //     #_password;
    //     constructor(login, password) {
    //         this.#login = login;
    //         this.#password = password;
    //     }
    //
    //     set #password(pass) {
    //         this.#_password = pass.split('').reverse().join('');
    //     }
    //
    //     get #password() {
    //         return this.#_password.split('').reverse().join('');
    //     }
    //
    //     get login() {
    //         return this.#login;
    //     }
    //
    //     checkPassword(pass) {
    //         return this.#password === pass;
    //     }
    //
    //     changePassword(oldPass, newPas) {
    //         if (!this.checkPassword(oldPass)){
    //             return false;
    //         }
    //         this.#password = newPas;
    //         return true;
    //     }
    // }
    // const user = new User('a@a.kg', '123');
    // console.log(user);
    // console.log(user.checkPassword('123'));
    // console.log(user.changePassword('123', '234'));
    // console.log(user.checkPassword('234'));

    /* #################### Object.create. #################### */
    // const User = {
    //     init(email, password) {
    //         this.email = email;
    //         this.password = password;
    //     },
    //     log() {
    //         console.log("User");
    //     }
    // }
    //
    // const user = Object.create(User);
    // user.init('a@a.kg', "123");
    // console.log(user);
    // user.log();
    // console.log(user.__proto__ == User);
    //
    // const admin = Object.create(user);
    // console.log(admin);
    // admin.log();
    // console.log(admin.email);

}

export default init