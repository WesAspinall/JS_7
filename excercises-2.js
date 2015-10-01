// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a,b){
    if (a>b){

      return a;

    } else if (
      a === b

    ){
      return "Silly Goose, the two values are equal!";

    } else {

      return b;
   
  }   
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1,num2,num3){
  if(num1 < num3 && num2 < num3){
      return num3;

  } else if(num1 < num2 && num3 < num2){
      return num2;

  } else if (num2 < num1 && num3 < num1){
      return num1;

  } else{
    return "equal"
  }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  if (char.toLowerCase() === "a"){
    return "True"
  } else if(char.toLowerCase() === "e"){
    return "True"
  } else if(char.toLowerCase() === "u"){
    return "True"
  }else if(char.toLowerCase() === "o"){
    return "True"
  }else if(char.toLowerCase() === "i"){
    return "True"
  } else {
    return "False"
  }
};


   
// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(string){
 var makeArray=string.split("");
 var makeMap=makeArray.map(function(letter){
 
 if ( letter.toLowerCase() !== "a" || letter.toLowerCase() !== "e" || letter.toLowerCase() !== "i" || letter.toLowerCase() !== "o" || letter.toLowerCase() !=="u"){
  return (letter.toLowerCase()+"O"+letter.toLowerCase());
  } else {
    return letter;
   }
  })
  var makeString=makeMap.join("");
  return makeString;
};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
makeArray=string.split("");
reverseIt=makeArray.reverse();
return backtoString=reverseIt.join("");
};


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
   var box = [ ];
   box.push(words.length > i.length);
 }

}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}