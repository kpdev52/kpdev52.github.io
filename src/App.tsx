import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Pillars } from "./components/Pillars";
import { ScrollProgress } from "./components/ScrollProgress";
import { Statement } from "./components/Statement";
import { Toolkit } from "./components/Toolkit";
import { Work } from "./components/Work";
import { useScrollReveal, useSmoothScroll } from "./hooks/useMotion";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  useSmoothScroll();
  useScrollReveal();

  return (
    <>
      <ScrollProgress />
      <Nav theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Statement />
        <Pillars />
        <Work />
        <Experience />
        <Toolkit />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
