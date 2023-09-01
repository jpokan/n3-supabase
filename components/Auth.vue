<template>
	<div>
		<button @click="client.auth.signInWithOAuth({ provider: 'google' })">Login with Google</button>
		<button @click="client.auth.signOut()">Logout</button>
		<NuxtLink to="dashboard">dash</NuxtLink>
	</div>
</template>

<script setup lang="ts">
</script>
