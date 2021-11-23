import './App.css';
import React, { useState } from 'react';


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  let addTodo = (e) => {
    e.preventDefault()

      setTodos([...todos, input]);
      setInput("");
  }

  return (
    <div>

    <form>

      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button type='submit' onClick={addTodo}>Add Todo</button>

    </form>



      <div>
        {todos.map(todo => (
          <p key={todo}>{todo}</p>
        ))}
      </div>



    </div>
  );
}

export default App;
