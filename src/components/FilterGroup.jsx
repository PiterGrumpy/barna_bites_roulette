export default function FilterGroup({ title, options, selected, setSelected }) {

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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    <button className={`flex-1 py-2 px-2 rounded-xl text-xs sm:text-sm md:text-base transition-all shadow-lg shadow-amber-800/20 
                                       ${selected.length === 0 ? "bg-amber-800 text-white" : "bg-stone-50 text-stone-400 hover:bg-stone-100"}`
                    }
                        onClick={() => setSelected([])}
                    >Todos</button>
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleClick(option)}
                            className={`flex-1 py-2 px-2 rounded-xl text-xs sm:text-sm md:text-base transition-all shadow-lg shadow-amber-800/20 
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