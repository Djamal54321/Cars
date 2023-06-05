import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://6417d9f8cc5fd8ffb1780f3e.mockapi.io/cars',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
