<template>
	<div>
		<textarea cols="5" rows="5" class="form-control" placeholder="Got something to say ? " v-model="reply"></textarea>
		<br>
		<button class="btn btn-primary pull-right" style="width: 100%" @click="addReply" :disabled="!reply">Add your reply</button>
	</div>
</template>

<script>
	export default {
		props: ['threadId'],
		data() {
			return { 
				reply: ''
			}
		},
		methods: {
			addReply() {
				this.$store.dispatch('addReply', { reply: this.reply, threadId: this.threadId})
			}
		}
	}
</script>