export default function TechSpecsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 md:px-12">
      <div className="relative overflow-hidden rounded-2xl bg-[#0f1a24] px-6 py-12 text-white md:px-12 md:py-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">Tech Specs</h2>
          <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-brand-red" />
        </div>

        {/* Shoe image */}
        <div className="relative mx-auto mt-12 max-w-3xl">
          <img
            src="/specification.png"
            alt="Shoe tech specs"
            className="mx-auto w-full max-w-2xl"
          />

          {/* Callouts - top left */}
          <div className="absolute -left-2 top-2 hidden w-64 md:block">
            <div className="h-px w-24 bg-white/40" />
            <div className="mt-4 rounded-lg border border-white/15 bg-white/5 p-4 backdrop-blur">
              <div className="text-xs font-bold tracking-wide text-white/90">
                DYNAMIC FLYWIRE
              </div>
              <p className="mt-2 text-xs text-white/70">
                Lightweight lockdown and adaptive support for rapid movement.
              </p>
            </div>
          </div>

          {/* Callouts - top right */}
          <div className="absolute -right-2 top-4 hidden w-64 md:block">
            <div className="ml-auto h-px w-24 bg-white/40" />
            <div className="mt-4 rounded-lg border border-white/15 bg-white/5 p-4 backdrop-blur">
              <div className="text-xs font-bold tracking-wide text-white/90">
                OPEN-HOLE MESH PANELS
              </div>
              <p className="mt-2 text-xs text-white/70">
                Increased breathability with targeted ventilation.
              </p>
            </div>
          </div>

          {/* Callouts - bottom left */}
          <div className="absolute -left-2 bottom-10 hidden w-64 md:block">
            <div className="h-px w-24 bg-white/40" />
            <div className="mt-4 rounded-lg border border-white/15 bg-white/5 p-4 backdrop-blur">
              <div className="text-xs font-bold tracking-wide text-white/90">
                THE MAX AIR UNIT
              </div>
              <p className="mt-2 text-xs text-white/70">
                Cushioned ride with responsive air pods.
              </p>
            </div>
          </div>

          {/* Callouts - bottom right */}
          <div className="absolute -right-2 bottom-6 hidden w-64 md:block">
            <div className="ml-auto h-px w-24 bg-white/40" />
            <div className="mt-4 rounded-lg border border-white/15 bg-white/5 p-4 backdrop-blur">
              <div className="text-xs font-bold tracking-wide text-white/90">
                NEW CUSHIONING SYSTEM
              </div>
              <p className="mt-2 text-xs text-white/70">
                Next‑gen foam compound for energy return.
              </p>
            </div>
          </div>
        </div>

        {/* Center caption */}
        <div className="mx-auto mt-8 max-w-xl text-center">
          <div className="text-xs font-bold tracking-wide text-white/90">
            HYPERFUSE TECHNOLOGY
          </div>
          <p className="mt-2 text-sm text-white/70">
            Durable yet lightweight upper created with heat‑bonded layers for a seamless fit.
          </p>

          <button className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition-colors hover:opacity-90">
            MORE SPECIFICATIONS
          </button>
        </div>
      </div>
    </section>
  );
}

