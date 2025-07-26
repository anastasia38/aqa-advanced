const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API tests', () => {
  test('GET /posts should return 100 posts', async () => {
    const response = await axios.get(`${BASE_URL}/posts`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBe(100);
  });

  test('GET /users/1 should return user with id=1', async () => {
    const response = await axios.get(`${BASE_URL}/users/1`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data).toHaveProperty('name');
  });

  test('POST /posts should create a new post', async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const response = await axios.post(`${BASE_URL}/posts`, newPost);
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newPost);
    expect(response.data).toHaveProperty('id');
  });

  test('GET /comments?postId=1 should return comments for post 1', async () => {
    const response = await axios.get(`${BASE_URL}/comments`, {
      params: { postId: 1 },
    });
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data[0]).toHaveProperty('postId', 1);
  });

  test('POST /comments should create a new comment', async () => {
    const newComment = {
      name: 'Test name',
      email: 'test@example.com',
      body: 'Test body',
      postId: 1,
    };
    const response = await axios.post(`${BASE_URL}/comments`, newComment);
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newComment);
    expect(response.data).toHaveProperty('id');
  });
});
