import {
  AbstractPageScrollComponent,
  getEventBus,
  ADD_COMPONENTS,
} from 'vue-transition-component';
import ArticlePageTransitionController from './ArticlePageTransitionController';
import data from '../../data/data.json';
import Hero from '../../component/Hero';
import ArticleStatistics from '../../component/ArticleStatistics';
import ArticleList from '../../component/ArticleList';
import ScrollWrapper from '../../component/ScrollWrapper';

// @vue/component
export default {
  name: 'ArticlePage',
  components: {
    Hero,
    ArticleStatistics,
    ArticleList,
    ScrollWrapper,
  },
  extends: AbstractPageScrollComponent,
  props: {
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      data,
      categoryFrm: null,
      subcategoryFrm: null,
      article: null,
    };
  },
  created() {
    this.getArticle();

    // this.$nextTick(() => {
    //   const components = this.$refs;
    //
    //   // eslint-disable-next-line guard-for-in,no-restricted-syntax
    //   for (const component in components) {
    //     if (component.includes('componentWrapper')) {
    //       const componentNameArr = component.split('');
    //       const index = Number(componentNameArr[componentNameArr.length - 1]);
    //       this.$refs[`component${index}`][0].transitionIn();
    //     }
    //   }
    // });
  },
  mounted() {

  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArticlePageTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
    handleError() {
      setTimeout(() => {
        this.$router.push('/404');
        console.error('Article could not be found');
      });
    },
    getArticle() {
      this.categoryFrm = this.data.portfolio.categories.find(
        cat => cat.title.toLowerCase() === this.category.split('-').join(' '),
      );

      if (this.categoryFrm) {
        this.subcategoryFrm = this.categoryFrm.subcategories.find(
          subCat => subCat.title.toLowerCase() === this.subcategory.split('-').join(' '),
        );
        if (!this.subcategoryFrm) {
          this.handleError();
        }
      } else {
        this.handleError();
      }

      if (this.subcategoryFrm.articles) {
        this.article = this.subcategoryFrm.articles.find(
          art => art.title.toLowerCase() === this.title.split('-').join(' '),
        );
      } else {
        this.handleError();
      }

      if (!this.article) {
        this.handleError();
      }
    },
  },
};
