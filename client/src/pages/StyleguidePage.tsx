import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const colors = [
  { name: "background", var: "--background" },
  { name: "foreground", var: "--foreground" },
  { name: "card", var: "--card" },
  { name: "primary", var: "--primary" },
  { name: "secondary", var: "--secondary" },
  { name: "muted", var: "--muted" },
  { name: "muted-fg", var: "--muted-foreground" },
  { name: "accent", var: "--accent" },
  { name: "destructive", var: "--destructive" },
  { name: "border", var: "--border" },
  { name: "sidebar", var: "--sidebar" },
  { name: "sidebar-primary", var: "--sidebar-primary" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="border-b border-border pb-2 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

function StyleguidePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-12 px-6 py-12">
      <div>
        <h1 className="text-2xl font-semibold">Styleguide</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Dev only — design token and component reference.
        </p>
      </div>

      <Section title="Colours">
        <div className="flex flex-wrap gap-3">
          {colors.map((c) => (
            <div key={c.var} className="flex flex-col gap-1.5">
              <div
                className="h-10 w-16 rounded-lg ring-1 ring-foreground/10"
                style={{ background: `var(${c.var})` }}
              />
              <span className="text-xs font-medium">{c.name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography">
        <div className="space-y-4">
          <p className="text-4xl font-bold">Heading 1 — 4xl bold</p>
          <p className="text-3xl font-semibold">Heading 2 — 3xl semibold</p>
          <p className="text-2xl font-semibold">Heading 3 — 2xl semibold</p>
          <p className="text-xl font-medium">Heading 4 — xl medium</p>
          <Separator />
          <p className="text-base">Body — base regular</p>
          <p className="text-sm">Body small — sm regular</p>
          <p className="text-sm text-muted-foreground">Muted — sm muted</p>
          <p className="text-xs text-muted-foreground">Caption — xs muted</p>
          <p className="font-mono text-sm">Mono — sm mono</p>
        </div>
      </Section>

      <Section title="Button — variants">
        <Row label="Standard">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </Row>
        <Row label="Sizes">
          <Button size="xs">XSmall</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </Row>
        <Row label="States">
          <Button disabled>Disabled</Button>
        </Row>
      </Section>

      <Section title="Badge — variants">
        <Row label="Standard">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="ghost">Ghost</Badge>
        </Row>
      </Section>
    </div>
  );
}

export default StyleguidePage;
