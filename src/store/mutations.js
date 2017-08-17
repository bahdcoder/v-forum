export default {
	threads(state, payload) {
		state.threads = payload.threads
	},
	threadsMetaData(state, payload) {
		state.threadsMetaData = payload.threadsMetaData
	}
}