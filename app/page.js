import Hero from "./Components/Hero";
import HeroLogo from "./Components/HeroLogo";
import Services from "./Components/Services";
import Success from "./Components/Success";
import TechStack from "./Components/TechStack";

export default function Home() {
  return (
    <>
      <Hero/>
      <HeroLogo/>
      <Services/>
      <TechStack/>
      <Success/>
    </>
  );
}
