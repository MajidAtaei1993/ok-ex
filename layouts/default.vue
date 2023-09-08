<template>
	<v-app>
		<AppHeader />
		<v-main>
			<Nuxt />
		</v-main>
		<AppFooter />
	</v-app>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
	export default {
	components:{
		AppHeader,
		AppFooter
	}
}
</script>