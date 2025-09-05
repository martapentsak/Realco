import { logoList } from "../../constants/content";

export const MediaSection = () => (
  <section className="media-section">
    <span className="media-section__info">
      As seen on the world's best <br /> magazines and media
    </span>
    <div className="media-section__image">
      {logoList.map(({ src, alt }) => (
        <img key={alt} src={src} alt={alt} />
      ))}
    </div>
  </section>
);

