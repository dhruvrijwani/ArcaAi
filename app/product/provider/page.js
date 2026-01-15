import Benefits from "./Benefits/Benefits";
import Cta from "./Cta/Cta";
import FeatureComparison from "./FeatureComparison/FeatureComparison";
import ProviderHero from "./Hero/ProviderHero";
import ProductBundles from "./ProductBundles/ProductBundles";
import ProofPoints from "./ProofPoints/ProofPoints";

export default function Provider() {
  return (
    <>
    <ProviderHero />
    <Benefits />
    <ProofPoints />
    <ProductBundles />
    <FeatureComparison />
    <Cta />
    </>
  );
}
