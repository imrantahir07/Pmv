import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import Machinery from './components/Machinery';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      {/* Premium preloader showing loading percentage with customized SVG */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="min-h-screen bg-[#272B33] text-white flex flex-col font-sans antialiased overflow-x-hidden selection:bg-[#F5B400] selection:text-[#272B33]">
          
          {/* Main sticky navigation bar */}
          <Header onOpenQuote={() => setIsQuoteOpen(true)} />

          {/* Full Screen slides presentation section */}
          <Hero onOpenQuote={() => setIsQuoteOpen(true)} />

          <main className="flex-grow">
            {/* Split corporate summary and competencies */}
            <About />

            {/* Comprehensive search-filtered civil service grid */}
            <Services />

            {/* Diverse infrastructure capability domains */}
            <Capabilities />

            {/* Heavy equipment and JCB backhoe fleet grid */}
            <Machinery />

            {/* Critical path 6-step project roadmap */}
            <Process />

            {/* Highlighting why clients choose PMV Infra + numeric statistics */}
            <WhyChooseUs />

            {/* Photography grid showcasing active road/bridge assets */}
            <Gallery />

            {/* Contact details, map container and message intake form */}
            <Contact />
          </main>

          {/* Structured End-Cap */}
          <Footer />

          {/* Persistent Floating Quick Channels */}
          <WhatsAppFloating />

          {/* High-end custom quote proposal generator */}
          <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

        </div>
      )}
    </>
  );
}
