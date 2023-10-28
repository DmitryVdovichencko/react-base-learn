import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://made.up/api/usage', () => {
    return HttpResponse.json({ name: 'John' });
  })
];
