<template>
	<div>
		<div class="panel panel-default" v-if="reply">
			<div class="panel-heading">{{ reply.owner.name }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['reply']
	}
</script>