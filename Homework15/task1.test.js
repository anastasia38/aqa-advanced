const fetchInvalidUrl = require('./task1');

test('returns error message for invalid URL', async () => {
    const result = await fetchInvalidUrl();
    expect(result).toBe('Request failed with error');
});