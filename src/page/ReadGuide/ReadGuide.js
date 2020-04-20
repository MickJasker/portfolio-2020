import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import ReadGuideTransitionController from './ReadGuideTransitionController';
import Hero from '../../component/organism/Hero/Hero';

// @vue/component
export default {
  name: 'ReadGuide',
  components: {
    Hero,
  },
  extends: AbstractPageScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ReadGuideTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
  },
};
