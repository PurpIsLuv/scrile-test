<template>
  <div class="v-autocomplete-spinner">
    <div class="v-autocomplete-spinner__circle">
      <div class="v-autocomplete-spinner__gradient"></div>
      <div class="v-autocomplete-spinner__inner"></div>
    </div>
  </div>
</template>

<style lang="scss">
$gradient--primary: #d6008f;
$gradient--secondary: #ff6647;

.v-autocomplete-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 343px;
  height: 222px;
  background: #fff;
  border-radius: 0px 0px 8px 8px;
  &__circle {
    position: relative;
    width: 72px;
    height: 72px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 100%;
    animation: spin 1s infinite linear;
  }
  &__inner,
  &__gradient {
    position: absolute;
    width: 66px;
    height: 66px;
    transform: translate(-50%, -50%);
  }

  &__inner {
    top: 50%;
    left: 50%;
    background-color: #fff;
    border-radius: 100%;
  }

  &__gradient {
    top: -24px;
    left: 6px;
    background-color: $gradient--primary 0%;
    background-image: -moz-linear-gradient(
      0deg,
      $gradient--primary 0%,
      $gradient--secondary 50%
    );
    background-image: -webkit-linear-gradient(
      0deg,
      $gradient--primary 0%,
      $gradient--secondary 50%
    );
    background-image: linear-gradient(
      0deg,
      $gradient--primary 0%,
      $gradient--secondary 50%
    );
    transform: rotate(-45deg);
  }
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
