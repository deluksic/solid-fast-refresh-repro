/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';

// Polyfill requestIdleCallback for Safari
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (window.requestIdleCallback === undefined) {
    // @ts-expect-error
    window.requestIdleCallback = setTimeout
}

export function renderApp(element: HTMLElement) {
    return render(() => <App />, element)
}
