import json from './mockData.json';

const mockPromiseCallback = (resolve) => {
    setTimeout(
        () => {
            resolve(json)
        },
        1000
    )
}

const mockApiList = () => new Promise(mockPromiseCallback)

export default mockApiList;
