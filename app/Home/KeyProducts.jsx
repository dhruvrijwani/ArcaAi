import React from "react";
import "./KeyProducts.css";
import ProductCard from "../Components/ProductCard/ProductCard";
import Badge from "../Components/Badge/Badge";
import Button from "../Components/Button/Button";

function KeyProducts() {
  return (
    <section className="keyProducts">
      <div className="swcontainer">
        <div className="sectionWrapper">
            <h2 className="title">Key Products</h2>
            <p className="description">
              ARCA’s proprietary AI modules are built from scratch. Every
              product blends clinical expertise with robust engineering.
            </p>

            <Badge bgColor="#bce9ea" textColor="#111">Featured Solutions:</Badge>

            <div className="productGrid">
              <ProductCard
              icon="/Icons/Icon1.png"
              title="Ambient Listening AI"
              description="Real-time clinical note generation with multi-lingual support."
              cardBg="#F4FFE9"
              textColor="#111"
              />
              <ProductCard
              icon="/Icons/Icon2.png"
              title="Lifestyle EHR"
              description="India’s first lifestyle medicine EHR supporting the five pillars of health."
              cardBg="#485331"
              textColor="#fff"
              />
              <ProductCard
              icon="/Icons/Icon1.png"
              title="Doc Assist"
              description="Evidence-backed, provider-curated clinical insights available in real time."
              cardBg="#FFF"
              textColor="#111"
              />
              <ProductCard
              icon="/Icons/Icon4.png"
              title="True Claim"
              description="Seamless claim automation, fraud detection, and audit trails."
              cardBg="#162608"
              textColor="#fff"
              />
              <ProductCard
              icon="/Icons/Icon5.png"
              title="Arogya Grid"
              description="Offline-first community health intelligence system for rural care delivery."
              cardBg="#DCE0D4"
              textColor="#111"
              />

            </div>

            <Button variant="filled" bgColor="#008584" textColor="#fff">
              View All Products
            </Button>

        </div>
      </div>
    </section>
  );
}

export default KeyProducts;
