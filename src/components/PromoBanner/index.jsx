import { IoMdClose } from "react-icons/io";

export const PromoBanner = ({ onClose }) => (
  <section className="promo">
    <span>Get your dream house in a week.</span>
    <button className="promo__close-btn" onClick={onClose}>
      <IoMdClose />
    </button>
  </section>
);
