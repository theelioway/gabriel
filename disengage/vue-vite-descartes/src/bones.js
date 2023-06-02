// let Thing = {},
//   Person = {},
//   Place = {},
//   Action = {},
//   Permission = {},
//   Image = {}
//
// const plainOldExample = {
//   Thing,
//   Person,
//   Place,
//   ItemList: { Action, Permission, Image },
//   SomethingNuts: { appStore: "GameOfLife" },
// }

// elioState
export default {
  Thing: {
    // TODO: computed called like this: ...{ lazy:  (list) => list.length },
  },
  Action: {
    /* nothing to do for action */
  },
  // SomethingNuts: { appStore: "GameOfLife" },
  // https://schema.org/ItemList: TODO: Use properties for sorting/filtering/etc.
  List: {
    itemListOrder: "Enlisted", // "Ascending/Descending/Etc"
    numberOfItems: 0,
    itemListElement: {
      Thing: {
        // TODO: computed=>Vue(computed:[computed]) : lifeStatus: { Component: "summary" },
        empty: {
          Thing: { name: "No Things Found. Curtain closed." },
          Message: { sender: "elioWay" },
        },
        sort: { name: "Asc" },
        // engageIntoApp: "wollstonecraft",
      },
      Action: {
        empty: {
          Thing: { name: "No Actions Found. Find some work." },
          Message: { sender: "elioWay" },
        },
        sort: {
          // TODO Special Sort: actionStatus: list => list.sort(T => T.actionStatus),
          startTime: "Asc",
          endTime: "Asc",
        },
        filters: {
          actionStatus: list => list.filter((l, f) => l.actionStatus === f),
        },
      },
      // MySpecialAction: {
      //   empty: {
      //     Thing: { name: "'No SpecialActions' message." },
      //     Message: { sender: "elioWay" },
      //   },
      //   inherit: "Action",
      //   Component: "MySpecialComponent",
      // },
    },
  },
}
