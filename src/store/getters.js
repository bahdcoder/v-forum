export default {
	threads(state) {
		return state.threads
	},
	thread: state => (id) => {
		return state.threads.find(thread => +thread.id == +id)
	},
	threadsMetaData(state) {
		return state.threadsMetaData
	}
}