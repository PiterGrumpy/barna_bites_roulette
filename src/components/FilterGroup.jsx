export default function FilterGroup({ title, options, selected, setSelected }) {
    // const [selected, setSelected] = useState([]);
    const checkOption = (selection) => {
        const price = ["€", "€€", "€€€", "€€€€"];

        // Si la selección es de tipo precio
        if (price.includes(selection)) {
            // Capturo el índice de la selección
            const index = price.indexOf(selection);
            setSelected(prev => {
                // Si el indice de la selección coincide con el tamaño del array
                if (prev.length === index + 1) {
                    // Devuelve un array desde el principio hasta el índice (precio anterior)
                    return price.slice(0, index);
                } else {
                    //Devuelve un array desde el principio hasta el precio seleccionado
                    return price.slice(0, index + 1);
                }
            })
        } else {
            handleClick(selection);
        }
    }

    const handleClick = (selection) => {
        if (selected.includes(selection)) {
            setSelected(prev => prev.filter(item => item !== selection));
        } else {
            setSelected(prev => [...prev, selection]);
        }
    }
    return (

        <>
            <div className="my-3">
                <label className="text-xs uppercase font-bold tracking-widest text-stone-400 opacity-80 mb-4 block">{title}</label>
                <div className="grid grid-cols-5 gap-2">
                    <button className={`flex-1 py-2 px-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-amber-800/20 
                                       ${selected.length === 0 ? "bg-amber-800 text-white" : "bg-stone-50 text-stone-400 hover:bg-stone-100"}`
                    }
                        onClick={() => setSelected([])}
                    >Todos</button>
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => checkOption(option)}
                            className={`flex-1 py-2 px-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-amber-800/20 
                                       ${selected.includes(option) ? "bg-amber-800 text-white" : "bg-stone-50 text-stone-400 hover:bg-stone-100"}`
                            }>
                            {option}
                        </button>
                    ))}

                </div>
            </div>
        </>

    );

}