<template>
	<button v-for="item in providers" :title="`Login with ${item.name}`" class="border p-2 h-10 w-16 rounded-md shadow-sm"
		@click="providerLogin(item.name)">
		<component :is="item.component" class="h-full mx-auto"></component>
	</button>
</template>

<script setup>
import Google from '~/assets/icons/google.svg?component'
import Github from '~/assets/icons/github.svg?component'

const { $supabase: supabase } = useNuxtApp()
const emit = defineEmits(['signInWithOAuth'])

const providers = [
	{
		name: 'google',
		component: Google
	},
	{
		name: 'github',
		component: Github
	}
]

async function providerLogin(provider) {
	try {
		emit('signInWithOAuth')
		supabase.auth.signInWithOAuth({ provider })
	} catch (error) {
		console.log(error)
	}
}

</script>