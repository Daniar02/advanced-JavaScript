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

    /* #################### Делегирование событий̆. #################### */
    // const wrapper = document.querySelector('.wrapper');
    //
    // for (let i = 0; i < 100; i++) {
    //     const el = document.createElement('div');
    //     el.innerHTML = `Пользователь с id ${i}`;
    //     el.style.cssText = `border: 1px solid #006d77; border-radius: 10px; margin: 10px; padding: 10px`;
    //     el.setAttribute('data-id', i);
    //     // el.addEventListener('click', (e) => {
    //     //     el.remove();
    //     // });
    //     wrapper.append(el);
    // }
    //
    // wrapper.addEventListener('click', (e) => {
    //     const i = e.target.getAttribute('data-id')
    //     console.log(`Deleted ${i}`);
    // });

    /* #################### Перемещение по DOM. #################### */
    // const wrapper = document.querySelector('.wrapper');
    // const inner = document.querySelector('.inner');
    // const button = document.querySelector('.button');

    // console.log(inner.childNodes);
    // console.log(inner.children);

    // console.log(inner.parentElement);
    // console.log(inner.parentNode);

    // console.log(button.closest('.wrapper'));

    // console.log(button.previousElementSibling);
    // console.log(button.previousSibling);
    // console.log(button.nextElementSibling);
    // console.log(button.nextSibling);
    //
    // console.log(button.parentElement.children);

    /* #################### Жизненный цикл событий DOM. #################### */
    // document.addEventListener('DOMContentLoaded', function(event) {
    //     console.log('DOMContentLoaded');
    //     console.log(event)
    // });
    //
    // window.addEventListener('load', function (e) {
    //     console.log('load');
    //     console.log(e)
    // });
    //
    // window.addEventListener('beforeunload', function (e) {
    //     e.preventDefault();
    //     e.returnValue = ''
    // });

}

export default init;