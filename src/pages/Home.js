import React from "react";
import { Header, FirstSection, AboutMe, Project, Card } from "../components";

function Home(props) {
  return (
    <>
      <Header />
      <FirstSection />
      <AboutMe />
      <Project />
      <Card
        title="Africk Technologies Website"
        frameworks={["react", "netlify"]}
        projectLink="https://africk.net/"
      />
      <Card
        title="Yankee Pay Website"
        frameworks={["react"]}
        projectLink="https://stoic-mcnulty-378a6b.netlify.app/"
      />
      <Card
        title="Merchant X"
        frameworks={["angular", "node"]}
        projectLink="https://merchantx-ui.vercel.app/"
      />
      <Card
        title="A Typist Game"
        frameworks={["react", "netlify"]}
        projectLink="https://number-games.netlify.app/"
      />
      <Card
        title="FieldInsight Application"
        frameworks={["react", "redux"]}
        projectLink="https://app.fieldinsight.co/"
      />
      <Card
        title="Visitor Management Solution"
        frameworks={["angular"]}
        projectLink="https://vlogin-staging.azurewebsites.net/"
      />
      <Card
        title="Ha-Shem License on Demand"
        frameworks={["angular"]}
        projectLink="https://csp-renewal-staging.azurewebsites.net/"
      />
    </>
  );
}

export default Home;
