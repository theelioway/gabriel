import { ActionStatusType } from "./db/types"
import APP from "./app"

export const gettersThing = {
  ...Object.fromEntries(
    Object.entries(APP.list.filters).map(([actionKey, filter]) => [
      actionKey,
      (state, getters) => filter(state.Thing.list),
    ])
  ),
}

//   // ...
//   getTodoById: (state) => (id) => {
//     return state.todos.find(todo => todo.id === id)
//   }
// store.getters.getTodoById(2)
