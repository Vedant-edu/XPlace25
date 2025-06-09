import React from 'react';
import SplashCursor from './splash';
import { Footer } from '../layout/Footer';

const PlacedStudentsFeedback: React.FC = () => {
    
    const feedbackData = [
        {
            "company": "Rockwell Automation",
            "role": "Graduate Engineer Trainee (GET)",
            "studentName": "Rahul Sharma",
            "batch": "2024",
            "rounds": [
                {
                    "name": "Group Discussion",
                    "details": [
                        "Three students were shortlisted for the next round from each batch of 12.",
                        "The topics were typical GD topics, so focus on presenting your points promptly.",
                        "Avoid staying silent—contribute actively to the discussion."
                    ]
                },
                {
                    "name": "Managerial/Technical Round",
                    "details": [
                        "Review fundamental electronics questions, especially those related to your project.",
                        "Prepare well for potential questions about your project. Have a clear, detailed explanation ready.",
                        "Some knowledge of industrial automation can be helpful (optional but advantageous).",
                        "Confidence is key here. They'll assess your technical knowledge, communication, and ability to handle pressure.",
                        "Ensure your resume only includes topics you're genuinely comfortable with.",
                        "Be prepared to discuss next-gen technology trends like AI.",
                        "Keep it a two-way conversation, as they'll gauge your communication skills."
                    ]
                },
                {
                    "name": "HR Round",
                    "details": [
                        "Expect straightforward questions: introducing yourself, family background, and details about your project."
                    ]
                }
            ],
            "advice": "Stay confident, communicate clearly, and engage actively in every round. Preparation is key to making a strong impression.",
            "date": "15 May, 2024"
        },
        {
            "company": "British Petroleum (BP)",
            "role": "GET",
            "studentName": "Amit Kumar",
            "batch": "2024",
            "rounds": [
                {
                    "name": "Aptitude Test",
                    "details": [
                        "Quantitative and logical reasoning",
                        "Basic technical questions"
                    ]
                },
                {
                    "name": "Technical Interview",
                    "details": [
                        "Questions on thermodynamics and fluid mechanics",
                        "Discussion on energy sector trends"
                    ]
                }
            ],
            "advice": "BP looks for candidates with strong fundamentals and awareness of the energy industry. Brush up on core subjects.",
            "date": "15 Jan, 2025"
        }
    ];

    return (
        <>
            <SplashCursor/>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h1 className="lg:text-2xl text-3xl font-extrabold py-1 text-black dark:text-gray-300">
                        <div className='fixed top-0 z-20 pt-2 backdrop-blur-sm bg-gradient-to-br from-slate-400/40 to-gray-800/40 px-4 py-2 w-full'>
                            <span className="text-orange-500">X</span>Place <sup>'25</sup>
                        </div>
                        <div className="text-sm mt-14 px-4">
                            Feedback from placed students
                        </div>
                    </h1>
                    
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
                        {feedbackData.map((feedback, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-xl backdrop-blur-md bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/30"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <h2 className="relative text-2xl font-semibold text-white mb-2 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                                    {feedback.company}
                                </h2>
                                
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-sm text-gray-300">{feedback.role}</p>
                                        <p className="text-xs text-gray-400">Placed by: {feedback.studentName} ({feedback.batch})</p>
                                    </div>
                                    <span className="text-xs text-gray-400">{feedback.date}</span>
                                </div>
                                
                                <div className="relative space-y-4">
                                    {feedback.rounds.map((round, roundIndex) => (
                                        <div key={roundIndex} className="mb-4">
                                            <h3 className="text-lg font-medium text-blue-300 mb-2">{round.name}</h3>
                                            <ul className="space-y-2 pl-5 list-disc text-sm text-gray-300">
                                                {round.details.map((detail, detailIndex) => (
                                                    <li key={detailIndex}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                    
                                    <div className="mt-4 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                                        <h4 className="text-sm font-medium text-green-300 mb-1">Advice from student:</h4>
                                        <p className="text-sm text-gray-300">{feedback.advice}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default PlacedStudentsFeedback;