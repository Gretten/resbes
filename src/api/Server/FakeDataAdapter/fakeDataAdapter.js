import fakeApiList from '../FakeApi/fakeApi'

class FakeDataAdapter {

    constructor(errMsg, api) {
        this.errMsg = errMsg;
        this.api = api;
    }

    async getObjects() {
        try {
            const result = await this.api()
            if(result[0].Name) {
                return result
            } else {
                return [{Name: this.errMsg}]
            }
        } catch(e) {
            throw new Error(e)
        }
    }
}

const fakeDataAdapter = new FakeDataAdapter(
    'Нет объектов для отображения',
    fakeApiList
);

export default fakeDataAdapter;