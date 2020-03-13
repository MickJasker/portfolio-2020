import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';
import ParagraphTransitionController from './ParagraphTransitionController';

// @vue/component
export default {
  name: 'Paragraph',
  extends: ScrollComponentMixin,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ParagraphTransitionController(this);
      this.isReady();
    },
  },
};
