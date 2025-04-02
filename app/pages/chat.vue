<template>
  <div class="chat-generate-page">
    <ChatWindow :chat :messages @send-message="sendMessage" />
  </div>
</template>

<script lang="ts" setup>
const { chat, messages, sendMessage } = useChat();
useHead({
  title: chat.value.title,
  htmlAttrs: { class: "my-really-cool-class" },
  // script: [{ innerHTML: "window.analytics = window.analytics || ['hi']" }],
});
</script>

<style></style>
