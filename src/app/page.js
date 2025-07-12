'use client'; // This directive marks the component as a Client Component

import React, { useEffect } from 'react';

// Main App component
const App = () => {
  // Array of section data, mapping to the original 5 pages
  const sections = [
    {
      id: "frustration",
      title: "Tired of fumbling for cash or cards?",
      body: "Slow transactions. Bulky wallets. The hassle of change. There's a simpler way to pay.",
      image: "https://placehold.co/600x400/FEE2E2/EF4444?text=Frustrated+User",
      alt: "Person at checkout looking frustrated while searching for cash or cards."
    },
    {
      id: "solution",
      title: "Hello, Easy Pay!",
      body: "Introducing GTB Bank Mobile Pay – your wallet, now on your phone. Fast, secure, and always at your fingertips.",
      image: "https://placehold.co/600x400/DBEAFE/3B82F6?text=Smartphone+with+App",
      alt: "Sleek smartphone displaying a bank app logo on its screen."
    },
    {
      id: "convenience",
      title: "Tap, Pay, Go!",
      body: "Imagine breezing through checkouts. No more waiting. Just a quick tap from your smartphone to complete your purchases. Payments made simple.",
      image: "https://placehold.co/600x400/D1FAE5/10B981?text=Tap+to+Pay",
      alt: "A hand holding a smartphone near a payment terminal, indicating a successful mobile payment."
    },
    {
      id: "security",
      title: "Your Money, Safer Than Ever.",
      body: "With GTB Bank Mobile Pay, every transaction is protected by advanced security features and encryption. Pay confidently, anywhere you see the mobile pay symbol.",
      image: "https://placehold.co/600x400/E0E7FF/6366F1?text=Secure+Payment",
      alt: "A shield or lock icon overlaid on a phone screen, symbolizing security."
    },
    {
      id: "get-started",
      title: "Ready for Smarter Payments?",
      body: "Download the GTB Bank app today or visit GTB Bank's Website/Branch to set up your mobile pay and transform how you spend. Experience the future of banking!",
      image: "https://placehold.co/600x400/FFFBEB/F59E0B?text=Download+App",
      alt: "A clear image of a bank's mobile app icon or a smartphone showing the app's setup screen."
    },
  ];

  // SEO Data for the page
  const seoData = {
    title: "GTB Bank Mobile Pay - Fast, Secure, Easy Payments",
    description: "Experience the future of banking with GTB Bank Mobile Pay. Tap, pay, and go with secure and convenient smartphone payments.",
    keywords: "mobile pay, bank, digital wallet, secure payments, easy pay, smartphone banking, GTB Bank",
    url: "https://www.yourbank.com/mobile-pay-ad", // Replace with your actual page URL
    ogTitle: "GTB Bank Mobile Pay",
    ogDescription: "Tap, pay, and go with GTB Bank Mobile Pay – your secure digital wallet.",
    ogImage: "https://placehold.co/1200x630/DBEAFE/3B82F6?text=GTB+Bank+Mobile+Pay+Ad", // A large image for social sharing
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterSite: "@GTBBankTwitter", // Replace with your bank's Twitter handle
    twitterCreator: "@GTBBankTwitter",
    twitterTitle: "GTB Bank Mobile Pay",
    twitterDescription: "Experience fast, secure, and easy payments with GTB Bank Mobile Pay.",
    twitterImage: "https://placehold.co/1200x675/DBEAFE/3B82F6?text=GTB+Bank+Mobile+Pay+Ad", // Image for Twitter card
  };

  useEffect(() => {
    // Store references to elements added to head for cleanup
    const addedElements = [];

    // Set document title
    const titleElement = document.createElement('title');
    titleElement.textContent = seoData.title;
    document.head.appendChild(titleElement);
    addedElements.push(titleElement);

    // Add meta tags
    const metaTags = [
      { name: "description", content: seoData.description },
      { name: "keywords", content: seoData.keywords },
      { property: "og:title", content: seoData.ogTitle },
      { property: "og:description", content: seoData.ogDescription },
      { property: "og:image", content: seoData.ogImage },
      { property: "og:url", content: seoData.url },
      { property: "og:type", content: seoData.ogType },
      { name: "twitter:card", content: seoData.twitterCard },
      { name: "twitter:site", content: seoData.twitterSite },
      { name: "twitter:creator", content: seoData.twitterCreator },
      { name: "twitter:title", content: seoData.twitterTitle },
      { name: "twitter:description", content: seoData.twitterDescription },
      { name: "twitter:image", content: seoData.twitterImage },
    ];

    metaTags.forEach(tagData => {
      const meta = document.createElement('meta');
      for (const key in tagData) {
        meta.setAttribute(key, tagData[key]);
      }
      document.head.appendChild(meta);
      addedElements.push(meta);
    });

    // Add canonical link
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = seoData.url;
    document.head.appendChild(canonicalLink);
    addedElements.push(canonicalLink);

    // Add JSON-LD for structured data
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "GTB Bank", // Replaced with GTB Bank
          "url": seoData.url,
          "logo": "https://placehold.co/200x200/FFFFFF/000000?text=GTB+Bank+Logo", // Replaced with GTB Bank Logo
          "sameAs": [
            "https://www.facebook.com/yourbank", // Replace with your bank's social media links
            "https://twitter.com/yourbank",
            "https://www.linkedin.com/company/yourbank"
          ]
        },
        {
          "@type": "WebPage",
          "name": seoData.title,
          "description": seoData.description,
          "url": seoData.url,
          "publisher": {
            "@id": seoData.url + "#organization" // Reference the Organization
          }
        }
      ]
    });
    document.head.appendChild(schemaScript);
    addedElements.push(schemaScript);

    // Cleanup function: remove added elements when component unmounts
    return () => {
      addedElements.forEach(el => {
        if (el.parentNode) { // Check if element still has a parent before removing
          el.parentNode.removeChild(el);
        }
      });
    };
  }, [seoData]); // Re-run effect if seoData changes (though it's static here)

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Tailwind CSS and Font Import */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      {/* Header Section */}
      <header className="bg-white shadow-md py-4 px-6 md:px-12 flex justify-between items-center fixed w-full top-0 z-20 rounded-b-xl">
        <div className="flex items-center space-x-2">
          {/* Bank Logo Placeholder */}
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
          </svg>
          <span className="text-2xl font-bold text-gray-800">GTB Bank</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#frustration" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">Home</a></li>
            <li><a href="#get-started" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">Get Started</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Sections */}
      <main className="pt-20"> {/* Padding top to account for fixed header */}

        {/* Section 1: The Frustration (Hero Section) */}
        <section id={sections[0].id} className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 text-center flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight animate-fade-in-down">
              {sections[0].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed animate-fade-in-up">
              {sections[0].body}
            </p>
            <div className="flex justify-center animate-zoom-in">
              <img
                src={sections[0].image}
                alt={sections[0].alt}
                className="rounded-xl shadow-xl max-w-full h-auto border-4 border-white transform transition-transform duration-500 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found"; }}
              />
            </div>
          </div>
        </section>

        {/* Section 2: The Solution Arrives */}
        <section id={sections[1].id} className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                {sections[1].title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {sections[1].body}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={sections[1].image}
                alt={sections[1].alt}
                className="rounded-xl shadow-lg max-w-full h-auto transform transition-transform duration-500 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found"; }}
              />
            </div>
          </div>
        </section>

        {/* Section 3: Speed & Convenience */}
        <section id={sections[2].id} className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="md:w-1/2 flex justify-center">
              <img
                src={sections[2].image}
                alt={sections[2].alt}
                className="rounded-xl shadow-lg max-w-full h-auto transform transition-transform duration-500 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found"; }}
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                {sections[2].title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {sections[2].body}
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Secure & Smart */}
        <section id={sections[3].id} className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                {sections[3].title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {sections[3].body}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={sections[3].image}
                alt={sections[3].alt}
                className="rounded-xl shadow-lg max-w-full h-auto transform transition-transform duration-500 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found"; }}
              />
            </div>
          </div>
        </section>

        {/* Section 5: Get Started Today! (Call to Action) */}
        <section id={sections[4].id} className="py-16 md:py-24 bg-gradient-to-br bg-blue-700 from-blue-600 to-indigo-700 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              {sections[4].title}
            </h2>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              {sections[4].body}
            </p>
            <a
              href="#" // Placeholder for actual download/website link
              className="inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              Download the App Now!
            </a>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <div className="container mx-auto px-4">
          <p className="mb-2">&copy; {new Date().getFullYear()} GTB Bank. All rights reserved.</p>
          <p>123 Bank Street, City, Country</p>
          <p>Contact: <a href="mailto:info@yourbank.com" className="hover:underline">info@yourbank.com</a></p>
        </div>
      </footer>
    </div>
  );
};

export default App;
