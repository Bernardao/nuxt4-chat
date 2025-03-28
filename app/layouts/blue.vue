<template>
  <div class="layout-container">
    <main class="main-content">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
.layout-container {
  height: calc(100vh - 4rem);
  background-color: var(--ui-success);
}
.main-content {
  height: 100%;
  margin-top: 4rem;
}
</style>
