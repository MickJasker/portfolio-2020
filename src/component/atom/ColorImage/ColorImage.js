import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';
import ColorImageTransitionController from './ColorImageTransitionController';

// @vue/component
export default {
  name: 'ColorImage',
  extends: ScrollComponentMixin,
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ColorImageTransitionController(this);
      this.isReady();
    },
  },
};
