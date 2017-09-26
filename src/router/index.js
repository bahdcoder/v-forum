import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Auth from './../auth/auth.service'
import ThreadPage from '@/pages/thread.page'
import ThreadsPage from '@/pages/Threads.page'
import RegisterPage from '@/pages/Register.page'

Vue.use(Router)

let router = new Router({
	mode: 'history',
  	routes: [
    	{ path: '/', name: 'Hello', component: Hello },
    	{ path: '/threads', name: 'Threads', component: ThreadsPage },
    	{ path: '/thread/:id', name: 'Thread', component: ThreadPage },
    	{ path: '/auth/register', name: 'Register', component: RegisterPage, meta: { cannotAcessWhenAuth: true } }
  	]
})

router.beforeEach((to, from, next) => {
	if(to.meta.cannotAcessWhenAuth) {
		if(Auth.isAuthenticated()) {
			console.log('you are authenticated already')
			next('/')  
		} else {
			next() 
		}
	} else {
		next() 
	}
})

export default router 