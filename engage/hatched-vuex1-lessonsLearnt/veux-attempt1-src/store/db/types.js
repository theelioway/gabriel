import { shallowClone } from "./utils"

export const ActionStatusType = [
  "ActiveActionStatus",
  "CompletedActionStatus",
  "FailedActionStatus",
  "PotentialActionStatus",
]

export default {
  ActionStatusType: ActionStatusType,
}
