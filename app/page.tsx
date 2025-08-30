import Landing from "./components/landing/landing";
import Topper from "./components/landing/topper";
import GradientBG from "./components/landing/GradientBG";
import About from "./components/landing/About";

export default function Home() {
  return (
    <>
      
      <Landing />
      <Topper text="About Us" />
      <About />
      <GradientBG />
    </>
  );
}