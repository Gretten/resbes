import mockApiList from '../MockApi/mockApi'

class MockDataAdapter {

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

const mockDataAdapter = new MockDataAdapter(
    'Нет объектов для отображения',
    mockApiList
);

export default mockDataAdapter;