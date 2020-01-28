import { AbstractTransitionComponent } from 'vue-transition-component';
import VideoBlockTransitionController from './VideoBlockTransitionController';
import PlayButton from '../PlayButton';
import VideoOverlay from '../VideoOverlay';

// @vue/component
export default {
  name: 'VideoBlock',
  components: {
    PlayButton,
    VideoOverlay,
  },
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new VideoBlockTransitionController(this);
      this.isReady();
    },
    playVideo() {
      this.$refs.videoOverlay.play();
    },
  },
};
