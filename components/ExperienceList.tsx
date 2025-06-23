"use client";

import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const experiences = [
  {
    title: "Full-stack Developer",
    company: {
      name: "Softylines",
      url: "https://softylines.com",
      logo: "/logos/softy.webp",
    },
    banner: "/banners/softylines-banner.jpg",
    gradient: "from-purple-200 via-pink-100 to-white",
    date: "Jan 2022 – Present",
    location: "Sousse, Tunisia",
    description:
      "Led frontend development and contributed to backend integrations across various SaaS platforms. Worked as a frontend developer on multiple projects while mentoring and guiding new team members.",
    bullets: [
      "Implemented Scrum methodology and served as Scrum Master for multiple development teams.",
      "Provided one-on-one consulting services to both local and international clients.",
      "Developed and optimized multiple dashboards for LMS, e-commerce, and financial platforms.",
      "Led SEO initiatives resulting in top Google rankings for various products.",
      "Optimized application performance to handle large-scale data processing.",
      "Integrated complex backend systems and APIs while collaborating with cross-functional teams.",
      "Mentored junior developers and conducted code reviews to maintain code quality standards.",
      "Implemented CI/CD pipelines and automated testing processes to improve development workflow.",
      "Created comprehensive technical documentation and knowledge base for team reference.",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "SASS",
      "Material-UI",
      "Design Systems",
      "SEO",
      "Frontend Development",
      "Backend Integration",
      "API Development",
      "MongoDB",
      "NestJS",
      "Supabase",
      "React Native",
      "Testing",
      "Scrum/Agile",
    ],
    recommendation: {
      text: "An exceptional team player and leader who took ownership of critical frontend initiatives.",
      author: "Softylines CTO",
    },
    relatedProjects: [
      {
        title: "Ranktip",
        image: "/projects/perfomance.jpg",
        description:
          "A SEMrush-style platform for keyword tracking and audits.",
        link: "https://ranktip.com/login/",
      },
      {
        title: "Takana",
        image: "/projects/takana.jpg",
        description:
          "A comprehensive Learning Management System (LMS) platform for educational institutions in Senegal.",
        link: "https://takanaacademy.com/",
      },
      {
        title: "Softylines Landing Page",
        image: "/projects/softylines.png",
        description: "Main company landing page built with Next.js and SCSS.",
        link: "https://softylines.com/",
      },
    ],
  },
  {
    title: "Freelance Full-stack Developer",
    company: {
      name: "Upwork",
      url: "https://www.upwork.com",
      logo: "/logos/upwr.png",
    },
    banner: "/banners/upwork-banner.jpg",
    gradient: "from-green-200 via-green-100 to-white",
    date: "2021 - Present",
    location: "Remote",
    description:
      "Delivered diverse freelance projects through Upwork, achieving 'Top Rated' and 'Rising Talent' badges with 100% Job Success Score while ensuring client satisfaction and consistent project success.",
    bullets: [
      "Managed and delivered projects for clients worldwide with 100% job success.",
      "Acted as Scrum Master in collaborative projects involving backend, mobile, and frontend teams.",
      "Created a meditation app focusing on UX and intuitive design.",
      "Worked on the Bioverse platform and build some complex animations and interactive visualizations.",
      "Worked as Scrum Master on a barber scheduling platform, developing mobile, web, and backoffice versions with role-based access and real-time coordination.",
    ],
    tags: [
      "Freelance",
      "Scrum",
      "React",
      "Node.js",
      "MongoDB",
      "UI/UX",
      "Project Requirements",
      "Remote",
      "React Native",
      "Web Dev",
      "Mobile Dev",
      "Full-stack",
    ],
    recommendation: {
      text: "Mohamed Ali is incredibly collaborative and consistently works hard to deliver on his promises. It was great working with him. I highly recommend Mohamed for any software engineering projects.",
      author: "Multiple Clients on Upwork",
    },
    relatedProjects: [
      {
        title: "Bioverse Platform",
        image: "/projects/bioverse.jpg",
        description: "Animated product platform for bio-data visualization.",
        link: "#",
      },
    ],
  },
  {
    title: "Technical Mentor",
    company: {
      name: "SoftySkills",
      url: "https://softyskills.com",
      logo: "/logos/softyeducation.png",
    },
    banner: "/banners/softyskills-banner.jpg",
    gradient: "from-yellow-200 via-orange-100 to-white",
    date: "2023 – Present",
    location: "Remote",
    description:
      "Mentored junior developers across full-stack projects and guided them through real-world app development.",
    bullets: [
      "Led mentorship on 3 real projects: AI transcription tool, recruitment app, and event planner.",
      "Guided 5 students in 2024 and 8 students in 2025, all graduating with honors.",
      "Implemented backend solutions using Supabase, MongoDB, and PostgreSQL.",
      "Taught Docker containerization and deployment best practices.",
      "Integrated AI technologies including YOLO v8, Vosk, and Whisper for advanced features.",
      "Received official certification in Technical Mentorship from SoftySkills.",
      "Promoted best practices in Git, CI/CD, and Scrum through hands-on sessions.",
      "Focused on scalable architectures, clean code, and full deployment pipelines.",
    ],
    tags: [
      "Mentorship",
      "Full-stack",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Backend Development",
      "Serverless",
      "Vosk",
      "FastAPI",
      "YOLO v8",
      "AI",
      "Fine-tuning",
      "Frontend",
      "Web Applications",
      "RH",
    ],
    recommendation: {
      text: "A brilliant mentor whose guidance helped students build production-grade applications.",
      author: "SoftySkills Training Lead",
    },
    relatedProjects: [
      {
        title: "AI Transcription Tool",
        image: "/projects/transcribe.png",
        description: "A tool for real-time AI-powered audio transcription.",
        link: "#",
      },
      {
        title: "Event Planner App",
        image: "/projects/partyplanner.png",
        description: "A collaborative event planning and scheduling app.",
        link: "#",
      },
    ],
  },
  {
    title: "Full-stack Developer",
    company: {
      name: "TakiAcademy",
      url: "https://takiacademy.com",
      logo: "/logos/takiacademy.jpg",
    },
    banner: "/banners/taki-banner.jpg",
    gradient: "from-blue-200 via-blue-100 to-white",
    date: "Jan 2021 – Jan 2022",
    location: "Remote",
    description:
      "Worked on internal and external LMS platforms, enhancing recruitment software, course functionality, and performance.",
    bullets: [
      "Completed a 6-month internship followed by 6 months of full-time employment.",
      "Developed the RHRcruitment platform, including job posting and application workflows.",
      "Improved admin experience with real-time application updates and status tracking.",
      "Used React, Node.js, and MongoDB for scalable full-stack development.",
      "Collaborated with stakeholders and product teams for UI/UX refinement.",
    ],
    tags: ["React", "Node.js", "MongoDB", "Recruitment", "LMS"],
    recommendation: {
      text: "Highly collaborative and technically sharp developer who contributed significantly to our LMS projects.",
      author: "TakiAcademy Product Team",
    },
    relatedProjects: [
      {
        title: "RHRcruitment Platform",
        image: "/projects/rh.jpg",
        description:
          "A recruitment platform for job posting and application workflows.",
        link: "https://recruitment.softylines.com/",
      },
      {
        title: "RHRcruitment Back-office",
        image: "/projects/rh.jpg",
        description:
          "A recruitment platform back-office for job posting and application workflows.",
        link: "https://recruitment.softylines.com/",
      },
    ],
  },
];

export default function ExperienceList() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = experiences[selectedIdx];
  const [fadeKey, setFadeKey] = useState(0);

  function handleSelect(idx: number) {
    setFadeKey((k) => k + 1);
    setSelectedIdx(idx);
  }

  return (
    <section>
      <h2 className="text-2xl font-sm mb-1 text-black">Experiences</h2>
      <p className="text-1xl font-medium text-slate-400 mb-8">
        I have worked with a lot of companies and projects, here are some of
        them.
      </p>

      <div className="mb-20 mx-8">
        <div className="flex items-center justify-between relative">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2"></div>

          {/* Company logos */}
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative z-10">
              <div
                className={`w-16 h-16 rounded-xl bg-white p-2 shadow-md border-2 transition-all duration-300 hover:scale-110 cursor-pointer ${
                  idx === selectedIdx ? "border-blue-500" : "border-gray-100"
                }`}
                onClick={() => handleSelect(idx)}
              >
                <Image
                  src={exp.company.logo}
                  alt={exp.company.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-gray-500">
                {exp.date}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Job List */}
        <div className="md:w-1/3 flex flex-col gap-3">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`text-left rounded-xl border px-4 py-3 shadow-sm flex items-center gap-3 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400/50 hover:border-blue-400/60 hover:bg-blue-50/30 ${
                idx === selectedIdx
                  ? "border-blue-600 bg-blue-50 text-blue-900 shadow-md"
                  : "border-gray-200 bg-white text-gray-800"
              }`}
            >
              <Image
                src={exp.company.logo}
                alt={exp.company.name}
                width={32}
                height={32}
                className="rounded"
              />
              <div>
                <div className="font-semibold text-base">{exp.title}</div>
                <div className="text-xs text-gray-500">{exp.company.name} </div>
                <div className="text-xs text-gray-400">{exp.date}</div>
              </div>
            </button>
          ))}
        </div>
        <div className="md:w-2/3 bg-white rounded-2xl p-0 border border-gray-100 shadow min-h-[400px] flex flex-col overflow-hidden">
          <div
            key={fadeKey}
            className="animate-fadein flex flex-col"
            style={{ animationDuration: "400ms" }}
          >
            <div className="relative w-full">
              <div
                className={`h-24 md:h-28 w-full rounded-t-2xl bg-gradient-to-r ${selected.gradient} relative overflow-hidden`}
              ></div>
              <div className="absolute left-6 -bottom-8 z-10">
                <div className="bg-white rounded-xl shadow-lg p-2 w-16 h-16 flex items-center justify-center">
                  <Image
                    src={selected.company.logo}
                    alt={selected.company.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="pt-10 pl-28">
              <h3 className="text-xl font-bold text-black">{selected.title}</h3>
              <a
                href={selected.company.url}
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {selected.company.name}
              </a>
            </div>
            <div className="pt-4 px-6 pb-6">
              <div className="flex items-center gap-4 text-gray-500 text-sm mb-2">
                <span className="font-semibold">{selected.date}</span>
                <span>•</span>
                <span>{selected.location}</span>
              </div>
              <p className="mb-3 text-base text-gray-700 font-medium">
                {selected.description}
              </p>
              <ul className="list-disc list-inside mb-3 text-base text-gray-800">
                {selected.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2 mb-6">
                {selected.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Related Projects Section */}
              {selected.relatedProjects &&
                selected.relatedProjects.length > 0 && (
                  <div className="mt-4 mb-4">
                    <h4 className="text-lg font-bold mb-3">Related Projects</h4>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {selected.relatedProjects.map((proj, i) => (
                        <a
                          key={i}
                          href="/projects"
                          className="min-w-[220px] max-w-[220px] bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow flex-shrink-0 flex flex-col cursor-pointer"
                        >
                          <div className="h-28 w-full rounded-t-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                            <Image
                              src={proj.image}
                              alt={proj.title}
                              width={220}
                              height={112}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="p-3 flex-1 flex flex-col">
                            <div className="font-semibold text-base mb-1 truncate">
                              {proj.title}
                            </div>
                            <div className="text-xs text-gray-500 line-clamp-2">
                              {proj.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              {selected.recommendation && (
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded flex items-start gap-3">
                  <FaQuoteLeft className="text-blue-400 text-2xl mt-1" />
                  <div>
                    <div className="italic text-gray-700 mb-1">
                      &ldquo;{selected.recommendation.text}&rdquo;
                    </div>
                    <div className="text-sm text-blue-900 font-semibold">
                      - {selected.recommendation.author}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-fadein {
          animation: fadein 0.4s;
        }
        @keyframes fadein {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
