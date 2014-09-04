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
	// var turn = "X";
	//
	// function add_mark(round){
		// if (round%2 == 0) {
			// turn="O";
			// } else {
				// turn="X";
				// }
				// this.innerHTML = turn;
				// }
				// function determineWinner() {
					// if (squares[0]==squares[1] && squares[2]==squares[1] && squares[0]!="-") {
						// if (squares[0]=="X") {
							// alert("Xs Wins!")
							// } else {
								// alert("Os Win!")
								// }
								// } else if (squares[3]==squares[4] && squares[4]==squares[5] && squares[3]!="-") {
									// if (squares[3]=="X") {
										// alert("Xs Wins!")
										// } else {
											// alert("Os Win!")
											// }
											// } else if (squares[6]==squares[7] && squares[7]==squares[8] && squares[6]!="-") {
												// if (squares[6]=="X") {
													// alert("Xs Wins!")
// } else {
// alert("Os Win!")
// }
// } else if (squares[0]==squares[3] && squares[3]==squares[6] && squares[0]!="-") {
// if (squares[0]=="X") {
// alert("Xs Wins!")
// } else {
// alert("Os Win!")
// }
// } else if (squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!="-") {
// if (squares[1]=="X") {
// alert("Xs Wins!")
// } else {
// alert("Os Win!")
// }
// } else if (squares[2]==squares[5] && squares[5]==squares[8] && squares[2]!="-") {
// if (squares[2]=="X") {
// alert("Xs Wins!")
// } else {
// alert("Os Win!")
// }
// } else if (squares[0]==squares[4] && squares[4]==squares[8] && squares[0]!="-") {
// if (squares[0]=="X") {
// alert("Xs Wins!")
// } else {
// alert("Os Win!")
// }
// } else if (squares[2]==squares[4] && squares[4]==squares[6] && squares[2]!="-") {
// if (squares[2]=="X") {
// alert("Xs Wins!")
// } else {
// alert("Os Win!")
// }
// }
//
// }
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
