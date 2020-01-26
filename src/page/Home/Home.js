import { AbstractPageTransitionComponent } from 'vue-transition-component';
import HomeTransitionController from './HomeTransitionController';

// @vue/component
export default {
  name: 'Home',
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HomeTransitionController(this);
      this.isReady();
    },
  },
};
