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
    </>
  );
}

export default Home;