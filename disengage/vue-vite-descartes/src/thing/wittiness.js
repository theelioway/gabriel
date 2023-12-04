export const wittiness = {
  ActionStatusType: {
    min: "Lazy",
    max: "Highly Active",
    empty: "You have become lazy",
  },
  CompletedStatusType: {
    min: "Unaccomplished",
    max: "Accomplished",
    empty: "You lack accomplishments",
  },
  FailedStatusType: {
    min: "Successful",
    max: "Failure",
    empty: "You never fail",
  },
  PotentialStatusType: {
    min: "lacking Potential",
    max: "have great Potential",
    empty: "You are lacking potential",
  },
}

export const filterByActionStatus = Object.fromEntries(
  Object.keys(wittiness).map((actionType) => [
    actionType.slice(0, -10),
    (list) => list.filter((T) => T.actionStatus === actionType),
  ]),
)

export const textForEmptyList = Object.fromEntries(
  Object.keys(wittiness).map((actionType) => [
    actionType.slice(0, -12),
    wittiness[actionType].empty,
  ]),
)
