import { AbstractTransitionComponent } from 'vue-transition-component';
import SubtitleTransitionController from './SubtitleTransitionController';

// @vue/component
export default {
  name: 'Subtitle',
  extends: AbstractTransitionComponent,
  props: {
    copy: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new SubtitleTransitionController(this);
      this.isReady();
    },
  },
};
