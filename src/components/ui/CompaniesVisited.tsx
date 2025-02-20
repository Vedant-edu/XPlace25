import React from 'react';
import SplashCursor from './splash';


const CompaniesVisited: React.FC = () => {
    
    var companiesData= [
        {
          "company": "REXEL",
          "job_type": "Full Time",
          "industry": "Core Engineering",
          "ctc": "INR 4,00,000",
          "location": "Remote Working",
          "registrations_open_till": "21 Feb, 2025 - 09:00 AM",
          "eligibility": "Eligible",
          "job_title": "Sales Engineer"
        },
        {
          "company": "SEDEMAC",
          "job_type": "Full Time",
          "industry": "Core Engineering",
          "ctc": "INR 3,50,000",
          "location": "Remote Working",
          "registrations_closed_on": "14 Feb, 2025 - 01:00 PM",
          "eligibility": "Not Eligible",
          "job_title": "GET"
        },
        {
          "company": "Worley",
          "job_type": "Full Time",
          "industry": "Core Engineering",
          "ctc": "INR 5,80,000",
          "location": "Remote Working",
          "registrations_closed_on": "11 Feb, 2025 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "GET"
        },
        {
          "company": "Worley",
          "job_type": "Full Time",
          "industry": "Core Engineering",
          "ctc": "INR 5,80,000",
          "location": "Remote Working",
          "registrations_closed_on": "08 Feb, 2025 - 09:00 AM",
          "eligibility": "Eligible",
          "job_title": "GET"
        },
        {
          "company": "Mectronics",
          "job_type": "Internship + Full-Time",
          "industry": "Core Engineering",
          "ctc": "INR 4,50,000",
          "location": "Remote Working",
          "registrations_closed_on": "04 Feb, 2025 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Technical Sales Engineer"
        },
        {
          "company": "Amazon",
          "job_type": "Full Time",
          "industry": "Core Engineering",
          "ctc": "INR 5,50,000",
          "location": "Remote Working",
          "registrations_closed_on": "30 Jan, 2025 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "RME Coordinator"
        },
        {
          "company": "Sobha Developers",
          "job_type": "Full Time",
          "industry": "Core Engineering",
          "ctc": "INR 3,50,000",
          "location": "Remote Working",
          "registrations_closed_on": "28 Jan, 2025 - 09:00 AM",
          "eligibility": "Eligible",
          "job_title": "GET"
        },
        {
          "company": "Pune Properties",
          "job_type": "Full Time",
          "industry": "IT / ITES",
          "ctc": "INR 3,00,000 - INR 5,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "26 Jan, 2025 - 09:00 AM",
          "eligibility": "Eligible",
          "job_title": "Sales Executive (Full time)"
        },
        {
          "company": "AppitSimple",
          "job_type": "Internship + Full-Time",
          "industry": "IT / ITES",
          "ctc": "INR 72,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "17 Jan, 2025 - 10:00 AM",
          "eligibility": "Eligible",
          "job_title": "Business Development Specialist"
        },
        {
          "company": "British Petroleum (BP)",
          "job_type": "Internship + Full-Time",
          "industry": "Core Engineering",
          "ctc": "INR 4,99,000",
          "location": "Remote Working",
          "registrations_closed_on": "15 Jan, 2025 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "GET"
        },
        {
          "company": "Jindal Saw Limited Group",
          "job_type": "Full Time",
          "industry": "Core Engineering",
          "ctc": "INR 4,75,000",
          "location": "Remote Working",
          "registrations_closed_on": "14 Jan, 2025 - 09:00 AM",
          "eligibility": "Eligible",
          "job_title": "GET"
        },
        {
          "company": "Colossus Infra",
          "job_type": "Full Time",
          "industry": "Core Engineering",
          "ctc": "INR 2,88,000",
          "location": "Remote Working",
          "registrations_closed_on": "14 Jan, 2025 - 09:00 AM",
          "eligibility": "Eligible",
          "job_title": "Train Pilot"
        },
        {
          "company": "AAIS GLOBAL",
          "job_type": "Full Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 4,20,000",
          "location": "Remote Working",
          "registrations_closed_on": "11 Jan, 2025 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Associate Consultant"
        },
        {
          "company": "Periurja Energy",
          "job_type": "Full Time",
          "industry": "Core Engineering",
          "ctc": "INR 3,00,000 - INR 3,50,000",
          "location": "Remote Working",
          "registrations_closed_on": "09 Jan, 2025 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "GET-Solar Engineer"
        },
        {
          "company": "Ferrites India",
          "job_type": "Full Time",
          "industry": "Core Engineering",
          "ctc": "INR 2,75,000",
          "location": "Remote Working",
          "registrations_closed_on": "09 Jan, 2025 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Project Integrator"
        },
        {
          "company": "Dynaxcel",
          "job_type": "Full Time",
          "industry": "Manufacturing / Core",
          "ctc": "INR 3,00,000 - INR 3,50,000",
          "location": "Remote Working",
          "registrations_closed_on": "08 Jan, 2025 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "GET"
        },
        {
          "company": "Iziel Healthcare",
          "job_type": "Full Time",
          "industry": "Manufacturing / Core",
          "ctc": "INR 2,00,000 - INR 4,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "03 Jan, 2025 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "GET"
        },
        {
          "company": "Neilsoft",
          "job_type": "Full Time",
          "industry": "Manufacturing / Core",
          "ctc": "INR 3,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "02 Jan, 2025 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "GET"
        },
        {
          "company": "Tudip Technologies",
          "job_type": "Full Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 4,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "19 Dec, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Digital Development Role"
        },
        {
          "company": "ONIX",
          "job_type": "Full Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 4,50,000",
          "location": "Remote Working",
          "registrations_closed_on": "18 Dec, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Software Intern"
        },
        {
          "company": "Tranter",
          "job_type": "Full Time",
          "industry": "Manufacturing / Core",
          "ctc": "INR 5,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "18 Dec, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "GET"
        },
        {
          "company": "HSBC",
          "job_type": "Full Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 9,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "11 Dec, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Trainee Software Engineer"
        },
        {
          "company": "Credenca",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 3,00,000 - INR 4,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "11 Dec, 2024 - 09:00 AM",
          "eligibility": "Eligible",
          "job_title": "Power BI Developer"
        },
        {
          "company": "Mthree",
          "job_type": "Full Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 9,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "05 Dec, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Software Developer/Application Engineer/Site Reliability Engineer"
        },
        {
          "company": "Jade Global",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 4,09,000",
          "location": "Remote Working",
          "registrations_closed_on": "05 Dec, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Associate Consultant"
        },
        {
          "company": "Augmented Transformation",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 3,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "05 Dec, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Full Stack Developer"
        },
        {
          "company": "Zensar",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 6,00,000 - INR 10,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "03 Dec, 2024 - 09:00 AM",
          "eligibility": "Eligible",
          "job_title": "Software Intern + PPO"
        },
        {
          "company": "VISTEX",
          "job_type": "Full Time",
          "industry": "Manufacturing / Core",
          "ctc": "INR 4,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "29 Nov, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Associate Functional Consultant"
        },
        {
          "company": "Equation Works",
          "job_type": "Internship + Full-Time",
          "industry": "Others",
          "ctc": "INR 10,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "27 Nov, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Business Development Executive (Intern) - International Business"
        },
        {
          "company": "Elastik Teams",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 6,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "26 Nov, 2024 - 11:30 AM",
          "eligibility": "Not Eligible",
          "job_title": "Software Development Engineer"
        },
        {
          "company": "EMCURE",
          "job_type": "Full Time",
          "industry": "Pharmaceutical",
          "ctc": "INR 5,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "22 Nov, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Technical Trainee"
        },
        {
          "company": "Rockwell Automation",
          "job_type": "Full Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 6,25,000",
          "location": "Remote Working",
          "registrations_closed_on": "19 Nov, 2024 - 02:00 PM",
          "eligibility": "Not Eligible",
          "job_title": "Software Engineering Intern"
        },
        {
          "company": "NVIDIA",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 9,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "13 Nov, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "QA Tools and Test Development Intern"
        },
        {
          "company": "MOJJ Engineering Systems",
          "job_type": "Full Time",
          "industry": "Core Engineering",
          "ctc": "INR 3,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "08 Nov, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "GET"
        },
        {
          "company": "Cognida",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 7,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "08 Nov, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Software Developer"
        },
        {
          "company": "SYNOPTEK",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 3,50,000",
          "location": "Remote Working",
          "registrations_closed_on": "08 Nov, 2024 - 09:00 AM",
          "eligibility": "Eligible",
          "job_title": "Associate software Engineer"
        },
        {
          "company": "DeltaX",
          "job_type": "Full Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 6,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "07 Nov, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Growth & Sales Specialist"
        },
        {
          "company": "Zydex",
          "job_type": "Full Time",
          "industry": "Manufacturing / Core",
          "ctc": "INR 3,20,000",
          "location": "Remote Working",
          "registrations_closed_on": "07 Nov, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "GET"
        },
        {
          "company": "Asahi India Glass",
          "job_type": "Full Time",
          "industry": "Manufacturing / Core",
          "ctc": "INR 5,50,000",
          "location": "Remote Working",
          "registrations_closed_on": "26 Oct, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "GET"
        },
        {
          "company": "INDOVANCE",
          "job_type": "Internship + Full-Time",
          "industry": "Manufacturing / Core",
          "ctc": "INR 3,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "11 Oct, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Trainee-Design Engineer"
        },
        {
          "company": "Reliance Industries",
          "job_type": "Full Time",
          "industry": "Manufacturing / Core",
          "ctc": "INR 5,50,000",
          "location": "Remote Working",
          "registrations_closed_on": "27 Sep, 2024 - 10:30 AM",
          "eligibility": "Not Eligible",
          "job_title": "GET"
        },
        {
          "company": "Bentley systems",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 9,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "24 Sep, 2024 - 02:00 PM",
          "eligibility": "Not Eligible",
          "job_title": "Software Developer Intern"
        },
        {
          "company": "SRINSOFT",
          "job_type": "Internship + Full-Time",
          "industry": "Manufacturing / Core",
          "ctc": "INR 3,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "20 Sep, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "GET Intern"
        },
        {
          "company": "Darwinbox",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 16,30,000",
          "location": "Remote Working",
          "registrations_closed_on": "20 Sep, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Software Engineer Intern + PPO"
        },
        {
          "company": "Tata Technologies",
          "job_type": "Full Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 4,50,000",
          "location": "Remote Working",
          "registrations_closed_on": "05 Sep, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "GET"
        },
         {
          "company": "Delfingen",
          "job_type": "Internship + Full-Time",
          "industry": "Manufacturing / Core",
          "location": "Remote Working",
          "registrations_closed_on": "04 Sep, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Sales"
        },
         {
          "company": "SRINSOFT",
          "job_type": "Full Time",
          "industry": "Manufacturing / Core",
           "ctc": "INR 3,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "29 Aug, 2024 - 08:30 AM",
          "eligibility": "Not Eligible",
          "job_title": "Inventor Design Engineer"
        },
        {
          "company": "Pubmatic",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 13,39,000",
          "location": "Remote Working",
          "registrations_closed_on": "20 Aug, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Software Engineer"
        },
        {
          "company": "Mastek",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 4,50,000",
          "location": "Remote Working",
          "registrations_closed_on": "07 Aug, 2024 - 09:00 AM",
          "eligibility": "Eligible",
          "job_title": "Technical Consulting"
        },
         {
          "company": "Mastek",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 4,50,000",
          "location": "Remote Working",
          "registrations_closed_on": "07 Aug, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Oracle Functional Consulting"
        },
        {
          "company": "Cognida.ai",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 7,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "02 Aug, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Software Developer (Intern + PPO)"
        },
        {
          "company": "Quick Heal",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 5,25,000",
          "location": "Remote Working",
          "registrations_closed_on": "19 Jul, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Intern + PPO"
        },
        {
          "company": "rtCamp",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 12,00,000 - INR 18,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "17 Jul, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Python Engineer (Trainee)"
        },
         {
          "company": "eQ-Technologic",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 13,88,000",
          "location": "Remote Working",
          "registrations_closed_on": "16 Jul, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Software Engineer"
        },
        {
          "company": "rtCamp",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 12,00,000 - INR 18,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "21 Jun, 2024 - 01:00 PM",
          "eligibility": "Not Eligible",
          "job_title": "Software Developer"
        },
        {
          "company": "Tres",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "location": "Remote Working",
          "registrations_closed_on": "20 Jun, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Intern"
        },
         {
          "company": "CUMMINS",
          "job_type": "Internship + Full-Time",
          "industry": "Manufacturing / Core",
          "location": "Remote Working",
          "registrations_closed_on": "15 Jun, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "INTERN"
        },
        {
          "company": "Noovosoft Technologies",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 6,50,000",
          "location": "Remote Working",
          "registrations_closed_on": "07 Jun, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Application Developer"
        },
        {
          "company": "rtCamp",
          "job_type": "Internship + Full-Time",
          "industry": "IT / Computers - Software",
          "ctc": "INR 12,00,000 - INR 18,00,000",
          "location": "Remote Working",
          "registrations_closed_on": "18 May, 2024 - 09:00 AM",
          "eligibility": "Not Eligible",
          "job_title": "Software Engineer (Trainee)"
        }
      ];
    return (<><SplashCursor/>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <h1 className="lg:text-2xl text-3xl font-extrabold py-2 ml-1 text-black dark:text-gray-300">
          <span className="text-orange-500">X</span>Place'25
          <div className="text-sm mt-4">
            List of all comanies that visited on-campus
          </div>
        </h1>
          {companiesData.map((company, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl backdrop-blur-md bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/30 group"
            >
              {/* Gradient blur effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <h2 className="relative text-2xl font-semibold text-white mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                {company.company}
              </h2>
              
              <div className="relative space-y-3">
              <div className="flex items-start">
                  <span className="text-sm font-medium text-gray-400 w-32">CTC:</span>
                  <span className="text-sm text-gray-300">{company.ctc}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-sm font-medium text-gray-400 w-32">Job Title:</span>
                  <span className="text-sm text-gray-300">{company.job_title}</span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-sm font-medium text-gray-400 w-32">Industry:</span>
                  <span className="text-sm text-gray-300">{company.industry}</span>
                </div>
                
                
                <div className="flex items-start">
                  <span className="text-sm font-medium text-gray-400 w-32">Date:</span>
                  <span className="text-sm text-gray-300">{company.registrations_closed_on}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
    );
};

export default CompaniesVisited;