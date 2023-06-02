if (navigator.webdriver) {
  window.localStorage.clear()
}

export const mutationsThing = {
  updateMutater(state, { value, thing, field }) {
    thing[field] = value
  },
  filteredBy(state, { field, value }) {
    state.Api.list.filtered = { field, value }
  },
}
