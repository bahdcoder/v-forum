import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ThreadPage from '@/pages/thread.page'
import ThreadsPage from '@/pages/Threads.page'
import RegisterPage from '@/pages/Register.page'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
    	{ path: '/', name: 'Hello', component: Hello },
    	{ path: '/threads', name: 'Threads', component: ThreadsPage },
    	{ path: '/thread/:id', name: 'Thread', component: ThreadPage },
    	{ path: '/auth/register', name: 'Register', component: RegisterPage }
  	]
})
