import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import PortfolioOverviewTransitionController from './PortfolioOverviewTransitionController';
import Hero from '../../component/organism/Hero';
import Search from '../../component/molecule/Search';
import ArticleList from '../../component/molecule/ArticleList';
import data from '../../data/data.json';

// @vue/component
export default {
  name: 'PortfolioOverview',
  components: {
    Hero,
    Search,
    ArticleList,
  },
  extends: AbstractPageScrollComponent,
  data() {
    return {
      data,
    };
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PortfolioOverviewTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
  },
};
