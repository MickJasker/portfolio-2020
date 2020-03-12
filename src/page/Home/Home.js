import { AbstractPageTransitionComponent } from 'vue-transition-component';
import HomeTransitionController from './HomeTransitionController';
import Hero from '../../component/organisms/Hero';
import ArticleHighlight from '../../component/molecule/ArticleHighlight';
import VideoBlock from '../../component/organisms/VideoBlock';
import SocialLinks from '../../component/molecule/SocialLinks';

// @vue/component
export default {
  name: 'Home',
  components: {
    Hero,
    ArticleHighlight,
    VideoBlock,
    SocialLinks,
  },
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HomeTransitionController(this);
      this.isReady();
    },
  },
};
