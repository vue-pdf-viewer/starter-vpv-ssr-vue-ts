<script setup lang="ts">
  import ClientOnly from './components/ClientOnly.vue';
  import type { ToolbarOptions } from '@vue-pdf-viewer/viewer';
  import { defineAsyncComponent, watch, h, ref } from 'vue';
  
  const toolbarOptions: Partial<ToolbarOptions> | false = false

  const VPdfViewerComp = defineAsyncComponent(async () => {
    if (import.meta.env.SSR) return Promise.resolve(h('div', 'Loading...'))
    const module = await import('./components/PdfViewer.vue');
    return module.default;
  })
</script>

<template>
  <div>
    <h1>VPV Starter Toolkit: Vue + SSR + TypeScript</h1>
    <br />
    <h2>Default Toolbar</h2>
    <div>
      <ClientOnly class="pdf-viewer-wrapper">
        <VPdfViewerComp
          src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" />
      </ClientOnly>
    </div>
    <h2>Without Toolbar</h2>
    <div>
      <ClientOnly class="pdf-viewer-wrapper no-toolbar">
        <VPdfViewerComp src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
          :toolbar-options="toolbarOptions" />
      </ClientOnly>
    </div>
    <h2>Mobile</h2>
    <div>
      <ClientOnly class="pdf-viewer-wrapper-mobile">
        <VPdfViewerComp
          src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf" />
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
  .pdf-viewer-wrapper {
    width: 1028px;
    height: 700px;
    margin: 0 auto;
  }

  .pdf-viewer-wrapper-mobile {
    width: 468px;
    height: 700px;
    margin: 0 auto;
  }
  .no-toolbar :deep(.vpv-variables) {
    --vpv-toolbar-size: 0px;
  }
</style>
