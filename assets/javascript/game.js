//Initialization

var badGuess = [];
var theWords = ["football", "apples", "cider", "autumn", "leaves", "pumpkin", "fall", "corn", "orchard"];
var spaceWord = [];
var alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var chances = 10;
var wins = 0;
var losses = 0;
var userInput;

var winsElem = document.getElementById("wins");
var wordElem = document.getElementById("word");
var numberElem = document.getElementById("numberguess")
var letterElem = document.getElementById("lettersguess")
var lossesElem = document.getElementById("losses");


//reset function

function reset(){
	chances = 10;
	numberElem.textContent = chances;

	badGuess = [];
	letterElem.textContent = badGuess;

	chosenWord = theWords[Math.floor(Math.random() * theWords.length)];
	console.log(chosenWord);

	spaceWord = [];
	
	for(var i = 0; i < chosenWord.length; i++) {spaceWord.push("_");
}
wordElem.textContent = spaceWord.join(" ");
}


// random word chosen
var chosenWord = theWords[Math.floor(Math.random() * theWords.length)];
console.log(chosenWord);

// chosen word is give spaces
for(var i = 0; i < chosenWord.length; i++) {
	spaceWord.push("_"); 
}	
console.log(spaceWord)


//getting js code to html doc
wordElem.textContent = spaceWord.join(" ")
letterElem.textContent = badGuess
numberElem.textContent = chances
winsElem.textContent = wins
lossesElem.textContent = losses


 //functions
 


 document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userInput = event.key;
      
      if(alphabet.indexOf(userInput) === - 1){

      }else{ 

//user guesses a letter that is not in the word
if(chosenWord.indexOf(userInput) === -1){
	if(badGuess.indexOf(userInput) > -1) {
		console.log("working")
	} else {
		chances--;
		badGuess.push(userInput);
		numberElem.textContent = chances
		letterElem.textContent = badGuess

		     // Chances run out
        if(chances === 0) {
       		losses ++;
        	lossesElem.textContent = losses;
        	reset();
        }
		
	} 

} else{
      //user guesses a letter that is in word
      for (var n = 0; n < chosenWord.length; n++){
      	if(chosenWord[n] === userInput){
      		spaceWord[n] = userInput;
      		wordElem.textContent = spaceWord.join(" ");

      	}
        //user gusses all of word and add win
        if(chosenWord === spaceWord.join("")){
        	wins ++;
        	winsElem.textContent = wins;
        	reset();
        	console.log(chances);
	
        }
       
    }

	
}
}
}






    


