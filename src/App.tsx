import { useTranslation } from "react-i18next";

/**
 * Checkpoint 1 specimen — proves tokens, fonts, and i18n are wired up.
 * The real page shell (Header/sections/Footer) lands in Checkpoint 2.
 */
export default function App() {
  const { t } = useTranslation();

  return (
    <main className="container" style={{ paddingBlock: "var(--space-2xl)" }}>
      <p className="eyebrow">Scaffold · Design tokens</p>
      <h1 className="display" style={{ fontSize: "var(--step-5)", marginTop: "0.5rem" }}>
        {t("hero.title")}
      </h1>
      <p
        className="display"
        style={{
          fontSize: "var(--step-2)",
          fontWeight: 600,
          color: "var(--ink-soft)",
          marginTop: "var(--space-md)",
          maxWidth: "20ch",
        }}
      >
        {t("hero.tagline")}
      </p>
      <p className="measure" style={{ marginTop: "var(--space-lg)", color: "var(--ink-soft)" }}>
        {(t("overview.body", { returnObjects: true }) as string[])[0]}
      </p>

      <div style={{ display: "flex", gap: "var(--space-xs)", marginTop: "var(--space-xl)" }}>
        {["--bg", "--bg-sink", "--ink", "--ink-soft", "--clay", "--clay-deep", "--line"].map(
          (token) => (
            <div key={token} style={{ textAlign: "center", fontSize: "0.7rem" }}>
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  background: `var(${token})`,
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                }}
              />
              <code>{token}</code>
            </div>
          ),
        )}
      </div>
    </main>
  );
}
