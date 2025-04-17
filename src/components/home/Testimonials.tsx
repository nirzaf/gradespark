import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/testimonials.css';

interface Testimonial {
  id: number;
  student_id: string;
  name: string;
  gender: 'male' | 'female';
  country: string;
  syllabus: string;
  comments: string;
  image_url: string;
  created_at: string;
  subject: string;
  is_active: boolean;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <motion.div className="px-4 h-full" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
    <motion.div className="bg-white/20 backdrop-blur-lg p-6 rounded-lg flex flex-col h-full shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-auto">
          <Quote className="w-8 h-8 text-celeste" />
        </div>
      </div>
      <div className="text-white flex-grow flex flex-col">
        <p className="mb-4 text-sm leading-relaxed flex-grow">{testimonial.comments}</p>
        <div className="mt-auto">
          <h6 className="font-semibold">{testimonial.name} ({testimonial.country})</h6>
          <span className="text-sm text-celeste">{testimonial.syllabus} - {testimonial.subject}</span>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// Custom slider arrows
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10" onClick={onClick}>
    <ChevronRight className="w-8 h-8 text-white/75 hover:text-white" />
  </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10" onClick={onClick}>
    <ChevronLeft className="w-8 h-8 text-white/75 hover:text-white" />
  </div>
);

export default function Testimonials() {
  // Static testimonials data instead of fetching from Supabase
  const [isLoading] = useState(false);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      student_id: "1",
      name: "Sarah Johnson",
      gender: "female",
      country: "USA",
      syllabus: "Graduate",
      comments: "The assistance I received with my dissertation was exceptional. The writer understood my requirements perfectly and delivered a well-researched paper that helped me secure an A grade.",
      image_url: "",
      created_at: "2025-03-15",
      subject: "Psychology",
      is_active: true
    },
    {
      id: 2,
      student_id: "2",
      name: "Michael Chen",
      gender: "male",
      country: "Canada",
      syllabus: "Undergraduate",
      comments: "I was struggling with my programming assignment until I found Grade Spark Academy. The expert helped me understand complex concepts and delivered a working solution before my deadline.",
      image_url: "",
      created_at: "2025-03-20",
      subject: "Computer Science",
      is_active: true
    },
    {
      id: 3,
      student_id: "3",
      name: "Emma Williams",
      gender: "female",
      country: "UK",
      syllabus: "Master's",
      comments: "The quality of research and attention to detail in my literature review was impressive. The writer's expertise in my field was evident, and I received excellent feedback from my professor.",
      image_url: "",
      created_at: "2025-03-25",
      subject: "Literature",
      is_active: true
    },
    {
      id: 4,
      student_id: "4",
      name: "David Patel",
      gender: "male",
      country: "Australia",
      syllabus: "PhD",
      comments: "Meeting tight deadlines seemed impossible until I worked with Grade Spark Academy. Their team helped me complete my research paper with thorough analysis and proper citations, reducing my stress significantly.",
      image_url: "",
      created_at: "2025-04-01",
      subject: "Economics",
      is_active: true
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '80px',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  if (isLoading) {
    return <div className="py-20 text-center text-white">Loading testimonials...</div>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url(https://ik.imagekit.io/studytomy/Studytomy_Testimonial_Background.jpg?updatedAt=1717449732211)"
      }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h5 className="text-celeste font-medium mb-2">Testimonial</h5>
          <h2 className="text-3xl font-bold text-white">What they say</h2>
        </div>
        
        <div className="relative testimonial-carousel">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </motion.section>
  );
}