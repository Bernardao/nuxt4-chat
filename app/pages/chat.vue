<template>
  <div class="chat-generate-page">
    <ChatWindow
      :chat
      :messages
      :typing
      @send-message="handleSendMessage"
    />
  </div>
</template>

<script lang="ts" setup>
const { chat, messages, sendMessage } =
  useChat();
const typing = ref(false);
const handleSendMessage = async (
  message: string
) => {
  typing.value = true;
  await sendMessage(message);
  typing.value = false;
};
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
