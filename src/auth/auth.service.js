class Auth { 
    loginUser(user, token) {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
    }

    logoutUser() {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    isAuthenticated() {
        return localStorage.getItem('user') && localStorage.getItem('token')
    }
    getAuthUser() {
        let user = localStorage.getItem('user')
        if(user) {
            return JSON.parse(user)
        } else { 
            return null 
        }
    }
}

export default new Auth 