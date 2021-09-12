class LocalStorageApi {
  
    storage = localStorage;
  
    setLocalStorageItem(item) {
        this.storage.setItem(item.key, item.value);
    }

    getLocalStorageItem(key) {
        return this.storage.getItem(key)
    }

    getAllStorage() {
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            console.log(`${key}: ${localStorage.getItem(key)}`);
          }          
    }

    removeItemFromLocalStorage(key) {
        return this.storage.removeItem(key)
    } 

    clearLocalStorage() {
        return this.storage.clear();
    }
}

export default LocalStorageApi;