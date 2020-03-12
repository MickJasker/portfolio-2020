import { AbstractScrollComponent } from 'vue-transition-component';
import ListTransitionController from './ListTransitionController';

// @vue/component
export default {
  name: 'List',
  extends: AbstractScrollComponent,
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
