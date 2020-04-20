import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';
import ScrollWrapperTransitionController from './ScrollWrapperTransitionController';

// @vue/component
export default {
  name: 'ScrollWrapper',
  extends: ScrollComponentMixin,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ScrollWrapperTransitionController(this);
      this.isReady();
    },
  },
};
