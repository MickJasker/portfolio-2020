import { AbstractTransitionComponent } from 'vue-transition-component';
import ButtonTransitionController from './ButtonTransitionController';

// @vue/component
export default {
  name: 'Button',
  extends: AbstractTransitionComponent,
  props: {
    to: {
      type: String,
      default: null,
    },
    copy: {
      type: String,
      required: true,
    },
    inverted: Boolean,
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ButtonTransitionController(this);
      this.isReady();
    },
  },
};
