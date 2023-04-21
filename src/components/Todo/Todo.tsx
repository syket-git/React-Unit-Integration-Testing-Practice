import React, { useState, useEffect } from 'react';
import TodoCard from './TodoCard';

type TodoProps = {
  name: string;
  id: number;
  status: string;
};

type PropTypes = {
  defaultTodos?: TodoProps[];
};

const Todo = ({ defaultTodos = [] }: PropTypes) => {
  const [todos, setTodos] = useState<TodoProps[]>(defaultTodos);

  const [incompleteTodos, setIncompleteTodos] = useState<TodoProps[]>([]);
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const filterTodos = todos?.filter((todo) => todo?.status === 'pending');
    setIncompleteTodos(filterTodos);
  }, [todos]);

  const handleTodoAdd = () => {
    if (text && text !== '') {
      const Obj = {
        id: todos?.length + 1,
        name: text,
        status: 'pending',
      };
      setTodos([...todos, Obj]);
      setText('');
    }
  };

  return (
    <div>
      <h1>My Todos:</h1>
      {incompleteTodos?.length > 0 ? (
        <p>
          You have {incompleteTodos?.length}{' '}
          {incompleteTodos?.length === 1 ? 'todo' : 'todos'} left
        </p>
      ) : (
        <p data-testid="emptyStatusMessage">
          Hurray!! You completed your task.
        </p>
      )}

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleTodoAdd}>Add</button>
      </div>

      <div id="todos">
        {todos?.length > 0 ? (
          todos?.map((todo, idx) => (
            <TodoCard key={idx} todos={todos} todo={todo} setTodos={setTodos} />
          ))
        ) : (
          <p>No todos added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
