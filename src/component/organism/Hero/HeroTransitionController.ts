import {
  AbstractTransitionController,
  IAbstractTransitionComponent,
} from 'vue-transition-component';
import { Expo, TimelineMax } from 'gsap';
import SplitText from '../../../vendor/SplitText';

export default class HeroTransitionController extends AbstractTransitionController {
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
    let title;

    if (parent.$refs.title) {
      title = new SplitText(parent.$refs.title).chars;
    }

    // @ts-ignore
    timeline
      .from(parent.$el, 1, {
        opacity: 0,
        ease: Expo.easeOut,
      })
      .from(
        parent.$refs.subtitle,
        1,
        {
          y: 50,
          opacity: 0,
          ease: Expo.easeOut,
        },
        '=-1.8',
      )
      .staggerFrom(
        title,
        1,
        {
          y: '5vw',
          opacity: 0,
          ease: Expo.easeOut,
        },
        0.025,
        '=-1.5',
      );
    if (parent.$refs.copy) {
      timeline.from(
        parent.$refs.copy,
        1,
        {
          y: 10,
          opacity: 0,
          ease: Expo.easeOut,
        },
        '=-1.8',
      );
    }

    if (parent.$refs.cta) {
      timeline.staggerFrom(
        parent.$refs.cta,
        1,
        {
          y: 10,
          opacity: 0,
          ease: Expo.easeOut,
        },
        0.1,
        '=-1.8',
      );
    }
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
