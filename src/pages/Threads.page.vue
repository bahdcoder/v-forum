<template>
	<div class="container">
		<thread v-for="thread in threads" v-if="threads" :key="thread.id" :thread="thread"></thread>

		<div class="text-center">
			<paginate
			  :page-count="threadsMetaData.total / threadsMetaData.per_page"
			  :click-handler="getThreadsData"
			  :prev-text="'Prev'"
			  :next-text="'Next'"
			  :container-class="'pagination'" v-if="threadsMetaData.total">
			</paginate>
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
			getThreads(pageNumber = 1) {
				this.$store.dispatch('getThreads', { pageNumber })
			},
			getThreadsData(page) {
				this.getThreads(page)
			}
		},
		computed: {
			threads() {
				return this.$store.getters.threads
			},
			threadsMetaData() {
				return this.$store.getters.threadsMetaData
			}
		}
	}
</script>