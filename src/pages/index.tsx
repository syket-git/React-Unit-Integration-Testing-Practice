import type { NextPage } from 'next';
import Counter from '../components/Counter/Counter';
import Todo from '../components/Todo/Todo';

const Home: NextPage = () => {
  return (
    <div>
      <Todo />
    </div>
  );
};

export default Home;
