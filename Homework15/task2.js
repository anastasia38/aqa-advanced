const axios = require('axios');
async function fetchWithHeadersAndParams() {
    const response = await axios.get('https://httpbin.org/get', {
        headers: {
            'X-Custom-Header': 'MyValue'
        },
        params: {
            id: 123,
            search: 'test'
        }
    });
       return response.data;
}

module.exports = fetchWithHeadersAndParams;