import { AbstractTransitionComponent } from 'vue-transition-component';
import moment from 'moment';
import ArticleStatisticsTransitionController from './ArticleStatisticsTransitionController';

// @vue/component
export default {
  name: 'ArticleStatistics',
  extends: AbstractTransitionComponent,
  props: {
    readTime: {
      type: Number,
      required: true,
    },
    publishDate: {
      type: Date,
      required: true,
    },
    author: {
      type: Object,
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
      this.transitionIn();
    },
  },
};
