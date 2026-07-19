import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
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

            <ContactForm />

            <div className="mt-14 space-y-4 max-w-md">
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New enquiry from ${name || "website visitor"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `mailto:eva@palmqvistbioprocess.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  const inputClass =
    "w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors";

  return (
    <form onSubmit={onSubmit} className="mt-12 max-w-xl space-y-6">
      <div>
        <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
          Name
        </label>
        <input
          required
          maxLength={100}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
          Email
        </label>
        <input
          required
          type="email"
          maxLength={255}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
          Company <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <input
          maxLength={150}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClass}
          placeholder="Organisation"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
          Message
        </label>
        <textarea
          required
          maxLength={2000}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="How can I help?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground text-background text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors"
      >
        Send message
      </button>
      <p className="text-xs text-muted-foreground">
        Submitting opens your email app with the message pre-filled, addressed to
        eva@palmqvistbioprocess.com.
      </p>
    </form>
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
