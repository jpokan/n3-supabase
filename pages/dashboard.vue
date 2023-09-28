<template>
	<div>{{ user }}</div>
</template>

<script setup>
const { $supabase } = useNuxtApp()
const { data: { user } } = await $supabase.auth.getUser()

</script>