"use client";
import Contacts from "../../../components/Contacts";
import PersonaJourneyLayout from "../../../components/PersonalJourney";
import Testimonials from "../../../components/Testimonials";

export default function ContactPage() {
  return (
    <>
      <PersonaJourneyLayout />
      <Testimonials />
      <Contacts />
    </>
  );
}
