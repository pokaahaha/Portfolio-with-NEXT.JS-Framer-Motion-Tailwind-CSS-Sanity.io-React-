import Header from "@/components/Header";
import Head from "next/head";
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Portfolio App</title>
        </Head>
        {/* Header */}
        <Header />
        {/* Hero */}
        <section id="hero">
          <Hero />
        </section>
        {/* About */}

        {/* Experience */}

        {/* Skills */}

        {/* Projects */}

        {/* Contacts */}
      </div>
    </>
  );
}
