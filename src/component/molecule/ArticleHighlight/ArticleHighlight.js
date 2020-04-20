import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';
import ArticleHighlightTransitionController from './ArticleHighlightTransitionController';

// @vue/component
export default {
  name: 'ArticleHighlight',
  extends: ScrollComponentMixin,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArticleHighlightTransitionController(this);
      this.isReady();
    },
  },
};
