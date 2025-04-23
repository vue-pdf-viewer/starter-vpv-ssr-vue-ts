<script setup lang="ts">
	import { onBeforeMount } from "vue";
	import { useLicense } from "@vue-pdf-viewer/viewer";
	const props = defineProps<{
		licenseKey: string;
	}>();
	onBeforeMount(() => {
		useLicense(props.licenseKey);
	});
</script>
<template>
	<slot />
</template>
