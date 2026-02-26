import { useEffect, useState } from "react";
import data from "../data/groups.json";
import FilterGroup from "./FilterGroup.jsx";
import FilterPrice from "./FilterPrice.jsx";
import RatingFilter from "./RatingFilter.jsx";
import Roulette from "./Roulette.jsx";
import Result from "./ResultCard.jsx";

export default function FiltersApp() {
    const [view, setView] = useState("filters");
    const [type, setType] = useState([]);
    const [price, setPrice] = useState([]);
    const [rating, setRating] = useState(0);
    const [filtered, setFiltered] = useState([]);
    const [place, setPlace] = useState(null);

    useEffect(() => {
        console.log(filtered);
    }, [filtered]);

    const typeMap = {
        "Restaurante": "restaurantes",
        "Bar": "bares",
        "Cafetería": "cafeterias",
        "Churrería": "churrerias",
        "Tapas": "tapas",
        "Taberna y Vino": "taberna_vinos",
        "Pub y Coctelería": "pub_cocteles",
    };
    const ratingThreshold = {
        1: 1.0,
        2: 2.0,
        3: 3.8,
        4: 4.5,
        5: 4.5
    };

    const handleRandomPick = () => {
        console.log("Tipo:", type);
        console.log("Precio:", price);
        console.log("Rating:", rating);

        setView("roulette");
        setFiltered(sortSelection());
    }

    const sortSelection = () => {
        let selectedGroup;
        let filtered;
        if (type.length === 0) {
            // si no hay filtro, devolver todos los locales unidos
            filtered = Object.values(data).flat();
        } else {
            selectedGroup = type.map(t => typeMap[t]);
            filtered = selectedGroup.flatMap(groupKey => {
                return data[groupKey] || [];
            })
        }


        if (price.length > 0) {
            filtered = filtered.filter(place => price.includes(place.price || place.price === "Desconocido"));
        }
        if (rating > 0) {
            filtered = filtered.filter(place => place.score >= ratingThreshold[rating]);
        }
        return filtered;

    }
    return (
        <>


            {view === "filters" && (
                <>
                    <div
                        className="rounded-lg w-full max-w-2xl p-8 bg-amber-50"
                        style={{ boxShadow: "0 25px 50px rgba(0,0,0,0.7)" }}
                    >
                        <h2 className="text-center mb-5 font-serif italic">
                            <span className="text-2xl">⚡</span>¿Dónde quiere ir hoy?
                        </h2>
                        <div className="flex flex-col ">
                            <FilterGroup
                                title="Tipo de local"
                                options={[
                                    "Restaurante",
                                    "Bar",
                                    "Cafetería",
                                    "Tapas",
                                    "Churrería",
                                    "Taberna y Vino",
                                    "Pub y Coctelería",
                                ]}
                                selected={type}
                                setSelected={setType}
                            />
                            <FilterPrice
                                title="Precio"
                                options={["€", "€€", "€€€", "€€€€"]}
                                selected={price}
                                setSelected={setPrice}
                            />
                            <RatingFilter
                                rating={rating}
                                setRating={setRating}
                            />
                            <button
                                className="mt-10 self-center px-12 py-5 rounded-2xl text-xl font-bold
                                    active:scale-95 bg-amber-800 text-white
                                    shadow-2xl shadow-amber-800/30 hover:bg-amber-900 hover:-translate-y-1"
                                onClick={() => handleRandomPick()}
                            >¡Lanzar Sorteo! 🎲
                            </button>
                        </div>
                    </div>
                </>
            )}
            {view === "roulette" && (
                <>
                    <Roulette
                        setView={setView}
                        setPlace={setPlace}
                        filtered={filtered}
                    />
                </>
            )}

            {view === "result" && (
                <>
                    <Result
                        place={place}
                    />
                </>
            )}




        </>
    );
}