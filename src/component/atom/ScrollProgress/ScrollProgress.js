import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';
import ScrollProgressTransitionController from './ScrollProgressTransitionController';

// @vue/component
export default {
  name: 'ScrollProgress',
  extends: ScrollComponentMixin,
  data() {
    return {
      progress: 0,
    };
  },
  created() {
    this.progress = this.handleScroll();
    window.addEventListener('scroll', () => {
      this.progress = this.handleScroll();
    });
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ScrollProgressTransitionController(this);
      this.isReady();
    },
    handleScroll() {
      const { scrollHeight, clientHeight } = document.body;

      const scrollableHeight = scrollHeight - clientHeight;
      const currentPosition = window.scrollY;

      let scrollProgress = 0;

      if (scrollableHeight !== 0 && currentPosition !== 0) {
        scrollProgress = (currentPosition / scrollableHeight) * 100;
      }

      return scrollProgress;
    },
  },
};
