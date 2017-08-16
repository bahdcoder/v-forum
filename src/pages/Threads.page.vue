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

		<paginate
		  :page-count="20"
		  :click-handler="getThreadsData"
		  :prev-text="'Prev'"
		  :next-text="'Next'"
		  :container-class="'pagination'">
		</paginate>
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
			},
			getThreadsData(page) {
				console.log(page)
			}
		},
		computed: {
			threads() {
				return this.$store.getters.threads
			}
		}
	}
</script>