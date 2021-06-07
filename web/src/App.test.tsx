import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Main app', () => {
  it('Renders the `Heading 1` title', () => {
    render(<App />);
    const titleElement = screen.getByRole('heading');

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.innerHTML).toBe('T9 - Phonewords');
  });

  describe('Renders the subcomponents', () => {
    it('Renders `Input` element', () => {
      render(<App />);

      const inputElement = screen.getByPlaceholderText('Only numbers 2-9');
      expect(inputElement).toBeInTheDocument();
      expect(inputElement.tagName).toBe('INPUT');
    });

    it('Renders `Dialer` component', () => {
      render(<App />);

      for (let i = 0; i < 10; i++) {
        const button = screen.getByText(i);
        expect(button).toBeInTheDocument();
      }
    });

    it('Renders `Output` component', () => {
      render(<App />);
      const outputElement = screen.getByText('Start typing...');
      expect(outputElement).toBeInTheDocument();
    });
  });

  describe('Mutate states', () => {
    it('Clicks on Button 1, and nothing happens', () => {
      render(<App />);

      const inputElement = screen.getByPlaceholderText('Only numbers 2-9');
      expect(inputElement.innerText).toBe(undefined);

      const button = screen.getByText(1);
      userEvent.click(button);
      expect(inputElement.innerText).toBe(undefined);
    });

    it('Clicks on Button 2, then the input should be updated', () => {
      render(<App />);

      const inputElement = screen.getByPlaceholderText('Only numbers 2-9');

      const button = screen.getByText(2);
      userEvent.click(button);

      const updatedInput = screen.getByDisplayValue('2');

      expect(inputElement).toBe(updatedInput);
    });

    it('Clicks on Button 3 and 4, then the input should be updated', () => {
      render(<App />);

      const inputElement = screen.getByPlaceholderText('Only numbers 2-9');

      let button = screen.getByText(3);
      userEvent.click(button);

      let updatedInput = screen.getByDisplayValue('3');
      expect(inputElement).toBe(updatedInput);

      button = screen.getByText(4);
      userEvent.click(button);

      updatedInput = screen.getByDisplayValue('34');
      expect(inputElement).toBe(updatedInput);
    });

    it('Type in the input field', () => {
      render(<App />);

      const inputElement = screen.getByPlaceholderText('Only numbers 2-9');

      userEvent.type(inputElement, '7887');
      const updatedInput = screen.getByDisplayValue('7887');
      expect(inputElement).toBe(updatedInput);
    });

    it('Update the `output` when the `input` change', () => {
      render(<App />);

      const outputInitialElement = screen.getByText('Start typing...');
      expect(outputInitialElement).toBeInTheDocument();

      const inputElement = screen.getByPlaceholderText('Only numbers 2-9');
      userEvent.type(inputElement, '78');

      expect(outputInitialElement).not.toBeInTheDocument();
    });
  });
});
