export function createElement<T extends HTMLElement>(p: string): T {
  return document.createElement(p) as T;
}

export function uuid() {
  return parseInt(String((Math.random() * (100 - 10) + 20)));
}
