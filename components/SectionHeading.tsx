type SectionHeadingProps = {
  title: string;
  lead?: string;
};

export function SectionHeading({ title, lead }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  );
}
