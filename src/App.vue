<script setup>
import { RouterView } from 'vue-router';
import { StarportCarrier } from 'vue-starport';
</script>

<template>
	<StarportCarrier>
		<Transition>
			<RouterView />
		</Transition>
	</StarportCarrier>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.8s ease-in-out;
}
.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>