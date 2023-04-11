function init() {
    /* #################### Работа с элементами. #################### */
    // const el = document.querySelector('body');
    //
    // const button = document.createElement('button');
    // button.style.cssText = `padding: 5px 12px;`
    // button.innerHTML = `AbyDanTal`;
    //
    // const button2 = document.createElement('button');
    // button2.style.cssText = `padding: 5px 12px;`
    // button2.innerHTML = `AbyDanTal 2`;
    //
    // el.append(button);
    // el.prepend(button2);
    // // el.before(button2);
    // // el.after(button2);

    /* #################### Типы событий и обработчики. #################### */
    // const btn = document.querySelector('.button');
    //
    // const eventHandler = function (event) {
    //     console.log('Event 1')
    // }
    //
    // btn.addEventListener('click', eventHandler)
    //
    // btn.addEventListener('click', (event) => {
    //     console.log('Event 2');
    //     btn.removeEventListener('click', eventHandler);
    // })

    /* #################### Пример всплытия событий. #################### */
    // const wrapper = document.querySelector('.wrapper');
    // const inner = document.querySelector('.inner');
    // const button = document.querySelector('.button');
    //
    // button.addEventListener('click', function (event) {
    //     console.log('Button');
    //     console.log(event.target);
    //     console.log(event.currentTarget);
    //     this.style.background = '#ffb703'
    // });
    //
    // inner.addEventListener('click', function (event) {
    //     console.log('Inner');
    //     console.log(event.target);
    //     console.log(event.currentTarget);
    //     this.style.background = '#7678ed';
    //     event.stopPropagation();
    // });
    //
    // wrapper.addEventListener('click', function (event) {
    //     console.log('Wrapper');
    //     console.log(event.target);
    //     console.log(event.currentTarget);
    //     this.style.background = '#006d77'
    // }, true);



}

export default init;