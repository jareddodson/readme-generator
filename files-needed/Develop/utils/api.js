const axios = require('axios');

const api = {
  async getUser(userResponses) {
    try { let response = await axios
        
      // Sample URL: https://api.github.com/users/connietran-dev
        .get(`https://api.github.com/users/${inquirerResponse.github}`);
        return response.data;

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = api;

git restore --staged File

files/needed/Develop/utils/api.js
node_modules
package.json
package-lock.json