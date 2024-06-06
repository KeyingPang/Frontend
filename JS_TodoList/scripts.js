// Fetch to-do items from the API
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => renderTodos(data));

// Render the fetched to-do items
function renderTodos(todos) {
  const ul = document.getElementById('myUL');
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.title;
    if (todo.completed) {
      li.classList.add('checked');
    }
    const span = document.createElement('span');
    span.textContent = '\u00D7';
    span.className = 'close';
    span.onclick = function() {
      li.style.display = 'none';
    };
    li.appendChild(span);
    li.onclick = function() {
      li.classList.toggle('checked');
    };
    ul.appendChild(li);
  });
}

// Add a new to-do item
function newElement() {
  const inputValue = document.getElementById('myInput').value;
  if (inputValue === '') {
    alert('You must write something!');
    return;
  }
  const li = document.createElement('li');
  li.textContent = inputValue;
  const span = document.createElement('span');
  span.textContent = '\u00D7';
  span.className = 'close';
  span.onclick = function() {
    li.style.display = 'none';
  };
  li.appendChild(span);
  li.onclick = function() {
    li.classList.toggle('checked');
  };
  document.getElementById('myUL').appendChild(li);
  document.getElementById('myInput').value = '';
}
