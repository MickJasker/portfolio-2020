import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';
import SearchTransitionController from './SearchTransitionController';

// @vue/component
export default {
  name: 'Search',
  extends: ScrollComponentMixin,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new SearchTransitionController(this);
      this.isReady();
    },
  },
};
