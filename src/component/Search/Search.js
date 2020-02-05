import { AbstractTransitionComponent } from 'vue-transition-component';
import SearchTransitionController from './SearchTransitionController';

// @vue/component
export default {
  name: 'Search',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new SearchTransitionController(this);
      this.isReady();
      this.transitionIn();
    },
  },
};
