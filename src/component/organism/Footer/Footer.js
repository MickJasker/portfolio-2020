import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';
import FooterTransitionController from './FooterTransitionController';

// @vue/component
export default {
  name: 'Footer',
  extends: ScrollComponentMixin,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new FooterTransitionController(this);
      this.isReady();
    },
  },
};
