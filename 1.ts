{
    //solving problem 1
    type Add = (numArray: number[]) => number
    const sumArray: Add = (digits) => {
        let sum = 0
        for (let index = 0; index < digits.length; index++) {
            sum = sum + digits[index];
        }
        return sum
    }
    const result=sumArray([1, 2, 3, 4, 5])
    console.log(result)
}