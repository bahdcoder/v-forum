export default class RegistrationValidator {

	constructor(data) {
		this.errors = {}
		this.name = data['name']
		this.email = data['email']
		this.password = data['password']
	}

	isValid() {
		let emailIsValid = this.emailIsValid()
		let passwordIsValid = this.passwordIsValid()
		let nameIsValid = this.nameIsValid()
		
		return emailIsValid && passwordIsValid && nameIsValid
	}

	nameIsValid() {
		if(this.name.length > 0) {
			return true 
		} else { 
			this.errors['name'] = 'the name must be greater than zero'

			return false 
		}
		
	}

	passwordIsValid() {
		if(this.password.length > 6) { 
			return true 
		} else {
			this.errors['password'] = 'the password must be greater than 6 characters'
			return false 
		}
	}

	emailIsValid() {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {  
		    return true
		} else {
			this.errors['email'] = 'the email must be a valid email'
			return false 
		}
	}
}