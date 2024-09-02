import React from "react";
import Layout from "../Components/Layout";
import CustomerSupport from "./CustomerSupport";
import ClientTestimonial from "./ClientTestmonial";
import StepsToPlay from "./StepsToPlay";
import ProvideFeatures from "./ProvidesFeatures";
import BrandPartners from "./BrandPartners";
import WhyJumblebook from "./WhyJumblebook";


const HomePage = () => {
  return (
    <Layout>
      <CustomerSupport />
      <BrandPartners />
      <StepsToPlay />
      <ProvideFeatures />
      <ClientTestimonial />
      <WhyJumblebook />
    </Layout>
  );
};

export default HomePage;
