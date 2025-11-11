import Image from "next/image";
import OverviewSection from "../components/OverviewSection";
import TechSpecsSection from "../components/TechSpecsSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ColorChooserSection from "../components/ColorChooserSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-muted text-brand-gray">
      {/* Top small navbar */}
      <div className="w-full bg-[#0f1a24] text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-2 text-[11px] md:text-xs">
          <div className="flex items-center gap-2">
            <span className="text-white/70">WELCOME VISITOR:</span>
            <a className="font-semibold hover:text-white" href="#">LOGIN</a>
            <span className="text-white/40">/</span>
            <a className="font-semibold hover:text-white" href="#">REGISTER</a>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            <div className="text-white/70">
              LANGUAGES: <span className="font-semibold text-white">EN</span>
            </div>
            <div className="text-white/70">
              CURRENCY: <span className="font-semibold text-white">USD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-white text-sm font-extrabold">
            L
          </span>
          <span className="text-2xl font-extrabold tracking-tight">
            LIFTSUPPLY
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          <a className="hover:text-brand-red" href="#">HOME</a>
          <div className="relative">
            <span className="absolute -top-3 left-6 rounded-full bg-pill-hot px-2 py-0.5 text-[10px] font-bold text-white">
              HOT
            </span>
            <a className="hover:text-brand-red" href="#">SHOP</a>
          </div>
          <div className="relative">
            <span className="absolute -top-3 left-2 rounded-full bg-pill-new px-2 py-0.5 text-[10px] font-bold text-white">
              NEW
            </span>
            <a className="hover:text-brand-red" href="#">CATEGORIES</a>
          </div>
          <a className="hover:text-brand-red" href="#">BLOG</a>
          <a className="hover:text-brand-red" href="#">ABOUT US</a>
          <a className="hover:text-brand-red" href="#">CONTACT</a>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          {/* Search icon */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-brand-gray"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path
              d="M20 20L17 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* Cart */}
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-red">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M6 6h15l-1.5 9h-12L6 6z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="9" cy="20" r="1.5" fill="currentColor" />
                <circle cx="18" cy="20" r="1.5" fill="currentColor" />
              </svg>
            </span>
            <div className="hidden text-xs leading-4 sm:block">
              <div className="font-bold">SHOPPING BAG</div>
              <div className="text-gray-500">0 item — $0.00</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center overflow-hidden rounded-2xl bg-white px-6 py-16 md:grid-cols-2 md:px-12">
        {/* Background container for fill image */}
        <div className="absolute inset-0">
          <Image
            src="/hero_bg.png"
            alt="Background"
            fill
            priority
            className="object-cover opacity-95"
          />
        </div>

        {/* Background big word */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex select-none items-center justify-center">
          <span className="text-[18vw] font-extrabold leading-none tracking-tighter text-black/[0.04]">
            TRAINER
          </span>
        </div>

        {/* Left text column (intentionally empty for spacing) */}
        <div className="order-2 mt-10 md:order-1 md:mt-0"></div>

        {/* Shoe image */}
        <div className="">
          <Image
            src="/hero_hshoe.png"
            width={820}
            height={420}
            className=""
            priority
          />
        </div>
      </section>

      {/* Overview */}
      <OverviewSection />

      {/* Tech Specs */}
      <TechSpecsSection />

      
      <section className="relative mx-auto mt-10 w-full h-190 max-w-7xl overflow-hidden rounded-2xl px-6 py-24 md:px-12 mb-5">
        <video
          src="/shoe_video.mp4"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 z-10 bg-black/40" />
        <div className="relative z-20 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white">witness your shoe</h2>
          <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-brand-red" />
        </div>
      </section>

      {/* Features */}
      <FeaturesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Choose Color */}
      <ColorChooserSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
