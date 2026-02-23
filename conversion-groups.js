import fs from "node:fs";
import data from "./src/data/data.json" with {type: 'json'};

const groups = {
    restaurantes :  [],
    bares :         [],
    cafeterias:     [],
    churrerias :    [],
    tapas:          [],
    panaderias:     [],
    chiringuitos:   [],
    taberna_vinos:  [],
    pub_cocteles:   [],

}

data.forEach(local => {
    switch(local.generic){
        case "Restaurante":
            groups.restaurantes.push(local);
            break;
        case "Cafetería":
            groups.cafeterias.push(local);
            break;
        case "Churrería":
            groups.churrerias.push(local);
            break;
        case "Panadería":
            groups.panaderias.push(local);
            break;
        case "Tapas":
            groups.tapas.push(local);
            break;
        case "Chiringuito":
            groups.chiringuitos.push(local);
            break;
        case "Taberna y Vino":
            groups.taberna_vinos.push(local);
            break;
        case "Pub y Coctelería":
            groups.pub_cocteles.push(local);
            break;
        case "Bar":
            groups.bares.push(local);
            break;
        default:
    }
     
}) 

// const json = JSON.stringify(groups, null, 2);
// console.log(typeof json, json.length);

const json = JSON.stringify(groups, null, 2);

fs.writeFileSync(
  "./src/data/groups.json",
  json,
  "utf-8"
);

export default groups;