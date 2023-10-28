<script setup>
import { Starport } from 'vue-starport';
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';


</script>

<template>
	<main>
		<Header />

		<h1>HOME</h1>

		<Starport port="card" class="home">
			<Card />
		</Starport>
	</main>
</template>

<style scoped>
main {
	width: 100%;
	height: 100vh;
	background-color: #333;
	transition: all 300ms;
}
.home {
	overflow: hidden;
	height: 80px;
	width: 80px;
	border-radius: 10px;
	transition: all 300ms;
}

</style>
