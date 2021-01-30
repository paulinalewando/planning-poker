<template>
  <img class="app-logo" alt="Planning poker" src="/app-logo.svg" />
</template>

<style>
.app-logo {
  height: 100px;
  width: 100px;
  transform: rotateY(340deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
