import AppPreview from "./_components/AppPreview";
import Footer from "./_components/Footer";
import FrequentlyAsked from "./_components/FrequentlyAsked";
import Hero from "./_components/hero";
import Quote from "./_components/Quote";
import TheVision from "./_components/TheVision";
import ThreeSteps from "./_components/ThreeSteps";
export default function Home() {
  return (
    <>
      <Hero />
      <AppPreview />
      <Quote />
      <ThreeSteps />
      <TheVision />
      <FrequentlyAsked />
      <Footer />
    </>
  );
}
