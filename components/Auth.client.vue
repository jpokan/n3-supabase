<template>
	<div class="mx-auto flex flex-col gap-2">
		<button @click="$supabase.auth.signInWithOAuth({ provider: 'google' })">Login with Google</button>
		<button @click="$supabase.auth.signInWithOAuth({ provider: 'github' })">Login with Github</button>
		<button @click="$supabase.auth.signOut()">Logout</button>
		<NuxtLink to="dashboard">dash</NuxtLink>
	</div>
</template>

<script setup lang="ts">
</script>

<style>
.gap-2 {
	gap: 0.3rem;
}

.flex-col {
	flex-direction: column;
}

.flex {
	display: flex;
}

.mx-auto {
	margin-right: auto;
	margin-right: auto;
}
</style>