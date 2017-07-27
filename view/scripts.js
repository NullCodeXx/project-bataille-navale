
/*
LA BATAILLE NAVALE.
*/

// CREATE TABLE IN JAVA SCRIPT.
    
    //add arguments for to choose table.
    function createTable(num) {
	let table = document.querySelector(".table" + num);
	for(let x = 0; x < 10; x++) {
	let tr = document.createElement("tr");
	//css.
	tr.classList.add("table-tr");
	table.appendChild(tr);
	for(let n = 0; n < 10; n++) {
		let td = document.createElement("td");
		//css.
		td.classList.add("table-td");
		tr.appendChild(td);
		td.innerHTML = x * 10 + (n + 1);
	}
    }
}

// ON CLICK ACTIVE COLOR.

    function onclickColor() {
        let select = document.querySelectorAll("td");
        for( let position of select) {
            position.addEventListener('click', function() {
                if ( position.style.backgroundColor == "red") {
                    position.style.backgroundColor = "";
                    position.style.color = "";
                }else {
                    position.style.backgroundColor = "red";
                    position.style.color = "white";
                    
                }
               
            });
        }
    }