function init() {
    /* #################### Sets #################### */
    // const flights = ["Russia", "USD", "London"];
    //
    // const setFlights = new Set(flights);
    // console.log(setFlights);
    // console.log(setFlights.size);
    // console.log(setFlights.has("USD"));
    // // setFlights.clear();
    // setFlights.add("Paris");
    // setFlights.delete("USD");
    // console.log(setFlights);
    //
    // for (const flight of setFlights) {
    //     console.log(flight)
    // }
    //
    // console.log([...setFlights]);
    //
    // const setObj = new Set([{a: 2}, {b: 2}, {b: 2}]);
    // console.log(setObj);
    // console.log(new Set("abc"));

    /* #################### Основы работы с Map #################### */
    // const weatherMap = new Map();
    // weatherMap.set('London', 10)
    //           .set('Moscow', 7);
    //
    // console.log(weatherMap.get("London"));
    // console.log(weatherMap.get("not found"));
    //
    // console.log(weatherMap.has("London"));
    // console.log(weatherMap.has("not found"));
    //
    // console.log(weatherMap.delete("London"));
    // console.log(weatherMap.delete("not found"));
    // weatherMap.clear();
    //
    // const array = [1, 2, 3]
    // weatherMap
    //     .set(1, 5)
    //     .set(true, 'yes')
    //     .set(false, 'no')
    //     .set(array, 'array')
    //     .set({ a: 1 }, {b: 2});
    //
    // console.log(weatherMap);
    // console.log(weatherMap.size);
    //
    // console.log(weatherMap.get(array));
    // console.log(weatherMap.get({ a: 1 }));

    /* #################### Быстрое создание Map #################### */
    // const weatherMap = new Map([
    //     ["London", "10"],
    //     ["Moscow", "7"],
    // ]);
    // console.log(weatherMap);
    //
    // const weatherObject = {
    //     london: "10",
    //     moscow: "7",
    //     paris: "14"
    // }
    // console.log(Object.entries(weatherObject));
    // const weatherObject2 = new Map(Object.entries(weatherObject));
    // console.log(weatherObject2);

    /* #################### Итерация по Map #################### */
    // const weatherMap = new Map([
    //     ["London", "10"],
    //     ["Moscow", "7"],
    //     ["Paris", "14"],
    // ]);
    // for (const [key, value] of weatherMap) {
    //     console.log(key);
    //     console.log(value);
    // }
    //
    // console.log([...weatherMap]);
    // console.log([...weatherMap.keys()]);
    // console.log([...weatherMap.values()]);

    /* #################### Упражнение - swap ключей и значений #################### */
    /* Необходимо поменять местами ключи и значения в следующем Мар */
    // let weatherMap = new Map([
    //     ["London", "10"],
    //     ["Moscow", "7"],
    //     ["Paris", "14"],
    // ]);
    //
    // weatherMap = new Map([...weatherMap].map(el => el.reverse()))
    // console.log(weatherMap);

    /* #################### WeakMap #################### */
    // let a = { a: 1 };
    // let b = { b: 2 };
    // const map = new WeakMap();
    // map.set(a, "testA");
    // map.set(b, "testB");
    // console.log(map.get(a));
    // console.log(map.has(a));
    // console.log(map);
    // a = null;
    //
    // setTimeout(()=> {
    //     console.log(map);
    // }, 1000)
    //
    // let cache = new WeakMap();
    //
    // function getValue(obj) {
    //     if (!cache.has(obj)) {
    //         const res = 1;
    //         cache.set(obj, res)
    //     }
    //     return cache.get(obj)
    // }
    // const res = getValue(b);
    // console.log(res);
    // const res2 = getValue(b);
    // console.log(res2);

    /* #################### WeakSet #################### */
    // let a = { a: 1 };
    // let b = { b: 2 };
    // const set = new WeakSet([a, b]);
    // a = null;
    // setTimeout(() => {
    //     console.log(set);
    // }, 1000);


}

export default init