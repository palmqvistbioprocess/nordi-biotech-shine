import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { useState } from "react";
import logoAsset from "@/assets/logo-transparent.png.asset.json";
import leafAsset from "@/assets/leaf.png.asset.json";
import portraitAsset from "@/assets/eva-photo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PalmQvist BioProcess Consulting — Where science meets scalable processes" },
      {
        name: "description",
        content:
          "Independent bioprocess consulting by Eva Palmqvist, PhD. 25+ years advancing biotech innovations for health and sustainability — from concept to industrial scale.",
      },
      { property: "og:title", content: "PalmQvist BioProcess Consulting" },
      {
        property: "og:description",
        content:
          "Independent bioprocess consulting — translating biology into robust, commercially viable processes.",
      },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:image", content: logoAsset.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <CredentialsBanner />
      <About />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}


function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-16 pb-8 md:pt-20 md:pb-10 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6">
            25+ years in international biotech industry
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Where science meets <em className="text-accent not-italic">scalable</em> processes.
          </h1>
        </div>
        <div className="hidden md:flex md:col-span-5 justify-end">
          <img
            src={leafAsset.url}
            alt="PalmQvist leaf mark"
            className="w-full max-w-[14rem] h-auto"
          />
        </div>
      </div>
    </section>
  );
}

function CredentialsBanner() {
  const stats = [
    { k: "25+", v: "years in international biotech industry" },
    { k: "28", v: "scientific publications" },
    { k: "10k+", v: "citations · h-index 22" },
    { k: "5", v: "languages spoken fluently" },
  ];
  const companies = [
    "Sanofi",
    "Novo Nordisk",
    "Danisco",
    "BioGaia",
    "Follicum",
    "Bioextrax",
  ];
  return (
    <section className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-16 md:py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-background/60 mb-5">
            Experience across
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-lg md:text-xl font-display text-background">
            {companies.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="mt-12 pt-8 border-t border-background/15 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.v}>
              <div className="font-display text-5xl md:text-6xl text-background">{s.k}</div>
              <p className="mt-3 text-sm text-background/70 leading-relaxed">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About</p>
          <h2 className="mt-6 text-3xl md:text-4xl">Bridging Science, Scale-Up and Strategy</h2>
          <div className="mt-8 aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={portraitAsset.url}
              alt="Eva Palmqvist, PhD — Founder & Principal Consultant"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            I am an international biotechnology leader with 25+ years across pharmaceutical, industrial biotech,
            probiotics and start-up environments in Sweden, Denmark and Germany — leading cross-functional programs
            from early concept through scale-up and technology transfer.
          </p>
          <p>
            My expertise spans microbial physiology, bioprocess development and CMC strategy, paired with structured
            execution and the ability to align stakeholders across R&amp;D, regulatory, manufacturing and external
            partners. I bring strong networking and bridge-building skills that connect science, operations and
            business to drive results.
          </p>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Scientific & Technical Leadership",
    items: [
      "Serve as Interim Lab Head, Scientific Director, Project Lead, or CMC Lead",
      "Provide scientific coaching, mentoring, and team development",
      "Lead cross-functional collaboration across R&D, manufacturing, quality, and regulatory functions",
      "Build networks and bridges between scientific, operational and business stakeholders to drive alignment",
    ],
  },
  {
    title: "Bioprocess Development & Scale-Up",
    items: [
      "Design and optimize microbial bioprocesses",
      "Support fermentation scale-up and technology transfer",
      "Develop recombinant protein production processes in yeast expression systems",
      "Troubleshoot complex technical challenges and perform root-cause analyses",
      "Support CDMO selection, oversight, and manufacturing readiness",
    ],
  },
  {
    title: "Training & Capability Building",
    items: [
      "Deliver customized courses in bioprocess development and scale-up",
      "Train scientists and engineers in microbial physiology and fermentation technology",
      "Facilitate workshops on technology transfer and industrial biotechnology best practices",
      "Coach project leaders and technical teams to strengthen organizational capabilities",
    ],
  },
  {
    title: "Digital Transformation & AI",
    items: [
      "Implement data-driven approaches to process development and optimization",
      "Help organizations leverage digitalization, advanced analytics, and AI to accelerate development and improve decision-making",
    ],
  },
];

function Services() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="services" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">What I Do</p>
            <h2 className="mt-6 text-3xl md:text-4xl">How I can help.</h2>
          </div>
        </div>

        <ul className="grid sm:grid-cols-2 gap-px bg-border border border-border">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <li key={s.title} className="bg-background">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-8 md:p-10 flex items-start justify-between gap-4 hover:bg-secondary/30 transition-colors cursor-pointer"
                >
                  <h3 className="text-xl">{s.title}</h3>
                  <span
                    aria-hidden
                    className={`mt-1 text-2xl leading-none text-accent transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <ul className="px-8 md:px-10 pb-8 md:pb-10 space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-12 md:pl-14">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-24 md:py-32 text-center">
        <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl mx-auto">
          Let's discuss your next process.
        </h2>
        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-foreground text-background text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors"
          >
            Get in contact with me
          </Link>
        </div>
      </div>
    </section>
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
