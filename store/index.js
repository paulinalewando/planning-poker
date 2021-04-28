export const state = () => ({
  user: {},
  task: {},
  users: []
})

export const getters = {
  vouters: ({ users }) => users.filter(({ admin }) => !admin),
  admin: ({ users }) => users.find(({ admin }) => admin)
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  SOCKET_newTask(state, msg) {
    state.task = msg
  },
  SOCKET_clearTask(state) {
    state.task = {}
  },
  SOCKET_updateUsers(state, users) {
    state.users = users
  },
  SOCKET_updateUser(state, user) {
    state.user = user
  },
  clearData(state) {
    state.user = {}
    state.task = {}
    state.users = []
  },
  setActiveStatus(state, active) {
    state.user.active = active
  }
}

export const actions = {
  socketEmit(_, { action, payload }) {
    return this._vm.$socket.emit(action, payload)
  },
  createTask({ dispatch, state }, msg) {
    const { user } = state
    const payload = {
      msg,
      id: user.id
    }

    dispatch('socketEmit', {
      action: 'createTask',
      payload
    })
  },
  resetTask({ dispatch, state }) {
    const { user } = state
    const payload = {
      id: user.id
    }

    dispatch('socketEmit', {
      action: 'resetTask',
      payload
    })
  },
  joinRoom({ dispatch, state }) {
    const { user } = state

    dispatch('socketEmit', {
      action: 'joinRoom',
      payload: user
    })
  },
  leftRoom({ commit, dispatch }) {
    dispatch('socketEmit', {
      action: 'leftChat',
      payload: null
    })

    commit('clearData')
  },
  setActiveStatus({ dispatch, commit, state }, active) {
    commit('setActiveStatus', active)
    const { user } = state
    dispatch('socketEmit', {
      action: 'setActiveStatus',
      payload: user
    })
  },
  async createUser({ commit, dispatch }, user) {
    const { id } = await dispatch('socketEmit', {
      action: 'createUser',
      payload: user
    })

    commit('setUser', { id, active: true, ...user })
  },
  SOCKET_reconnect({ state, dispatch }) {
    const { user } = state
    if (Object.values(user).length) {
      const { id, ...userInfo } = user
      dispatch('createUser', userInfo)
      dispatch('joinRoom')
    }
  }
}
