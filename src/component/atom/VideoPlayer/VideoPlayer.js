import VideoPlayerTransitionController from './VideoPlayerTransitionController';
import VideoBlock from '../VideoBlock';
import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';

// @vue/component
export default {
  name: 'VideoPlayer',
  components: {
    VideoBlock,
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
      this.transitionController = new VideoPlayerTransitionController(this);
      this.isReady();
    },
  },
};
