const localStorageKey = "diaryEntry";
const storedEntry = JSON.parse(localStorage.getItem(localStorageKey));

let activeDiary = storedEntry ? storedEntry : [];

// Div för datum och rubrik
const headerDiv = document.createElement("div");
headerDiv.id = "headerDiv";
document.body.appendChild(headerDiv);

// Datum
const dateElem = document.createElement("input");
dateElem.setAttribute("type", "date");
headerDiv.appendChild(dateElem);

// Rubrik
const headerInputElem = document.createElement("input");
headerInputElem.placeholder = "Rubrik";
headerDiv.appendChild(headerInputElem);

// Div för text och skickaknapp
const inputDiv = document.createElement("div");
inputDiv.id = "inputDiv";
document.body.appendChild(inputDiv);

// Text
const textAreaElem = document.createElement("textarea");
textAreaElem.type = "text";
textAreaElem.placeholder = "Kära dagbok...";
textAreaElem.id = "textArea";
inputDiv.appendChild(textAreaElem);

// Skickaknapp
const sendButton = document.createElement("button");
sendButton.id = "sendButton";
sendButton.innerText = "Skicka";
sendButton.onclick = saveItem;
inputDiv.appendChild(sendButton);

// Div för resultat
const renderDiv = document.createElement("div");
renderDiv.id = "renderDiv";
document.body.appendChild(renderDiv);

function saveItem() {
    const newEntry =  
    {
        date: dateElem.value,
        header: headerInputElem.value,
        body: textAreaElem.value,
        
    };    
    activeDiary.push(newEntry);
    activeDiary.sort(function(a,b) {
        return new Date(b.date) - new Date(a.date);
     });
    dateElem.value = "";
    headerInputElem.value = "";
    textAreaElem.value = "";

    console.log(activeDiary);

    localStorage.setItem(localStorageKey, JSON.stringify(activeDiary));

    render();
}

function render() {
    renderDiv.innerText = "";

    for (i in activeDiary) {
        const savedEntry = activeDiary[i];

        const entryDiv = document.createElement("div");
        entryDiv.className = "entryDiv"
        renderDiv.appendChild(entryDiv);

        const renderDate = document.createElement("h3");
        renderDate.innerHTML = savedEntry.date;
        renderDate.className = "renderDate";
        entryDiv.appendChild(renderDate);

        const renderHeader = document.createElement("h1");
        renderHeader.innerHTML = savedEntry.header;
        renderHeader.className = "renderHeader";
        entryDiv.appendChild(renderHeader);

        const renderText = document.createElement("p");
        renderText.innerHTML = savedEntry.body;
        renderText.className = "renderText";
        entryDiv.appendChild(renderText);

        if (activeDiary.length > 0) {
            let removeButton = document.createElement("button");
            removeButton.className = "removeButton";
            removeButton.innerText = "Radera inlägg";
            removeButton.entryId = i;
            removeButton.onclick = removeEntry;
            renderDiv.appendChild(removeButton);
            }
    }
}

function removeEntry(evt) {
    const target = evt.target;

    activeDiary.splice(target.entryId, 1);

    localStorage.setItem(localStorageKey, JSON.stringify(activeDiary));

    render();

    console.log(target.entryId);
}

render();






