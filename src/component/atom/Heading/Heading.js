import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';
import HeadingTransitionController from './HeadingTransitionController';

// @vue/component
export default {
  name: 'Heading',
  extends: ScrollComponentMixin,
  props: {
    level: {
      type: String,
      required: true,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      id: null,
    };
  },
  mounted() {
    this.setID();
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HeadingTransitionController(this);
      this.isReady();
    },
    setID() {
      const { innerText } = this.$el;

      this.id = innerText;
    },
  },
};
