import {screen, render, fireEvent} from '@testing-library/react';
import App from "./App";


describe("test app", () => {
    test('task test', () => {
        localStorage.clear()
        render(<App />);
        let submit = screen.getByTestId("submit");
        expect(submit).toBeInTheDocument();
        expect(screen.queryByTestId("task")).toBeNull();
        fireEvent.submit(submit);
        expect(screen.queryByTestId("task")).toBeInTheDocument();
        fireEvent.click(screen.getByTestId("checkbox"));
        // @ts-ignore
        expect(screen.getByTestId("checkbox").checked).toEqual(true);
    });
    test("test filter", () => {
        localStorage.clear()
        render(<App />);
        fireEvent.submit(screen.getByTestId("submit"));
        const fulfilled = screen.getByTestId("fulfilled");
        const unfulfilled = screen.getByTestId("unfulfilled");
        fireEvent.click(fulfilled);
        expect(screen.queryByTestId("task")).toBeNull();
        fireEvent.click(unfulfilled);
        expect(screen.queryByTestId("task")).toBeInTheDocument();
        fireEvent.click(screen.getByTestId("checkbox"));
        expect(screen.queryByTestId("task")).toBeNull();
        fireEvent.click(fulfilled);
        expect(screen.queryByTestId("task")).toBeInTheDocument();
    });
});
