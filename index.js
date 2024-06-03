// Data dummy catatan
const dummyNotes = [
    {
        id: 'notes-jT-jjsyz61J8XKiI',
        title: 'Welcome to Notes, Dimas!',
        body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
        createdAt: '2022-07-28T10:03:12.594Z',
        archived: false,
      },
      {
        id: 'notes-aB-cdefg12345',
        title: 'Meeting Agenda',
        body: 'Discuss project updates and assign tasks for the upcoming week.',
        createdAt: '2022-08-05T15:30:00.000Z',
        archived: false,
      },
      {
        id: 'notes-XyZ-789012345',
        title: 'Shopping List',
        body: 'Milk, eggs, bread, fruits, and vegetables.',
        createdAt: '2022-08-10T08:45:23.120Z',
        archived: false,
      },
      {
        id: 'notes-1a-2b3c4d5e6f',
        title: 'Personal Goals',
        body: 'Read two books per month, exercise three times a week, learn a new language.',
        createdAt: '2022-08-15T18:12:55.789Z',
        archived: false,
      },
      {
        id: 'notes-LMN-456789',
        title: 'Recipe: Spaghetti Bolognese',
        body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
        createdAt: '2022-08-20T12:30:40.200Z',
        archived: false,
      },
      {
        id: 'notes-QwErTyUiOp',
        title: 'Workout Routine',
        body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
        createdAt: '2022-08-25T09:15:17.890Z',
        archived: false,
      },
      {
        id: 'notes-abcdef-987654',
        title: 'Book Recommendations',
        body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
        createdAt: '2022-09-01T14:20:05.321Z',
        archived: false,
      },
      {
        id: 'notes-zyxwv-54321',
        title: 'Daily Reflections',
        body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
        createdAt: '2022-09-07T20:40:30.150Z',
        archived: false,
      },
      {
        id: 'notes-poiuyt-987654',
        title: 'Travel Bucket List',
        body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
        createdAt: '2022-09-15T11:55:44.678Z',
        archived: false,
      },
      {
        id: 'notes-asdfgh-123456',
        title: 'Coding Projects',
        body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
        createdAt: '2022-09-20T17:10:12.987Z',
        archived: false,
      },
      {
        id: 'notes-5678-abcd-efgh',
        title: 'Project Deadline',
        body: 'Complete project tasks by the deadline on October 1st.',
        createdAt: '2022-09-28T14:00:00.000Z',
        archived: false,
      },
      {
        id: 'notes-9876-wxyz-1234',
        title: 'Health Checkup',
        body: 'Schedule a routine health checkup with the doctor.',
        createdAt: '2022-10-05T09:30:45.600Z',
        archived: false,
      },
      {
        id: 'notes-qwerty-8765-4321',
        title: 'Financial Goals',
        body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
        createdAt: '2022-10-12T12:15:30.890Z',
        archived: false,
      },
      {
        id: 'notes-98765-54321-12345',
        title: 'Holiday Plans',
        body: 'Research and plan for the upcoming holiday destination.',
        createdAt: '2022-10-20T16:45:00.000Z',
        archived: false,
      },
      {
        id: 'notes-1234-abcd-5678',
        title: 'Language Learning',
        body: 'Practice Spanish vocabulary for 30 minutes every day.',
        createdAt: '2022-10-28T08:00:20.120Z',
        archived: false,
      },
    ];

// Render daftar catatan
function renderNotes(notes) {
  const notesListContainer = document.getElementById('notesList');
  notesListContainer.innerHTML = '';

  notes.forEach(note => {
      const noteElement = document.createElement('note-item');
  
      noteElement.setAttribute('title', note.title);
      noteElement.setAttribute('body', note.body);
      notesListContainer.appendChild(noteElement);
    });
}

// Tampilkan notifikasi
function displayNotification(message, type) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add(type);
  notification.style.display = "block";
  setTimeout(() => {
      notification.textContent = "";
      notification.classList.remove(type);
      notification.style.display = "none";
  }, 3000);
}

// Inisialisasi aplikasi
renderNotes(dummyNotes);

class AppBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* Styles for app bar */
        .app-bar {
          background-color: #333;
          color: white;
          padding: 10px;
          display: flex;
          justify-content: space-between;
        }
      </style>
      <div class="app-bar">
        <h2>My Notes App</h2>
        <button id="about-button">About</button>
      </div>
    `;
    // Check if element with id 'about-button' exists in DOM before adding event listener
    const aboutButton = this.shadowRoot.getElementById('about-button');
    if (aboutButton) {
      aboutButton.addEventListener('click', this.handleAbout.bind(this));
    } else {
      console.error("Element with id 'about-button' not found in DOM.");
    }
  }

  handleAbout() {
    alert('This is a simple notes app created for learning purposes.');
  }
}

customElements.define('app-bar', AppBar);

// Custom Element untuk Item Catatan
class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* Styles for note item */
        .note {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          margin-bottom: 10px;
        }
        .edit-button {
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 5px 10px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 14px;
          margin-top: 5px;
          cursor: pointer;
        }
      </style>
      <div class="note">
        <h3></h3>
        <p></p>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
      </div>
    `;
    this.shadowRoot.querySelector('.edit-button').addEventListener('click', this.handleEdit.bind(this));
    this.shadowRoot.querySelector('.delete-button').addEventListener('click', this.handleDelete.bind(this));
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('title') || 'Title Placeholder';
    const body = this.getAttribute('body') || 'Body Placeholder';
    this.shadowRoot.querySelector('h3').textContent = title;
    this.shadowRoot.querySelector('p').textContent = body;
  }

  handleEdit() {
    const title = this.getAttribute('title') || '';
    const body = this.getAttribute('body') || '';
    const newTitle = prompt('Enter new title:', title);
    const newBody = prompt('Enter new body:', body);
    if (newTitle !== null && newBody !== null) {
      this.setAttribute('title', newTitle);
      this.setAttribute('body', newBody);
      this.render();
    }
  }

  handleDelete() {
    const noteId = this.getAttribute('note-id');
    if (confirm('Are you sure you want to delete this note?')) {
      this.dispatchEvent(new CustomEvent('note-delete', { detail: { noteId } }));
    }
  }
}

customElements.define('note-item', NoteItem);

class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        form {
          display: flex;
          flex-direction: column;
          max-width: 400px;
          margin: 0 auto;
        }
        input, textarea {
          margin-bottom: 10px;
          padding: 5px;
          font-size: 16px;
        }
        button {
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 10px;
          font-size: 16px;
          cursor: pointer;
        }
        .error-message {
          color: red;
          font-size: 14px;
          margin-top: 5px;
        }
      </style>
      <form id="add-note-form">
        <input type="text" id="note-title" placeholder="Note Title" required>
        <textarea id="note-body" placeholder="Note Body" required></textarea>
        <button type="submit">Add Note</button>
        <div id="error-message" class="error-message"></div>
      </form>
    `;
    this.shadowRoot.getElementById('add-note-form').addEventListener('submit', this.handleFormSubmit.bind(this));
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const title = this.shadowRoot.getElementById('note-title').value;
    const body = this.shadowRoot.getElementById('note-body').value;
    if (!title || !body) {
      this.shadowRoot.getElementById('error-message').textContent = 'Title and body are required!';
      return;
    }
    this.dispatchEvent(new CustomEvent('note-added', { detail: { title, body } }));
    this.resetForm();
  }

  resetForm() {
    this.shadowRoot.getElementById('note-title').value = '';
    this.shadowRoot.getElementById('note-body').value = '';
    this.shadowRoot.getElementById('error-message').textContent = '';
  }
}

customElements.define('note-form', NoteForm);