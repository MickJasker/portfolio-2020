import { AbstractScrollComponent } from 'vue-transition-component';
import FooterTransitionController from './FooterTransitionController';

// @vue/component
export default {
  name: 'Footer',
  extends: AbstractScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new FooterTransitionController(this);
      this.isReady();
    },
  },
};
