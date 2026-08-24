import About from "@/components/About";
import Collections from "@/components/Collections";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Collections />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
