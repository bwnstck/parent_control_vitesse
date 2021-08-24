<template>
  <main class="w-[300px] px-4 py-5 text-center text-gray-700">
    <Logo />
    <p class="mt-2 opacity-50">This is the popup page</p>
    <button class="btn mt-2" @click="openOptionsPage">Open Options</button>
    <div class="mt-2">
      <span class="opacity-50">Storage:</span> {{ storageParentControl }}
    </div>
  </main>
</template>

<script setup lang="ts">
import browser from 'webextension-polyfill';
import { storageParentControl } from '~/logic/storage';

function openOptionsPage() {
  browser.runtime.openOptionsPage();
}
</script>
