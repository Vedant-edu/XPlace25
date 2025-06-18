import React from 'react';
import SplashCursor from './splash';
import { Footer } from '../layout/Footer';

interface CompanyData {
  company: string;
  job_type: string;
  industry: string | null;
  ctc?: string;
  location: string;
  registrations_closed_on?: string;
  registrations_open_till?: string;
  eligibility?: string;
  job_title: string;
  Date?: string;
}

const CompaniesVisited: React.FC = () => {
  const companiesData: CompanyData[] = [{
    "company": "PHN Technologies",
    "job_type": "Full Time",
    "industry": "Technology",
    "ctc": "INR 5,60,000",
    "location": "Remote Working",
    "Date": "13 Jun, 2025",
    "job_title": "Technolgy Educator & Operations Executive"
  },
  {
    "company": "Kirloskar (KEPL)",
    "job_type": "Full Time",
    "industry": null,
    "ctc": "INR 5,50,000",
    "location": "Remote Working",
    "Date": "11 Jun, 2025",
    "job_title": "GET"
  },
  {
    "company": "Winspire",
    "job_type": "Full Time",
    "industry": "IT / Computers - Software",
    "ctc": "INR 5,00,000",
    "location": "Remote Working",
    "Date": "06 Jun, 2025",
    "job_title": "Trainee- Technical Consultant"
  },
  {
    "company": "Idyllic Services",
    "job_type": "Full Time",
    "industry": "Core Engineering",
    "ctc": "INR 3,00,000 - INR 3,50,000",
    "location": "Remote Working",
    "Date": "06 Jun, 2025",
    "job_title": "Telecom Fiber Design Engineer"
  },
  {
    "company": "Tsubaki Conveyor Systems",
    "job_type": "Full Time",
    "industry": "Core Engineering",
    "ctc": "INR 4,00,000",
    "location": "Remote Working",
    "Date": "29 May, 2025",
    "job_title": "GET"
  },
  {
    "company": "Softenger India Pvt Ltd",
    "job_type": "Full Time",
    "industry": "Core Engineering",
    "ctc": "INR 3,50,000",
    "location": "Remote Working",
    "Date": "27 May, 2025",
    "job_title": "Fibre Engineer"
  },
  {
    "company": "Mahindra & mahindra",
    "job_type": "Internship + Full-Time",
    "industry": "Core Engineering",
    "ctc": "INR 5,00,000",
    "location": "Remote Working",
    "Date": "07 May, 2025",
    "job_title": "Graduate Apprentice Trainee"
  },
  {
    "company": "Hatchway Windoor Pvt.Ltd",
    "job_type": "Full Time",
    "industry": "Core Engineering",
    "ctc": "INR 4,00,000",
    "location": "Remote Working",
    "Date": "30 Apr, 2025",
    "job_title": "Site Engineer"
  },
  {
    "company": "SCION Energy",
    "job_type": "Full Time",
    "industry": "Others",
    "ctc": "INR 2,50,000 - INR 3,50,000",
    "location": "Remote Working",
    "Date": "28 Apr, 2025",
    "job_title": "Sales Executive"
  },
  {
    "company": "Praxis Info Solutions",
    "job_type": "Full Time",
    "industry": "Core Engineering",
    "ctc": "INR 3,50,000",
    "location": "Remote Working",
    "Date": "16 Apr, 2025",
    "job_title": "Trainee SAP Business One Functional Consultant"
  },
  {
    "company": "AdvantEdge Technologies",
    "job_type": "Full Time",
    "industry": "Core Engineering",
    "ctc": "INR 3,00,000",
    "location": "Remote Working",
    "Date": "16 Apr, 2025",
    "job_title": "Junior Engineer – Operations & Maintenance"
  },
  {
    "company": "HashedIn",
    "job_type": "Internship + Full-Time",
    "industry": "IT / Computers - Software",
    "ctc": "INR 8,10,000",
    "location": "Remote Working",
    "Date": "15 Apr, 2025",
    "job_title": "Trainee Software Engineer"
  },
  {
    "company": "Data Economy",
    "job_type": "Full Time",
    "industry": "IT / Computers - Software",
    "ctc": "INR 6,00,000",
    "location": "Remote Working",
    "Date": "08 Apr, 2025",
    "job_title": "Trainee Software Engineer"
  },
  {
    "company": "IEC AIR TOOLS",
    "job_type": "Internship + Full-Time",
    "industry": "IT / ITES",
    "ctc": "INR 2,50,000 - INR 3,50,000",
    "location": "Remote Working",
    "Date": "08 Apr, 2025",
    "job_title": "Trainee Sales Engineer"
  },
  {
    "company": "Gestamp Pune",
    "job_type": "Full Time",
    "industry": "Core Engineering",
    "ctc": "INR 3,00,000",
    "location": "Remote Working",
    "Date": "29 Mar, 2025",
    "job_title": "GET"
  },
  {
    "company": "Raja Software Labs (RSL)",
    "job_type": "Full Time",
    "industry": "IT / Computers - Software",
    "ctc": "INR 7,00,000",
    "location": "Remote Working",
    "Date": "28 Mar, 2025",
    "job_title": "Software Developer"
  },
  {
    "company": "Forvis Mazars",
    "job_type": "Full Time",
    "industry": "IT / Computers - Software",
    "ctc": "INR 6,73,000",
    "location": "Remote Working",
    "Date": "28 Mar, 2025",
    "job_title": "Data Analyst - Graduate Trainee Role"
  },
  {
    "company": "Telamon Technolgies",
    "job_type": "Full Time",
    "industry": "Core Engineering",
    "ctc": "INR 3,35,000 - INR 4,00,000",
    "location": "Remote Working",
    "Date": "22 Mar, 2025",
    "job_title": "Workmen"
  },
  {
    "company": "Capgemini",
    "job_type": "Full Time",
    "industry": "IT / Computers - Software",
    "ctc": "INR 4,25,000 - INR 7,00,000",
    "location": "Remote Working",
    "Date": "24 Mar, 2025",
    "job_title": "Analyst"
  },
  {
    "company": "ARC Contract Management",
    "job_type": "Full Time",
    "industry": "IT / Computers - Software",
    "ctc": "INR 4,25,000",
    "location": "Remote Working",
    "Date": "20 Mar, 2025",
    "job_title": "Associate Functional Analyst"
  },
  {
    "company": "Alada Solutions",
    "job_type": "Full Time",
    "industry": "Core Engineering",
    "ctc": "INR 2,16,000",
    "location": "Remote Working",
    "Date": "20 Mar, 2025",
    "job_title": "Jr. Civil Engineer"
  },
  {
    "company": "ELcom International",
    "job_type": "Full Time",
    "industry": "ITES / BPO",
    "ctc": "INR 2,50,000 - INR 4,00,000",
    "location": "Remote Working",
    "Date": "19 Mar, 2025",
    "job_title": "Sales Engineer"
  },
  {
    "company": "Kanini Software",
    "job_type": "Internship + Full-Time",
    "industry": "IT / Computers - Software",
    "ctc": "INR 4,50,000 - INR 8,00,000",
    "location": "Remote Working",
    "Date": "13 Mar, 2025",
    "job_title": "Software Developer"
  },
  {
    "company": "Target AEC Global",
    "job_type": "Full Time",
    "industry": "Core Engineering",
    "ctc": "INR 3,50,000",
    "location": "Remote Working",
    "Date": "13 Mar, 2025",
    "job_title": "Trainee Structural Design Engineer."
  },
  {
    "company": "Western Union",
    "job_type": "Full Time",
    "industry": "IT / Computers - Software",
    "ctc": "INR 7,25,000",
    "location": "Remote Working",
    "Date": "25 Feb, 2025",
    "job_title": "GET"
  },
  {
    "company": "AAIS GLOBAL",
    "job_type": "Full Time",
    "industry": "IT / Computers - Software",
    "ctc": "INR 4,20,000",
    "location": "Remote Working",
    "Date": "23 Feb, 2025",
    "job_title": "Associate Consultant"
  },
  {
    "company": "Alfa Pumps",
    "job_type": "Full Time",
    "industry": "Core Engineering",
    "ctc": "INR 3,00,000",
    "location": "Remote Working",
    "Date": "21 Feb, 2025",
    "job_title": "Technical Sales Engineer"
  }
,
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
  "ctc": "INR 7,00,000",
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

  // Calculate statistics
  const totalCompanies = companiesData.length;

  // Extract CTC values and convert to numbers
  const ctcValues = companiesData
    .filter(company => company.ctc)
    .map(company => {
      const ctcStr = company.ctc?.match(/\d+/g)?.[0] || '0';
      return parseInt(ctcStr.replace(/,/g, ''), 10);
    })
    .filter(ctc => !isNaN(ctc));

  const medianPackage = ctcValues.length > 0
    ? ctcValues.sort((a, b) => a - b)[Math.floor(ctcValues.length / 2)]
    : 0;
  const highPackage = ctcValues.length > 0 ? Math.max(...ctcValues) : 0;
  const lowPackage = ctcValues.length > 0 ? Math.min(...ctcValues) : 0;

  // Count companies by year
  const companiesByYear = companiesData.reduce((acc, company) => {
    const dateStr = company.registrations_closed_on || company.registrations_open_till || company.Date || '';
    const year = dateStr.includes('2024') ? '2024' : '2025';
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <>
      <SplashCursor />
      <div className="min-h-screen bg-gray-800">
        <div className='fixed top-3 z-50 w-full bg-gray-950 backdrop-blur-md border border-gray-700 px-4 py-3 rounded-3xl'>
          <div className="max-w-7xl mx-auto flex items-center">
            <h1 className="text-xl font-bold text-gray-300">
              <span className="text-orange-500">X</span>Place <sup className="text-gray-400">'25</sup>
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-20 px-4 pb-4">
          <h2 className="text-lg text-gray-400 mb-6">
            Companies that visited on-campus
          </h2>

          {/* Dashboard Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Yearly Visits Card */}
            <div className="bg-gray-900 rounded-xl px-4 py-2 border border-gray-800">
              <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-800">
                <span className="text-gray-400">Total Visits:</span>
                <span className="text-xl font-bold text-gray-300">
                  {(companiesByYear['2024'] || 0) + (companiesByYear['2025'] || 0)}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">2024:</span>
                  <span className="text-xl font-bold text-gray-300">{companiesByYear['2024'] || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">2025:</span>
                  <span className="text-xl font-bold text-gray-300">{companiesByYear['2025'] || 0}</span>
                </div>
              </div>
            </div>

            {/* Package Statistics Card */}
            <div className="bg-gray-900 rounded-xl py-2 px-4 border border-gray-800">
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Median Package:</span>
                  <span className="text-xl font-bold text-gray-300">{formatCurrency(medianPackage)} LPA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Highest Package:</span>
                  <span className="text-xl font-bold text-gray-300">{formatCurrency(highPackage)} LPA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Lowest Package:</span>
                  <span className="text-xl font-bold text-gray-300">{formatCurrency(lowPackage)} LPA</span>
                </div>
              </div>
            </div>
          </div>
            

          {/* Companies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {companiesData.map((company, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-4 border border-gray-800 hover:border-gray-700 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-300 truncate">
                    {company.company}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                    {company.job_type}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Role</span>
                    <span className="text-gray-300">{company.job_title}</span>
                  </div>
                  {company.ctc && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">CTC</span>
                      <span className="text-gray-300">{company.ctc}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date</span>
                    <span className="text-gray-300">
                      {company.registrations_closed_on || company.registrations_open_till || company.Date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CompaniesVisited;