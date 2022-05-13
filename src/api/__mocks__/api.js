export default class Api {
    static async getList() {
        return Promise.resolve([{ _id: 1, text: 'test' }]);
    }
}