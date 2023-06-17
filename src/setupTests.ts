// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { makeServer } from './mocks/server';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
let server;

beforeEach(() => {
  server = makeServer({ environment: 'test' });
});

afterEach(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  server.shutdown();
});
