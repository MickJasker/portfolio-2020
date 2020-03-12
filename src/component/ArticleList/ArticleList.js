import { AbstractScrollComponent } from 'vue-transition-component';
import ArticleListTransitionController from './ArticleListTransitionController';
import Heading from '../Heading';

// @vue/component
export default {
  name: 'ArticleList',
  components: {
    Heading,
  },
  extends: AbstractScrollComponent,
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
