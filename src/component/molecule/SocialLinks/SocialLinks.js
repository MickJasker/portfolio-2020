import { AbstractTransitionComponent } from 'vue-transition-component';
import SocialLinksTransitionController from './SocialLinksTransitionController';

// @vue/component
export default {
  name: 'SocialLinks',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new SocialLinksTransitionController(this);
      this.isReady();
      this.transitionIn();
    },
  },
};
