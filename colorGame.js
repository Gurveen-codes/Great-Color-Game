var numOfSquares = 6;

var colors = generateRandomColor(numOfSquares);

var squares = document.querySelectorAll('.square');
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#resetButton');
/*var easyButton = document.querySelector('#easyBtn');
var hardButton = document.querySelector('#hardBtn');*/
var modeButtons = document.querySelectorAll('.mode');



for(var i = 0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
		this.classList.add('selected');

		//how many squares to show
		//pick new colors
		//select a new pickedColor
		//show colors in squares

		/*this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;*/

		if(this.textContent === "Easy"){
			numOfSquares = 3;
		}else {
			numOfSquares = 6;
		}

		resetColor();

	});
}


function resetColor(){
	  //generate all new colors
	     colors = generateRandomColor(numOfSquares);
	     //pick a random color from array
	     pickedColor = pickRandomColor();
	     //change colorDisplay to pickedColor
	     colorDisplay.textContent = pickedColor;
	     //change colors of squares
		     //loop through all sqaures
		for(var i = 0; i<squares.length; i++){
			//change each color to match given color 
			if(colors[i]){ 
			  //i.e if colors[i] exist then change color of corresponding square
			     squares[i].style.display = 'block';
                 squares[i].style.backgroundColor = colors[i];
			}
			else {
				squares[i].style.display = 'none';
			}
	        
		}
		//change color of banner/stripe above
	    h1.style.backgroundColor = 'steelblue';
	    messageDisplay.textContent = "";
	    //change text of reset button
	    resetButton.textContent = "NEW COLORS"; 
}

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++){
	//Add intial color to squares
	squares[i].style.backgroundColor = colors[i];
	//add click Listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
    var clickedColor = this.style.backgroundColor; 
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			//Correct Answer
			messageDisplay.textContent = "CORRECT";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again";
		}else {
			//Wrong Answer
			//making clicked square black
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "TRY AGAIN!!"
		}
	});
}	

function changeColors(color){
	//loop through all sqaures
	for(var i = 0; i<squares.length; i++){
		//change each color to match given color 
        squares[i].style.backgroundColor = color;
	}
	
}	

function generateRandomColor(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i<num; i++){
		//get random color and push into array
		arr.push(makeRandomColor());
	}
	//return the array
	return arr;
}

function makeRandomColor(){
	
	var myRed = Math.floor(Math.random()*256);
	var myGreen = Math.floor(Math.random()*256);
	var myBlue = Math.floor(Math.random()*256);

	return "rgb(" +myRed+", "+myGreen+", "+myBlue+")";
}

function pickRandomColor(){
	var randomIndex = Math.floor((Math.random())*colors.length);
	return colors[randomIndex];
}	 

resetButton.addEventListener("click", function(){
	     resetColor();
});

/*easyButton.addEventListener("click",function(){
	easyButton.classList.add('selected');
	hardButton.classList.remove('selected');
	numOfSquares = 3;

	//pick 3 new colors
	colors = generateRandomColor(numOfSquares);
	//pick a new pickedColor
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	//hide bottom 3 squares
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){   //i.e if colors[i] exist then change color of corresponding square
           squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = 'none';
		}
	}

});

hardButton.addEventListener("click",function(){
	hardButton.classList.add('selected');
	easyButton.classList.remove('selected');
	numOfSquares = 6;

    //generate 6 new colors
	colors = generateRandomColor(numOfSquares);
	//pick a new pickedColor
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	//hide bottom 3 squares
	for(var i = 0; i<squares.length; i++){
		   
        squares[i].style.backgroundColor = colors[i];
		
		squares[i].style.display = 'block';
			
	}
});*/
