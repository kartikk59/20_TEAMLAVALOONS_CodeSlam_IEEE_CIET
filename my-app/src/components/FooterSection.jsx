export default function FooterSection() {
  return (
    <footer className="">
      {/* Top red info strip */}
      <div className="bg-brand-red text-white">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-6 py-8 md:grid-cols-3 md:px-12">
          <InfoPill icon="✈" title="FREYE DELIVER" subtitle="ON ORDER OVER $100.00" />
          <InfoPill icon="☎" title="ORDER ONLINE" subtitle="CALL US: (801)-2345-6789" />
          <InfoPill icon="⛑" title="24/7 SUPPORT" subtitle="support@liftsupply.com" />
        </div>
      </div>

      {/* Main dark footer */}
      <div className="bg-[#0f0f10] text-white">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4 md:px-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-sm font-extrabold">
                L
              </span>
              <span className="text-xl font-extrabold tracking-tight">LIFTSUPPLY</span>
            </div>
            <p className="text-sm text-white/60">
              This is Photoshop&apos;s version of Lorem Ipsum. Praesent gravida nibh
              velit; it&apos;s a cold world out there.
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>📍 8901 Marmora Road, Glasgow</li>
              <li>☎ (800) 2345 - 6789</li>
              <li>✉ info@cropshop.com</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-sm font-extrabold tracking-wide text-white/90">INFORMATION</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>Our Story</li>
              <li>Privacy & Policy</li>
              <li>Terms & Conditions</li>
              <li>Shipping & Delivery</li>
              <li>Careers</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-extrabold tracking-wide text-white/90">OUR SOCIAL</h4>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/80">
              <li>🔵 Facebook</li>
              <li>🐦 Twitter</li>
              <li>🟠 RSS</li>
              <li>▶ YouTube</li>
              <li>🟠 Pinterest</li>
              <li>📸 Instagram</li>
            </ul>
          </div>

          {/* Opening / Payments */}
          <div>
            <h4 className="text-sm font-extrabold tracking-wide text-white/90">OPENING TIME</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>Monday - Friday: 08:30 am - 09:30 pm</li>
              <li>Sat - Sun: 09:00 am - 10:00 pm</li>
            </ul>
            <h4 className="mt-6 text-sm font-extrabold tracking-wide text-white/90">PAYMENT METHOD</h4>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
              <span className="rounded bg-white/10 px-2 py-1">VISA</span>
              <span className="rounded bg-white/10 px-2 py-1">PayPal</span>
              <span className="rounded bg-white/10 px-2 py-1">AMEX</span>
              <span className="rounded bg-white/10 px-2 py-1">MASTERCARD</span>
              <span className="rounded bg-white/10 px-2 py-1">DISCOVER</span>
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/60 md:flex-row md:px-12">
            <div className="flex flex-wrap gap-4">
              <a>Sitemap</a>
              <a>Searchs</a>
              <a>Searchs</a>
              <a>Advance Searchs</a>
              <a>Contact Us</a>
            </div>
            <div>Copyright © 2016. LiftSupply. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InfoPill({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
        <span aria-hidden>{icon}</span>
      </div>
      <div>
        <div className="text-sm font-extrabold tracking-wide">{title}</div>
        <div className="text-xs text-white/80">{subtitle}</div>
      </div>
    </div>
  );
}

