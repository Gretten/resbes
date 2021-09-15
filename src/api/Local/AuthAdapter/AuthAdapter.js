import LocalStorageApi from "../LocalStorageApi/LocalStorageApi";

class AuthAdapter {
    localStorageApi = new LocalStorageApi();
    #usersAlias = 'users'

    get allUsers() {
        return JSON.parse(this.localStorageApi.getLocalStorageItem(this.#usersAlias)) || [];
    }

    setRegistration(data) {
        const newUser = {
            user: data.login, 
            data: {
                login: data.login, 
                password: data.password
            }
        }
        this.localStorageApi.setLocalStorageItem(
            this.#usersAlias,
            JSON.stringify([newUser, ...this.allUsers])
        )
    }

    getUserData(login) {
        const userData = this.allUsers.find(user => {
            return user.user === login && user.data
        })

        return userData ? userData.data : null;
    }

    checkLoginAndPass(formData) {
        const currentUserData = this.getUserData(formData.login);
        if(currentUserData) {
            if(formData.login === currentUserData.login &&
               formData.password === currentUserData.password) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    removeLogin() {
        this.localStorageApi.clearLocalStorage();
    }
}

const authAdapter = new AuthAdapter();

export default authAdapter;