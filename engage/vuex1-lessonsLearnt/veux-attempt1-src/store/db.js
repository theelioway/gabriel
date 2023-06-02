import { ActionStatusType } from "./db/types"
import { shallowClone } from "./db/utils"

export const dbThing = {
  type: "Thing",
  name: "Seven Ages",
  url: "https://en.wikipedia.org/wiki/All_the_world%27s_a_stage",
  alternateName: "All the world’s a stage",
  description: "",
  list: [
    {
      type: "Action",
      name: "infant",
      actionStatus: "CompletedActionStatus",
      list: [],
    },
    {
      type: "Action",
      name: "schoolchild",
      actionStatus: "CompletedActionStatus",
      list: [],
    },
    {
      type: "Action",
      name: "lover",
      actionStatus: "ActiveActionStatus",
      list: [
        { type: "Person", name: "Adam" },
        { type: "Person", name: "Eve" },
        { type: "Person", name: "Yourself" },
      ],
    },
    {
      type: "Action",
      name: "soldier",
      actionStatus: "PotentialActionStatus",
      list: [],
    },
    {
      type: "Action",
      name: "justice",
      actionStatus: "PotentialActionStatus",
      list: [
        { type: "MenuItem", name: "Pasta" },
        { type: "MenuItem", name: "Pizza" },
        { type: "MenuItem", name: "Pie" },
      ],
    },
    {
      type: "Action",
      name: "pantaloon",
      actionStatus: "PotentialActionStatus",
    },
    {
      type: "Action",
      name: "sans",
      actionStatus: "PotentialActionStatus",
    },
  ],
}
