import { AbstractPageTransitionComponent } from 'vue-transition-component';
import HomeTransitionController from './HomeTransitionController';
import Hero from '../../component/Hero';
import ArticleHighlight from '../../component/ArticleHighlight';
import VideoBlock from '../../component/VideoBlock';

// @vue/component
export default {
  name: 'Home',
  components: {
    Hero,
    ArticleHighlight,
    VideoBlock,
  },
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HomeTransitionController(this);
      this.isReady();
    },
  },
};
