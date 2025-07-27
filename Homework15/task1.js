const axios = require('axios');

async function fetchInvalidUrl() {
    try {
        await axios.get('https://invalid-url-for-test.example.com');
    } catch (error) {
        return 'Request failed with error';
      }
    }

    module.exports = fetchInvalidUrl;