const form = document.getElementById('bookForm');
const title = document.getElementById('title');
const author = document.getElementById('author');
const bookId = document.getElementById('bookId');
const bookList = document.getElementById('bookList');

async function fetchBooks() {
  const res = await fetch('/books');
  const books = await res.json();
  bookList.innerHTML = books.map(book => `
    <div class="book">
      <span><strong>${book.title}</strong> by ${book.author}</span>
      <div class="actions">
        <button class="edit" onclick='editBook(${JSON.stringify(book)})'>Edit</button>
        <button class="delete" onclick='deleteBook(${book.id})'>Delete</button>
      </div>
    </div>
  `).join('');
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    title: title.value,
    author: author.value
  };

  if (bookId.value) {
    await fetch(`/books/${bookId.value}`, {
      method: 'PUT',a
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } else {
    await fetch('/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  }

  title.value = '';
  author.value = '';
  bookId.value = '';
  fetchBooks();
});

function editBook(book) {
  title.value = book.title;
  author.value = book.author;
  bookId.value = book.id;
}

async function deleteBook(id) {
  await fetch(`/books/${id}`, {
    method: 'DELETE'
  });
  fetchBooks();
}

fetchBooks();
