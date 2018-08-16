import store from "./store";
import { PUSH_NOTIFICATION } from "./store/mutation-types";

const notify = function(params) {
  store.commit(PUSH_NOTIFICATION, params);
};

export default notify;
