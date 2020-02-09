import { AbstractPageTransitionComponent } from 'vue-transition-component';
import PortfolioOverviewTransitionController from './PortfolioOverviewTransitionController';
import Hero from '../../component/Hero';
import Search from '../../component/Search';
import ArticleList from '../../component/ArticleList';
import data from '../../data/data.json';

// @vue/component
export default {
  name: 'PortfolioOverview',
  components: {
    Hero,
    Search,
    ArticleList,
  },
  extends: AbstractPageTransitionComponent,
  data() {
    return {
      data,
    };
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PortfolioOverviewTransitionController(this);
      this.isReady();
    },
  },
};
