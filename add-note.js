// Initialize Quill editor
const quill = new Quill('#editor-container', {
    theme: 'snow'
});

document.getElementById("note-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("note-title").value;
    const content = quill.root.innerHTML; // Get HTML content from Quill
    const category = document.getElementById("note-category").value;
    const reminder = document.getElementById("note-reminder").value;

    const note = {
        title,
        content,
        category,
        reminder
    };

    // Save note to local storage
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));

    // Redirect back to main page
    window.location.href = 'index.html';
}); 