import fs from "fs";
import data from "./src/data/churrerias.js";

const simplified = data.map(r => ({
    "title": r.title,
    "price": setPrice(r.price),
    "category": r.categoryName,
    "street": r.street,
    "website": r.website,
    "phone": r.phone,
    "score": r.totalScore,
    "url": r.url,
    "imageUrl": r.imageUrl

}))

function setPrice(price) {
    let newPrice = "";

    if (price === null) return "Desconocido";
    if (typeof price !== "string") return "Desconocido";

    const symbolMap = {
        "$": "€",
        "$$": "€€",
        "$$$": "€€€",
        "$$$$": "€€€€"
    }

    if (symbolMap[price]) return symbolMap[price];

    if (price.includes("-")) {
        let maxValue = Number(price.split("-")[1]);
        if (Number.isNaN(maxValue)) return "Desconocido";

        if (maxValue <= 10) return "€";
        if (maxValue <= 20) return "€€";
        if (maxValue <= 40) return "€€€";
        if (maxValue > 40) return "€€€";


    }
    return "Desconocido";

}

fs.writeFileSync("output.json", JSON.stringify(simplified, null, 2));