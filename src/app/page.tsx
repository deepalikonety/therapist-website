import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ContactFormWrapper from "@/components/ContactFormWrapper";
import Header from "@/components/Header";
import FAQWrapper from "@/components/FaqWrapper";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <FAQWrapper />
      <ContactFormWrapper />
      <Header />
    </main>
  );
}
