import { useState } from "react";

import { PromoBanner } from "../components/PromoBanner";
import {FindYourHome} from "../components/FindYourHome";
import {MediaSection} from "../components/MediaSection";
import { SectionLayout } from "../components/SectionLayout";
import { howItWorks } from "../constants/content";
import { Menu } from "../components/Menu"





export const LandingPage = () => {
  const [isPromoOpen, setIsPromoOpen] = useState(true);
  return (
    <div className="App">
      <header className="header">
        {isPromoOpen && <PromoBanner onClose={() => setIsPromoOpen(false)}/>}
        <Menu />
      </header>
      <main>
        <FindYourHome />
        <div className="wrapper">
          <MediaSection />
          <SectionLayout
            title="How it works"
            description="Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id efficitur pellentesque. Maecenas varius felis felis."
          >
            {howItWorks.map(({ icon, title, description }) => (
              <div className="card">
                <div className="card-wrapper">
                  <div className="card__icon-section">{icon}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </SectionLayout>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
