import { AbstractTransitionComponent } from 'vue-transition-component';
import VideoOverlayTransitionController from './VideoOverlayTransitionController';

// @vue/component
export default {
  name: 'VideoOverlay',
  extends: AbstractTransitionComponent,
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      video: {
        duration: 100,
        currentTime: 0,
      },
    };
  },
  computed: {
    progress() {
      const { video } = this;
      return (video.currentTime / video.duration) * 100;
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new VideoOverlayTransitionController(this);
      this.isReady();
    },
    play() {
      this.transitionIn();
      this.$refs.video.play();
      this.video.duration = this.$refs.video.duration;

      this.interval = setInterval(() => {
        this.video.currentTime = this.$refs.video.currentTime;
      }, 10);
    },
    close() {
      this.transitionOut().then(() => {
        this.$refs.video.pause();
        this.$refs.video.currentTime = 0;
        clearInterval(this.interval);
      });
    },
  },
};
