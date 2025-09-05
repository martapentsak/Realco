export const SectionLayout = ({ title, description, children }) => {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      {description && <p className="section__description">{description}</p>}
      <div className="section__children">{children}</div>
    </section>
  );
};
