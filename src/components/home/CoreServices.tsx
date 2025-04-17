import { FaPencilAlt, FaGraduationCap, FaLaptopCode, FaSearch, FaEdit, FaBook } from 'react-icons/fa';

const CoreServices = () => {
    const services = [
        {
            title: 'Custom Essay Writing',
            description: 'Elevate your academic performance with meticulously crafted, plagiarism-free essays tailored precisely to your requirements and academic standards.',
            icon: <FaPencilAlt className="text-6xl text-[#151616] mb-4" />
        },
        {
            title: 'Dissertation & Thesis',
            description: 'Transform your research vision into scholarly excellence with our end-to-end dissertation support, from conceptualization to polished final submission.',
            icon: <FaGraduationCap className="text-6xl text-[#151616] mb-4" />
        },
        {
            title: 'Technical Assignments',
            description: 'Master complex technical challenges with our specialized expertise in mathematics, programming, engineering, and scientific problem-solving.',
            icon: <FaLaptopCode className="text-6xl text-[#151616] mb-4" />
        },
        {
            title: 'Research Support',
            description: 'Unlock powerful insights with our comprehensive research assistance, including methodology design, data analysis, and interpretation of findings.',
            icon: <FaSearch className="text-6xl text-[#151616] mb-4" />
        },
        {
            title: 'Editing & Proofreading',
            description: 'Perfect your academic work with our meticulous editing services that enhance clarity, eliminate errors, and elevate your writing to professional standards.',
            icon: <FaEdit className="text-6xl text-[#151616] mb-4" />
        },
        {
            title: 'Homework Help',
            description: 'Stay ahead of deadlines and excel in your coursework with our timely, expert assistance across all subjects and academic levels.',
            icon: <FaBook className="text-6xl text-[#151616] mb-4" />
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-[#FEFEFE] to-[#A0EBEB]/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[#151616] relative inline-block">
                        <span className="relative z-10">Our Core Services</span>
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#A0EBEB] rounded"></span>
                    </h2>
                    <p className="text-center text-[#151616]/80 text-lg max-w-3xl mx-auto leading-relaxed">
                        Grade Spark Academy delivers exceptional academic solutions tailored to your unique educational journey.
                        Our team of PhD-qualified experts is committed to elevating your academic performance.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="bg-[#FEFEFE] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#A0EBEB]">
                            <div className="flex flex-col items-center text-center">
                                {service.icon}
                                <h3 className="text-2xl font-bold mb-4 text-[#151616]">{service.title}</h3>
                                <p className="text-[#151616]/80 leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreServices;