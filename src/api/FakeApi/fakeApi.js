import json from './fakeData.json';

const fakePromiseCallback = (resolve) => {
    setTimeout(
        () => {
            resolve(json)
        },
        1000
    )
}

const fakeApiList = () => new Promise(fakePromiseCallback)

export default fakeApiList;
