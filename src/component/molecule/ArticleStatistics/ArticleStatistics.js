import moment from 'moment';
import ScrollComponentMixin from '../../../mixin/ScrollComponentMixin';
import ArticleStatisticsTransitionController from './ArticleStatisticsTransitionController';

// @vue/component
export default {
  name: 'ArticleStatistics',
  extends: ScrollComponentMixin,
  props: {
    readTime: {
      type: String,
      required: true,
    },
    publishDate: {
      type: Date,
      required: true,
    },
    authors: {
      type: Array,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      return moment(this.publishDate)
        .locale('NL')
        .format('DD MMMM YYYY');
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArticleStatisticsTransitionController(this);
      this.isReady();
    },
  },
};
