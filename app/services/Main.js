import Axios from 'axios';

const baseURL = process.env.MAIN_API;

class Main {
  constructor() {
    this.axios = Axios.create({
      baseURL,
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }

  asyncGet = async () => {
    try {
      return await this.axios.get('/url');
    } catch (err) {
      throw err;
    }
  };

  asyncPost = async (payload) => {
    try {
      return await this.axios.post('/url', payload);
    } catch (err) {
      throw err;
    }
  };
}

export default new Main();
