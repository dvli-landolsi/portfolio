"use client";
import { useState } from "react";
import Image from "next/image";

const articles = [
  {
    platform: "Medium",
    date: "12/06/2024",
    title:
      "Creating a Password Signup With Profiles table (Triggers and Functions)",
    description:
      "In this article, we’ll walk you through setting up a password-based signup and sign-in system using Supabase. We’ll cover the essential steps, including understanding the user table in the auth schema, handling user registration, introducing the SQL editor, creating a profile table, and using triggers and functions for automation...",
    image: "/articles/supa.webp",
    link: "https://medium.com/@Medalilandolsi/supabase-creating-a-password-signup-with-profiles-table-triggers-and-functions-42a8c40b6b27",
  },
  {
    platform: "Medium",
    date: "03/07/2024",
    title: "Automating Random Reviewer Assignment in GitLab CI/CD",
    description:
      "In modern software development, continuous integration and continuous deployment (CI/CD) pipelines play a crucial role in maintaining code quality and accelerating delivery cycles.",
    image: "/articles/neww.webp",
    link: "https://medium.com/@Medalilandolsi/automating-random-reviewer-assignment-in-gitlab-ci-cd-539fd35aee71",
  },
  {
    platform: "Medium",
    date: "03/07/2024",
    title: "Permission Management in a React TypeScript Application",
    description:
      "Managing permissions in a React application is essential for controlling access to different parts of the application based on user roles or permissions. Here’s an overview of how you can implement permission management, featuring three approaches:",
    image: "/articles/403.webp",
    link: "https://medium.com/@Medalilandolsi/permission-management-in-a-react-typescript-application-176a6841f617",
  },
];

const repos = [
  {
    name: "Audio Transcribe - Text to Speech Converter",
    description:
      "A modern, accessible text-to-speech converter built with React and TypeScript.",
    stars: 3,
    language: "React, TypeScript",
    image: "/repos/text.jpg",
    link: "https://github.com/dvli-landolsi/react-text-to-speech",
  },
  {
    name: "pharmaNear",
    description:
      "A modern web application to help users find nearby pharmacies in Tunisia, with real-time information about opening hours and availability.",
    stars: 3,
    language: "React, TypeScript, Supabase",
    image: "/repos/text.jpg",
    link: "https://github.com/dvli-landolsi/pharmaNear",
  },
  {
    name: "sveltekit-videocall-messegera",
    description:
      "a lightweight real-time communication app built with SvelteKit, offering video calling and instant messaging features. ",
    stars: 3,
    language: "Svelete, TypeScript",
    image: "/repos/videocall.jpg",
    link: "https://github.com/yourusername/tailwind-dashboard",
  },

  {
    name: "Virtualized List Component",
    description:
      "a Virtualized List Component, designed to efficiently render large lists of items using virtualization techniques",
    stars: 3,
    language: "React, TypeScript",
    image: "/repos/videocall.jpg",
    link: "https://github.com/yourusername/tailwind-dashboard",
  },
];

const certifications = [
  {
    title: "Foundations of Project Management",
    issuer: "Google",
    date: "20 mar 2024",
    image: "/certs/google.png",
    link: "https://www.coursera.org/account/accomplishments/verify/ASFCEB2YCRCS",
  },
  {
    title: "Advanced React",
    issuer: "Meta",
    date: "14 nov 2023",
    image: "/certs/meta.webp",
    link: "https://www.coursera.org/account/accomplishments/verify/3AUKXNCJSYHV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },

  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "15 sep 2024",
    image: "/certs/nvidia.svg",
    link: "https://www.linkedin.com/in/mohamed-ali-landolsi-0a23a4359/details/certifications/1743460015198/single-media-viewer/?profileId=ACoAAFk5eXoBHIZ4oZ0n5pU7szJ_hu4fugVP5wI",
  },

  {
    title: "Requirements of Javascript",
    issuer: "Certiport",
    date: "20 mai 2025",
    image: "/certs/certiport.jpg",
    link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&format=pdf&id=469",
  },

  {
    title: "EF SET Certificate (English C2 Proficient)",
    issuer: "EF SET",
    date: "28 Apr 2025",
    image: "/certs/ef.jpg",
    link: "https://cert.efset.org/en/m6A5TX",
  },
];

export default function Ressources() {
  const [activeTab, setActiveTab] = useState("articles");

  return (
    <section>
      <h2 className="mb-1 text-2xl font-sm text-black">
        Articles, Repositories & Certifications
      </h2>
      <p className="text-1xl font-medium text-slate-400 mb-8">
        Explore my collection of technical articles, contributions, and
        professional certifications.
      </p>
      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-gray-200">
        <button
          className={`px-6 py-2 text-base font-medium rounded-t-lg transition-colors duration-200 focus:outline-none  ${
            activeTab === "articles"
              ? "bg-white border-x border-t border-b-0 border-blue-500 text-blue-600 shadow-sm -mb-px"
              : "bg-gray-100 text-gray-500 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("articles")}
        >
          Articles
        </button>
        <button
          className={`px-6 py-2 text-base font-medium rounded-t-lg transition-colors duration-200 focus:outline-none  ${
            activeTab === "repos"
              ? "bg-white border-x border-t border-b-0 border-blue-500 text-blue-600 shadow-sm -mb-px"
              : "bg-gray-100 text-gray-500 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("repos")}
        >
          Repos
        </button>
        <button
          className={`px-6 py-2 text-base font-medium rounded-t-lg transition-colors duration-200 focus:outline-none  ${
            activeTab === "certifications"
              ? "bg-white border-x border-t border-b-0 border-blue-500 text-blue-600 shadow-sm -mb-px"
              : "bg-gray-100 text-gray-500 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("certifications")}
        >
          Certifications
        </button>
      </div>
      {/* Tab Content */}
      {activeTab === "articles" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow border border-gray-100 flex flex-col md:flex-row items-stretch overflow-hidden"
            >
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded font-semibold text-xs">
                      {article.platform}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      {article.date}
                    </span>
                  </div>
                  <h2 className=" text-lg mb-2 line-clamp-2 text-black">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {article.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-auto">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
                  >
                    Read Article
                  </a>
                </div>
              </div>
              <div className="w-full h-full md:w-40  p-2 rounded-2xl overflow-hidden flex-shrink-0 relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover h-full rounded-2xl md:rounded-b-none md:rounded-r-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "repos" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {repos.map((repo, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow border border-gray-100 flex flex-col md:flex-row items-stretch overflow-hidden"
            >
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded font-semibold text-xs">
                      {repo.language}
                    </span>
                  </div>
                  <h2 className="font-sm text-lg mb-2 line-clamp-2 text-black">
                    {repo.name}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {repo.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-auto">
                  <a
                    href={repo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
                  >
                    View Repo
                  </a>

                  <span className="text-xs text-gray-500 ml-2">
                    ⭐ {repo.stars} &nbsp;|&nbsp;
                  </span>
                </div>
              </div>
              <div className="w-full md:w-40 p-2 rounded-2xl overflow-hidden flex-shrink-0 relative">
                <Image
                  src={repo.image}
                  alt={repo.name}
                  fill
                  className="object-cover rounded-b-2xl md:rounded-b-none md:rounded-r-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "certifications" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow border border-gray-100 flex flex-col md:flex-row items-stretch overflow-hidden"
            >
              <div className="w-full h-full md:w-40 flex-shrink-0 relative">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain bg-gray-50 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded font-semibold text-xs">
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      {cert.date}
                    </span>
                  </div>
                  <h2 className="text-lg font-medium mb-2 line-clamp-2 text-black">
                    {cert.title}
                  </h2>
                </div>
                <div className="flex items-center gap-2 mt-auto">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
