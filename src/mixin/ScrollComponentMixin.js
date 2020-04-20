import VueTypes from 'vue-types';
import { AbstractTransitionComponent } from 'vue-transition-component';

export default {
  name: 'AbstractScrollComponent',
  extends: AbstractTransitionComponent,
  props: {
    addToScrollTracker: VueTypes.bool.def(true),
    transitionInThreshold: VueTypes.number.def(0.25),
    inViewProgressThreshold: VueTypes.number.def(0),
  },
  data() {
    return {
      inView: false,
    };
  },
  created() {
    this.currentViewProgress = 0;
    this.hasEntered = false;
  },
  methods: {
    // This is called when your component is within the view
    enterView() {
      this.inView = true;
      return this.transitionIn().then(() => this.startLoopingAnimation());
    },
    // This is called when you component is out of the view.
    leaveView() {
      this.inView = false;
      this.stopLoopingAnimation();
    },
    // This is called when your component is already passed the view, but you scroll-bar started already passed this point.
    beyondView() {
      if (!this.hasEntered) {
        this.transitionIn();
      }
    },
    // Depending on wheter this is enabled in your config, this will pass you a progress from ``0 to 1``.
    // eslint-disable-next-line no-unused-vars
    inViewProgress(progress) {},
  },
};
