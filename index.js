//Search function
// #########################################

// 1. Convert string to array
// 2. Check array for whole word => show result
// 3. Check word for an * and write index of *
// 4. Find word with matching length
// 5. Compare letters in words excluding index of * and corresponding letter
// 6. Return result

const string = 'This is not right'
const word = '*ight'

function findWord(str, word) {
    let tempword = ''
    let status = ''
        for (let i = 0; i < str.length; i++) {
            if (str[i] === word) {
               tempword +=str[i]
            } 
        }
    if (!tempword) {
        status =  wordCheck(word)
        tempword = status
    } 
        return tempword? `The word was '${tempword}'` : 'There was no such word'
}
  
function stringToArray (string) {
  let tempString = '';
    let result = [];
    for (let i in string) {
        if (string[i] != ' ') {
        tempString += string[i];
    } else {
        tempString = [tempString];
        result.push(tempString[0]);
        tempString.pop();
    }
  }
  result.push(tempString);
  return result;
}

let res = findWord(stringToArray(string), word)
console.log(res)

function wordCheck(word) {
    let letters = ''
    let indx = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== '*') {
            letters += word[i]
        } else {
            indx = i
        }
    }
    return finalCheck(indx)
}


function finalCheck(indx) {
    let str = stringToArray(string)
    let tempWord = ''
    let finalWord = ''
    let guessWord = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i].length === word.length) {
            tempWord = word
            guessWord = str[i]
        } 
    }
    for (let j = 0; j < tempWord.length; j++) {
        if (tempWord[j] !== '*') {
            finalWord += tempWord[j]
        } else {
            finalWord += '*'
        }
    }
    if (tempWord === finalWord) {
        return guessWord
    } else {
        return false
    }
    
}

