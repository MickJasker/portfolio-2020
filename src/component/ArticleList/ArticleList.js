import { AbstractTransitionComponent } from 'vue-transition-component';
import ArticleListTransitionController from './ArticleListTransitionController';

// @vue/component
export default {
  name: 'ArticleList',
  extends: AbstractTransitionComponent,
  props: {
    title: {
      type: String,
      required: true,
    },
    parentCategory: {
      type: String,
      required: true,
    },
    articles: {
      type: Array,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArticleListTransitionController(this);
      this.isReady();
    },
    createRouterString(string) {
      return string
        .toLowerCase()
        .split(' ')
        .join('-');
    },
  },
};
