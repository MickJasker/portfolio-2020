import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';
import IntroductionBlockTransitionController from './IntroductionBlockTransitionController';
import ColorImage from '../../atom/ColorImage';

// @vue/component
export default {
  name: 'IntroductionBlock',
  components: {
    ColorImage,
  },
  extends: ScrollComponentMixin,
  props: {
    heading: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      default: null,
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new IntroductionBlockTransitionController(this);
      this.isReady();
    },
  },
};
