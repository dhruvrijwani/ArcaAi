import Badge from "../../Components/Badge/Badge";
import Button from "../../Components/Button/Button";
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./KeyProducts.module.css";
import products from "./Products"

function KeyProducts() {
  return (
    <section className={styles.keyProducts}>
      <div className="swcontainer">
        <div className={styles.sectionWrapper}>
            <h2 className={styles.title}>Key Products</h2>
            <p className={styles.description}>
              ARCA’s proprietary AI modules are built from scratch. Every
              product blends clinical expertise with robust engineering.
            </p>

            <Badge bgColor="#bce9ea" textColor="#111">Featured Solutions:</Badge>

            <div className={styles.productGrid}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  cardBg={product.cardBg}
                  textColor={product.textColor}
                />
              ))}
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
