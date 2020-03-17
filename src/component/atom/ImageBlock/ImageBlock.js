import ImageBlockTransitionController from './ImageBlockTransitionController';
import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';

// @vue/component
export default {
  name: 'ImageBlock',
  extends: ScrollComponentMixin,
  props: {
    src: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: null,
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ImageBlockTransitionController(this);
      this.isReady();
    },
  },
};
