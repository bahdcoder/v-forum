import axios from 'axios'

export default {
	getThreads(context, payload) {
		axios.get(`https://v-forum-api.bahdcasts.com/api/threads?page=${payload.pageNumber}`)
				.then(resp => {
				 	context.commit('threads', { threads: resp.data.data.data })
				 	context.commit('threadsMetaData', { threadsMetaData: resp.data.data })
				})
	}
}