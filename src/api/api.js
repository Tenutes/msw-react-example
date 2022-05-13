import axios from 'axios';

const OPTIONS = {
  method: 'GET',
  url: 'https://cat-fact.herokuapp.com/facts/random',
  params: {
      animal_type: 'cat',
      amount: 10
  }
};

export default class Api {
    static async getList() {
        const { data: list } = await axios.request(OPTIONS);

        return list;
    }
}