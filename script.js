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
inputDiv.appendChild(sendButton);


