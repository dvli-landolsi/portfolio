import { Metadata } from "next";
import Ressources from "../../../components/Ressources";

export const metadata: Metadata = {
  title: "Portfolio | Resources",
  description: "Explore a collection of my software development resources.",
  openGraph: {
    title: "Resources",
    description: "Explore a collection of my software development resources.",
    images: ["/projects.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources",
    description: "Explore a collection of my software development resources.",
    images: ["/projects.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ResourcesPage() {
  return <Ressources />;
}
