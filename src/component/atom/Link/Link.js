import { AbstractScrollComponent } from 'vue-transition-component';
import LinkTransitionController from './LinkTransitionController';

// @vue/component
export default {
  name: 'Link',
  extends: AbstractScrollComponent,
  props: {
    type: {
      type: String,
      default: 'route',
    },
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new LinkTransitionController(this);
      this.isReady();
    },
  },
};
