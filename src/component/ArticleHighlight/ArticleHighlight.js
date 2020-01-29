import { AbstractTransitionComponent } from 'vue-transition-component';
import ArticleHighlightTransitionController from './ArticleHighlightTransitionController';

// @vue/component
export default {
  name: 'ArticleHighlight',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArticleHighlightTransitionController(this);
      this.isReady();
      this.transitionIn();
    },
  },
};
