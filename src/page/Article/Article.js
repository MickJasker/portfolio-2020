import { AbstractPageTransitionComponent } from 'vue-transition-component';
import firebase from 'firebase/app';
import ArticleTransitionController from './ArticleTransitionController';
import Hero from '../../component/Hero';
import ArticleStatistics from '../../component/ArticleStatistics';
import 'firebase/firestore';

const db = firebase.firestore();

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
      categoryFrm: null,
      subcategoryFrm: null,
      article: null,
    };
  },
  created() {
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
    async getArticle() {
      const catDoc = await db.doc(`categories/${this.category}`).get();

      this.categoryFrm = catDoc.data();

      const subCatDoc = await db
        .doc(`categories/${this.category}/subcategories/${this.subcategory}`)
        .get();

      this.subcategoryFrm = subCatDoc.data();

      const articleDoc = await db
        .doc(`categories/${this.category}/subcategories/${this.subcategory}/articles/${this.title}`)
        .get();

      this.article = articleDoc.data();

      if (!this.article) {
        this.handleError();
      }
    },
  },
};
