<template>
  <pre v-if="bugs">
/**fieldName*/ = {{ fieldName }}
/**fieldValue*/ = {{ fieldValue }}
/**fieldBeliever*/ = {{ fieldBeliever }}
/**fieldTag*/ = {{ fieldTag }}
  </pre>
  <nav v-bind:itemprop="fieldName">
    <label v-else v-if="fieldName" or-is="dt/label/input">
      <br /><strong>{{ fieldName }} </strong>
    </label>
    <nav>
      <!--
        Classic form input pattern.
        1. HTML `input` type is `v-on-ed:toSomeEvent` which is used to change the `input.value`.
      -->
      <button
        type="button"
        v-for="enumeree of tagFullyFleshy.enumerates"
        v-on:click="selectedEnumeree = enumeree"
        :class="{ selected: enumeree === selectedEnumeree }"
      >
        {{ enumeree }}
      </button>
      <!--
        In this version of the pattern, the Select component lines up a row of
        buttons. Clicking a button changes the value stored in state for this
        field, udating whatever enum it represents in the row.
      -->
      <!--
        Notice how sinful we are being! In our Select component, we didn't  even
        use "select" fieldTag. We never will. Our `Select` can be used instead of
        `<select>` replacing a drop down entirely (yuk - who wants to use a
        dropdown!) with a row/column of buttons (which can be shown and
        revealed) For anything like a big list of countries in the world, you
        should engage LIST iterate (i.e. Turn your field's Type into an App like
        `ItemList`)
      -->
    </nav>
    <!--
    Can you make it so EngageType Buttons appear when hovering on the "Engage" spoke of Cicular Menu
    Can you make it so ListItem Buttons appear when hovering on the "List" spoke of Cicular Menu
    -->
  </nav>
</template>

<script>
import { get } from "lodash"
// fieldName="Engaged"
// imgsrc="/icon.png"
// fieldValuePath="bones.engaged"
// :enumerates="mainMenuFromBonesList"
export default {
  props: {
    fieldName: String,
    fieldValue: String,
    fieldBeliever: String,
    fieldTag: String,
    tagFullyFleshy: Object,
  },
  setup(props) {
    const bugs = false
    return { bugs }
  },
  computed: {
    // Pattern continued:
    // 2. `input.value` is `computed` with a local name `selectedEnumeree` This is what we update in step 1 of the pattern.
    selectedEnumeree: {
      get() {
        // e.g. "bone.config.TimsSavedState" (App setting) or path to user data in the `thing` state.
        return get(this.$store.state, this.$props.tagFullyFleshy.fieldValuePath)
      },
      set(value) {
        // 3. The update calls the `set` function in the computer value.
        // This is where we change the data in store.
        // console.log({ mut: this.$props.fieldValuePath, val: value })
        console.log(this.$props.tagFullyFleshy.fieldValuePath)
        this.$store.commit("mut", {
          mut: this.$props.tagFullyFleshy.fieldValuePath,
          val: value,
        })
      },
    },
  },
}
</script>
