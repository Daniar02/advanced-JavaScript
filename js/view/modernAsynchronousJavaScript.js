function init() {
    /* #################### Async await. #################### */
    /* #################### Try catch. #################### */
    // async function getProducts() {
    //     try {
    //         // fetch('https://dummyjson.com/products')
    //         //     .then(response => response.json())
    //         //     .then(data=> console.log(data))
    //         const productsResponse = await fetch('https://dummyjson.com/products');
    //         if (!productsResponse.ok) {
    //             throw new Error(productsResponse.status)
    //         }
    //         const { products } = await productsResponse.json();
    //         console.log(products);
    //
    //         const productResponse = await fetch('https://dummyjson.com/products/' + products[0].id);
    //         const product = await productResponse.json();
    //         console.log(product);
    //     } catch (e) {
    //         console.error(e);
    //     } finally {
    //         console.log('Finally');
    //     }
    // }
    //
    // try {
    //     JSON.parse("{d}")
    // } catch (e) {
    //     console.error(e)
    // }
    //
    // getProducts();
    // console.log('End');

    /* #################### Упражнение - Мой город. #################### */
    /*
        Получить геолокация пользователя через
        Geolocation.getCurrentPosition() (WEB API)
        и по координатам определить город, отправив запрос:
        https://api.bigdatacloud.net/data/reverse-geocode-client?
        latitude=00&longitude=00
    */
    // function getMyCoordinates() {
    //     return new Promise((resolve, reject) => {
    //         navigator.geolocation.getCurrentPosition(
    //             ({coords}) => {
    //                 resolve({
    //                     latitude: coords.latitude,
    //                     longitude: coords.longitude,
    //                 });
    //             },
    //             (err => {
    //                 reject(err);
    //             })
    //         )
    //     })
    // }
    // async function getMyCity() {
    //     try {
    //         const { latitude, longitude } = await getMyCoordinates();
    //         const response = await  fetch(`
    //             https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}
    //             `);
    //         if (!response.ok) {
    //             throw new Error(response.status);
    //         };
    //         const data = await response.json();
    //         console.log(data)
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }
    //
    // getMyCity();

    /* #################### Асинхронные методы. #################### */
    // class ProductRepository {
    //     async getProducts() {
    //         const response = await fetch('https://dummyjson.com/products');
    //         console.log(await response.json());
    //     }
    // }
    //
    // const repo = new ProductRepository();
    // repo.getProducts();
    //
    // const asyncArrow = async () => {
    //     const response = await fetch('https://dummyjson.com/products');
    //     console.log(await response.json());
    // }
    //
    // asyncArrow();

    /* #################### Последовательность выполнения. #################### */
    // const asyncArrow = async () => {
    //     try {
    //         const response = await fetch('https://dummyjson.com/products');
    //         const data = await response.json();
    //         return data;
    //     } catch (e) {
    //         console.error(e);
    //         throw e;
    //     }
    // }
    // // console.log(1);
    // // asyncArrow()
    // //     .then(data => {
    // //         console.log(data);
    // //     })
    // //     .catch(e => console.error(e))
    // // console.log(2);
    //
    // ( async () => {
    //     console.log(1);
    //     const res = await asyncArrow();
    //     console.log(res);
    //     console.log(2);
    // })()

    /* #################### Параллельное выполнение. #################### */
    // async function getAllProducts() {
    //     const response = await fetch('https://dummyjson.com/products');
    //     return response.json();
    // }
    //
    // async function getProduct(id) {
    //     const response = await fetch('https://dummyjson.com/products/' + id);
    //     return response.json();
    // }
    //
    // async function getProductError(id) {
    //     const response = await fetch('https://dummyjson.com/products/' + id);
    //     return response.json();
    // }
    //
    // async function main() {
    //     const { products } = await getAllProducts();
    //     const res = await Promise.all(products.map(product => getProduct(product.id)));
    //     console.log(res);
    //     // for (const product of products) {
    //     //     const res = await  getProduct(product.id);
    //     //     console.log(res);
    //     // }
    //     console.log(products);
    // }
    // main();

    /* #################### Другие комбинации Promise. #################### */
    // async function getProduct(id) {
    //     const response = await fetch('https://dummyjson.com/products/' + id);
    //     return response.json();
    // }
    //
    // async function getProductError(id) {
    //     const response = await fetch('https://dummyjsons.com/products/' + id);
    //     return response.json();
    // }
    //
    // async function main() {
    //     const res1 = await Promise.all([
    //         getProduct(1),
    //         getProduct(2)
    //     ])
    //     console.log(res1);
    //     const res2 = await Promise.allSettled([
    //         getProduct(1),
    //         getProductError(2)
    //     ])
    //     console.log(res2);
    //     const res3 = await Promise.race([
    //         getProduct(1),
    //         getProduct(2)
    //     ])
    //     console.log(res3);
    // }
    // main();

    /* #################### Все возможности fetch. #################### */
    // async function main() {
    //     const res = await fetch('https://dummyjson.com/auth/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username: 'kminchelle',
    //             password: '0lelplR'
    //
    //         })
    //     });
    //     const data = await res.json();
    //     console.log(data);
    // }
    // main();

}
export  default init;