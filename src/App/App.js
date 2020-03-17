import { DeviceStateEvent } from 'seng-device-state-tracker';
import { mapMutations, mapState } from 'vuex';
import Vue from 'vue';
import {
  FlowManager,
  AbstractRegistrableComponent,
  ScrollTrackerPlugin,
} from 'vue-transition-component';
import { SET_DEVICE_STATE } from '../store/module/app/app';
import NavigationMenu from '../component/organism/NavigationMenu';
import ScrollProgress from '../component/atom/ScrollProgress';
import Footer from '../component/organism/Footer';

// @vue/component
export default {
  name: 'App',
  components: {
    NavigationMenu,
    ScrollProgress,
    Footer,
  },
  extends: AbstractRegistrableComponent,
  computed: {
    ...mapState({
      deviceState: state => state.app.deviceState,
    }),
  },
  created() {
    this.$deviceStateTracker.addEventListener(
      DeviceStateEvent.STATE_UPDATE,
      this.handleDeviceStateUpdate,
    );
    this.setDeviceState(this.$deviceStateTracker.currentState);
  },
  mounted() {
    Vue.use(ScrollTrackerPlugin, {
      config: {
        setDebugLabel: process.env.NODE_ENV !== 'production',
        transitionInThreshold: 1,
      },
    });
  },
  methods: {
    ...mapMutations({
      setDeviceState: SET_DEVICE_STATE,
    }),
    handleDeviceStateUpdate(event) {
      this.setDeviceState(event.data.state);
    },
    onLeave(element, done) {
      window.scrollTo(0, 0);
      document.title = `Portfolio Mick Jasker - ${this.$route.name}`;
      FlowManager.transitionOut.then(() => FlowManager.done()).then(done);
    },
  },
};
