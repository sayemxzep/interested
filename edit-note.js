document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const noteIndex = urlParams.get('index');
    const editNoteForm = document.getElementById("edit-note-form");
    const editTitle = document.getElementById("edit-title");
    const editCategory = document.getElementById("edit-category");
    const editReminder = document.getElementById("edit-reminder");

    const quill = new Quill('#editor', {
        theme: 'snow',
        modules: {
            toolbar: '#editor-toolbar'
        }
    });

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    const note = notes[noteIndex];

    if (note) {
        editTitle.value = note.title;
        quill.root.innerHTML = note.content;
        editCategory.value = note.category;
        editReminder.value = note.reminder;
    }

    editNoteForm.addEventListener("submit", function(event) {
        event.preventDefault();
        notes[noteIndex] = {
            title: editTitle.value,
            content: quill.root.innerHTML,
            category: editCategory.value,
            reminder: editReminder.value
        };
        localStorage.setItem('notes', JSON.stringify(notes));
        window.location.href = 'index.html';
    });

    document.querySelector('.toggle-dark-mode').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.header').classList.toggle('dark-mode');
        document.querySelector('.toolbar-container').classList.toggle('dark-mode');
        document.querySelector('.edit-note-content').classList.toggle('dark-mode');
        document.querySelector('.back-button').classList.toggle('dark-mode');
        document.querySelector('.save-button').classList.toggle('dark-mode');
    });
}); 