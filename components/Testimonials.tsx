import { Tooltip } from "antd";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect } from "react";
import { FaQuoteLeft, FaExternalLinkAlt } from "react-icons/fa";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  link?: string;
  linkType?: "upwork" | "linkedin" | "other";
}

const testimonials: Testimonial[] = [
  {
    name: "Chadi Bader",
    role: "Student",
    image: "/profile.jpg",
    text: "I had the pleasure of working with mohamed ali as my supervisor during my final project at university. Throughout the project, he was incredibly supportive and played a major role in helping me overcome coding challenges by providing clear guidance and practical solutions. Thanks to his expertise, the work became much easier and more understandable for me. He is not only an outstanding developer with deep knowledge in the field but also a great mentor who truly cares about helping others succeed. I'm grateful for the opportunity to have worked under his supervision.",
  },
  {
    name: "Benjamin Vergnet",
    role: "Client CEO Tresovista",
    image: "/profile.jpg",
    text: "Mohamed Ali participe activement au développement de @Tresovista. Il est très efficace et performant, c'est très agréable de travailler avec lui !",
  },
  {
    name: "Mhamed Monastiri",
    role: "Collegues",
    image: "/profile.jpg",
    text: "Working with Mohamed Ali is very easy thanks to his communication skills, intelligence, and positive attitude. Collaboration with him is effortless; he pays great attention to detail and consistently delivers excellent work.",
  },
  {
    name: "Marwa Werfelli",
    role: "Collegues",
    image: "/profile.jpg",
    text: "I had the pleasure of working with Mohamed Ali on several projects. He is a smart and reliable frontend developer who consistently delivers clean, high-quality code on time. Mohamed is a great team player, always ready to collaborate and find efficient solutions. I highly recommend him and look forward to working together again.",
  },
  {
    name: "Client Bioverse",
    role: "Upwork Client Bioverse",
    image: "/profile.jpg",
    text: "Mohamed is incredibly collaborative and consistently works hard to deliver on his promises. It was great working with him. I highly recommend Mohamed for any software engineering projects.",
    link: "https://www.upwork.com/freelancers/~01example",
    linkType: "upwork",
  },
  {
    name: "Prashant Pukale",
    role: "Upwork Client Meditation app",
    image: "/profile.jpg",
    text: "Mohamed is extremely pro active and delivers top quality stuff! I am so happy I hired him for my project.",
    link: "https://www.upwork.com/freelancers/~02example",
    linkType: "upwork",
  },
];

export default function Testimonials() {
  const [sliderRefTop, instanceRefTop] = useKeenSlider({
    slides: { perView: 3, spacing: 20 },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 2, spacing: 15 } },
      "(max-width: 640px)": { slides: { perView: 1, spacing: 10 } },
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    mode: "free-snap",
  });

  useEffect(() => {
    const intervalTop = setInterval(() => {
      instanceRefTop.current?.next();
    }, 3000);

    return () => {
      clearInterval(intervalTop);
    };
  }, [instanceRefTop]);

  const truncateText = (text: string, maxLines: number = 4) => {
    const words = text.split(" ");
    const maxWords = maxLines * 8; // Approximate words per line
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  const renderTooltipContent = (testimonial: Testimonial) => (
    <div className="max-w-xs">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-8 h-8 rounded-full object-cover border border-blue-100"
        />
        <div>
          <div className="font-semibold text-white text-sm">
            {testimonial.name}
          </div>
          <div className="text-blue-200 text-xs">{testimonial.role}</div>
        </div>
      </div>
      <p className="text-white text-sm leading-relaxed">{testimonial.text}</p>
    </div>
  );

  const handleTestimonialClick = (testimonial: Testimonial) => {
    if (testimonial.link) {
      window.open(testimonial.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 border-t-2 border-b-2 border-blue-200 relative ">
      {/* Left Shadow */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#ffffff] to-transparent z-10"></div>
      {/* Right Shadow */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#ffffff] to-transparent z-10"></div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 relative ">
          {/* Title */}
          <h2 className="text-3xl md:text-2xl drop-shadow-lg  mb-2 text-center text-black">
            Words of praise
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Discover what clients and colleagues have to say about working with
            me. Their experiences and feedback reflect my commitment to
            delivering exceptional results.
          </p>
          {/* Top Row Slider */}
          <div ref={sliderRefTop} className="keen-slider mt-10 mb-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide flex">
                <Tooltip
                  title={renderTooltipContent(testimonial)}
                  placement="top"
                  color="#5378f7"
                >
                  <div
                    className={`bg-white rounded-2xl p-8 border-2 border-blue-100 h-full flex flex-col justify-between min-h-[220px] w-full relative group transition-all duration-300 ${
                      testimonial.link
                        ? "cursor-pointer hover:border-blue-300 hover:shadow-lg"
                        : ""
                    }`}
                    onClick={() =>
                      testimonial.link && handleTestimonialClick(testimonial)
                    }
                  >
                    <FaQuoteLeft className="text-blue-400 text-2xl mb-4" />
                    <p className="text-sm text-gray-700 mb-6 line-clamp-4">
                      {truncateText(testimonial.text, 4)}
                    </p>

                    <div className="flex items-center gap-3 mt-auto">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover border-2 border-blue-100"
                      />
                      <div className="text-left flex-1">
                        <div className="font-semibold text-[#0a174e] leading-tight">
                          {testimonial.name}
                        </div>
                        <div className="text-blue-400 text-xs">
                          {testimonial.role}
                        </div>
                      </div>
                      {testimonial.link && (
                        <div className="flex items-center gap-1 text-blue-500 text-xs font-medium">
                          <FaExternalLinkAlt className="w-3 h-3" />
                          <span className="capitalize">
                            {testimonial.linkType}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
