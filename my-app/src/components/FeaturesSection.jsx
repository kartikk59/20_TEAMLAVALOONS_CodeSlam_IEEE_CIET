export default function FeaturesSection() {
  return (
    <section className="mx-auto my-20 w-full max-w-7xl px-6 md:px-12">
      <div className="overflow-hidden rounded-2xl bg-white px-6 py-12 md:px-12 md:py-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-brand-gray">
            Features
          </h2>
          <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-brand-red" />
        </div>

        {/* Content grid */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 md:grid-cols-3">
          {/* Left bullets */}
          <div className="order-2 flex flex-col gap-10 md:order-1">
            <FeatureItem
              icon="✈"
              title="FREE DELIVERY"
              text="Keep your child out of the sun and wind with the adjustable canopy with a peek‑a‑boo window and covered sunroof."
            />
            <FeatureItem
              icon="🛠"
              title="ALL TERRAIN SUITABILITY"
              text="As the inventors of the world's first modular stroller, we set the standards and trends for the rest to follow."
            />
            <FeatureItem
              icon="🛡"
              title="SAFETY AND SECURITY"
              text="Innovative thinking, well thought‑through design and years of experience ensure exceptional performance."
            />
          </div>

          {/* Center image */}
          <div className="order-1 md:order-2">
            <img
              src="/top_view.png"
              alt="Top view shoes"
              className="mx-auto w-full max-w-md drop-shadow-[0_25px_25px_rgba(0,0,0,0.12)]"
            />
            <div className="pointer-events-none -mt-6 h-3 w-64 rounded-full bg-black/10 blur-md md:mx-auto" />
          </div>

          {/* Right bullets */}
          <div className="order-3 flex flex-col gap-10">
            <FeatureItem
              icon="✈"
              title="FREE DELIVERY"
              text="Keep your child out of the sun and wind with the adjustable canopy with a peek‑a‑boo window and covered sunroof."
            />
            <FeatureItem
              icon="🛠"
              title="ALL TERRAIN SUITABILITY"
              text="As the inventors of the world's first modular stroller, we set the standards and trends for the rest to follow."
            />
            <FeatureItem
              icon="🛡"
              title="SAFETY AND SECURITY"
              text="Innovative thinking, well thought‑through design and years of experience ensure exceptional performance."
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition-colors hover:opacity-90">
            VIEW ALL FEATURES
          </button>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, text }) {
  return (
    <div className="grid grid-cols-[40px,1fr] items-start gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-lg">
        <span aria-hidden>{icon}</span>
      </div>
      <div>
        <div className="text-sm font-extrabold tracking-wide text-brand-gray">
          {title}
        </div>
        <p className="mt-2 text-xs leading-6 text-gray-500">{text}</p>
      </div>
    </div>
  );
}

