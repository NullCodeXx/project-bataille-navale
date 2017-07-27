
/*
LA BATAILLE NAVALE.
*/

// CREATE TABLE IN JAVA SCRIPT.

	function createTable() {
		let table = document.querySelector(".table");
		for(let x = 0; x < 10; x++) {
		let tr = document.createElement("tr");
		table.appendChild(tr);
		for(let n = 0; n < 10; n++) {
			let td = document.createElement("td");
			tr.appendChild(td);
			td.innerHTML = x * 10 + (n + 1);
		}
	}
}






