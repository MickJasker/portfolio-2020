import { AbstractPageTransitionComponent } from 'vue-transition-component';
import PortfolioOverviewTransitionController from './PortfolioOverviewTransitionController';
import Hero from '../../component/Hero';
import Search from '../../component/Search';

// @vue/component
export default {
  name: 'PortfolioOverview',
  components: {
    Hero,
    Search,
  },
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PortfolioOverviewTransitionController(this);
      this.isReady();
    },
  },
};
