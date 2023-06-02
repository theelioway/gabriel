/**
 * @DevelopersNote. Doing exactly what I want. At first I thought not. My
 * mistake. Lesson learnt. Here's how I tricked myself:
 *
 * I didn't like the way my library had rendered:
 *
 * >> alternateName: { tag: "label", believer: "p" },
 * >> url: { tag: "a", believer: "p" },
 *
 * `a` was rendered inline after `label`, both inside the same `p` ...
 * ...but I had it in mind that the two would be separated. I was planning on it breaking the rule I'd made - the ones
 * which lets us nest inputs in forms and li in ul.
 *
 * It wasn't the code which needed correcting but my mind... and the
 * configuration! Which is very convenient and encouraging when the whole point
 * of this code is to be able to build apps to configuration, with little to no
 * CRUDDY coding.
 *
 * The solution to my problem was the following change to the `flesh` config:
 *
 * >> alternateName: { tag: "label", believer: "p" },
 * >> url: { tag: "a", believer: "a" },
 *
 * and with `a` in the pillar it is certain to stand outside (and out from!) the `p`.
 */
export default {
  Thing: {
    startTime: { tag: "aside", believer: "aside" },
    endTime: { tag: "aside", believer: "aside" },
    name: { tag: "h1", believer: "h1" }, // default
    description: { tag: "pre", believer: "pre" }, // default
    // lazy: { tag: "Footer" }, // default
    alternateName: { tag: "label", believer: "p" },
    url: { tag: "a", believer: "p" }, //<< `a` is rendered inline after `label`, both inside the same `p`
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
