import {
  AbstractTransitionController,
  IAbstractTransitionComponent,
} from 'vue-transition-component';
import { TimelineMax } from 'gsap';
import SplitText from '../../vendor/SplitText';

export default class HeadingTransitionController extends AbstractTransitionController {
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
    const heading = new SplitText(parent.$refs.heading).chars;
    timeline.staggerFromTo(
      heading,
      1,
      {
        y: 25,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
      },
      0.025,
    );
    if (parent.$refs.underline) {
      timeline.fromTo(
        parent.$refs.underline,
        1,
        {
          width: 0,
        },
        {
          width: '75%',
        },
        '=-0.5',
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
