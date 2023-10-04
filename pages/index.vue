<template>
	<h1 class="text-xl font-bold text-center p-5">Nuxt + Supabase</h1>
	<hr>
	<h2 class="text-lg font-bold text-center p-5">Auth</h2>
	<div class="flex justify-center h-full p-5 gap-2">
		<Loading v-if="loading" />
		<AuthLogout v-else-if="session" @click="signOut" />
		<AuthProviders v-else @signInWithOAuth="loading = true" />
	</div>
	<hr>
</template>

<script setup>
const { $supabase: supabase } = useNuxtApp()
const session = useState('session')
const loading = ref(true)

async function getSession() {
	try {
		loading.value = true
		const { data } = await supabase.auth.getSession()
		session.value = data.session
	} catch (error) {
		console.log(error)
	} finally {
		loading.value = false
	}
}

async function signOut() {
	try {
		loading.value = true
		let { error } = await supabase.auth.signOut()
		if (error) throw error
		session.value = null
	} catch (error) {
		console.log(error)
	} finally {
		loading.value = false
	}
}
onMounted(() => {
	getSession()
})

</script>
