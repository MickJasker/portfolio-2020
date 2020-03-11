import { AbstractScrollComponent } from 'vue-transition-component';
import HeadingTransitionController from './HeadingTransitionController';

// @vue/component
export default {
  name: 'Heading',
  extends: AbstractScrollComponent,
  props: {
    level: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HeadingTransitionController(this);
      this.isReady();
    },
  },
};
