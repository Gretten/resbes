import fakeApiList from '../FakeApi/fakeApi'

class FakeDataAdapter {

    api = fakeApiList;

    getObjects() {
        return this.api()
    }
}

const fakeDataAdapter = new FakeDataAdapter();

export default fakeDataAdapter;