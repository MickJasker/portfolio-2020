import { AbstractTransitionComponent } from 'vue-transition-component';
import VideoBlockTransitionController from './VideoBlockTransitionController';
import PlayButton from '../../atom/PlayButton';
import VideoOverlay from '../../molecule/VideoOverlay';

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
      this.transitionIn();
    },
    playVideo() {
      this.$refs.videoOverlay.play();
    },
  },
};
