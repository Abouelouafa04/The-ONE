import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Whyus from "../components/Whyus/Whyus";
import Programs from "../components/Programs/Programs";
import Pricing from "../components/Pricing/Pricing";
import Articles from "../components/Articles/Articles";
import Testimonials from "../components/Testimonials/Testimonials";
import Cta from "../components/Cta/Cta";
import Footer from "../components/Footer/Footer";



const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Whyus />
        <Programs />
        <Pricing />
        <Articles />
        <Testimonials />
        <Cta />
        <Footer />
    </div>
    );
};

export default Home;
