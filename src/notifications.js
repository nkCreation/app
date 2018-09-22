import store from "./store";
import { PUSH_NOTIFICATION } from "./store/mutation-types";
let counter = 0;
const notify = function(params) {
  params.id = counter++;
  store.commit(PUSH_NOTIFICATION, params);
};

export default notify;
