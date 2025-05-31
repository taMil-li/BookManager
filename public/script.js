* {
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  padding: 1rem;
  margin: 0;
}
.container {
  max-width: 600px;
  margin: auto;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input {
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  background: #4CAF50;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background: #45a049;
}
.book-list {
  margin-top: 2rem;
}
.book {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.book span {
  flex-grow: 1;
}
.actions button {
  margin-left: 0.5rem;
  padding: 0.4rem 0.6rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.actions .edit {
  background-color: #2196F3;
  color: white;
}
.actions .delete {
  background-color: #f44336;
  color: white;
}
@media (max-width: 600px) {
  .book {
    flex-direction: column;
    align-items: flex-start;
  }
  .actions {
    margin-top: 0.5rem;
  }
}
