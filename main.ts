game.splash("Let's calculate the cost of your pizza")
let LABOUR = 0.75
let RENT = 1
let MATERIALS = 0.5
let Diameter = game.askForNumber("How big do you want the diameter to be in inches")
let Subtotal = LABOUR + RENT + MATERIALS * Diameter
game.splash("The cost of the pizza with the diamater of " + Diameter + "is " + Subtotal)
