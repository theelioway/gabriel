import { last } from "lodash"
/** @file reduce an [array of fields] into a list of grouped "believers"
* Combines the values from the data record with the corresponding `flesh`
* properties (from App config) into a list of objects; conveniently grouping so
* we can:
*
* 1. correctly render `<ol><li></li><li><ol>` out of two consequentive `li`
* believers...
*
* 2. while rendering `<p></p><p></p>`out of two consequentive `p`
* believers, i.e. without any nesting.
*
* @TODO make: `elioway.org/elioSin/Believers/doc/index.md`
* @outputs
let weAreTheBelievers = [
  ...,
  {
    ol: [
        {
          fieldName: "xrayStatus",
          fieldValue: "SeeThrough",
          fieldBeliever: "ol",
          fieldTag: "li",
        },
        {
          fieldName: "ychromosomeStatus",
          fieldValue: 1,
          fieldBeliever: "ol",
          fieldTag: "li",
        },
      ],
  },
  {
    p: [
      {
        fieldName: "description",
        fieldValue: "A Grand Wizard",
        fieldBeliever: "p",
        fieldTag: "p",
      },
    ],
  },
  ...,
}
 * @usage
 * A typical pattern to render this data packet would be to iterate, in your
 * template rendering middleware, the output of the `thingIntoFlesh()` function,
 * as exampled by `weAreTheBelievers` shown and mentioned above, eg:
 *
 // Array [{ believerTagName: [...fleshedOutFields] },{b:[]},{b:[]},...,]
 weAreTheBelievers.forEach([believerTagName, fieldList] => {

  fieldList.forEach(field => {
  // for each in Array [...fleshedOutFieldObject]
    if (field.fieldTag===believerTagName) {
      // then use a component which renders the value directly into a Believer fieldTag.
      renderComponentBeliever({
        fieldName: field.fieldName,
        fieldValue: field.fieldValue,
        fieldBeliever: believerTagName, // or field.fieldTag 'cos ===
      })

    } else {
      // use a component which renders the value into a shared group of any in its list.
      renderComponentHeadBeliever({
        fieldName: field.fieldName,
        fieldValue: field.fieldValue,
        fieldTag: field.fieldTag,
        fieldBeliever: believerTagName, // or
        fieldList: fieldList
      })
    }

})
/*
 * @file `reduce` to boil the original list into a new, more template friendly,
 * data structure - sometimes called "weAreTheBelievers" - which can be used to
 * simplify child/parent fieldTag grouping (or not) on render. */
export default function thingIntoFlesh(fleshFromBone, valuesBucketFromBone) {
  return Object.entries(fleshFromBone).reduce(
    (reducedToThis, [fieldName, fleshOut]) => {
      const addMeToBelieverList = {
        ...fleshOut,
        fieldName: fieldName,
        fieldValue: valuesBucketFromBone[fieldName],
        fieldBeliever: fleshOut.fieldBeliever,
        fieldTag: fleshOut.fieldTag,
      }
      /** @example: Seriously useful log */
      // console.log({
      //   fieldBeliever: addMeToBelieverList.fieldBeliever,
      //   fieldTag: addMeToBelieverList.fieldTag,
      // })
      // Make a new one if this is the first one
      if (!reducedToThis.length) {
        let newGroup = new Object()
        newGroup.fieldBeliever = addMeToBelieverList.fieldBeliever
        newGroup.believers = [addMeToBelieverList]
        reducedToThis.push(newGroup)
      } else {
        if (
          addMeToBelieverList.fieldBeliever != addMeToBelieverList.fieldTag &&
          addMeToBelieverList.fieldBeliever == last(reducedToThis).fieldBeliever
        ) {
          last(reducedToThis).believers.push(addMeToBelieverList)
        } else {
          let newGroup = new Object()
          newGroup.fieldBeliever = addMeToBelieverList.fieldBeliever
          newGroup.believers = [addMeToBelieverList]
          reducedToThis.push(newGroup)
          // console.log(addMeToBelieverList.fieldBeliever, addMeToBelieverList.fieldTag)
        }
      }
      /** @example: Seriously useful log */
      // console.log({
      //   reducedToThis: reducedToThis.map(obj => [
      //     Object.keys(obj)[0],
      //     obj[Object.keys(obj)[0]].length,
      //   ]),
      //   believerTypeOfPeekReducerArray: Object.keys(last(reducedToThis))[0],
      // })
      return reducedToThis
    },
    new Array(),
  )
}
