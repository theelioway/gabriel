import packageJson from "../package.json"
import stages from "./thing/stages"

export default {
  // Engage: { ... }, ?
  // List: { itemListElement: [] }, ?
  Thing: {
    name: "7 Ages Thing",
    url: "https://en.wikipedia.org/wiki/All_the_world%27s_a_stage",
    alternateName: "All the world’s a stage",
    image: "/star.png",
    description: stages.engage.join("\n"),
  },
  Person: { actionStatus: "Enlightened", birthDate: Date.now() },

  // TODO: Wrap each item in `https://schema.org/ListItem/ListItem` where { item: what I currently have }
  List: {
    itemListOrder: "Ascending",
    numberOfItems: 3,
    itemListElement: stages.list.map(
      (stage, i) =>
        new Object({
          ListItem: {
            // TODO: Incorporate this into a state managed paginator
            previousItem: null,
            position: i + 1,
            nextItem: null,
            item: {
              Thing: {
                name: stage.name,
                disambiguatingDescription: stage.disambiguatingDescription,
                description: stage.description.join("\n"),
              },
              Person: { age: stage.age },
              engaged: "Thing",
            },
          },
        })
    ),
  },
  engaged: "Thing",
}
