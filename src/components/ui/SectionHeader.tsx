import Reveal from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title?: string;
  /** Optional id applied to the title for aria-labelledby on the section. */
  titleId?: string;
};

/** Consistent eyebrow + title block used across content sections. */
export default function SectionHeader({
  eyebrow,
  title,
  titleId,
}: SectionHeaderProps) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      {title && (
        <h2 id={titleId} className="section-title">
          {title}
        </h2>
      )}
    </Reveal>
  );
}
