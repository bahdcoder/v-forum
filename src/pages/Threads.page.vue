<template>
	<div>
		<h1 class="text-center">
			These are all threads we have available
		</h1>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		mounted() {
			axios.get('https://v-forum-api.bahdcasts.com/api/threads')
				.then(resp => {
				 	console.log(resp.data)
				 	this.$store.commit('threads', { threads: resp.data })
				})
		}
	}
</script>