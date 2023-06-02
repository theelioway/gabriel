<template>
  <form v-if="display ==='form'">
    <button
      type="button"
      v-for="(ActionStatusType) in ActionStatusTypes"
      v-on:click="actionStatus = ActionStatusType"
      :value="thing"
      :class="{ selected: actionStatus === ActionStatusType }"
    >{{ ActionStatusType.slice(0, -12) }}</button>
    <h2>
      <img
        v-bind:src="'/src/assets/'+ listedThing.name + '/apple-touch-icon.png'"
      />{{ listedThing.name }}
    </h2>
  </form>
</template>

<script>
import { mapActions } from 'vuex' //mapState
export const ActionStatusTypes = [
  "ActiveActionStatus",
  "CompletedActionStatus",
  "FailedActionStatus",
  "PotentialActionStatus",
]
import { ref, computed } from "vue"
import { useStore } from "vuex"

export default {
  name: "Engage",
  props: { "thing": Object },
  components: {},
  setup(props) {
    const display = ref('form')
    const store = useStore()
    // const updateStatus = (ActionStatusType) => {
    //   store.dispatch(
    //      'updateMutater',
    //      { ActionStatusType, thing: thing, field: "actionStatus" }
    //    )
    // }
    return {
      display,
      // updateStatus,
      ActionStatusTypes: ActionStatusTypes,

    }
  },
  computed: {
    // ...mapState({
    //   actionStatus: state => thing.actionStatus
    // }),
    listedThing: {
      get () {
        return this.$props.thing
      },
    },
    logo: {
      get () {
        return `../../assets/${this.$props.thing.name}/apple-touch-icon.png`
      },
    },
    actionStatus: {
      get () {
        return this.listedThing.actionStatus
      },
      set (value) {
        this.$store.commit('updateMutater', {
          thing: this.$props.thing,
          field: "actionStatus",
          value,
        })
      }
    }
  }
}
</script>
