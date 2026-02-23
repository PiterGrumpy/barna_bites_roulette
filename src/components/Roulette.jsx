import { useRef, useEffect } from "react";
export default function Roulette({ setView, filtered }) {
    const listRef = useRef(null);
    useEffect(() => {
        const list = listRef.current;
        if (!list) return;

        let position = 0;
        const totalHeight = list.scrollHeight / 2; // altura de una lista completa
        let animationId;

        function animate() {
            position -= 8;
            if (position <= -totalHeight) position = 0;

            list.style.transform = `translateY(${position}px)`;
            animationId = requestAnimationFrame(animate);
        }

        animate();

        const stopTimeOut = setTimeout(() => {
            cancelAnimationFrame(animationId);
            setView("result");
        }, 5000);

        return () => {
            cancelAnimationFrame(animationId); // limpiar al desmontar
            clearTimeout(stopTimeOut);
        } 
    }, [filtered]);
    const handleResult = () => {
        setView("result");
        console.log(view);
    }
    return (
        <>
            <div className="my-3 flex flex-col">
                <div className="text-center">
                    <p className="text-2xl font-display font-bold text-amber-900 animate-pulse italic mb-4">Escogiendo el mejor bocado...</p>
                </div>
                <div className="w-80 h-70 overflow-hidden rounded-4xl glass-morphism shadow-2xl relative flex items-center justify-center border-4 border-amber-800/10 self-center">
                    <div ref={listRef} className="space-y-6 py-12 w-full text-center flex flex-col">
                        {filtered.concat(filtered).map((item, index) => (
                            <div
                                key={index}
                                className="text-2xl font-bold text-amber-800/40 truncate"
                            >
                                {item.title}
                            </div>
                        ))}

                    </div>
                    <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-stone-50 via-transparent to-stone-50 opacity-90" />
                    <div className="absolute w-full h-0.5 bg-amber-800/30 top-2/3 -translate-y-1/2" />
                    <div className="absolute w-full h-0.5 bg-amber-800/30 top-1/3 -translate-y-1/2" />
                </div>
                <div className="text-center">
                    <p className="text-stone-400 text-sm mt-4">Filtrado por tus preferencias</p>
                </div>

                {/* <button
                className="mt-10 self-center px-12 py-5 rounded-2xl text-xl font-bold
                                    active:scale-95 bg-amber-800 text-white
                                    shadow-2xl shadow-amber-800/30 hover:bg-amber-900 hover:-translate-y-1"
                onClick={() => handleResult()}
            >¡Mostrar Resultado! 🎲
            </button> */}
            </div>
        </>
    )
}
