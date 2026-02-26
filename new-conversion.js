import fs from "fs";
import data from "./src/data/churrerias.js";

const simplified = data.map(r => ({
    "title": r.title,
    "price": r.price,
    "category": r.category,
    "generic" : setGeneric(r.category),
    "street": r.street,
    "website": r.website,
    "phone": r.phone,
    "score": r.score,
    "url": r.url,
    "imageUrl": r.imageUrl

}))

function setGeneric(category) {

    if (category === null) return "Desconocido";

    if(category.toLowerCase().includes("pizz")) return "Restaurante";

    if(category.toLowerCase().includes("maris")) return "Restaurante";

    if(category.toLowerCase().includes("restaurante")) return "Restaurante";

    if(category.toLowerCase().includes("hambur")) return "Restaurante";

    if(category.toLowerCase().includes("braser")) return "Restaurante";

    if(category.toLowerCase().includes("buffe")) return "Restaurante";

    if(category.toLowerCase().includes(" té ") || category.toLowerCase().includes(" te ")) return "Cafetería";

    if(category.toLowerCase().includes("cafe") || category.toLowerCase().includes("café") || category.toLowerCase().includes("cafè")) return "Cafetería";

    if(category.toLowerCase().includes("churr")) return "Churrería";

    if(category.toLowerCase().includes("panader")) return "Panadería";

    if(category.toLowerCase().includes("tapa")) return "Tapas";

    if(category.toLowerCase().includes("chiring")) return "Chiringuito";

    if(category.toLowerCase().includes("cerve")) return "Taberna y Vino";    

    if(category.toLowerCase().includes("vino")) return "Taberna y Vino";

    if(category.toLowerCase().includes("taberna")) return "Taberna y Vino";

    if(category.toLowerCase().includes("jamon") || category.toLowerCase().includes("jamón")) return "Taberna y Vino";

    if(category.toLowerCase().includes("copa")) return "Pub y Coctelería";

    if(category.toLowerCase().includes("pub")) return "Pub y Coctelería";

     if(category.toLowerCase().includes("coctel") || category.toLowerCase().includes("cóctel")) return "Pub y Coctelería";

    if(category.toLowerCase().includes("lounge")) return "Cafetería";

    if(category.toLowerCase().includes("cafeteria") || category.toLowerCase().includes("cafetería")) return "Cafetería";

    if(category.toLowerCase().includes("bocat")) return "Bar";

    if(category.toLowerCase().includes("bar")) return "Bar";

    return "Desconocido";

}

fs.writeFileSync("output.json", JSON.stringify(simplified, null, 2));