import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-transparent.png.asset.json";
import portraitAsset from "@/assets/eva-photo.jpg.asset.json";
import croppedAsset from "@/assets/cropped.jpg.asset.json";

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
      <Nav />
      <Hero />
      <About />
      <Services />
      <Mission />
      <Experience />
      <Credentials />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logoAsset.url} alt="PalmQvist" className="h-9 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-full border border-foreground/80 text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-24 pb-28 md:pt-36 md:pb-40 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-8">
            PalmQvist BioProcess Consulting
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
            Where science meets <em className="text-accent not-italic">scalable</em> processes.
          </h1>
          <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Independent advisory for biotech innovators — translating complex biology into robust, commercially viable
            processes that advance human health and a more sustainable industry.
          </p>
        </div>
        <div className="md:col-span-4 md:pb-3">
          <div className="hairline pt-6 text-sm text-muted-foreground space-y-1">
            <p className="text-foreground">Eva Palmqvist, PhD</p>
            <p>Founder & Principal Consultant</p>
            <p>Lund, Sweden</p>
          </div>
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
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">01 — About</p>
          <h2 className="mt-6 text-3xl md:text-4xl">A quarter century in bioprocess.</h2>
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
            probiotics and start-up environments — leading cross-functional programs from early concept through
            scale-up and technology transfer.
          </p>
          <p>
            My expertise spans microbial physiology, bioprocess development and CMC strategy, paired with structured
            execution and the ability to align stakeholders across R&amp;D, regulatory, manufacturing and external
            partners.
          </p>
          <p className="text-muted-foreground italic">
            “Passionate about green solutions, new foods, planetary health — and advancing biotechnology innovations that address health and sustainability challenges.”
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
  return (
    <section id="services" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">02 — What I Do</p>
            <h2 className="mt-6 text-3xl md:text-4xl">How I can help.</h2>
          </div>
          <p className="md:col-span-7 md:col-start-6 text-lg text-muted-foreground leading-relaxed self-end">
            Hands-on advisory for biotech companies bringing biological systems to industrial scale — flexible
            engagements from focused technical reviews to ongoing program leadership.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-px bg-border border border-border">
          {services.map((s, i) => (
            <li key={s.title} className="bg-background p-8 md:p-10 flex flex-col">
              <span className="text-xs text-accent font-medium tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">03 — Mission</p>
          <h2 className="mt-6 text-3xl md:text-4xl">Biotechnology for a sustainable future.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            I believe biotechnology will play a critical role in addressing some of the most important challenges
            facing our world. My mission is to help organizations harness the power of biotechnology to support the
            green transition, improve planetary health, and build a more sustainable future.
          </p>
          <p>
            Drawing on more than 25 years of experience in pharmaceuticals, industrial biotechnology, and probiotics,
            I help transform scientific innovation into scalable, efficient, and sustainable manufacturing processes.
            Through scientific rigor, technological innovation, digitalization, AI-driven development, and knowledge
            transfer, I work to accelerate the deployment of biotechnologies that create lasting value for people,
            industry, and the planet.
          </p>
          <p>
            I believe lasting impact comes not only from developing better processes, but also from developing the
            people and organizations that drive innovation forward.
          </p>
          <p className="text-accent italic">
            Where science meets scalable processes — for a sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
}

const roles = [
  {
    period: "2026 —",
    company: "PalmQvist BioProcess Consulting",
    place: "Lund, Sweden",
    role: "Founder & Senior Consultant (Bioextrax AB)",
  },
  {
    period: "2023 — 2025",
    company: "Sanofi",
    place: "Frankfurt, Germany",
    role: "Lab Head, Upstream Process Development — Global CMC Microbial Platform",
  },
  {
    period: "2020 — 2022",
    company: "BioGaia AB",
    place: "Lund, Sweden",
    role: "Supply Chain Manager & Culture Lead",
  },
  {
    period: "2019 — 2020",
    company: "Follicum AB",
    place: "Lund, Sweden",
    role: "Lab Manager, Mammalian Cell Culture",
  },
  {
    period: "2006 — 2018",
    company: "Novo Nordisk",
    place: "Måløv, Denmark",
    role: "Principal Scientist, Yeast Physiology & Fermentation",
  },
  {
    period: "1998 — 2006",
    company: "Danisco Innovation",
    place: "Copenhagen, Denmark",
    role: "Senior Scientist; Head of Fermentation & Analytics",
  },
];

function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">04 — Experience</p>
            <h2 className="mt-6 text-3xl md:text-4xl">A track record across the industry.</h2>
          </div>
        </div>

        <ol className="divide-y divide-border border-y border-border">
          {roles.map((r) => (
            <li
              key={r.company + r.period}
              className="grid md:grid-cols-12 gap-4 py-8 group hover:bg-secondary/50 transition-colors px-2 -mx-2"
            >
              <div className="md:col-span-3 text-sm text-muted-foreground tabular-nums">{r.period}</div>
              <div className="md:col-span-5">
                <h3 className="text-2xl">{r.company}</h3>
                <p className="text-sm text-muted-foreground mt-1">{r.place}</p>
              </div>
              <p className="md:col-span-4 text-sm text-foreground/80 md:text-right self-center">{r.role}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Credentials() {
  const stats = [
    { k: "25+", v: "years in biotech leadership" },
    { k: "28", v: "scientific publications" },
    { k: "10k+", v: "citations · h-index 22" },
    { k: "5", v: "languages spoken fluently" },
  ];
  return (
    <section className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-20 md:py-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.v}>
              <div className="font-display text-5xl md:text-6xl text-background">{s.k}</div>
              <p className="mt-3 text-sm text-background/70 leading-relaxed">{s.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-10 border-t border-background/15 grid md:grid-cols-3 gap-8 text-sm text-background/75">
          <div>
            <p className="text-background mb-2">Education</p>
            <p>PhD Applied Microbiology, Lund University</p>
            <p>MSc Chemical Engineering, Lund & ENSIGCT Toulouse</p>
          </div>
          <div>
            <p className="text-background mb-2">Recognition</p>
            <p>Inventor — WO2009/133099 A2 (insulin precursors)</p>
            <p>PhD committee member, Lund & Chalmers</p>
          </div>
          <div>
            <p className="text-background mb-2">Languages</p>
            <p>Swedish (native) · English · French</p>
            <p>Danish · German · Spanish</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">05 — Contact</p>
            <h2 className="mt-6 font-display text-5xl md:text-7xl tracking-tight">
              Let's discuss your process.
            </h2>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              From early technical reviews to long-term program leadership — get in touch to explore how we can move
              your biotechnology forward.
            </p>
            <div className="mt-10 w-32 md:w-40 aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={croppedAsset.url}
                alt="Eva Palmqvist — Portrait"
                className="h-full w-full object-cover object-[center_15%]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="space-y-4">
              <a
                href="mailto:evaakke@gmail.com"
                className="block hairline pt-4 text-foreground hover:text-accent transition-colors"
              >
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Email</span>
                evaakke@gmail.com
              </a>
              <a
                href="tel:+46760297507"
                className="block hairline pt-4 text-foreground hover:text-accent transition-colors"
              >
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Phone</span>
                +46 760 29 75 07
              </a>
              <div className="hairline pt-4">
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Based in</span>
                <p>Lund, Sweden · working internationally</p>
              </div>
            </div>
          </div>
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
        <span className="italic">Where science meets scalable processes.</span>
      </div>
    </footer>
  );
}
