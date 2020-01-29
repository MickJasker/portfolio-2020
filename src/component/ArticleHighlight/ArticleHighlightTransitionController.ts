import {
  AbstractTransitionController,
  IAbstractTransitionComponent,
} from 'vue-transition-component';
import { TimelineMax } from 'gsap';
import SplitText from '../../vendor/SplitText';

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
    const copy = new SplitText(parent.$refs.copy).lines;
    timeline
      .fromTo(
        parent.$refs.title,
        1,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        },
        1.25,
      )
      .staggerFromTo(
        copy,
        1,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        },
        0.1,
        '=-0.2',
      )
      .fromTo(
        parent.$refs.cta,
        1,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        },
        '=-0.2',
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
