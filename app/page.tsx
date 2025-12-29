import Navbar from "./Navbar";
import Hero from "./Hero";
import DataVisualization from "./DataVisualization";
import FeatureGrid from "./FeatureGrid";
import ComplianceFooter from "./ComplianceFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-space">
      <Navbar />
      <Hero />
      <DataVisualization />
      <FeatureGrid />
      <ComplianceFooter />
    </main>
  );
}
