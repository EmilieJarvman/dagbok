// Datum
// Rubrik
// TextArea
// Submitknapp
// Div med rubrik - datum - inlägg
// localStorage
// Kronologisk ordning
// Ta bort inlägg?

// Datum - Scrollbar där datum finns? Eller input med placeholder som anger hur man skriver datum + regex för att plocka upp det. Date(), eller bara siffror? 

// Inputdiv
const inputDiv = document.createElement("div");
inputDiv.id = "inputDiv";
document.body.appendChild(inputDiv);

// Datum
const dateElem = document.createElement("input");
dateElem.setAttribute("type", "date");
inputDiv.appendChild(dateElem);

// Rubrik
const rubrikInputElem = document.createElement("input");
rubrikInputElem.placeholder = "Rubrik";
inputDiv.appendChild(rubrikInputElem);

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
inputDiv.appendChild(sendButton);


