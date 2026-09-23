import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";

function LinkedInGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  );
}
import { CONTACT, IMAGES } from "../data/content";
import { Reveal } from "./Reveal";

const TOPICS = [
  "B2B loyalty & incentive design",
  "Partner engagement & enablement",
  "Channel sales growth",
  "Vendor selection, without bias",
  "Advisory & interim leadership",
  "Not sure yet — a discovery call",
];

const inputCls =
  "w-full rounded-xl border border-hairline bg-navy-950/70 px-4 py-3.5 text-sm text-cream placeholder:text-mist/50 transition-all duration-300 focus:border-gold-500 focus:bg-navy-950 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)] focus:outline-none";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    topic: TOPICS[5],
    message: "",
    website: "", // honeypot
  });

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.website) return; // bot trap — silently drop
    const subject = `Discovery call — ${form.name}${form.company ? ` (${form.company})` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company || "—"}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "—"}`,
      `Area of interest: ${form.topic}`,
      "",
      "What my channel is rewarded for today:",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" aria-label="Contact" className="relative overflow-hidden">
      {/* sydney backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <img src={IMAGES.sydney} alt="" loading="lazy" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/88 to-navy-950" />
        <div className="glow-drift absolute top-[-15%] left-1/2 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14),transparent_65%)] blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.05fr_1fr]">
        {/* pitch */}
        <div>
          <Reveal>
            <p className="overline-label">Next step</p>
            <h2 className="mt-6 font-display text-3xl leading-tight font-bold text-cream sm:text-[2.8rem] sm:leading-[1.12]">
              Tell me what your channel is{" "}
              <span className="text-gold-gradient italic">rewarded for today.</span>
            </h2>
            <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-mist">
              Thirty minutes, no deck, nothing to sell you. If I&rsquo;m not the right person,
              you&rsquo;ll leave with a recommendation for someone who is.
            </p>
          </Reveal>

          <Reveal delay={140} className="mt-9 flex flex-wrap gap-4">
            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Book a conversation")}`}
              className="btn-gold group inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 px-6 py-3.5 font-display text-[11px] font-bold tracking-[0.2em] text-navy-950 uppercase shadow-[0_14px_35px_-10px_rgba(212,175,55,0.6)] transition-transform duration-300 hover:scale-[1.04]"
            >
              Book a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#testimonials"
              className="inline-flex items-center gap-3 rounded-full border border-gold-500/35 px-6 py-3.5 font-display text-[11px] font-bold tracking-[0.2em] text-gold-200 uppercase transition-all duration-300 hover:border-gold-400 hover:bg-gold-500/10"
            >
              See the track record
            </a>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mt-12 space-y-5">
              {[
                { icon: Mail, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: Phone, label: CONTACT.phone, href: `tel:${CONTACT.phoneHref}` },
                { icon: LinkedInGlyph, label: "linkedin.com/in/markfarrell2", href: CONTACT.linkedin },
                { icon: MapPin, label: `${CONTACT.location} — serving ANZ`, href: undefined },
              ].map((row) => (
                <li key={row.label} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-500/35 bg-navy-900/70">
                    <row.icon aria-hidden="true" className="h-4.5 w-4.5 text-gold-400" />
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-sm text-cream/85 underline-offset-4 transition-colors hover:text-gold-300 hover:underline"
                    >
                      {row.label}
                    </a>
                  ) : (
                    <span className="text-sm text-cream/85">{row.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* form card */}
        <Reveal delay={180}>
          <div className="relative rounded-[2rem] border border-hairline bg-navy-900/75 p-7 shadow-[0_40px_90px_-35px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-9">
            <div
              aria-hidden="true"
              className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent"
            />
            {sent ? (
              <div className="fade-slide flex min-h-[26rem] flex-col items-center justify-center text-center" role="status">
                <span className="grid h-16 w-16 place-items-center rounded-full border border-gold-500/50 bg-gold-500/10">
                  <CheckCircle2 aria-hidden="true" className="h-8 w-8 text-gold-400" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-cream">
                  Your email is ready to send.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
                  Your mail app should have opened with everything pre-filled. If it didn&rsquo;t,
                  write directly to{" "}
                  <a href={`mailto:${CONTACT.email}`} className="text-gold-300 underline underline-offset-4">
                    {CONTACT.email}
                  </a>{" "}
                  — I reply personally, usually within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 rounded-full border border-gold-500/35 px-6 py-3 font-display text-[11px] font-bold tracking-[0.2em] text-gold-200 uppercase transition-colors hover:bg-gold-500/10"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate={false}>
                <p className="font-display text-lg font-semibold text-cream">
                  Start the conversation
                </p>
                <p className="mt-1.5 text-xs text-mist">
                  Submits straight to Mark&rsquo;s inbox — nothing is stored on this site.
                </p>

                {/* honeypot */}
                <label className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                  Website
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={update("website")}
                  />
                </label>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block font-display text-[10px] font-semibold tracking-[0.24em] text-gold-300 uppercase">
                      Name *
                    </span>
                    <input required value={form.name} onChange={update("name")} className={inputCls} placeholder="Your name" autoComplete="name" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block font-display text-[10px] font-semibold tracking-[0.24em] text-gold-300 uppercase">
                      Business email *
                    </span>
                    <input required type="email" value={form.email} onChange={update("email")} className={inputCls} placeholder="you@company.com.au" autoComplete="email" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block font-display text-[10px] font-semibold tracking-[0.24em] text-gold-300 uppercase">
                      Company
                    </span>
                    <input value={form.company} onChange={update("company")} className={inputCls} placeholder="Company or network" autoComplete="organization" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block font-display text-[10px] font-semibold tracking-[0.24em] text-gold-300 uppercase">
                      Phone
                    </span>
                    <input type="tel" value={form.phone} onChange={update("phone")} className={inputCls} placeholder="+61 …" autoComplete="tel" />
                  </label>
                </div>

                <label className="mt-4 block">
                  <span className="mb-1.5 block font-display text-[10px] font-semibold tracking-[0.24em] text-gold-300 uppercase">
                    I&rsquo;m interested in
                  </span>
                  <select value={form.topic} onChange={update("topic")} className={`${inputCls} appearance-none`}>
                    {TOPICS.map((t) => (
                      <option key={t} value={t} className="bg-navy-950 text-cream">
                        {t}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="mt-4 block">
                  <span className="mb-1.5 block font-display text-[10px] font-semibold tracking-[0.24em] text-gold-300 uppercase">
                    What is your channel rewarded for today? *
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    className={`${inputCls} resize-none`}
                    placeholder="e.g. Volume only — and I suspect it's training dealers to wait for discounts…"
                  />
                </label>

                <button
                  type="submit"
                  className="btn-gold group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 px-7 py-4 font-display text-xs font-bold tracking-[0.2em] text-navy-950 uppercase shadow-[0_16px_40px_-12px_rgba(212,175,55,0.65)] transition-transform duration-300 hover:scale-[1.02]"
                >
                  Email Mark directly
                  <Send aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
