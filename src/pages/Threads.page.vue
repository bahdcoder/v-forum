<template>
	<div class="container">
		<div class="panel panel-default" v-if="threads" v-for="thread in threads">
			<div class="panel-heading">
				{{ thread.title }}
			</div>
			<div class="panel-body">
				{{ thread.body }}
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		mounted() {
			this.getThreads()
		},
		methods: {
			getThreads() {
				this.$store.dispatch('getThreads')
			}
		},
		computed: {
			threads() {
				return this.$store.getters.threads
			}
		}
	}
</script>