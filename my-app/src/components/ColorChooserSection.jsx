export default function ColorChooserSection() {
  const products = [
    { id: 1, title: "NIKE TUNED 1 – MEN SHOES", price: "$129.99", img: "/shoe1.avif" },
    { id: 2, title: "NIKE TUNED 1 – MEN SHOES", price: "$129.99", img: "/sho2.avif" },
    { id: 3, title: "NIKE TUNED 1 – MEN SHOES", price: "$129.99", img: "/sho3.png" },
  ];

  return (
    <section className="mx-auto my-20 w-full max-w-7xl px-6 md:px-12">
      <div className="overflow-hidden rounded-2xl bg-white px-6 py-12 md:px-12 md:py-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-brand-gray">
            Choose Color
          </h2>
          <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-brand-red" />
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.id}
              className="group rounded-xl border border-black/5 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Sale badge */}
              <div className="mb-2 flex justify-end">
                <span className="rounded-full bg-brand-red/90 px-2 py-1 text-[10px] font-bold text-white">
                  Sale!
                </span>
              </div>

              <img
                src={p.img}
                alt={p.title}
                className="mx-auto h-70 w-auto object-contain transition-transform group-hover:scale-[1.03]"
              />

              {/* Stars */}
              <div className="mt-6 text-yellow-400">★★★★★</div>

              <h3 className="mt-2 text-xs font-extrabold tracking-wide text-brand-gray">
                {p.title}
              </h3>
              <div className="mt-1 text-[13px] font-bold text-brand-red">{p.price}</div>

              <button className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-2.5 text-xs font-bold text-white transition-colors hover:opacity-90">
                ADD TO CART
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

