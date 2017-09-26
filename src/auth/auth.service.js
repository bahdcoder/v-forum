class Auth { 
    loginUser(user, token) {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)

        window.customEvents.$emit('auth-state-changed')
    }

    logoutUser() {
        localStorage.removeItem('user')
        localStorage.removeItem('token')

        window.customEvents.$emit('auth-state-changed')
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