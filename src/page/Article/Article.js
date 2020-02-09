import { AbstractPageTransitionComponent } from 'vue-transition-component';
import ArticleTransitionController from './ArticleTransitionController';
import Hero from '../../component/Hero';
import ArticleStatistics from '../../component/ArticleStatistics';
import data from '../../data/data.json';

// @vue/component
export default {
  name: 'Article',
  components: {
    Hero,
    ArticleStatistics,
  },
  extends: AbstractPageTransitionComponent,
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
  mounted() {
    this.getArticle();
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ArticleTransitionController(this);
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
