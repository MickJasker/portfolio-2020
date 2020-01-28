import { AbstractTransitionComponent } from 'vue-transition-component';
import PlayButtonTransitionController from './PlayButtonTransitionController';

// @vue/component
export default {
  name: 'PlayButton',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PlayButtonTransitionController(this);
      this.isReady();
    },
  },
};
