export function createElement<T extends HTMLElement>(p: string): T {
  return document.createElement(p) as T;
}
