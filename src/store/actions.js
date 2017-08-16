import axios from 'axios'

export default {
	getThreads(context) {
		axios.get('https://v-forum-api.bahdcasts.com/api/threads')
				.then(resp => {
				 	context.commit('threads', { threads: resp.data.data.data })
				})
	}
}