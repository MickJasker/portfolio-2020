import { AbstractTransitionComponent } from 'vue-transition-component';
import NavigationMenuTransitionController from './NavigationMenuTransitionController';

// @vue/component
export default {
  name: 'NavigationMenu',
  extends: AbstractTransitionComponent,
  data() {
    return {
      active: false,
    };
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new NavigationMenuTransitionController(this);
      this.isReady();
    },
    handleClick() {
      this.active = !this.active;
    },
    hide() {
      this.active = false;
    },
  },
};
