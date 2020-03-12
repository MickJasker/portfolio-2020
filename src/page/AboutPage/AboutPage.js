import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import AboutPageTransitionController from './AboutPageTransitionController';
import ScrollWrapper from '../../component/ScrollWrapper';

// @vue/component
export default {
  name: 'AboutPage',
  components: {
    ScrollWrapper,
  },
  extends: AbstractPageScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new AboutPageTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
  },
};
