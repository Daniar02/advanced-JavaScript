function init() {
    /* #################### Пример работы Event Loop. #################### */
    // console.log(1);
    //
    // setTimeout(() => {
    //     console.log(2);
    // },0);
    //
    // Promise.resolve(3).then(res => {
    //     console.log(res);
    // })
    //
    // console.log(4);
    //
    // for (let i = 0; i < 10000000; i++) {
    //
    // }

    /* #################### Создание простого Promise. #################### */
    // const prom = new Promise((resolve, reject) => {
    //     if (new Date() < new Date('01/01/2024')) {
    //         reject(new Error("Error"));
    //     }
    //     resolve('Success');
    // })
    // prom.then(data => console.log(data))
    //     .catch(error => console.log(error))
    //
    // function timeout(sec) {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve();
    //         }, sec * 1000)
    //     })
    // }
    // timeout(1)
    //     .then(() => {
    //         console.log(1);
    //         return timeout(1);
    //     })
    //     .then(() => {
    //         console.log(1);
    //         return timeout(1);
    //     })
    //     .then(() => {
    //         console.log(1);
    //         return timeout(1);
    //     })

    /* #################### Статические методы Promise. #################### */
    // const prom = new Promise(resolve => {
    //     console.log("Constructor");
    //     setTimeout(() => {
    //         resolve('Timer');
    //     }, 1000);
    // })
    // prom.then(data => console.log(data))
    // Promise.resolve('Success').then(data => console.log(data));
    // Promise.reject(new Error('Error')).catch(error => console.error(error));






}
export default init;