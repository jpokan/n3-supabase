<template>
	<div>
		<button @click="$supabase.auth.signInWithOAuth({ provider: 'google' })">Login with Google</button>
		<button @click="$supabase.auth.signOut()">Logout</button>
		<NuxtLink to="dashboard">dash</NuxtLink>
	</div>
</template>

<script setup lang="ts">
const { $supabase } = useNuxtApp()

console.log($supabase)
</script>
