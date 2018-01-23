// number of squres Easy || Hard
var numSquares = 6;
// color = []
var colors = [];
// picked color
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//modeButton eventListener
	setupModeButtons();
	//Squares setup
	setupSquares();
	reset();
}


function setupSquares(){
	for(var i = 0; i<squares.length; i++){
			//add click listeners to squares 
			squares[i].addEventListener("click",function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color of picked color		
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;

			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}});
	}
}

function setupModeButtons(){
	//modeButton eventListener
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}





function reset(){
	colors = generateRandomColors(numSquares);

	//Pick a new random color from arrya
	pickedColor = pickColor();
	//Change display color to picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//Chanage colors of squares 
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
		} else {
		squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";


}

resetButton.addEventListener("click", function(){ 
	reset();
});

// Change all color to right color
function changeColors(color){
	//loop through all square
	for(var i = 0; i < squares.length; i++)
	{
		//change each colors to match given color
		squares[i].style.backgroundColor = color; 
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	//make an arry
		var arr = [];

	//repeat num times
	for(var i=0; i<num; i++){
		// get random color and push into arr
		arr.push(randomColor());
	}

	//return that arry

	return arr;
}

function randomColor(){
	//pick a "red " from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);

	//pick a "blue" form 0 -255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}









































































