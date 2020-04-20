import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';
import ListTransitionController from './ListTransitionController';

// @vue/component
export default {
  name: 'List',
  extends: ScrollComponentMixin,
  props: {
    type: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ListTransitionController(this);
      this.isReady();
    },
  },
};
