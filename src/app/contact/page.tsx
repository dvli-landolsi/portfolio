import { Metadata } from "next";
import Contacts from "../../../components/Contacts";
import PersonaJourneyLayout from "../../../components/PersonalJourney";
import Testimonials from "../../../components/Testimonials";

export const metadata: Metadata = {
  title: "Contact & Services",
  description:
    "Get in touch for expert software development services. I specialize in frontend, backend, and full-stack solutions. Let's discuss your project.",
  openGraph: {
    title: "Contact & Services",
    description:
      "Get in touch for expert software development services. I specialize in frontend, backend, and full-stack solutions. Let's discuss your project.",
    images: ["/profile.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Services",
    description:
      "Get in touch for expert software development services. I specialize in frontend, backend, and full-stack solutions. Let's discuss your project.",
    images: ["/profile.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <PersonaJourneyLayout />
      <Testimonials />
      <Contacts />
    </>
  );
}
