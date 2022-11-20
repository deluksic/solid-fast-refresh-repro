# Solid-js fast refresh broken repro

Steps to reproduce:

ORDER OF OPERATIONS IMPORTANT!!

1) run the server and open in the browser.
```
pnpm install
pnpm start --open
```
2) modify and save `Sub.tsx`, counter should not increase, changes are applied.
3) save `App.tsx`, counter should increase by 1.
4) modify `Sub.tsx`, observe no changes in the browser.

From then on, saving `App.tsx` will correctly use most recent `Sub.tsx`, but saving `Sub.tsx` will not rerender the component.