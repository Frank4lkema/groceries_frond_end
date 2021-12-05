// import axios from 'axios';

const state = {
  lists: [
    {
      id: 1,
      date: '06-12-2021'
    },
    {
      id: 2,
      date: '08-12-2021'
    },
    {
      id: 3,
      date: '07-12-2021'
    }
  ]
}
const getters = {
  allTodos: (state) => state.todos
}
const actions = {}
const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
