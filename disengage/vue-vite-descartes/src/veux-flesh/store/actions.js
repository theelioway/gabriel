
export const enum ACTIONS { OPTIMIZE = 'OPTIMIZE', };
const actionsThing = {
  [ACTIONS.OPTIMIZE]({ state, commit }, { path, val })) {
    fetch('https://fakerapi.it/api/v1/texts?_quantity=1')
      .then((res) => res.json())
      .then(({ data }) => {
        const newTodo: Todo = {
          title: data[0].title,
          id: Math.random(),
          note: data[0].content,
        };
        store.commit(ACTIONS.OPTIMIZE, newTodo);
      });
  },
};

export const actionsThing = {
  // async updateAction({ commit }) {
  //   commit("mut", await updateMutater())
  // },
  // async filteredBy({ commit }) {
  //   commit("filteredBy", await filteredBy())
  //   state.this.list.filtered = value
  //   console.log(state.Api.list.filtered)
  // },
  // toggleAll({ state, commit }, done) {
  //   state.Thing.forEach(todo => {
  //     commit("editTodo", { todo, done })
  //   })
  // },
  // optimize({ state, commit }, ) {
  //   state.Thing
  //     .filter(todo => todo.done)
  //     .forEach(todo => {
  //       commit("removeTodo", todo)
  //     })
  // },
}
