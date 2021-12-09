//1. Given a string of characters as input, write a function that returns it with the characters reversed.
 // e.g "hello world" => "dlrow olleh"
 function reverseString(str){
   return str.split("").reverse().join("")
 }
 console.log(reverseString("Hello world!"))


 //2. A palindrome is a word or phrase that reads the same backward 
 // as forward. Write a function that checks for this. the function should 
 // return true if a word is a palindrome and false otherwise.
  //e.g "Racecar" => true, "sit ad est love" => false
  function isPalindrome(str){
    let newstr = str.toLowerCase();
    let reversedStr = newstr.split("").reverse().join("");
    return newstr === reversedStr
    }
  console.log(isPalindrome("noon"))


  //3. Given a string of characters, write a function that returns the character
  // that appears the most often. e,g "Hello World!" => "l"
  function longestOccurance  (str) {
  const stringArray = str.split("").filter(a => a != " ")
  let stringObject = {}
  // hello
  for(let char of stringArray){
    if(stringObject[char]){
      stringObject[char] += 1
    } else {
      stringObject[char] = 1
    }
  }
  let maxOccurance = ""
  let maxCount = 0
  for(let char in stringObject){
    if(stringObject[char] > maxCount){
      maxCount = stringObject[char]
      maxOccurance = char
    }
  }
  // let maxOccurance = Object.keys(stringObject).reduce((a, b) => stringObject[a] > stringObject[b] ? a : b)
  //hello

  return maxOccurance
}
console.log(longestOccurance("hello world!"))

    //   4. write a function that checks the number of consonants 
    // and vowels in a given string. if number of consonants is greater 
    // than the number of vowels return "consonants win", if number of 
    // vowels is greater than the number of consonants return "vowels win", 
    // if the number of consonants and vowels are the same, return "draw"
function alphabetCount(str){
    const vowels = ['a','e','i','o','u']
    let wordArray = str.toLowerCase().split('')
    let vowelsCount = 0,consonantCount = 0
  for(let char of wordArray){
    if(vowels.includes(char)){
      vowelsCount++
    }else{
      consonantCount++
      //console.log(consonantCount)
    }
  }
  if(vowelsCount > consonantCount){
    return "vowels win!"
  }else if(vowelsCount < consonantCount){
    return "consonant win!"
  }else{
    return "draw"
  }
}
console.log(alphabetCount("crystal clear waters"))

// 5.  Implement the function encode(plainText) which returns an encoded message.
//  It receives a plainText string parameter, for example aaaabcccaaa.
//  You must encode it by counting each consecutive sequence of a letter. e.g. in aaaabcccaaa, there are:
//  4 times the letter a
//  then 1 b
//  then 3 c
//  then 3 a
//  Therefore you must return the string 4a1b3c3a.
//  Constraints :
//  plainText is made of lowercase letters: a-z
//  plainText is never null and has a maximum length of 15000 characters
//  EXAMPLES:
//  PlainText
//  aabaa
//  EncodedText
//  2a1b2a
//  PlainText
//  aaaabcccaaa
//  EncodedText
//  4a1b3c3a 
const encodePattern = (plainText) => {
 const stringArray = plainText.split('');
 let stringPattern = [];
 let prevString = stringArray[0];
 let counter = 1;
 for(let i = 1; i < stringArray.length; i++){
   if(stringArray[i] === prevString){
     counter++
   } else {
     stringPattern.push(counter, prevString)
     counter = 1
     prevString = stringArray[i]
   }
 }
 stringPattern.push(counter, prevString)
 return stringPattern.join('');
}
console.log(encodePattern('abbbbbyyyy'))

