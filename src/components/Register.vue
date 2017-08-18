<template>
	<div class="row">
		<div class="panel panel-default">
			<div class="panel-body" style="padding: 40px;">
				<h2 class="text-center">Sign up</h2>
				<div class="row">
					<ul class="list-group" v-if="Object.keys(errors).length > 0">
						<li class="list-group-item text-danger" v-for="error in errors">
							{{ error }}
						</li>
					</ul>
					<div class="form-group">
						<input type="text" v-model="name" class="form-control" placeholder="Your name" @keydown="errors = {}">
					</div>
					<div class="form-group">
						<input type="email" v-model="email" class="form-control" placeholder="Your email" @keydown="errors = {}">
					</div>
					<div class="form-group">
						<input type="text" v-model="password" class="form-control" placeholder="password" @keydown="errors = {}">
					</div>
					<div class="form-group text-center">
						<button class="btn btn-info" :disabled="Object.keys(errors).length > 0" @click="signUp()">Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import RegistrationValidator from '@/validators/registration.validator'

	export default {
		data() {
			return { 
				name: '',
				email: '',
				password: '',
				errors: {}
			}
		},
		methods: {
			signUp() {
				let validator = new RegistrationValidator({
					name: this.name,
					email: this.email,
					password: this.password
				})

				if(validator.isValid()) {
					this.$store.dispatch('register', {
						name: this.name,
						email: this.email,
						password: this.password
					}).then(resp => {
						console.log(resp)
					}).catch(error => {
						let errors = Object.values(error.data)
						let arrOfErrors = errors.reduce((a, b) => {
							return a.concat(b)
						})

						let serverErrors = {}

						for(let i = 0; i < arrOfErrors.length; ++i)
							serverErrors[i] = arrOfErrors[i]

						this.errors = serverErrors
					})
				} else {
					this.errors = validator.errors
				}
			}
		}
	}
</script>