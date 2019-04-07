import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-dom/test-utils';
import { Hello } from './Hello';

describe("Hello", () => {
    let container: HTMLElement;
    let renderer: any;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactTestUtils.act(() => {
            renderer = ReactDOM.render(<Hello compiler="TypeScript" framework="React Framework" />, container);
        });
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it('can render a header', () => {        
        const header = container.querySelector('h1');
        expect(header).toBeTruthy();
    });

    it('header should contain correct string', () => {
        const header = container.querySelector('h1');
        expect(header.textContent).toBe('Hello from TypeScript and React Framework');
    })
});


