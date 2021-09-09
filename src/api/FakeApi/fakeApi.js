// import json from './fakeData.json';

const fakePromiseCallback = (resolve, reject) => {
    return false;
}

const fakeApiList = () => new Promise(fakePromiseCallback)

console.log(json)

export default fakeApiList;
