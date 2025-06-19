import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaStackOverflow,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="sticky top-8 w-full sm:w-72 bg-white rounded-2xl shadow p-6 flex flex-col gap-6 border border-gray-100">
      {/* Profile */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-200">
          <Image src="/profile.jpg" alt="Profile" width={80} height={80} />
        </div>
        <div className="text-center">
          <h2 className="font-bold text-lg">Mohamed Ali Landolsi</h2>
          <p className="text-xs text-gray-500">
            Software Engineer | Front-end Developer | Scrum Master
          </p>
        </div>
      </div>
      {/* About */}
      <div>
        <h3 className="font-semibold text-sm mb-1">About</h3>
        <p className="text-xs text-gray-600">
          Web Developer, Front-End Engineer, and Freelancer . Scrum Master and
          Technical Trainer with expertise in modern JavaScript frameworks and
          agile development methodologies. ...
        </p>
      </div>
      {/* Diplomas */}
      <div>
        <h3 className="font-semibold text-sm mb-1">Diplomas</h3>
        <div className="text-xs text-gray-600 list-disc list-inside">
          <div>
            <a
              href="https://www.polytecsousse.tn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 hover:underline"
            >
              Software Engineer, Polytec Sousse
            </a>
          </div>
          <a
            href="https://horizon-university.tn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 hover:underline"
          >
            Horizon School of Digital Technologies
          </a>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="font-semibold text-sm mb-1">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "React.js",
            "Next.js",
            "Angular",
            "Node.js",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Sass",
            "Tailwind",
            "Jest",
            "Cypress",
            "Docker",
            "Git",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 text-xs px-2 py-1 rounded font-medium text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* social */}
      <div>
        <h3 className="font-semibold text-sm mb-1">Social</h3>
        <ul className="flex flex-col gap-1 text-xs">
          <li>
            <a
              href="https://github.com/dvli-landolsi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline flex items-center gap-2"
            >
              <FaGithub className="text-lg" /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mohamed-ali-landolsi-0a23a4359/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              <FaLinkedin className="text-lg" /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/19631392/medali-landolsi" // Replace with your Stack Overflow ID
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline flex items-center gap-2"
            >
              <FaStackOverflow className="text-lg" /> Stack Overflow
            </a>
          </li>
          <li>
            <a
              href="mailto:medalilandolsi@hotmail.fr"
              className="text-gray-600 hover:underline flex items-center gap-2"
            >
              <FaEnvelope className="text-lg" /> Email
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
