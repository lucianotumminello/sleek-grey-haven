
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LineChart } from "lucide-react";
import TranslatedText from "@/components/TranslatedText";
import { useLanguage } from "@/contexts/LanguageContext";
import CoreCompetencies from "@/components/CoreCompetencies";
import { Helmet } from "react-helmet-async";

const ProfessionalJourney = () => {
  const { t } = useLanguage();
  
  // Set page title for better SEO
  useEffect(() => {
    document.title = "Career | Luciano Tumminello";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Career | Luciano Tumminello</title>
        <meta name="description" content="Explore Luciano Tumminello's professional career journey from SEM Specialist at Sensis to Chief Operating Officer at Spartan Health, with expertise in marketing, operations, and digital transformation across APAC." />
        <meta name="keywords" content="Luciano Tumminello, career journey, professional experience, COO, marketing director, digital marketing, operations management" />
        <link rel="canonical" href="https://lucianotumminello.com/career" />
      </Helmet>
      
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <section id="career-journey" className="mb-16">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">
              <TranslatedText textKey="nav.journey" />
            </h1>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
              <LineChart className="mr-2 h-6 w-6 text-primary" />
              <TranslatedText textKey="about.journey" />
            </h2>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-gray-200 pb-6" itemScope itemType="https://schema.org/WorkPosition">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="font-bold text-lg" itemProp="jobTitle">Chief Operating Officer at Spartan Health</h3>
                <p className="text-gray-600 text-justify" itemProp="description">
                  <TranslatedText textKey="job.spartan" />
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-200 pb-6" itemScope itemType="https://schema.org/WorkPosition">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="font-bold text-lg" itemProp="jobTitle">Marketing Director at Slow</h3>
                <p className="text-gray-600 text-justify" itemProp="description">
                  <TranslatedText textKey="job.slow" />
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-200 pb-6" itemScope itemType="https://schema.org/WorkPosition">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="font-bold text-lg" itemProp="jobTitle">Co-Founder & Managing Director of 444 Media, Inc.</h3>
                <p className="text-gray-600 text-justify" itemProp="description">
                  <TranslatedText textKey="job.444" />
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-200 pb-6" itemScope itemType="https://schema.org/WorkPosition">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="font-bold text-lg" itemProp="jobTitle">Regional Digital Marketing Consultant at Greenpeace Southeast Asia</h3>
                <p className="text-gray-600 text-justify" itemProp="description">
                  <TranslatedText textKey="job.greenpeace" />
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-200 pb-6" itemScope itemType="https://schema.org/WorkPosition">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="font-bold text-lg" itemProp="jobTitle">Cluster Director of Marketing at Accor</h3>
                <p className="text-gray-600 text-justify" itemProp="description">
                  <TranslatedText textKey="job.accor" />
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-200 pb-6" itemScope itemType="https://schema.org/WorkPosition">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="font-bold text-lg" itemProp="jobTitle">Head of Client Services at Y-Digital</h3>
                <p className="text-gray-600 text-justify" itemProp="description">
                  <TranslatedText textKey="job.ydigital.retention" />
                  <br />
                  <TranslatedText textKey="job.ydigital.relationships" />
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-200 pb-6" itemScope itemType="https://schema.org/WorkPosition">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="font-bold text-lg" itemProp="jobTitle">Planning Director at Lion & Lion</h3>
                <p className="text-gray-600 text-justify" itemProp="description">
                  <TranslatedText textKey="job.lion.strategies" />
                  <br />
                  <TranslatedText textKey="job.lion.campaigns" />
                  <br />
                  <TranslatedText textKey="job.lion.analytics" />
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-200 pb-6" itemScope itemType="https://schema.org/WorkPosition">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="font-bold text-lg" itemProp="jobTitle">Account Manager at DWA</h3>
                <p className="text-gray-600 text-justify" itemProp="description">
                  <TranslatedText textKey="job.dwa.strategies" />
                  <br />
                  <TranslatedText textKey="job.dwa.relationships" />
                  <br />
                  <TranslatedText textKey="job.dwa.liaison" />
                  <br />
                  <TranslatedText textKey="job.dwa.vendors" />
                  <br />
                  <TranslatedText textKey="job.dwa.project" />
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-200 pb-6" itemScope itemType="https://schema.org/WorkPosition">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="font-bold text-lg" itemProp="jobTitle">Business Development Manager (ASEAN) at Cadreon (IPG Mediabrands)</h3>
                <p className="text-gray-600 text-justify" itemProp="description">
                  <TranslatedText textKey="job.cadreon" />
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-gray-200" itemScope itemType="https://schema.org/WorkPosition">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="font-bold text-lg" itemProp="jobTitle">SEM Specialist at Sensis</h3>
                <p className="text-gray-600 text-justify" itemProp="description">
                  <TranslatedText textKey="job.sensis" />
                </p>
              </div>
            </div>
          </section>
        </div>
        
        <CoreCompetencies />
      </main>
      <Footer />
    </div>
  );
};

export default ProfessionalJourney;
