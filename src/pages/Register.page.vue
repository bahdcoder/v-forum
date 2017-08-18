<template>
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<register></register>
			</div>
		</div>
	</div>
</template>

<script>
	import Register from '@/components/Register'

	export default {
		components: {
			register: Register
		}
	}
</script>