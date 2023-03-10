import Header from "@/components/Header";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
export default function Home() {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
       overflow-y-scroll overflow-x-hidden z-0">
        <Head>
          <title>Portfolio App</title>
        </Head>
        {/* Header */}
        <Header />
        {/* Hero */}
        <section id="#hero" className="snap-center">
          <Hero />
        </section>
        {/* About */}
        <section id="#about" className="snap-center">
          <About />
        </section>
        {/* Experience */}
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>
        {/* Skills */}
        <section id="#skills" className="snap-start">
          <Skills />
        </section>
        {/* Projects */}
        <section id="#projects" className="snap-start">
          <Projects />{" "}
        </section>
        {/* Contacts */}
        <section id="#contact" className="snap-start">
          <ContactMe />
        </section>
      </div>
    </>
  );
}
