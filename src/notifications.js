import store from "./store";
import { PUSH_NOTIFICATION } from "./store/mutation-types";

let counter = 0;

const defaultOptions = {
  delay: 5000
};

const notify = function(params) {
  let options = Object.create(defaultOptions);
  options = Object.assign(options, params);
  options.id = counter++;
  store.commit(PUSH_NOTIFICATION, options);
};

export default notify;
