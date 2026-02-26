
export default function Result({ place }) {
    return (
        <div className="max-w-3xl animate-in zoom-in-95 fade-in duration-500">
            <div className="bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden border border-stone-100 flex flex-col md:flex-row min-h-125">
                {/* Image Section */}
                <div className="md:w-[45%] bg-stone-100 relative group overflow-hidden">
                    <img
                        src={place.imageUrl}
                        alt={place.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 to-transparent opacity-60" />
                    <div className="absolute bottom-8 left-8">
                        <span className="bg-amber-800 text-white text-[10px] uppercase font-black tracking-[0.2em] px-4 py-2 rounded-full">
                            Resultado Final
                        </span>
                    </div>
                </div>

                {/* Data Section */}
                <div className="p-10 md:p-14 flex-1 flex flex-col justify-between bg-white">
                    <div>
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-3 py-1 bg-amber-50 text-amber-800 text-[10px] font-black uppercase tracking-widest rounded-lg border border-amber-100">
                                        {place.category}
                                    </span>
                                    <span className="px-3 py-1 bg-stone-50 text-stone-500 text-[10px] font-black uppercase tracking-widest rounded-lg border border-stone-100">
                                        {place.price}
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 leading-tight">
                                    {place.title}
                                </h2>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-amber-50 rounded-2xl border border-amber-100 min-w-17.5">
                                <span className="text-amber-500 text-2xl">★</span>
                                <span className="text-stone-900 font-bold text-xl leading-none mt-1">{place.score}</span>
                            </div>
                        </div>

                        <div className="mt-10 space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 shrink-0 bg-stone-50 rounded-2xl flex items-center justify-center text-amber-800 border border-stone-100">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <p className="text-[10px] text-stone-400 font-black uppercase tracking-[0.2em] mb-1">Dónde encontrarlo</p>
                                    <p className="text-lg text-stone-700 font-medium leading-snug">{place.street}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 shrink-0 bg-stone-50 rounded-2xl flex items-center justify-center text-amber-800 border border-stone-100">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <p className="text-[10px] text-stone-400 font-black uppercase tracking-[0.2em] mb-1">Reservar mesa</p>
                                    <a href={`tel:${place.phone}`} className="text-xl text-stone-900 font-bold hover:text-amber-800 transition-colors border-b-2 border-amber-800/10 hover:border-amber-800/40">
                                        {place.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => window.location.reload()}
                            className="px-10 py-5 rounded-2xl bg-stone-100 text-stone-600 font-bold hover:bg-stone-200 transition-all transform active:scale-95"
                        >
                            Nuevo Sorteo
                        </button>
                        <button
                            onClick={() => window.open(`${place.url}`)}
                            className="flex-1 px-10 py-5 rounded-2xl bg-amber-800 text-white font-bold hover:bg-amber-900 shadow-xl shadow-amber-800/30 transition-all transform active:scale-95 flex items-center justify-center gap-3"
                        >
                            <span>Abrir Mapa</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}