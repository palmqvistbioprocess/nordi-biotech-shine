import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { useState } from "react";
import logoAsset from "@/assets/logo-transparent.png.asset.json";
import croppedAsset from "@/assets/cropped.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PalmQvist BioProcess Consulting" },
      {
        name: "description",
        content:
          "Get in touch with Eva Palmqvist for bioprocess consulting — technical reviews, scale-up support, training and program leadership.",
      },
      { property: "og:title", content: "Contact — PalmQvist BioProcess Consulting" },
      {
        property: "og:description",
        content: "Get in touch with Eva Palmqvist for bioprocess consulting.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Contact</p>
            <h1 className="mt-6 font-display text-5xl md:text-7xl tracking-tight">
              Let's talk.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              From early technical reviews to long-term program leadership — reach out and let's
              explore how we can move your biotechnology forward.
            </p>

            <div className="mt-12 space-y-4 max-w-md">
              <a
                href="mailto:eva@palmqvistbioprocess.com"
                className="block hairline pt-4 text-foreground hover:text-accent transition-colors"
              >
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Email</span>
                eva@palmqvistbioprocess.com
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

          <div className="md:col-span-5">
            <div className="w-40 md:w-48 aspect-[3/4] overflow-hidden rounded-sm mb-8">
              <img
                src={croppedAsset.url}
                alt="Eva Palmqvist — Portrait"
                className="h-full w-full object-cover object-[center_15%]"
                loading="lazy"
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:eva@palmqvistbioprocess.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
          Name
        </label>
        <input
          required
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border-b border-border bg-transparent py-2 text-foreground focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
          Email
        </label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border-b border-border bg-transparent py-2 text-foreground focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
          Message
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border-b border-border bg-transparent py-2 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-foreground text-background text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors"
      >
        {status === "sent" ? "Opening email…" : "Send message"}
      </button>
    </form>
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
          <Link to="/cv" className="hover:text-foreground transition-colors">CV</Link>
          <Link to="/publications" className="hover:text-foreground transition-colors">Publications</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>Contact</Link>
        </nav>
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
