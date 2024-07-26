<template>
  <div class="flashcard">
    <div class="flashcard__inner" @click="flip">
      <Transition>
        <div v-if="!flipped" class="flashcard__front">
          <slot name="front"></slot>
        </div>
        <div v-else class="flashcard__back">
          <slot name="back"></slot>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flipped: false,
    };
  },
  methods: {
    flip() {
      this.flipped = !this.flipped;
    },
  },
};
</script>

<style scoped>
/* Add Animation */
.flashcard {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 350px;
  overflow: hidden;
  cursor: pointer;
  background-color: transparent;
  transition: transform 0.5s;
}

.flashcard__front,
.flashcard__back {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.flashcard__front {
  color: #000000;
  line-height: 90%;
  text-transform: uppercase;
  text-shadow: 4px 0 #fff, -4px 0 #fff, 0 4px #fff, 0 -4px #fff, 3px 3px #fff,
    -3px -3px #fff, 3px -3px #fff, -3px 3px #fff;
  font-size: xx-large;
  text-wrap: wrap;
  font-weight: bolder;
  background-color: #fff;
  background-image: linear-gradient(135deg, #bc2e18 25%, transparent 25%),
    linear-gradient(225deg, #bc2e18 25%, transparent 25%),
    linear-gradient(45deg, #bc2e18 25%, transparent 25%),
    linear-gradient(315deg, #bc2e18 25%, #fff 25%);
  background-position: 10px 0, 10px 0, 0 0, 0 0;
  background-size: 10px 10px;
  background-repeat: repeat;
  border: 15px solid #fff;
}

.flashcard__back {
  background-color: #fff;
  color: #bc2e18;
  line-height: 120%;
  padding: 15px;
  white-space: pre-line;
  border: 15px solid #fff;
  -webkit-box-shadow: inset 0px 0px 0px 1px black;
  -moz-box-shadow: inset 0px 0px 0px 1px black;
  box-shadow: inset 0px 0px 0px 1px black;
}

.flashcard__inner {
  width: 100%;
  height: 100%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.v-enter-active {
  transition: transform 0.5s;
}

.v-enter-from,
.v-leave-to {
  transform: rotateY(180deg);
}

/* hover */
.flashcard:hover {
  transform: scale(1.05);
  transform: rotate3d(1, 1, 1, 4deg);
}
</style>
