import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Todo from './Todo';

describe('Todos', () => {
  describe('Check Initial Title, input and button', () => {
    beforeEach(() => {
      render(<Todo />);
    });

    it('Initial render title, input and button', () => {
      const heading = screen.getByRole('heading', { name: /my todos:/i });
      const textBox = screen.getByRole('textbox');
      const button = screen.getByRole('button', { name: /Add/i });
      const noItemMessage = screen.getByText(/no todos added yet./i);
      const statusMessage = screen.getByText(
        /Hurray!! You completed your task./i
      );

      expect(heading).toBeInTheDocument();
      expect(textBox).toHaveValue('');
      expect(button).toBeInTheDocument();
      expect(noItemMessage).toBeInTheDocument();
      expect(statusMessage).toBeInTheDocument();
    });
  });

  describe('When todos.length = 1', () => {
    const todos = [{ id: 1, name: 'Need to practice CSS', status: 'pending' }];
    beforeEach(() => {
      render(<Todo defaultTodos={todos} />);
    });

    it('Check the todos left message', () => {
      const statusMessage = screen.getByText(/you have 1 todo left/i);
      expect(statusMessage).toBeInTheDocument();
    });

    it('check todo title', () => {
      const todoTitle = screen.getByText(/Need to practice CSS/i);
      expect(todoTitle).toBeInTheDocument();
    });
  });

  describe('Test the input element', () => {
    beforeEach(() => {
      render(<Todo />);
    });

    it('Writing the input element and click the add button', async () => {
      const textBox = screen.getByRole('textbox');
      const button = screen.getByRole('button', { name: /add/i });
      await user.type(textBox, 'Hello world');
      await user.click(button);
      expect(textBox).toHaveValue('');
      const todoTitle = screen.getByText(/Hello world/i);
      expect(todoTitle).toBeInTheDocument();
    });
  });

  describe('Check the DONE Button', () => {
    const todos = [{ id: 1, name: 'Practice React', status: 'pending' }];

    beforeEach(() => {
      render(<Todo defaultTodos={todos} />);
    });

    it('After click the DONE button todo should be line-through', async () => {
      const doneButton = screen.getByRole('button', { name: /done/i });
      await user.click(doneButton);
      const todoTitleClass = screen.getByText(/Practice React/i);
      expect(todoTitleClass).toHaveClass('line-through');
    });
  });
});
