{
    //solving problem 3
    type Search = (sentence: string, word: string) => any
    const countWordOccurrences: Search = (sentence, word) => {
        let wordCount:number = 0;
        const givenSentence = sentence.toLocaleLowerCase()
        const givenWord = word.toLocaleLowerCase();
        let index: number = 0;
        while ((index = givenSentence.indexOf(givenWord, index)) != -1) {
            wordCount++;
            index = index + givenWord.length;
        }
        return wordCount
    }
    const result = countWordOccurrences("I love typescript", "typescript");
    console.log(result)
}