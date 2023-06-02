export default {
  Thing: {
    startTime: { tag: "aside", believer: "aside" },
    endTime: { tag: "aside", believer: "aside" },
    name: { tag: "h1", believer: "h1" }, // default
    description: { tag: "pre", believer: "pre" }, // default
    // lazy: { tag: "Footer" }, // default
    alternateName: { tag: "label", believer: "p" },
    url: { tag: "a", believer: "a" }, //<< `a` is rendered in the pillar after `p` and not inside it like `label`
    image: { tag: "img", believer: "img", label: "alternateName" },
  },
  Action: {
    name: { tag: "input", believer: "h1" }, // default
    description: { tag: "input", believer: "form" },
    startTime: { tag: "input", believer: "form" },
    endTime: { tag: "input", believer: "form" },
    actionStatus: { tag: "input", believer: "form" },
  },
  ItemList: {
    itemListElement: {
      Thing: {
        name: { tag: "H2" }, // default
      },
      Action: {
        startTime: { tag: "aside" },
        endTime: { tag: "aside" },
        description: { tag: "Blockquote" },
        name: { tag: "H2" },
        actionStatus: { tag: "actionStatus" },
      },
      MySpecialAction: {
        inherit: "Action",
        image: { tag: "Img" },
        name: { tag: "H2" },
      },
    },
  },
}
