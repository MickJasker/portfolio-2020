import { AbstractScrollComponent } from 'vue-transition-component';
import QuoteTransitionController from './QuoteTransitionController';

// @vue/component
export default {
  name: 'Quote',
  extends: AbstractScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new QuoteTransitionController(this);
      this.isReady();
    },
  },
};
