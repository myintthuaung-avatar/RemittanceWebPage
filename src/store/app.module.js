//import router from '../router/index'

const state = {
    userInfo: {
      "id": 0,
      "name": '',
      "role": '',
      "dept_id" : 0,
      "is_admin": false,
    },

    notifications: {
    }


  };
  

  const actions = {

    SetUserInfo({ commit }, _msg) {
      commit('_SetUserInfo', _msg);
    },

    ResetStatesBeforeLogin({ commit}, data ) {
      commit('_ResetStatesBeforeLogin', data);
    },

   
    
    SendMsg({ commit }, _msg) {
      commit('_sendmsg', _msg);
    },

    ServerSendMsgReceived({ commit }, _msg) {
      commit('_ServerSendMsgReceived', _msg);
    },

  };
  
  const mutations = {

    _ResetStatesBeforeLogin(state, _msg) {
      console.log(_msg);
      state.userInfo= {
        "id": 0,
        "name": '',
        "role": '',
        "is_admin": false,
      };
    },

    _SetUserInfo(state, _data) {
      state.userInfo = _data;
    },

    _sendmsg(state, _msg) {
      console.log(state);
      console.log(_msg);
    },

    _ServerSendMsgReceived(state, _msg) {
      console.log(state);
      console.log(_msg);
    },
  
  };
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations
  };