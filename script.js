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