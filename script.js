const add = document.getElementById("add");
const newtext = document.getElementById("newtext");
let textt = "";

let numt = 0;

//defining check function
function markchecked(img, checked) {
    if (checked == false) {
                img.src = "checkmark-circle.svg";
                return true;
            }
            else {
                img.src="ellipse-outline.svg";
                return false;
            }
}

//modify task
function edittask(e, numt, newtask, checked) {
            const taskp = document.getElementById(`text-${numt}`);
            //insert input area (input element)
            let teext = newtask.innerText;

            newtask.innerHTML = `
            <img src="${checked ? "checkmark-circle.svg" : "ellipse-outline.svg"}" alt="check" class="circle" id="circle-${numt}">
            <input type="text" class="outfit inpp" id="newtext-${numt}">
        `;

            const inpp = document.getElementById(`newtext-${numt}`);
            inpp.value = teext;

            const img = document.getElementById(`circle-${numt}`);
            img.addEventListener("click", e => {
                checked = markchecked(img, checked);
            });

            inpp.addEventListener("keydown", e => {
                if (e.key == "Enter" && inpp.value != "") {
                    //finish update (going back to p element)
                    newtask.innerHTML = `
                    <img src="${checked ? "checkmark-circle.svg" : "ellipse-outline.svg"}" alt="check" class="circle" id="circle-${numt}">
                    <div class="txt outfit"><p id="text-${numt}">${inpp.value}</p></div>
                `;
                    //again check or uncheck
                        const img = document.getElementById(`circle-${numt}`);
                        img.addEventListener("click", e => {
                            checked = markchecked(img, checked)
                        });
                    }
                
                });
                
            return checked

};

// defining add tasks with functions inside

function addtask(e) {
        //actual task adding
        const newtask = document.createElement("div");
        numt++ ;
        newtask.className = "task";
        newtask.id = `task-${numt}`;
        newtask.innerHTML = `
                    <img src="ellipse-outline.svg" alt="check" class="circle" id="circle-${numt}">
                    <div class="txt outfit"><p id="text-${numt}">${newtext.value}</p></div>
                    <img src="close.svg" alt="close" class="x" id="x-${numt}">
                `;
        document.getElementById("container").appendChild(newtask);

        document.getElementById("newtext").value = "";

        //mark checked or unchecked
        let checked = false;
        const img = document.getElementById(`circle-${numt}`);
        img.addEventListener("click", e => {
            checked = markchecked(img, checked);
        });
        
        // if task number one add upper border
        if (newtask.id == "task-1") {
            newtask.style.borderTop = "1px solid #a3b18a";
        }

        // modify task
        newtask.addEventListener("dblclick", e => { checked = edittask(e, numt, newtask, checked); });
}







// click enter to add task
newtext.addEventListener("keydown", e => {
    if (e.key == "Enter" && newtext.value != "") {
        addtask(e);
    }
});

// or click the add button
add.addEventListener("click", e => {
    if (newtext.value != "") {
        addtask(e);
    }
            
});