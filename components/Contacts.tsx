import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const contacts = [
  {
    icon: <FaEnvelope className="text-blue-500 text-2xl" />,
    title: "Email me",
    description: "I usually reply within 24 hours.",
    contact: (
      <a
        href="mailto:medalilandolsi@hotmail.fr"
        className="underline font-medium"
      >
        medalilandolsi@hotmail.fr
      </a>
    ),
  },
  {
    icon: <FaPhoneAlt className="text-blue-500 text-2xl" />,
    title: "Call me",
    description: "Mon-Fri from 8am to 6pm.",
    contact: (
      <a href="tel:+21612345678" className="underline font-medium">
        +216 53 950 470
      </a>
    ),
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-500 text-2xl" />,
    title: "Based in Sousse",
    description: "Sousse, Tunisia",
    contact: (
      <a
        href="https://maps.google.com/?q=Sousse,Tunisia"
        target="_blank"
        rel="noopener noreferrer"
        className="underline font-medium"
      >
        View on Google Maps
      </a>
    ),
  },
  {
    icon: <FaLinkedin className="text-blue-500 text-2xl" />,
    title: "Connect on LinkedIn",
    description: "Let&apos;s connect professionally!",
    contact: (
      <a
        href="https://www.linkedin.com/in/mohamed-ali-landolsi-0a23a4359/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline font-medium"
      >
        linkedin.com/in/mohamed-ali-landolsi-0a23a4359
      </a>
    ),
  },
];

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        "service_1156k8i", // Replace with your EmailJS service ID
        "template_czwco2g", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "OAZEDqzcFmAYhzpS-" // Replace with your EmailJS public key
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1  gap-12">
          {/* Contact Information Section */}
          <div>
            <h2 className="text-3xl  text-gray-900 mb-1">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contacts.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-blue-100 p-6 flex flex-col items-start shadow-sm hover:shadow-md transition min-h-[200px]"
                >
                  <div className="mb-4 bg-blue-50 rounded-lg p-3 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="font-bold text-lg text-gray-900 mb-1">
                    {item.title}
                  </div>
                  <div className="text-gray-600 mb-3 text-sm">
                    {item.description}
                  </div>
                  <div className="text-blue-400 text-sm mt-auto">
                    {item.contact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          {/* <div className="hidden lg:block lg:col-span-1">
            <div className="h-full flex items-center justify-center">
              <div className="w-px h-32 bg-gray-300"></div>
            </div>
          </div> */}

          {/* Contact Form Section */}
          <div>
            <h2 className="text-3xl  text-gray-900 mb-8">Send me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder:text-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder:text-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder:text-gray-400"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none placeholder:text-gray-400"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">
                    Failed to send message. Please try again or contact me
                    directly.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
