<template>
	<div>
		<div class="panel panel-default" v-if="thread">
			<div class="panel-heading">
				<router-link :to="{ name: 'Thread', params: { id: thread.id } }" class="no-decoration" style="text-decoration: none;">{{ thread.title }}</router-link>
			</div>
			<div class="panel-body">
				{{ thread.body }}
			</div>

			<div class="panel-footer">
				<span>{{ thread.creator.name }} </span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['thread']
	}
</script>