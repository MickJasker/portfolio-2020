import {
  AbstractTransitionController,
  IAbstractTransitionComponent,
} from 'vue-transition-component';
import { Expo, TimelineMax } from 'gsap';
import SplitText from '../../../vendor/SplitText';

export default class ArticleHighlightTransitionController extends AbstractTransitionController {
  /**
   * Use this method to setup your transition in timeline
   *
   * @protected
   * @method setupTransitionInTimeline
   * @param {TimelineLite | TimelineMax} timeline The transition in timeline
   * @param {IAbstractTransitionComponent} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionInTimeline(
    timeline: TimelineMax,
    parent: IAbstractTransitionComponent,
    id: string,
  ): void {
    timeline
      .fromTo(
        parent.$el,
        2,
        {
          y: 50,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          ease: Expo.easeOut,
        },
      )
      .fromTo(
        parent.$refs.title,
        2,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: Expo.easeOut,
        },
        '=-1',
      )
      .fromTo(
        parent.$refs.copy,
        2,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: Expo.easeOut,
        },
        '=-1.8',
      )
      .fromTo(
        parent.$refs.cta,
        2,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: Expo.easeOut,
        },
        '=-1.8',
      );
  }

  /**
   * Use this method to setup your transition out timeline
   *
   * @protected
   * @method setupTransitionOutTimeline
   * @param {TimelineLite | TimelineMax} timeline The transition in timeline
   * @param {IAbstractTransitionComponent} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionOutTimeline(
    timeline: TimelineMax,
    parent: IAbstractTransitionComponent,
    id: string,
  ): void {}

  /**
   * Use this method to setup your looping timeline
   *
   * @protected
   * @method setupLoopingAnimationTimeline
   * @param {TimelineLite | TimelineMax} timeline The transition in timeline
   * @param {IAbstractTransitionComponent} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupLoopingAnimationTimeline(
    timeline: TimelineMax,
    parent: IAbstractTransitionComponent,
    id: string,
  ): void {}
}
