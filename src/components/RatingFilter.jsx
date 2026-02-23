export default function RatingFilter({rating, setRating}) {

    // const [rating, setRating] = useState(0);
    const handleClick = (star) => {
        if (rating === star) {
            setRating(0);
        } else {
            setRating(star);
        }
    }
    return (
        <div>
            <label className="text-xs uppercase font-bold tracking-widest text-stone-400 opacity-80">Valoración</label>
            <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        onClick={() => handleClick(star)}
                        className={`text-2xl transition-colors ${star <= rating ? "text-yellow-400" : "text-gray-300 opacity-20"}`}
                    >
                        ⭐
                    </button>
                ))}

            </div>
        </div>
    );

}