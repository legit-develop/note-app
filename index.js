const btnEl = document.getElementById("btn");
console.log(btnEl);

function createNoteEl(id, content) {
  console.log(id, content);
}

function addNote() {
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };

  //console.log(noteObj);
  const NoteEl = createNoteEl(noteObj.id, noteObj.content);
}

btnEl.addEventListener("click", addNote);
