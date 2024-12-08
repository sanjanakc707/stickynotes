function createNote()
{
    const stickyNotes = document.querySelector(".sticky-notes");
    const noteContainer = document.createElement("div");
    noteContainer.classList.add("note-container");
    const noteContent = document.createElement("div");
    noteContent.classList.add("note-content");
    noteContent.contentEditable = true;
    noteContent.textContent="NEW";
    const noteAction = document.createElement("div");
    noteAction.classList.add("note-action");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-note");
    deleteButton.textContent="Delete";
    deleteButton.onclick = function (){
        noteContainer.remove();
        
    };
    noteAction.appendChild(deleteButton);
    noteContainer.appendChild(noteContent);
    noteContainer.appendChild(noteAction);
    stickyNotes.appendChild(noteContainer);
    
    


}
function deleteNote(button){
    const noteContainer = button.closest(".note-container");
    noteContainer.remove();

}