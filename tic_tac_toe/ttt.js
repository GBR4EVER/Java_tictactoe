window.onload = function(){


	// Collection of all squares on the board.
	var squares = document.getElementsByTagName('td');
	var turnOdd="X";
	var turnEven="O";
	function add_markX() {
		this.innerHTML = turnOdd;
	}
	function add_markO() {
		this.innerHTML = turnEven;
	}
	
	
   var winningConditions = function() {
   	if((squares[0].innerHTML == "X" && squares[1].innerHTML == "X" && squares[2].innerHTML == "X") ||
   	(square[3].innerHTML == "X" && squares[4].innerHTML == "X" && squares[5].innerHTML == "X") ||
   	(squares[6].innerHTML == "X" && squares[7].innerHTML == "X" && squares[8].innerHTML == "X") ||
   	(squares[0].innerHTML == "X" && squares[3].innerHTML == "X" && squares[6].innerHTML == "X") ||
   	(squares[1].innerHTML == "X" && squares[4].innerHTML == "X" && squares[7].innerHTML == "X") ||
   	(squares[2].innerHTML == "X" && squares[5].innerHTML == "X" && squares[8].innerHTML == "X") ||
   	(squares[0].innerHTML == "X" && squares[4].innerHTML == "X" && squares[8].innerHTML == "X") ||
   	(squares[2].innerHTML == "X" && squares[4].innerHTML == "X" && squares[6].innerHTML == "X"))
   	{
   	 win = true;
   	click();
   	alert("X wins!");
   	}
   	else if
   	((squares[0].innerHTML == "O" && squares[1].innerHTML == "O" && squares[2].innerHTML == "O") ||
   	(squares[3].innerHTML == "O" && squares[4].innerHTML == "O" && squares[5].innerHTML == "O") ||
   	(squares[6].innerHTML == "O" && squares[7].innerHTML == "O" && squares[8].innerHTML == "O") ||
   	(squares[0].innerHTML == "O" && squares[3].innerHTML == "O" && squares[6].innerHTML == "O") ||
   	(squares[1].innerHTML == "O" && squares[4].innerHTML == "O" && squares[7].innerHTML == "O") ||
   	(squares[2].innerHTML == "O" && squares[5].innerHTML == "O" && squares[8].innerHTML == "O") ||
   	(squares[0].innerHTML == "O" && squares[4].innerHTML == "O" && squares[8].innerHTML == "O") ||
   	(squares[2].innerHTML == "O" && squares[4].innerHTML == "O" && squares[6].innerHTML == "O"))
   	{
   	 win = true;
   	click();
   	alert("O wins!");
   	}
   	else {
   	 win = true;
   	click();
   	alert("Tie game!");
   	}
};
	
var click = function() {
	for(var i = 0; i < squares.length; i++) {
		// When you click a square, runs the `add_mark` method.
		if (i%2==0) {
			squares[i].addEventListener("click", add_markO);
		} else {
			squares[i].addEventListener("click", add_markX);
		}
	}
}
// <td>-</td> => <td>X</td>
// <td class="marked" data-player="x" >-</td>
