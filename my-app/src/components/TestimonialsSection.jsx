export default function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 md:px-12">
      <div className="overflow-hidden rounded-2xl bg-[#0f1a24] px-6 py-16 text-white md:px-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">Testimonials</h2>
          <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-brand-red" />
        </div>

        {/* Quote card */}
        <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-white/20 bg-white/5 p-8 text-center backdrop-blur">
          <p className="text-xl leading-9 text-white/90 md:text-2xl">
            <span className="text-white/80">“ I’m just</span>{" "}
            <span className="font-extrabold">getting started</span>
            <span className="text-white/80">. Find peace, life is like a</span>{" "}
            <em className="italic">water fall</em>
            <span className="text-white/80">, you’ve</span>{" "}
            <span className="font-extrabold">gotta flow</span>
            <span className="text-white/80">.”</span>
          </p>
        </div>

        {/* Author */}
        <div className="mt-8 text-center">
          <div className="text-xs font-extrabold tracking-wider text-white/90">
            JASON STATHAM
          </div>
          <div className="mt-1 text-[10px] tracking-widest text-white/60">
            TRANSPORTER
          </div>
        </div>
      </div>
    </section>
  );
}

