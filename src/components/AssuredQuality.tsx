import { FC } from 'react';

const AssuredQuality: FC = () => {
  const benefits = [
    {
      title: 'Assured Quality',
      points: ['100% task accuracy', 'Detailed explanations', 'Step-wise solutions'],
      description: 'The image shows a smiling woman, possibly representing a satisfied student or a helpful tutor.'
    },
    {
      title: 'Time Constraints',
      points: ['Quick turnover time', '24/7 expert guidance', 'On-time submission'],
      description: 'The image features a clock, directly relating to the theme of time.'
    },
    {
      title: 'Uniqueness',
      points: ['Non-plagiarized task', 'Personalized solutions', 'Multiple modifications'],
      description: 'The image shows a finger interacting with a screen that displays a blurred or pixelated image.'
    },
    {
      title: 'Learning Scope',
      points: ['Thorough subject understanding', 'Covering knowledge gaps', 'Increased knowledge retention'],
      description: 'The image depicts a person, likely a student, possibly engaged in learning or interacting with tutors/peers.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="/assignment-infografic.png" 
              alt="Assignment Benefits Infographic" 
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-bold text-[#151616]">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center text-[#151616]">
                      <span className="mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssuredQuality;