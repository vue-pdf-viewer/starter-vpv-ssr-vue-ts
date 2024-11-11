<script setup lang="ts">
	import { onBeforeMount, watch, ref } from "vue";
	import { VPdfViewer, useLicense } from "@vue-pdf-viewer/viewer";

	const vpvRef = ref<InstanceType<typeof VPdfViewer> | null>(null);
	onBeforeMount(() => {
		useLicense({ licenseKey: "your-license-key" });
	});
	watch(
		vpvRef,
		(newVal) => {
			console.log("These are VPV instance properties", Object.keys(newVal));
		},
		{ deep: true }
	);
</script>
<template>
	<VPdfViewer
		v-bind="$attrs"
		ref="vpvRef"
		src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" />
</template>
