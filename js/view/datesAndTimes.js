function init() {
    /* #################### Создание дат #################### */
    // const now = new Date();
    // console.log(now);
    //
    // console.log(new Date("01-02-2023"));
    // console.log(new Date("01/02/2023"));
    // console.log(new Date("2023/01/02"));
    // console.log(new Date("10 Jan 2023"));
    //
    // console.log(new Date(2023, 11, 31, 12, 0, 10));
    // console.log(new Date(2023, 12, 10 + 100));
    // console.log(new Date(0));
    // console.log(new Date(1 * 24 * 60 * 60 * 1000));
    // console.log(Date.now());
    // console.log(new Date(Date.now()));
    //
    // console.log(now.getFullYear());
    // console.log(now.getMonth());
    // console.log(now.getDate());
    // console.log(now.getDay());
    // console.log(now.getHours());
    // console.log(now.getMinutes());
    // console.log(now.getSeconds());
    // console.log(now.getTime());
    //
    // console.log(new Date(now.setFullYear(2030)));

    /* #################### Операции с датами #################### */
    // const date1 = new Date(2024, 10, 15);
    // const date2 = new Date(2024, 11, 15);
    //
    // console.log(Number(date1));
    // console.log(Number(date2));
    // console.log(Number(date1 - date2));
    //
    // function getDaysBetweenDates(dateFirst, dateSecond) {
    //     return (date2 - date1) / (1000 * 60 * 60 * 24);
    // }
    // console.log(getDaysBetweenDates(date1, date2))

    /* #################### Сравнение дат #################### */
    // const first = new Date(2024, 10, 4);
    // const second = new Date(2024, 10, 4);
    //
    // console.log(first < second);
    // console.log(first == second);
    // console.log(first === second);
    //
    // console.log(first.getTime() == second.getTime());
    // console.log(first.getTime() === second.getTime());
    //
    // console.log(Number(first) === Number(second));
    // console.log(+first === +second);

    /* #################### Упражнение - Проверка на день рождения #################### */
    // const user1 = {
    //     name: "Ivan",
    //     birthday: '04/07/2023'
    // };
    //
    // function isBirthday(user) {
    //     const birthdayDate = new Date(user.birthday);
    //     const now = new Date();
    //     if (birthdayDate.getMonth() !== now.getMonth()) {
    //         return false;
    //     }
    //     if (birthdayDate.getDate() !== now.getDate()) {
    //         return false;
    //     }
    //     return true
    // }
    // console.log(isBirthday(user1));

    /* #################### Интернационализация дат #################### */
    // const date = new Date();
    // console.log(date);
    // console.log(new Intl.DateTimeFormat('ru-RU').format(date));
    // const options1 = {
    //     hour: 'numeric',
    //     minute: 'numeric'
    // }
    // console.log(new Intl.DateTimeFormat('ru-RU', options1).format(date));
    // const options2 = {
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     month: 'long'
    // }
    // console.log(new Intl.DateTimeFormat('en-US', options2).format(date));
    // console.log(new Intl.DateTimeFormat('ru-RU', options2).format(date));
    // const options3 = {
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     month: 'long',
    //     weekday: 'short',
    //     year: '2-digit'
    // }
    // console.log(new Intl.DateTimeFormat('en-US', options3).format(date));
    // console.log(new Intl.DateTimeFormat('ru-RU', options3).format(date));
    // console.log(navigator.language);
    // console.log(new Intl.DateTimeFormat(navigator.language, options3).format(date));


}

export default init