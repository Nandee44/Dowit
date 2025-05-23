const add = document.getElementById("add");
const newtext = document.getElementById("newtext");
let textt = "";
newtext.addEventListener("keydown", e => {
    if (e.key == "Backspace" || e.key == "Enter") {
        return
    }
    textt += e.key;
});

let numt = 0;

newtext.addEventListener("keydown", e => {
    if (e.key == "Enter") {
        const newtask = document.createElement("div");
        numt++ ;
        newtask.innerHTML = `
                <div class="task" id="task-${numt}">
                    <img src="ellipse-outline.svg" alt="check" class="circle" id="circle-${numt}">
                    <div class="txt outfit"><p id="text-${numt}"></p></div>
                </div>
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
    }
            
});

add.addEventListener("click", e => {
    const newtask = document.createElement("div");
    numt++ ;
    newtask.innerHTML = `
            <div class="task" id="task-${numt}">
                <img src="ellipse-outline.svg" alt="check" class="circle">
                <div class="txt outfit"><p id="text-${numt}"></p></div>
            </div>
            `;
    document.getElementById("container").appendChild(newtask);
    document.getElementById(`text-${numt}`).innerText = textt;
    textt = "";
    document.getElementById("newtext").value = "";
    
            
});


