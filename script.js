const add = document.getElementById("add");
const newtext = document.getElementById("newtext");
let textt = "";

//typing task

newtext.addEventListener("keydown", e => {
    if (e.key == "Backspace" || e.key == "Enter") {
        return
    }
    textt += e.key;
});

let numt = 0;

// click enter to add task

newtext.addEventListener("keydown", e => {
    if (e.key == "Enter" && textt != "") {
        const newtask = document.createElement("div");
        numt++ ;
        newtask.className = "task";
        newtask.id = `task-${numt}`;
        newtask.innerHTML = `
                    <img src="ellipse-outline.svg" alt="check" class="circle" id="circle-${numt}">
                    <div class="txt outfit"><p id="text-${numt}"></p></div>
                `;
        document.getElementById("container").appendChild(newtask);
        document.getElementById(`text-${numt}`).innerText = textt;
        textt = "";
        document.getElementById("newtext").value = "";

        //mark checked or unchecked
        let checked = false;
        const img = document.getElementById(`circle-${numt}`);
        img.addEventListener("click", e => {
            if (checked == false) {
                img.src = "checkmark-circle.svg";
                checked = true;
            }
            else {
                img.src="ellipse-outline.svg";
                checked = false;
            }
        });
        // if task number one
        if (newtask.id == "task-1") {
            newtask.style.borderTop = "1px solid #a3b18a";
        }

        // modify task
        newtask.addEventListener("dblclick", ee => {
            const taskp = document.getElementById(`text-${numt}`);
            //insert input area
            let teext = newtask.innerText;
            if (checked == false) {
                newtask.innerHTML = `
                    <img src="ellipse-outline.svg" alt="check" class="circle" id="circle-${numt}">
                    <input type="text" class="outfit inpp" id="newtext-${numt}">
                `;
            }
            else {
                newtask.innerHTML = `
                    <img src="checkmark-circle.svg" alt="check" class="circle" id="circle-${numt}">
                    <input type="text" class="outfit inpp" id="newtext-${numt}">
                `;
            }
            const inpp = document.getElementById(`newtext-${numt}`);
            inpp.value = teext;

            let someinput = document.getElementById(`newtext-${numt}`);
            someinput.addEventListener("keydown", eee => {
                if (eee.key == "Enter" && inpp.value != "") {
                    //finish update 
                    if (checked == false) {
                        newtask.innerHTML = `
                        <img src="ellipse-outline.svg" alt="check" class="circle" id="circle-${numt}">
                        <div class="txt outfit"><p id="text-${numt}"></p></div>
                    `;
                    }
                    else {
                        newtask.innerHTML = `
                        <img src="checkmark-circle.svg" alt="check" class="circle" id="circle-${numt}">
                        <div class="txt outfit"><p id="text-${numt}"></p></div>
                    `;
                    }
                    //again check or uncheck
                    const img = document.getElementById(`circle-${numt}`);
                    img.addEventListener("click", e => {
                        if (checked == false) {
                            img.src = "checkmark-circle.svg";
                            checked = true;
                        }
                        else {
                            img.src="ellipse-outline.svg";
                            checked = false;
                        }
                    });
                    
                    document.getElementById(`text-${numt}`).innerText = inpp.value;
                    teext = "";
                }
                if (eee.key == "Backspace" || eee.key == "Enter") {
                    return
                }
                teext += eee.key;

            });
            
        });
    }
            
});

// or click the add button

add.addEventListener("click", e => {
    if (textt != "") {
        const newtask = document.createElement("div");
        numt++ ;
        newtask.className = "task";
        newtask.id = `task-${numt}`;
        newtask.innerHTML = `
                    <img src="ellipse-outline.svg" alt="check" class="circle" id="circle-${numt}">
                    <div class="txt outfit"><p id="text-${numt}"></p></div>
                `;
        document.getElementById("container").appendChild(newtask);
        document.getElementById(`text-${numt}`).innerText = textt;
        textt = "";
        document.getElementById("newtext").value = "";

        let checked = false;
        const img = document.getElementById(`circle-${numt}`);
        img.addEventListener("click", e => {
            if (checked == false) {
                img.src = "checkmark-circle.svg";
                checked = true;
            }
            else {
                img.src="ellipse-outline.svg";
                checked = false;
            }
        });
        // if task number one
        if (newtask.id == "task-1") {
            newtask.style.borderTop = "1px solid #a3b18a";
        }
    }
            
});