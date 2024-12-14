{
    //solving problem 8
    type ReturnType = (obj: object, Arr: string[]) => boolean;
    const validateKeys: ReturnType = (obj, Arr) => {
        const keyInObject = Object.keys(obj);
        for (let index = 0; index < Arr.length; index++) {
            if (keyInObject.indexOf(Arr[index]) == -1) {
                return false
            } else {
                continue
            }
        }
        return true
    }
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));

}