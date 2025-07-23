addLayer("f", {
    name: "followers", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#e3dc0fff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "followers", // Name of followers currency
    baseResource: "influence", // Name of resource followers is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // followers currency exponent
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('f', 13)) mult = mult.times(upgradeEffect('f', 13))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "F: Reset for followers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
        upgrades: {
            11:
            {title: "Word of Mouth",
             description: "Double your influence gain.",
             cost: new Decimal(1)},
            12:
            {title: "Flyers",
             description: "Gain more influence based on followers.",
             cost: new Decimal(2),
             effect() {return player[this.layer].points.add(1).pow(0.5)},
             effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }},
             13:
            {title: "Newspaper Ads",
             description: "Gain more followers based on influence.",
             cost: new Decimal(5),
             effect() {return player.points.add(1).pow(0.15)},
             effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }}}}),

addLayer("s", {
    name: "sacrifices", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ac1d1dff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "sacrifices", // Name of sacrifices currency
    baseResource: "followers", // Name of resource sacrifices is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // sacrifices currency exponent
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('s', 13)) mult = mult.times(upgradeEffect('s', 13))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for Sacrifices", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        return true},
        upgrades: {
            11:
            {title: "Dagger",
             description: "Double your follower gain.",
             cost: new Decimal(1)},
            12:
            {title: "Altar",
             description: "Gain more followers based on sacrifices.",
             cost: new Decimal(2),
             effect() {return player[this.layer].points.add(1).pow(0.5)},
             effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }},
             13:
            {title: "Flavor Aid",
             description: "Gain more sacrifices based on followers.",
             cost: new Decimal(5),
             effect() {return player.points.add(1).pow(0.15)},
             effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }},},},
)

