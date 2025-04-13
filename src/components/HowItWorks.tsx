import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            title: 'Place Your Order',
            description: 'Fill out the form with your assignment details and requirements'
        },
        {
            number: 2,
            title: 'Choose Your Expert',
            description: 'Select from qualified profiles based on your subject needs'
        },
        {
            number: 3,
            title: 'Track Progress',
            description: 'Communicate directly with your expert and monitor progress'
        },
        {
            number: 4,
            title: 'Receive & Review',
            description: 'Get your completed work and request free revisions if needed'
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    Our simple and transparent process ensures you get the help you need with minimal hassle.
                    From order to delivery, we keep you in control every step of the way.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.number} className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-xl font-bold">{step.number}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-gray-700 font-medium">
                        All our services come with 100% originality guarantee, secure payment options, and free revisions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;