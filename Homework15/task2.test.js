const fetchWithHeadersAndParams = require('./task2');

test('includes custom headers and params in the request', async () => {
    const data = await fetchWithHeadersAndParams();
    expect(data.headers['X-Custom-Header']).toBe('MyValue');
    expect(data.args.id).toBe('123');
    expect(data.args.search).toBe('test');
});