import { AbstractPageTransitionComponent } from 'vue-transition-component';
import ArticleTransitionController from './ArticleTransitionController';
import Hero from '../../component/Hero';
import ArticleStatistics from '../../component/ArticleStatistics';

// @vue/component
export default {
  name: 'Article',
  components: {
    Hero,
    ArticleStatistics,
  },
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArticleTransitionController(this);
      this.isReady();
    },
  },
};
