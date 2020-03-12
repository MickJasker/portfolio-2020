import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import ArticleTransitionController from './ArticleTransitionController';
import data from '../../data/data.json';
import Hero from '../../component/organisms/Hero';
import ArticleStatistics from '../../component/molecule/ArticleStatistics';
import ScrollWrapper from '../../component/atom/ScrollWrapper';
import ArticleList from '../../component/molecule/ArticleList/ArticleList';

// @vue/component
export default {
  name: 'Article',
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
      readTime: 0,
    };
  },
  created() {
    this.getArticle();
  },
  mounted() {
    this.$nextTick(() => {
      this.readTime = this.$refs.article.innerText.split(' ').length / 250;
    });
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArticleTransitionController(this);

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
