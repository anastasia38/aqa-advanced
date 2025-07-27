const axios = require('axios');

async function getData() {
    try {
        const response = await axios.get('/api/data');
        return response.data;
    } catch (error) {
        return 'Error occured';
     }
    }

    module.exports = getData;
