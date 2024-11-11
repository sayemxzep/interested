document.addEventListener("DOMContentLoaded", function() {
    const notesPreviewContainer = document.getElementById("notes-preview");
    const notesViewSelect = document.getElementById("notes-view-select");

    // Load notes from local storage
    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    function displayNotePreviews(filter) {
        notesPreviewContainer.innerHTML = ''; // Clear existing previews
        notes.forEach((note, index) => {
            if (filter === 'all' || note.category === filter) {
                const notePreview = document.createElement("div");
                notePreview.classList.add("note-preview");
                notePreview.innerHTML = `
                    <h3>${note.title}</h3>
                    <div>${note.content.substring(0, 15)}...</div> <!-- Show only the first 15 characters -->
                    <button onclick="window.location.href='edit-note.html?index=${index}'">Edit</button>
                `;
                notesPreviewContainer.appendChild(notePreview);
            }
        });
    }

    notesViewSelect.addEventListener("change", function() {
        displayNotePreviews(this.value);
    });

    // Initial display of all note previews
    displayNotePreviews('all');
}); 