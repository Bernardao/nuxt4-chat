<template>
  <div class="chat-generate-page">
    <ChatWindow
      :chat
      :messages
      @send-message="sendMessage"
    />
  </div>
</template>

<script lang="ts" setup>
const { chat, messages, sendMessage } =
  useChat();
const appConfig = useAppConfig();
const title = computed(() =>
  chat.value?.title
    ? `${chat.value.title} - ${appConfig.title}`
    : appConfig.title
);
useHead({
  title,
  htmlAttrs: {
    class: "my-really-cool-class",
  },
  // script: [{ innerHTML: "window.analytics = window.analytics || ['hi']" }],
});
</script>

<style></style>
