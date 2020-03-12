import { AbstractScrollComponent } from 'vue-transition-component';
import ScrollWrapperTransitionController from './ScrollWrapperTransitionController';

// @vue/component
export default {
  name: 'ScrollWrapper',
  extends: AbstractScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ScrollWrapperTransitionController(this);
      this.isReady();
    },
  },
};
