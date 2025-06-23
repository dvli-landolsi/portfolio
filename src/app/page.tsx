import { Metadata } from "next";
import ExperienceList from "../../components/ExperienceList";

export const metadata: Metadata = {
  title: "Portfolio | Home",
  description:
    "Welcome to my portfolio. I'm a Full-Stack Developer showcasing my experience, projects, and skills.",
  openGraph: {
    title: "Portfolio | Home",
    description:
      "Welcome to my portfolio. I'm a Full-Stack Developer showcasing my experience, projects, and skills.",
    images: ["/profile.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Home",
    description:
      "Welcome to my portfolio. I'm a Full-Stack Developer showcasing my experience, projects, and skills.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return <ExperienceList />;
}
