<template>
  <UContainer class="page-container">
    <h1 class="title">
      Nuxt 4 with Nuxt UI
    </h1>
    <UButton
      to="/chat"
      class="button"
      color="primary"
    >
      Start Chat Primary
    </UButton>
    <UButton
      to="/chat"
      class="button"
      color="secondary"
    >
      Start Chat Secondary
    </UButton>
    <UButton
      to="/chat"
      class="button"
      color="info"
    >
      Start Chat Info
    </UButton>
    <UButton
      to="/chat"
      class="button"
      color="success"
    >
      Start Chat Sucess
    </UButton>
    <UButton
      to="/chat"
      class="button"
      color="error"
    >
      Start Chat Error
    </UButton>
    <UButton
      to="/chat"
      class="button"
      color="warning"
    >
      Start Chat Warning
    </UButton>
  </UContainer>
</template>

<script lang="ts" setup></script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.title {
  font-size: 2.25rem;
  font-weight: bold;
}
.button {
  margin-top: 1rem;
}
</style>
