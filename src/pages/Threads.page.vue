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
		  :page-count="threadsMetaData.total / threadsMetaData.per_page"
		  :click-handler="getThreadsData"
		  :prev-text="'Prev'"
		  :next-text="'Next'"
		  :container-class="'pagination'" v-if="threadsMetaData.total">
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