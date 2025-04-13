import React from 'react';

const CoreServices = () => {
    const services = [
        {
            title: 'Custom Essay Writing',
            description: 'Original, high-quality essays tailored to your requirements'
        },
        {
            title: 'Dissertation & Thesis',
            description: 'Comprehensive support from topic selection to final submission'
        },
        {
            title: 'Technical Assignments',
            description: 'Expert help with mathematics, programming, and engineering'
        },
        {
            title: 'Research Support',
            description: 'Professional assistance with research design and data analysis'
        },
        {
            title: 'Editing & Proofreading',
            description: 'Meticulous review to improve clarity and eliminate errors'
        },
        {
            title: 'Homework Help',
            description: 'Timely assistance with coursework to keep you on track'
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreServices;