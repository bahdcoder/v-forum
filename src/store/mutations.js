export default {
	threads(state, payload) {
		state.threads = payload.threads
	},
	threadsMetaData(state, payload) {
		state.threadsMetaData = payload.threadsMetaData
	},
	threadReplies(state, payload) {
		state.replies = payload.replies
	},
	repliesMetaData(state, payload) {
		state.repliesMetaData = payload.repliesMetaData
	}
}