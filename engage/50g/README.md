# `50g`. Calibrate your digital scales with every day items

## WTF

I use the skills learned in my profession, skills which started as baby steps in my personal computing life, to enhance my personal life. I use them every day.

I'm a digital nomad. I've been "nomading" for 15 years. Before "digital nomad" was even a term "Mi maleta es mi casa".

Any traveller'll tell you luggage weight matters. I used to keep mine below 15kg: laptop, clothes, cameras, equipment, the bags which hold it all. But them airlines started lowering the cabin allowance and raising the price of checked-in. Greedy ffers.

Now I do 10kg. For everything. My whole life - in a bag. I internally mock them tourists with their 50kg wheelie bins going on a two week holiday to a place I intend to stay a year, with everything on my back like a hermit crab with missing legs, weighing less than their excitement.

I'm obsessed with weight. I know how much everything in my bag weighs. I have 10 SanDiskUltraFitUSB31 thumb drives in a little purse I got in Ecuador which has a herbal design. It weighs 43.1g. That's with 4 little cowrie shells in it as well. I have a DynoVap vaporiser protected in an aluminium tube. 193.85g.

I have two scales. One for my luggage and some digital scales for... herbs... for cooking... (cough(cough)... for checking the weight of any herbs I get... for cooking... (cough)... Very useful for establishing the integrity of your herb dealer.

But those scales occasionally need re-calibrating; and the calibration weight is 50g.

I have a choice. Do I add a bronze 50g weight to my already sparse luggage - perhaps leave those 10 SanDiskUltraFitUSB31 thumb drives in a little purse I got in Ecuador behind?! NO! I need those 10 SanDiskUltraFitUSB31 thumb drives in a little purse I got in Ecuador.

But I'm a coder. And coding is fun.

So I wrote a script. Coders can write this script. Any one can use this scriptm if you follow this simple recipe... to make 50g of calibration weight for your digital scales... for herbs.

# TF

You already know the exact weight of many things in your possession to a gram. On Wikipedia, for instance, you'll find the weight of nearly every coin in circulation. The weight of your AirPods, the charger: all published by Apple. Need I go on? That battery for your digital scales? You can probably find out how much it is supposed to weigh. Do you happen to have any SanDiskUltraFitUSB31 thumb drives? I do?! They weigh 1.3g.

To make 50g, all you need to do is combine those items in a precise way. Which is chore. Unless you are a coder. Because coding is fun.

## Prerequsites

You need to have node and npm on your PC.
YOu need to know how to use a command line on your PC.
If your PC isn't UNIX based, you need to know how to translate these commands to DOS prompt or PowerShell (hehheh - see what I did there?)

# F!

Let's F.

Have to a place where you put useful, non-essential, useful-to-refer-back-to-later scripts. I have a repo called **gabriel**. It contains cheat docs, sample project,things I stole from StackOverflow, things ChatGPT wrote for me, and scripts I wrote - in many runtimes - all "handed to me on a plate" for when I need them. I'm a traveller. Sometimes I don't have the internet.

**gabriel** is my StackTrickle. You should make your own **gabriel**.

The root folder for my collection of useful, non-essential, useful-to-refer-back-to-later scripts is `cd ~/Dev/eliotim/gabriel/engage`

- Open a command line shell.

```shell
cd ~/Dev/eliotim/gabriel/engage
mkdir fiftyG
cd fiftyG
touch fiftyG.js
```

Your digital scales might calibrate with 100g or 25g. Change your script as required.

_WAIT!: If it's anything over 1000g, remember that 1L of water is 1000g + plastic. You probably don't need this script._

- Open `~/Dev/eliotim/gabriel/engage/fiftyG/fiftyG.js` in your favourite code editor.

- Paste the following:

```javascript
// The weight goal.
const GOAL = 50.0 // grammes

// How much PRECISION to seek... smaller takes longer.
const PRECISION = 0.01 // grammes

// The weights of any everyday items you have which can be
// established without weighing them!
const KNOWN_WEIGHTS = {
  EUR1: 2.3,
  EUR2: 3.06,
  EUR5: 3.92,
  EUR10: 4.1,
  EUR20: 5.74,
  EUR50: 7.8,
  EUR100: 7.5,
  EUR200: 8.5,
  USD100: 8.1,
  CAD100: 6.27,
  AUS100: 9,
  AABattery: 23.16,
  AAABattery: 11.1,
  WeightTray: 5.62,
  EarPod: 5.4,
  SanDiskCruzerBlade: 3.33,
  SanDiskUltraFitUSB31: 1.3,
  CorsairFlashVoyager8: 18.76,
  CorsairFlashVoyager64: 15.28,
  MentosMint: 1.3,
}

// Don't make this too long!
let ITEMS_IN_MY_POSSESSION = [
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "SanDiskUltraFitUSB31",
  "EUR1",
  "EUR2",
  "EUR5",
  "EUR10",
  "EUR10",
  "EUR10",
  "EUR20",
  "EUR20",
  "EUR100",
  "EUR100",
  "EUR100",
  "EUR200",
  "EUR200",
  "EarPod",
  "EarPod",
].map((w) => KNOWN_WEIGHTS[w])

/** @TODONT edit the rest (unless you can do better than me) */

// Somewhere to hold our best combos.
let OUT = new Map()

// A function to keep looking for the perfect weight combos.
function findCombinationToGoal(goal, numbers, partial) {
  let n = 0
  // The list of combos being checked can not be undefined.
  partial = partial || []
  let projection = partial.reduce((a, b) => a + b, 0)
  // check if the partial sum equals goal
  if (PRECISION > Math.abs(goal - projection)) {
    let HIT = partial.sort().map((weight) => {
      return Object.keys(KNOWN_WEIGHTS).find(
        (key) => KNOWN_WEIGHTS[key] === weight,
      )
    })
    let lines = HIT.join(" / ")
    OUT.set(lines, projection)
  }
  // Recursively call this function combining different items
  // until you get the list of perfect combos.
  for (var i = 0; i < numbers.length; i++) {
    n = numbers[i]
    remainingNumbers = numbers.slice(i + 1)
    findCombinationToGoal(goal, remainingNumbers, partial.concat([n]))
  }
}

console.log("Please wait. This might take a few moments.")

// Call the function to find the combo!
findCombinationToGoal(GOAL, ITEMS_IN_MY_POSSESSION, [])

// Just show the top 3 results by fewest items meeting
// the precision required.
console.table(
  [...OUT.entries()]
    .sort((a, b) => a[0].split(" / ").length - b[0].split(" / ").length)
    .slice(0, 3),
)
```

- Close the file.

- Run it.

```shell
cd ~/Dev/eliotim/gabriel/engage/fiftyG
node fiftyG.js
```

- Collect the best combo (fewer items is easier).

- Recalibrate your digital herbs.

- Buy herbs.

- Check weight of delivery.

- Tip herb sales people if they have "herb integrity".

- Spread the word if they do not.

## In conclusion

Your coding skills can help you solve much more than commericial problems. And if you don't code: Learn: even if it doesn't make you money it can save you money.
