import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import HomeTransitionController from './HomeTransitionController';
import Hero from '../../component/organism/Hero';
import ArticleHighlight from '../../component/molecule/ArticleHighlight';
import VideoBlock from '../../component/atom/VideoBlock';
import SocialLinks from '../../component/molecule/SocialLinks';
import IntroductionBlock from '../../component/organism/IntroductionBlock';

// @vue/component
export default {
  name: 'Home',
  components: {
    Hero,
    ArticleHighlight,
    VideoBlock,
    SocialLinks,
    IntroductionBlock,
  },
  extends: AbstractPageScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HomeTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
  },
};
