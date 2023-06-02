<template>
  <component
    :id="thing.id"
    :ActionStatusTypex="thing.potentialAction"
    :is="thing.potentialAction"
    @click-action-status-type="ActiveActionStatus"
  >
    <slot></slot>
  </component>
</template>

<script>
import ActiveActionStatus from "@/components/Enumeration/ActionStatusType/ActiveActionStatus.vue"
import CompletedActionStatus from "@/components/Enumeration/ActionStatusType/CompletedActionStatus.vue"
import FailedActionStatus from "@/components/Enumeration/ActionStatusType/FailedActionStatus.vue"
import PotentialActionStatus from "@/components/Enumeration/ActionStatusType/PotentialActionStatus.vue"

export default {
  components: {
    ActiveActionStatus,
    CompletedActionStatus,
    FailedActionStatus,
    PotentialActionStatus,
  },
  props: { thing: Object, field: String },
  setup(props) {
    const bugs = !true
    return { bugs }
  },
  methods: {
    ActiveActionStatus: function (id, status) {
      console.log(id, status)
      let map = {
        ActiveActionStatus: "CompletedActionStatus",
        CompletedActionStatus: "PotentialActionStatus",
        PotentialActionStatus: "ActiveActionStatus",
      }
      this.$store.commit("EDIT", {
        thingId: id,
        field: "potentialAction",
        val: map[status],
      })
    },
  },
}
</script>
