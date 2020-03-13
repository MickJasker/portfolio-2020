import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';
import VideoBlockTransitionController from './VideoBlockTransitionController';
import PlayButton from '../PlayButton';
import VideoOverlay from '../../molecule/VideoOverlay';

// @vue/component
export default {
  name: 'VideoBlock',
  components: {
    PlayButton,
    VideoOverlay,
  },
  extends: ScrollComponentMixin,
  props: {
    src: {
      type: String,
      required: true,
    },
  },
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
