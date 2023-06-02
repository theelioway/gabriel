import { ActionStatusType } from "./db/types"

export const ActionStatusEmpty = {
  ActiveActionStatus: "You have become lazy",
  CompletedActionStatus: "You lack accomplishments",
  FailedActionStatus: "You never fail",
  PotentialActionStatus: "You are lacking potential",
}

export const ActionStatusMessage = {
  Active: { min: "Lazy", max: "Highly Active" },
  Completed: { min: "Unaccomplished", max: "Accomplished" },
  Failed: { min: "Successful", max: "Failure" },
  Potential: { min: "lacking Potential", max: "have great Potential" },
}

const empties = Object.fromEntries(
  ActionStatusType.map((actionType) => [
    actionType.slice(0, -12),
    ActionStatusEmpty[actionType],
  ])
)

const filters = Object.fromEntries(
  ActionStatusType.map((actionType) => [
    actionType.slice(0, -12),
    (list) => list.filter((T) => T.actionStatus === actionType),
  ])
)

const lifeSigns = (list) => {
  return Object.fromEntries(
    Object.keys(ActionStatusEmpty).map((actionType) => [
      actionType.slice(0, -12),
      list.filter((T) => T.actionStatus === actionType).length,
    ])
  )
}

export const appThing = {
  type: "Thing",
  engage: {
    fields: ["name", "description", "actionStatus"],
    optimize: {
      lifeSigns: lifeSigns,
      lifeStatus: (list) => {
        let signs = lifeSigns(list)
        let priorities = Object.entries(signs).sort(
          (prev, next) => prev[1] - next[1]
        )
        let min = priorities.shift()
        let max = priorities.pop()
        return `You are ${ActionStatusMessage[min[0]].min} and ${
          ActionStatusMessage[max[0]].max
        }`
      },
    },
  },
  list: {
    types: ["Action"],
    filters: {
      All: (list) => list,
      Action: (list) => list,
      ...filters,
    },
    filtered: { field: "type", value: "Action" },
    empties: {
      All: "You may well be dead",
      ...empties,
    },
  },
}
