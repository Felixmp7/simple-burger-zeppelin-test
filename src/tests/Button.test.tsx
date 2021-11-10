import { render, fireEvent } from '@testing-library/react';
import Button from 'components/widgets/Button';

describe('Button Test', () => {
    test('should render correct text', () => {
        const buttonContent = 'Button';
        const { getByText } = render(<Button>{buttonContent}</Button>);
        const ButtonElement = getByText(buttonContent);
        expect(ButtonElement.textContent).toBe(buttonContent);
    });
    test('should render correct content', () => {
        const link = 'Link';
        const { getByText } = render(
            <Button>
                <a href="http://example.com">{link}</a>
            </Button>,
        );
        const Link = getByText(link);
        expect(Link).toHaveAttribute('href', 'http://example.com');
    });
    test('mock function should be called when click on button', () => {
        const mockFn = jest.fn();
        const { getByText } = render(<Button onClick={mockFn}>Button</Button>);
        const ButtonElement = getByText('Button');
        fireEvent.click(ButtonElement);
        expect(mockFn).toHaveBeenCalled();
    });
});
