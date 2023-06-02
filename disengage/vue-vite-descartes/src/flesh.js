export default {
  Thing: {
    image: { fieldTag: "Img", fieldBeliever: "figure", label: "alternateName" },
    startTime: { fieldTag: "aside", fieldBeliever: "aside" },
    endTime: { fieldTag: "aside", fieldBeliever: "aside" },
    name: { fieldTag: "h1", fieldBeliever: "h1" },
    description: { fieldTag: "pre", fieldBeliever: "pre" },
    // lazy: { fieldTag: "Footer" },
    url: { fieldTag: "A", fieldBeliever: "div" },
  },
  Person: {
    name: { fieldTag: "h1", fieldBeliever: "h1" },
    description: {
      fieldTag: "TextArea",
      fieldBeliever: "form",
      /** @tutorial {fieldPath}
       * Because `description` is a field of `Thing`, it's important
       * to have a path which reflects your goal. In the usage below, where
       * `description` is from `Thing`, it's clear by the fieldPath that
       * changes inside the `Person` component are mutated to the correct field
       * in store.
       */
      fieldPath: "thing.Thing.description",
      rows: 15,
    },
    birthDate: {
      fieldTag: "Input",
      fieldBeliever: "form",
      fieldPath: "thing.Person.birthDate",
      fieldType: "date",
    },
    actionStatus: {
      fieldTag: "Select",
      fieldBeliever: "form",
      fieldPath: "thing.Person.actionStatus",
      fieldEnums: ["Enlightened", "Ignorant"],
    },
  },
  // SomethingNuts: {
  //   alternateName: { fieldTag: "h1", fieldBeliever: "h1" },
  // },
  List: {
    itemListElement: {
      Thing: {
        name: { fieldTag: "h2" },
      },
      Person: {
        name: { fieldTag: "h3" },
        startTime: { fieldTag: "dl" },
        endTime: { fieldTag: "dl" },
        description: { fieldTag: "pre" },
        actionStatus: { fieldTag: "p" },
      },
      // MySpecialPerson: {
      //   inherit: "Person",
      //   image: { fieldTag: "Img" },
      //   name: { fieldTag: "H2" },
      // },
    },
  },
}
