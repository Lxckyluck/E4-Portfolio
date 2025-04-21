import AboutMe from "@/components/layout/aboutMe";
import HomeHero from "@/components/homeHero";
import NumberProject from "@/components/layout/numberProject";
import ProjectComp from "@/components/layout/project";

export default function Home() {
  return (
      <main className="bg-gradient-to-t h-full from-gray-900 to-blue-950">
          <HomeHero />
          <AboutMe />
          <NumberProject/>
          <ProjectComp />
      </main>
  );
}
