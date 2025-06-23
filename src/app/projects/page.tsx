import { Metadata } from "next";
import Projects from "../../../components/Projects";

export const metadata: Metadata = {
  title: "Portfolio | Projects",
  description:
    "Explore a collection of my software development projects, showcasing skills in React, Next.js, TypeScript, Django, and more. See my work in action.",
  openGraph: {
    title: "Projects Portfolio",
    description:
      "Explore a collection of my software development projects, showcasing skills in React, Next.js, TypeScript, Django, and more. See my work in action.",
    images: ["/projects.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Portfolio",
    description:
      "Explore a collection of my software development projects, showcasing skills in React, Next.js, TypeScript, Django, and more. See my work in action.",
    images: ["/projects.png"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
    </>
  );
}
