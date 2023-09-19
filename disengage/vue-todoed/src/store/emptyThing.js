export default {
  Engage: {
    Thing: {
      name: "I am your Thing",
      description:
        "For a guide and recipes on how to configure / customize this project, check out the Quickstart.",
      url: "https://gitlab.timitee.theElioWay.com/elioenlightenment/quickstart",
      image: "/star.png",
    },
    engaged: "Thing",
  },
  List: {
    itemListOrder: "Ascending",
    numberOfItems: 0,
    itemListElement: [
      {
        id: 1,
        name: "Thing 1",
        potentialAction: "PotentialActionStatus",
      },
      {
        id: 2,
        name: "Thing 2",
        potentialAction: "PotentialActionStatus",
      },
      {
        id: 3,
        name: "Thing 3",
        potentialAction: "PotentialActionStatus",
      },
      {
        id: 4,
        name: "Failed",
        potentialAction: "FailedActionStatus",
      },
    ],
  },
}
