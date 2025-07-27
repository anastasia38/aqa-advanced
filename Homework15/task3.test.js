const axios = require('axios');
const getData = require('./task3');

jest.mock('axios');

test('return data from successful request', async () => {
    axios.get.mockResolvedValue({ data: 'Mocked data' });
    
    const result = await getData();
    expect(result).toBe('Mocked data');
});

test('returns error message on failed request', async () => {
    axios.get.mockRejectedValue(new Error('Request failed'));

const result = await getData();
expect(result).toBe('Error occured');
});