document.addEventListener("DOMContentLoaded", function() {
    const noteContainer = document.querySelector(".note-container");
    const notesViewSelect = document.getElementById("notes-view-select");

    // Load notes from local storage
    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    function displayNotes(filter) {
        noteContainer.innerHTML = ''; // Clear existing notes
        notes.forEach((note, index) => {
            if (filter === 'all' || note.category === filter) {
                const newNote = document.createElement("div");
                newNote.classList.add("note-card");
                newNote.innerHTML = `
                    <h3>${note.title}</h3>
                    <div>${note.content}</div>
                    <span class="note-category">Category: ${note.category}</span>
                    <span class="note-reminder">${note.reminder ? `Reminder: ${new Date(note.reminder).toLocaleString()}` : ''}</span>
                    <button onclick="editNote(${index})">Edit</button>
                    <button onclick="deleteNote(${index})">Delete</button>
                `;
                noteContainer.appendChild(newNote);
            }
        });
    }

    notesViewSelect.addEventListener("change", function() {
        displayNotes(this.value);
    });

    // Initial display of all notes
    displayNotes('all');

    window.editNote = function(index) {
        // Edit note logic here
    };

    window.deleteNote = function(index) {
        if (confirm("Are you sure you want to delete this note?")) {
            notes.splice(index, 1); // Remove the note from the array
            localStorage.setItem('notes', JSON.stringify(notes)); // Update local storage
            displayNotes(notesViewSelect.value); // Refresh the displayed notes
        }
    };
}); 