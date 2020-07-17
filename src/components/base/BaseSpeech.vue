<template>
  <button type="button" :style="myStyle" class="btn btn-default" :title="message" @click="speak()">
    <img :src="imageAudio" alt="audio" width="50px"/>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    message: { type: String, required: true },
    colorSpeaking: { type: String, required: false, default: "red" },
    autospeak: { type: Boolean, required: false, default: false }
  },
  data() {
    return {
      myStyle: { backgroundColor: "" },
      imageAudio: require('../../assets/audio.png')
    };
  },
  mounted: function() {
    if (this.autospeak) {
      this.speak();
    }
  },
  methods: {
    speak() {
      let audio = new SpeechSynthesisUtterance(this.message);
      window.speechSynthesis.speak(audio);

      this.myStyle.backgroundColor = this.colorSpeaking;

      let self = this;

      audio.onstart = function() {
        self.imageAudio = require('../../assets/audio-on.png')
        self.$emit("startspeak", self.message);
      };

      audio.onend = function(event) {
        self.myStyle.backgroundColor = "";
        self.imageAudio = require('../../assets/audio.png')
        self.$emit("endspeak", event);
      };
    }
  }
};
</script>

<style>
.on {
  background-color: red;
}
</style>