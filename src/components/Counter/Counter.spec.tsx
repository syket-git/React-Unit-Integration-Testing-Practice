// import { fireEvent, render, screen } from '@testing-library/react';
// import Counter from './Counter';

// describe('Counter', () => {
//   describe('Initial UI Render with counter 0', () => {
//     beforeEach(() => {
//       render(<Counter defaultCounter={0} />);
//     });

//     it('heading, counter title and buttons are initial render', () => {
//       const headingContent = screen.getByRole('heading', {
//         name: /my counter:/i,
//       });
//       const counterContent = screen.getByRole('heading', {
//         name: /current count: 0/i,
//       });
//       const plusButton = screen.getByRole('button', { name: 'Increment' });
//       const minusButton = screen.getByRole('button', { name: 'Decrement' });

//       expect(headingContent).toBeInTheDocument();
//       expect(counterContent).toBeInTheDocument();
//       expect(plusButton).toBeInTheDocument();
//       expect(minusButton).toBeInTheDocument();
//     });

//     describe('Input', () => {
//       it('');
//     });

//     describe('When + button clicked', () => {
//       beforeEach(() => {
//         const plusButton = screen.getByRole('button', { name: 'Increment' });
//         fireEvent.click(plusButton);
//       });
//       it('render counter = 1', () => {
//         const counterContent = screen.getByRole('heading', {
//           name: /current count: 1/i,
//         });
//         expect(counterContent).toBeInTheDocument();
//       });
//     });

//     describe('When - button clicked', () => {
//       beforeEach(() => {
//         const minusButton = screen.getByRole('button', { name: 'Decrement' });
//         fireEvent.click(minusButton);
//       });

//       it('clicking - icon counter to be -1', () => {
//         const counterContent = screen.getByRole('heading', {
//           name: /current count: -1/i,
//         });

//         expect(counterContent).toBeInTheDocument();
//       });
//     });
//   });
// });
