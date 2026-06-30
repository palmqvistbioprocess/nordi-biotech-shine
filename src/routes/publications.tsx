import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-transparent.png.asset.json";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Eva Palmqvist, PhD" },
      {
        name: "description",
        content:
          "Scientific publications by Eva Palmqvist, PhD — 28 peer-reviewed papers in biotechnology, bioprocess engineering and microbial physiology.",
      },
      { property: "og:title", content: "Publications — Eva Palmqvist, PhD" },
      {
        property: "og:description",
        content: "28 scientific publications · h-index 22 · 10k+ citations",
      },
    ],
  }),
  component: PublicationsPage,
});

const publications = [
  "Wright NR, Wulff T, Palmqvist EA, Jørgensen TR, Workman CT, Sonnenschein N, Rønnest NP, Herrgård MJ. Fluctuations in glucose availability prevent global proteome changes and physiological transition during prolonged chemostat cultivations of Saccharomyces cerevisiae. Biotechnol Bioeng. 2020;117(7):2074-2088.",
  "Madsen CT, Sylvestersen KB, Young C, Larsen SC, Poulsen JW, Andersen MA, Palmqvist EA, Hey-Mogensen M, Jensen PB, Treebak JT. Biotin starvation causes mitochondrial protein hyperacetylation and partial rescue by the SIRT3-like deacetylase Hst4p. Nat Commun. 2015;6(1):7726.",
  "Kazemi Seresht A, Palmqvist EA, Schluckebier G, Pettersson I, Olsson L. The challenge of improved secretory production of active pharmaceutical ingredients in Saccharomyces cerevisiae: a case study on human insulin analogs. Biotechnol Bioeng. 2013;110(10):2764-2774.",
  "Kazemi Seresht A, Nørgaard P, Palmqvist EA, Andersen AS, Olsson L. Modulating heterologous protein production in yeast: the applicability of truncated auxotrophic markers. Appl Microbiol Biotechnol. 2013;97(9):3939-3948.",
  "Kazemi Seresht A, Cruz AL, de Hulster E, Hebly M, Palmqvist EA, van Gulik W, Daran JM, Pronk J, Olsson L. Long-term adaptation of Saccharomyces cerevisiae to the burden of recombinant insulin production. Biotechnol Bioeng. 2013;110(10):2749-2763.",
  "Gernaey KV, Baganz F, Franco-Lara E, Kensy F, Krühne U, Luebberstedt M, Marx U, Palmqvist E, Schmid A, Schubert F. Monitoring and control of microbioreactors: an expert opinion on development needs. Biotechnol J. 2012;7(10):1308-1314.",
  "Zacchi G, Larsson S, Palmqvist E. Comparison of SO₂ and H₂SO₄ Impregnation of Softwood Prior to Steam. Biotechnol Fuels Chem. 2012;3.",
  "Tengborg C, Stenberg K, Galbe M, Zacchi G, Larsson S, Palmqvist E, Hahn-Hägerdal B. Impregnation of softwood prior to steam. Biotechnol Fuels Chem. 2012;70(72):3.",
  "Kazemi Seresht A, Palmqvist EA, Olsson L. The impact of phosphate scarcity on pharmaceutical protein production in S. cerevisiae: linking transcriptomic insights to phenotypic responses. Microb Cell Fact. 2011;10(1):104.",
  "Andersen AS, Palmqvist E, Bang S, Shaw AC, Hubalek F, Ribel U, Hoeg-Jensen T. Backbone cyclic insulin. J Pept Sci. 2010;16(9):473-479.",
  "Gunnarsson N, Palmqvist EA. Influence of pH and carbon source on the production of vanillin from ferulic acid by Streptomyces setonii ATCC 39116. Dev Food Sci. 2006;43:73-76.",
  "Olsson L, Christensen TM, Hansen KP, Palmqvist EA. Influence of the carbon source on production of cellulases, hemicellulases and pectinases by Trichoderma reesei Rut C-30. Enzyme Microb Technol. 2003;33(5):612-619.",
  "Jørgensen H, Olsson L, Rønnow B, Palmqvist E. Fed-batch cultivation of baker's yeast followed by nitrogen or carbon starvation: effects on fermentative capacity and content of trehalose and glycogen. Appl Microbiol Biotechnol. 2002;59(2):310-317.",
  "Palmqvist E, Hahn-Hägerdal B. Fermentation of lignocellulosic hydrolysates. I: inhibition and detoxification. Bioresour Technol. 2000;74(1):17-24.",
  "Palmqvist E, Hahn-Hägerdal B. Fermentation of lignocellulosic hydrolysates. II: inhibitors and mechanisms of inhibition. Bioresour Technol. 2000;74(1):25-33.",
  "Larsson S, Palmqvist E, Hahn-Hägerdal B, Tengborg C, Stenberg K, Zacchi G, Nilvebrant NO. The generation of fermentation inhibitors during dilute acid hydrolysis of softwood. Enzyme Microb Technol. 1999;24(3-4):151-159.",
  "Palmqvist E, Almeida JS, Hahn-Hägerdal B. Influence of furfural on anaerobic glycolytic kinetics of Saccharomyces cerevisiae in batch culture. Biotechnol Bioeng. 1999;62(4):447-454.",
  "Palmqvist E, Grage H, Meinander NQ, Hahn-Hägerdal B. Main and interaction effects of acetic acid, furfural, and p-hydroxybenzoic acid on growth and ethanol productivity of yeasts. Biotechnol Bioeng. 1999;63(1):46-55.",
  "Palmqvist E, Galbe M, Hahn-Hägerdal B. Evaluation of cell recycling in continuous fermentation of enzymatic hydrolysates of spruce with Saccharomyces cerevisiae and on-line monitoring of glucose and ethanol. Appl Microbiol Biotechnol. 1998;50(5):545-551.",
  "Jönsson LJ, Palmqvist E, Nilvebrant NO, Hahn-Hägerdal B. Detoxification of wood hydrolysates with laccase and peroxidase from the white-rot fungus Trametes versicolor. Appl Microbiol Biotechnol. 1998;49(6):691-697.",
  "Kriz D, Berggren C, Palmqvist E. Sire-technology. Part III. Glucose monitoring during fermentation of a lignocellulosic hydrolysate by Saccharomyces cerevisiae employing a differential amperometric biosensor. Instrum Sci Technol. 1998;26(1):69-79.",
  "Stenberg K, Tengborg C, Galbe M, Zacchi G, Palmqvist E, Hahn-Hägerdal B. Recycling of process streams in ethanol production from softwoods based on enzymatic hydrolysis. Appl Biochem Biotechnol. 1998;70(1):697-708.",
  "Tengborg C, Stenberg K, Galbe M, Zacchi G, Larsson S, Palmqvist E, Hahn-Hägerdal B. Comparison of SO2 and H2SO4 impregnation of softwood prior to steam pretreatment on ethanol production. Appl Biochem Biotechnol. 1998;70(1):3-15.",
  "Palmqvist E, Hahn-Hägerdal B, Galbe M, Zacchi G. The effect of water-soluble inhibitors from steam-pretreated willow on enzymatic hydrolysis and ethanol fermentation. Enzyme Microb Technol. 1996;19(6):470-476.",
  "Palmqvist E, Hahn-Hägerdal B, Galbe M, Larsson M, Stenberg K, Szengyel Z, Tengborg C, Zacchi G. Design and operation of a bench-scale process development unit for the production of ethanol from lignocellulosics. Bioresour Technol. 1996;58(2):171-179.",
  "Palmqvist E, Kriz CB, Svanberg K, Khayyami M, Kriz D. DC-resistometric urea sensitive device utilizing a conducting polymer film for the gas-phase detection of ammonia. Biosens Bioelectron. 1995;10(3-4):283-287.",
  "Kriz CB, Palmqvist E, Kriz D. DC-resistometric stability studies on a conducting polymer (polypyrrole) film in an aqueous solution. Electrochim Acta. 1995;40(8):1063-1065.",
  "Palmqvist E, Kriz CB, Khayyami M, Danielsson B, Larsson PO, Mosbach K, Kriz D. Development of a simple detector for microbial metabolism, based on a polypyrrole dc resistometric device. Biosens Bioelectron. 1994;9(8):551-556.",
];

function PublicationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section>
        <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Scientific Output</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl tracking-tight">
            Publications
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            28 peer-reviewed papers spanning microbial physiology, bioprocess engineering,
            lignocellulosic bioethanol, recombinant protein production and biosensor technology.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-16 md:py-20">
          <ol className="space-y-6 text-sm leading-relaxed text-foreground/85 list-decimal pl-5">
            {publications.map((pub, i) => (
              <li key={i} className="pl-2">
                {pub}
              </li>
            ))}
          </ol>
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
          <Link to="/cv" className="hover:text-foreground transition-colors">CV</Link>
          <Link to="/publications" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>Publications</Link>
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
