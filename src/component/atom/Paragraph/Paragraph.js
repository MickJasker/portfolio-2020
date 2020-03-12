import { AbstractScrollComponent } from 'vue-transition-component';
import ParagraphTransitionController from './ParagraphTransitionController';

// @vue/component
export default {
  name: 'Paragraph',
  extends: AbstractScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ParagraphTransitionController(this);
      this.isReady();
    },
  },
};
