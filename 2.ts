{
    //solving problem 2
    type Output = (numArray: number[]) => number[]
    const removeDuplicates: Output = (digits) => {
        let removedDuplicates = [];
        for (let i = 0; i < digits.length; i++) {
            for (let j = i + 1; j < digits.length; j++) {
                if (digits[i] > digits[j]) {
                    const element = digits[i];
                    digits[i] = digits[j];
                    digits[j] = element
                }

            }
        }
        for (let index = 0; index < digits.length; index++) {
            if (index == 0) {
                removedDuplicates.push(digits[index])
            } else {
                if (digits[index] == digits[index - 1]) {
                    continue;
                } else {
                    removedDuplicates.push(digits[index])
                }
            }
        }
        return removedDuplicates;
    }
    const result=removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log(result)
}