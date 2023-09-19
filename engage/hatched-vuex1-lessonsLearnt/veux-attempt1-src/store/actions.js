export const actionsThing = {
  async updateAction({ commit }) {
    commit("updateMutater", await updateMutater())
  },
  async filteredBy({ commit }) {
    commit("filteredBy", await filteredBy())
    state.Api.list.filtered = value
    console.log(state.Api.list.filtered)
  },
  // toggleAll({ state, commit }, done) {
  //   state.Thing.forEach(todo => {
  //     commit("editTodo", { todo, done })
  //   })
  // },
  // clearCompleted({ state, commit }) {
  //   state.Thing
  //     .filter(todo => todo.done)
  //     .forEach(todo => {
  //       commit("removeTodo", todo)
  //     })
  // },
}
