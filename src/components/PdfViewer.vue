<script setup lang="ts">
import { VPdfViewer } from '@vue-pdf-viewer/viewer';
</script>
<template>
  <VPdfViewer
    v-bind="$attrs"
    src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" />
</template>
