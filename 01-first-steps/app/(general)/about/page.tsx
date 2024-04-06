import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page Description",
};

const AboutPage = () => {
  return <span className="text-5xl">AboutPage</span>;
};

export default AboutPage;
