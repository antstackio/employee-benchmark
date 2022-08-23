import { Store } from "vuex";
import { IStore } from "./src/store/metrics-store.types";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State extends IStore {}

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
