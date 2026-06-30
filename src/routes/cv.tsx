import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-transparent.png.asset.json";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Eva Palmqvist, PhD" },
      {
        name: "description",
        content:
          "Curriculum Vitae of Eva Palmqvist, PhD — 25+ years in biotechnology leadership across pharma, industrial biotech and probiotics in Sweden, Denmark and Germany.",
      },
      { property: "og:title", content: "CV — Eva Palmqvist, PhD" },
      {
        property: "og:description",
        content: "Detailed CV — Eva Palmqvist, PhD. 25+ years in biotechnology leadership.",
      },
    ],
  }),
  component: CvPage,
});

const roles = [
  {
    period: "2026 — present",
    company: "PalmQvist BioProcess Consulting",
    place: "Lund, Sweden",
    role: "Founder & Senior Consultant",
    details: [
      "Independent advisory for biotech innovators in bioprocess development, scale-up and CMC strategy.",
      "Interim leadership, technical due diligence, training and digital/AI enablement.",
      "Current assignment: supporting Bioextrax with bioprocess development and scale-up of sustainable biotechnology solution.",
    ],
  },
  {
    period: "2023 — 2025",
    company: "Sanofi",
    place: "Frankfurt, Germany",
    role: "Lab Head, Upstream Process Development — Global CMC Microbial Platform",
    details: [
      "Led upstream development team supporting global microbial CMC pipeline.",
      <>Drove process development and scale-up of recombinant protein production in <em className="not-italic font-serif">Pichia Pastoris</em>.</>,
      "Aligned cross-site collaboration across R&D, manufacturing and quality.",
    ],
  },
  {
    period: "2020 — 2022",
    company: "BioGaia AB",
    place: "Lund, Sweden",
    role: "Supply Chain Manager & Culture Lead",
    details: [
      "Owned probiotic culture supply, CDMO oversight and manufacturing readiness.",
      "Bridged R&D, operations and external partners to secure global supply.",
    ],
  },
  {
    period: "2019 — 2020",
    company: "Follicum AB",
    place: "Lund, Sweden",
    role: "Lab Manager, Mammalian Cell Culture",
    details: [
      "Set up and ran mammalian cell culture lab supporting early drug development.",
    ],
  },
  {
    period: "2006 — 2018",
    company: "Novo Nordisk",
    place: "Måløv, Denmark",
    role: "Principal Scientist, Yeast Physiology & Fermentation",
    details: [
      "Developed and optimized yeast-based bioprocesses for insulin precursors.",
      "First Inventor on WO2009/133099 A2 (insulin precursors).",
      "Mentored scientists and led cross-functional process improvement projects.",
    ],
  },
  {
    period: "1998 — 2006",
    company: "Danisco Innovation",
    place: "Copenhagen, Denmark",
    role: "Senior Scientist; Head of Fermentation & Analytics",
    details: [
      "Led fermentation and analytics group developing industrial biotech processes.",
      "Drove technology transfer from lab to pilot and full production scale.",
    ],
  },
];

function CvPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section>
        <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Curriculum Vitae</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl tracking-tight">
            Eva Palmqvist, PhD
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Founder & Principal Consultant — PalmQvist BioProcess Consulting. 25+ years across pharmaceutical,
            industrial biotech and probiotics in Sweden, Denmark and Germany.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-16 md:py-20">
          <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">Experience</h2>
          <ol className="divide-y divide-border border-y border-border">
            {roles.map((r) => (
              <li key={r.company + r.period} className="grid md:grid-cols-12 gap-6 py-10">
                <div className="md:col-span-3 text-sm text-muted-foreground tabular-nums">{r.period}</div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl">{r.company}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {r.role} · {r.place}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-foreground/80 list-disc pl-5">
                    {r.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-16 md:py-20 grid md:grid-cols-3 gap-12 text-sm">
          <div>
            <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Education</h2>
            <p className="text-foreground">PhD Applied Microbiology</p>
            <p className="text-muted-foreground">Lund University</p>
            <p className="mt-3 text-foreground">MSc Chemical Engineering</p>
            <p className="text-muted-foreground">Lund University & ENSIGCT Toulouse</p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Recognition</h2>
            <p>28 scientific publications · h-index 22 · 10k+ citations</p>
            <p className="mt-3">Inventor — WO2009/133099 A2 (insulin precursors)</p>
            <p className="mt-3">PhD committee member, Lund & Chalmers</p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Languages</h2>
            <p>Swedish (native)</p>
            <p>English · French · Danish · German · Spanish</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-20 md:py-24 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-foreground text-background text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors"
          >
            Get in contact with me
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logoAsset.url} alt="PalmQvist" className="h-9 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          <Link to="/" hash="about" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/" hash="services" className="hover:text-foreground transition-colors">Services</Link>
          <Link to="/cv" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>CV</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </nav>
        <Link
          to="/contact"
          className="text-sm px-4 py-2 rounded-full border border-foreground/80 text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="" className="h-6 w-auto opacity-80" />
          <span>© {new Date().getFullYear()} PalmQvist BioProcess Consulting</span>
        </div>
        
      </div>
    </footer>
  );
}
