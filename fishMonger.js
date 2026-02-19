const { boatInventory } = require("./fishingBoat.js")

const inventory = boatInventory();
// fishmonger is going through the boat inventory and filtering out the fish that are too expensive or not in enough quantity. Then it is creating a new array of fish objects with the same properties as the original fish objects, but with the amount property set to 10.
         
// const mongerInventory = (chefPrice) => {
//     const fishForSale = [];

//     for (const fish of inventory) {
//         if (fish.price <= chefPrice && fish.price <= 7.50 && fish.amount >= 10) {
//             fishForSale.push({
//                 id: fish.id,
//                 species: fish.species,
//                 weight: fish.weight,
//                 price: fish.price,
//                 amount: 5
//             });
//         }
//     }
//     return fishForSale;
// }

const mongerInventory = (chefPrice) => {
    return inventory
        .filter(fish => fish.price <= 7.50 && fish.price <= chefPrice && fish.amount >= 10)
        .map(fish => ({
            ...fish,
            amount: 5
        }));
    }

module.exports = {mongerInventory};