function init() {
    /* #################### Sets ####################*/
    const flights = ["Russia", "USD", "London"];

    const setFlights = new Set(flights);
    console.log(setFlights);
    console.log(setFlights.size);
    console.log(setFlights.has("USD"));
    // setFlights.clear();
    setFlights.add("Paris");
    setFlights.delete("USD");
    console.log(setFlights);

    for (const flight of setFlights) {
        console.log(flight)
    }

    console.log([...setFlights]);

    const setObj = new Set([{a: 2}, {b: 2}, {b: 2}]);
    console.log(setObj);
    console.log(new Set("abc"));
}

export default init