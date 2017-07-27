
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
        //stock the values in object in tableau.
        let stockInObject = new Object();
        let object = []; 
        //Select for event
        let select = document.querySelectorAll("td");
        for( let position of select) {
            position.addEventListener('click', function() {
                if (position.style.backgroundColor == "white") {
                    position.style.backgroundColor = "";
                    position.style.color = "";
                }else {
                    position.style.backgroundColor = "white";
                    position.style.color = "#000";
                    position.style.fontWeight =  "900";
                    //When on click, regroup value in tab stock.
                    object.push(position.textContent);
                    stockInObject = object;
                    console.log(stockInObject);
                }
            });
        }
    }