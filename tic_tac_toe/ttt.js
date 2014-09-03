window.onload = function(){


	// Collection of all squares on the board.
	var squares = document.getElementsByTagName('td');
	
	var turn = "X";
	
	// This will be where most of our marking the board functionality
	// will occur.
	function add_mark(){
		this.innerHTML = turn;
	
	}
	
	for(var i = 0; i < squares.length; i++) {
		// When you click a square, runs the `add_mark` method.
		squares[i].addEventListener("click", add_mark);
	}
}
