const { mongerInventory } = require("./fishMonger.js")
 
// const fishMenu = (chefPrice) => {
//     const fishAvailable = mongerInventory(chefPrice);
//     let fishMenuHTML = '';
//     for (const fish of fishAvailable) {
//         fishMenuHTML += `
//             <h1>Menu</h1>
//                 <article class="menu">
//                     <h2>${fish.species}</h2>
//                         <section class="menu__item">${fish.species} Soup</section>
//                         <section class="menu__item">${fish.species} Sandwich</section>
//                         <section class="menu__item">Grilled ${fish.species}</section>
//                 </article>`;
//     }
//     return fishMenuHTML;
// };

const fishMenu = (chefPrice) => {
    const fishAvailable = mongerInventory(chefPrice);

    const menuItems = fishAvailable.map(fish => `
                <h2>${fish.species}</h2>
                <section class="menu__item">${fish.species} Soup</section>
                <section class="menu__item">${fish.species} Sandwich</section>
                <section class="menu__item">Grilled ${fish.species}</section>
            `)
        .join('');
            
    return `            <h1>Menu</h1> 

            <article class="menu">${menuItems}</article>`;
};

module.exports = {fishMenu};