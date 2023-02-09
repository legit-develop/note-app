const btnEl = document.getElementById("btn");
console.log(btnEl);
const appEl = document.getElementById("app");

function createNoteEl(id, content) {
  //console.log(id, content);
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;

  element.addEventListener("dblclick", () => {
    const warning = confirm("Are you sure you want to delete the note?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });
  return element;
}

function updateNote() {}

function deleteNote() {}

function addNote() {
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };

  //console.log(noteObj);
  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  appEl.insertBefore(noteEl, btnEl);
}

btnEl.addEventListener("click", addNote);
