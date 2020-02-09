import { AbstractPageTransitionComponent } from 'vue-transition-component';
import ErrorTransitionController from './ErrorTransitionController';

// @vue/component
export default {
  name: 'Error',
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ErrorTransitionController(this);
      this.isReady();
    },
  },
};
