// Datum
// Rubrik
// TextArea
// Submitknapp
// Div med rubrik - datum - inlägg
// localStorage
// Kronologisk ordning
// Ta bort inlägg?

// Datum - Scrollbar där datum finns? Eller input med placeholder som anger hur man skriver datum + regex för att plocka upp det. Date(), eller bara siffror? 

// Div för datum och rubrik
const headertDiv = document.createElement("div");
headertDiv.id = "headertDiv";
document.body.appendChild(headertDiv);

// Datum
const dateElem = document.createElement("input");
dateElem.setAttribute("type", "date");
headertDiv.appendChild(dateElem);

// Rubrik
const rubrikInputElem = document.createElement("input");
rubrikInputElem.placeholder = "Rubrik";
headertDiv.appendChild(rubrikInputElem);

// Div för text och knapp
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
sendButton.onclick = render;
inputDiv.appendChild(sendButton);

// Div för renderat inlägg
const renderDiv = document.createElement("div");
renderDiv.id = "renderDiv";
document.body.appendChild(renderDiv);

// Datum för renderat inlägg
const renderDate = document.createElement("h3");
renderDate.id = "renderDate";
renderDiv.appendChild(renderDate);

// Rubrik för renderat inlägg
const renderHeader = document.createElement("h1");
renderHeader.id = "renderHeader";
renderDiv.appendChild(renderHeader);

// Text för renderat inlägg
const renderText = document.createElement("p");
renderText.id = "renderText";
renderDiv.appendChild(renderText);

function render() {
    renderDate.innerText = dateElem.value;
    renderHeader.innerText = rubrikInputElem.value;
    renderText.innerText = textAreaElem.value;
}