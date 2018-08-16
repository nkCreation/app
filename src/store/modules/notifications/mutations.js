import { PUSH_NOTIFICATION } from "../../mutation-types";

const mutations = {
  [PUSH_NOTIFICATION](state, data) {
    state.queue.push(data);
  }
};

export default mutations;
