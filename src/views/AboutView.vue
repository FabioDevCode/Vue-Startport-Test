<script setup>
import { Starport } from 'vue-starport';
import { RouterLink } from 'vue-router'
import Card from '@/components/Card.vue';


</script>

<template>
	<main>
		<RouterLink to="/">Home</RouterLink>

		<h1>ABOUT</h1>

		<Starport port="card" class="about">
			<Card />
		</Starport>
	</main>
</template>

<style scoped>
main {
	width: 100%;
	height: 100vh;
	transition: all 300ms;
	background-color: tomato;
	/* animation: setBackground 600ms ease-in forwards; */
}

.about {
    overflow: hidden;
	height: 400px;
	width: 400px;
	border-radius: 10px;
    margin-left: 150px;
	transition: all 300ms;
}

@keyframes setBackground {
	0% {
		background-color: transparent;
	}
	100% {
		background-color: tomato;
	}
}


</style>