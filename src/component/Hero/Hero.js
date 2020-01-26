import { AbstractTransitionComponent } from 'vue-transition-component';
import HeroTransitionController from './HeroTransitionController';
import Subtitle from '../Subtitle';

// @vue/component
export default {
  name: 'Hero',
  components: {
    Subtitle,
  },
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HeroTransitionController(this);
      this.isReady();
    },
  },
};
