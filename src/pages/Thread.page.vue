<template>
	<div class="container">
		<thread :thread="thread" v-if="thread"></thread>
		
		<reply :reply="reply" v-for="reply in replies" v-if="replies"></reply>

		<create-reply :threadId="thread.id" v-if="authenticated"></create-reply>
		<router-link to="/auth/register" v-if="!authenticated">Sign in to Participate</router-link>	
		<div class="text-center">
			<paginate
			  :page-count="Math.ceil(repliesMetaData.total / repliesMetaData.per_page)"
			  :click-handler="getRepliesData"
			  :prev-text="'Prev'"
			  :next-text="'Next'"
			  :container-class="'pagination'" v-if="repliesMetaData.total">
			</paginate>
		</div>
	</div>
</template>

<script>
	import Reply from '@/components/Reply'
	import Auth from '@/auth/auth.service'
	import CreateReply from '@/components/Create-reply'
	
	export default {
		components: {
			reply: Reply,
			"create-reply": CreateReply
		},
		data() {
			return {
				authenticated: Auth.isAuthenticated() 
			}
		},
		mounted() {
			this.getThreadReplies()
		},
		methods: {
			getThreadReplies(pageNumber = 1) {
				this.$store.dispatch('getThreadReplies', { thread_id: this.$route.params.id, pageNumber })
			},
			getRepliesData(page) {
				this.getThreadReplies(page)
			}
		},
		computed: {
			thread() {
				return this.$store.getters.thread(this.$route.params.id)
			},
			replies() {
				return this.$store.state.replies 
			},
			repliesMetaData() {
				return this.$store.state.repliesMetaData
			}
		}
	}
</script>