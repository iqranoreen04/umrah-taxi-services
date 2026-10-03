import PageHero from "@/components/site/page-hero";
import { siteConfig } from "@/lib/site-config";

export interface LegalSection {
  heading: string;
  body: string[];
}

export default function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <section className="section-py">
        <div className="container-mx container-px max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-xl font-bold mb-3">{s.heading}</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
          <div className="rounded-2xl border border-border bg-secondary/30 p-5 text-sm text-muted-foreground">
            Questions? Contact {siteConfig.name} at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-emerald hover:underline">{siteConfig.email}</a>{" "}
            or call / WhatsApp{" "}
            <a href={siteConfig.phoneHref} className="text-emerald hover:underline">{siteConfig.phone}</a>.
          </div>
        </div>
      </section>
    </>
  );
}
