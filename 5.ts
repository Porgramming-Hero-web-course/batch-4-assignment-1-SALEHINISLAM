{
    //solving problem 5
    const getProperty = <X, Y extends keyof X>(obj: X, word: Y) => {
        return obj[word]
    }
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
}