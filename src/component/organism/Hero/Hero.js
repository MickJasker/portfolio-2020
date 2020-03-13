import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';
import HeroTransitionController from './HeroTransitionController';
import Subtitle from '../../atom/Subtitle';

// @vue/component
export default {
  name: 'Hero',
  components: {
    Subtitle,
  },
  extends: ScrollComponentMixin,
  props: {
    subtitle: {
      type: String,
      default: null,
    },
    copy: {
      type: String,
      default: null,
    },
    callToActions: {
      type: Array,
      default: null,
    },
    image: {
      type: Object,
      default: null,
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HeroTransitionController(this);
      this.isReady();
    },
  },
};
