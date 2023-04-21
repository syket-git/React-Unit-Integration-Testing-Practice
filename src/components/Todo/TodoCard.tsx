import React from 'react';

type TodoProps = {
  name: string;
  id: number;
  status: string;
};

type PropTypes = {
  todos: TodoProps[];
  setTodos: (value: any) => void;
  todo: TodoProps;
};

const TodoCard = (props: PropTypes) => {
  const { todos, todo, setTodos } = { ...props };
  const { name, id, status } = { ...todo };

  const handleDone = () => {
    const finalTodos = todos?.map((t) => {
      const findTodo = t?.id === id;

      if (findTodo && findTodo !== undefined) {
        return {
          ...t,
          status: 'completed',
        };
      }
      return t;
    });
    setTodos(finalTodos);
  };

  return (
    <div>
      <p className={status === 'completed' ? 'line-through' : ''}>
        {id} . {name}{' '}
        {status === 'pending' && <button onClick={handleDone}>DONE</button>}
      </p>
    </div>
  );
};

export default TodoCard;
