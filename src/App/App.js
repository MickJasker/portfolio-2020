import { DeviceStateEvent } from 'seng-device-state-tracker';
import { mapMutations, mapState } from 'vuex';
import Vue from 'vue';
import {
  FlowManager,
  AbstractRegistrableComponent,
  ScrollTrackerPlugin,
} from 'vue-transition-component';
import { SET_DEVICE_STATE } from '../store/module/app/app';
import NavigationMenu from '../component/organisms/NavigationMenu';
import ScrollProgress from '../component/atom/ScrollProgress';

// @vue/component
export default {
  name: 'App',
  components: {
    NavigationMenu,
    ScrollProgress,
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
    Vue.use(ScrollTrackerPlugin);
  },
  methods: {
    ...mapMutations({
      setDeviceState: SET_DEVICE_STATE,
    }),
    handleDeviceStateUpdate(event) {
      this.setDeviceState(event.data.state);
    },
    onLeave(element, done) {
      FlowManager.transitionOut.then(() => FlowManager.done()).then(done);
    },
  },
};
