import { AbstractPageTransitionComponent } from 'vue-transition-component';
import firebase from 'firebase/app';
import PortfolioOverviewTransitionController from './PortfolioOverviewTransitionController';
import 'firebase/firestore';
import Hero from '../../component/Hero';
import Search from '../../component/Search';
import ArticleList from '../../component/ArticleList';

const db = firebase.firestore();

// @vue/component
export default {
  name: 'PortfolioOverview',
  components: {
    Hero,
    Search,
    ArticleList,
  },
  extends: AbstractPageTransitionComponent,
  data() {
    return {
      data: {
        portfolio: {
          categories: [],
        },
      },
      categories: [],
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PortfolioOverviewTransitionController(this);
      this.isReady();
    },
    fetchCategories() {
      return new Promise((resolve, reject) => {
        db.collection('categories')
          .get()
          .then(snap => {
            snap.docs.forEach((category, catIndex) => {
              this.data.portfolio.categories.push(category.data());

              db.collection(`categories/${category.id}/subcategories`)
                .get()
                .then(subcategorySnap => {
                  this.data.portfolio.categories[catIndex].subcategories = subcategorySnap.docs.map(
                    (subcategory, subcatIndex) => {
                      db.collection(
                        `categories/${category.id}/subcategories/${subcategory.id}/articles`,
                      )
                        .get()
                        .then(articles => {
                          this.data.portfolio.categories[catIndex].subcategories[
                            subcatIndex
                          ].articles = articles.docs.map(article => {
                            return article.data();
                          });
                          this.$forceUpdate();
                          resolve();
                        })
                        .catch(err => {
                          reject(err);
                        });

                      return subcategory.data();
                    },
                  );
                })
                .catch(err => {
                  reject(err);
                });
            });
          })
          .catch(err => {
            reject(err);
          });
      });

      // const categoriesSnapshot = await db.collection('categories').get();
      //
      // categoriesSnapshot.docs.forEach((category, index) => {
      //   this.data.portfolio.categories.push(category.data());
      //   console.log(category.data(), index);
      // });
    },
  },
};
