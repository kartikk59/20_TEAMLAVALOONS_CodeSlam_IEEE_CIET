export default function OverviewSection() {
  return (
    <section className="mx-auto my-10 w-full max-w-7xl px-6 md:px-12">
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white md:grid-cols-2">
        {/* Left: content */}
        <div className="px-8 py-12 md:px-12 md:py-16">
          <h2 className="text-4xl font-extrabold text-brand-gray">Overview</h2>
          <div className="mt-3 h-1.5 w-24 rounded-full bg-brand-red" />
          <p className="mt-8 text-sm leading-7 text-gray-500">
            Lorem Khaled Ipsum is a major key to success. The key to more success is to
            have a lot of pillows. They will try to close the door on you, just open it.
            I&apos;m giving you cloth talk, cloth. Special cloth alert, cut from a
            special cloth. A major key, never panic.
          </p>
          <p className="mt-5 text-sm leading-7 text-gray-500">
            They will try to close the door on you, just open it. Special cloth alert.
            Every chance I get, I water the plants, Lion! How&apos;s business? Boomin.
            You should never complain, complaining is a weak emotion, you got life, we
            breathing, we blessed. Learning is cool, but knowing is better.
          </p>
          <button className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition-colors hover:opacity-90">
            FIND OUT MORE
          </button>
        </div>
        {/* Right: image */}
        <div className="relative min-h-[320px] md:min-h-[520px]">
          <img
            src="/overview.jpg"
            alt="Overview visual"
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}

