import {
  AlertTriangleIcon,
  CalendarIcon,
  CheckCircleIcon,
  GraduationCapIcon,
  HomeIcon,
  Loader,
  ShieldAlert,
  SirenIcon,
  TrendingUpIcon,
  UserIcon,
} from "lucide-react";
import { Input } from "./ui/Input";
import Label from "./ui/Label";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { cn } from "./lib/utils";

const academicPerformanceData = [
  { 
    label: "Grade Period 1", 
    value: 100, 
    leftColumn: true,
    name: 'grade_1',
  },
  { 
    label: "Grade Period 2", 
    value: 99, 
    leftColumn: false,
    name: 'grade_2',
  },
  { 
    label: "Final Grade", 
    value: 100, 
    leftColumn: true,
    name: 'final_grade'
   },
  { 
    label: "Average Test Scores", 
    value: 99, 
    leftColumn: false,
    name: 'average_test_scores'
  },
];

const attendanceData = [
  { 
    label: "Total Absences", 
    name: 'absences', 
    value: 44, 
    leftColumn: true
   },
  { 
    label: "Weekly Study Time (hours)", 
    value: 49, 
    leftColumn: false,
    name: 'study_time',
  },
];

const socioeconomicData = [
  {
    label: "Parent Education Level",
    value: "Higher education",
    leftColumn: true,
    name: 'higher_education',
  },
  { 
    label: "Family Income Level", 
    value: "High", 
    leftColumn: false,
    name: 'family_income'
   },
  {
    label: "Working Student Status",
    name: "working_student_status",
    value: "Not working",
    leftColumn: true,
    fullWidth: true,
  },
];

const schoolEngagementData = [
  {
    label: "Extracurricular Activities",
    name: "extracurricular_activities",
    value: "High participation",
    leftColumn: true,
  },
  {
    name: "school_support_services",
    label: "School Support Services",
    value: "Use support service",
    leftColumn: false,
  },
  {
    label: "library Usage (hours/week)",
    value: 39,
    leftColumn: true,
    fullWidth: true,
    name: 'library_Usage'
  },
];

const personalInfoData = [
  { 
    label: "Age (years)", 
    value: 15,
    name: 'age',
  },
  { 
    label: "Gender", 
    value: "Male",
    name: 'sex',
  },
  { 
    label: "Past Academic Failures", 
    value: 0,
    name: 'past_failures',
  },
];

const assessmentFactors = [
  { 
    factor: "Academic Performance", 
    percentage: "40%",
    name: 'academic_performance',
  },
  { 
    factor: "Attendance Patterns", 
    percentage: "25%",
    name: 'attendance_patterns'
  },
  { 
    factor: "Socioeconomic Factors", 
    percentage: "20%",
    name: 'socioeconomic_factors'
  },
  { 
    factor: "School Engagement", 
    percentage: "15%",
    name: 'school_engagement'
  },
];

// {
//   "absences": 0, --accounted_for
//   "age": 0, --accounted_for
//   "final_grade": 0, --accounted_for
//   "grade_1": 0, --accounted_for
//   "grade_2": 0, --accounted_for
//   "past_failures": 0, --accounted_for
//   "sex": "M", --accounted_for
//   "study_time": 0 --accounted_for
// }

export default function App() {

  const {register, handleSubmit, formState: {isSubmitting}} = useForm();
  const [assessment, setAssessment] = useState();
//   const [assessment, setAssessment] = useState({
//   advise: "Low risk assessment. Student demonstrates good academic performance, regular attendance, and positive engagement. Continue current support and maintain regular check-ins.",
//   probability: 0.02,
//   risk_score: 0
// });
  const isLowRisk = assessment?.advise?.toLowerCase().includes('low risk');

  const onSubmit = async (data) => {
     console.log(data);
    try {
      const req = await fetch('https://hackathon-ge82.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const res = await req.json();
      console.log(res);
      setAssessment(res);
      return res;

    } catch (error) {
      console.error(error)
      throw error
    } 
  }

  return (
    <div className="bg-white w-screen min-h-screen border-[20px] border-white ">

      <div className="relative">
        <img
          className="w-full h-[400px] md:h-[530px] object-cover"
          alt="Rectangle"
          src="/rectangle-1.png"
        />

        <div className="absolute inset-0 bg-[#00000052]" />

        <div className="absolute inset-0 bg-[#005dcd1f]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-2 md:px-4">
          <p className="[font-family:'Inter',Helvetica] font-bold text-[34px] sm:text-[64px] leading-normal mb-2 md:mb-8">
            Student Dropout Risk <br />
            Predictor
          </p>

          <p className="[font-family:'Inter',Helvetica] font-normal text-sm sm:text-[20px] md:text-[27px] leading-normal max-w-4xl tracking-wide">
            Advanced ML analysis of academic performance, attendance, <br />
            socioeconomic factors, and school engagement to predict dropout
            risk.
          </p>
        </div>
      </div>

      <div className="flex justify-evenly flex-col md:flex-row gap-6 p-3 sm:p-6 md:p-2 lg:p-6 max-w-7xl mx-auto -mt-20 relative z-10">
        <div className="bg-white text-black rounded-xl text-card-foreground shadow-[0px_4px_20px_#0000001a] p-3 sm:p-6 md:p-3 lg:p-6">

          <div className={'flex flex-col space-y-1.5 p-3 sm:p-6 md:p-2 lg:p-6 pt-3 sm:pt-6 md:pt-2 lg:pt-4'}>
            <h4 className="leading-8 tracking-wide [font-family:'Inter',Helvetica] font-medium text-black text-[23px] lg:text-[27px] text-center">
              Comprehensive Student Assessment
            </h4>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="md:p-2 lg:p-4 p-4 space-y-8">
            {/* set! */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUpIcon className="w-5 h-5 text-[#0E7076]" />
                <h5 className="text-[17px] [font-family:'Inter',Helvetica] font-normal text-black">
                  Academic Performance
                </h5>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4">
                {academicPerformanceData.map((item, index) => (
                  <div key={`${index} + ${item.value}`}>
                    <Label htmlFor={item.label}>
                      {item.label}
                    </Label>
                    <Input
                    disabled={isSubmitting}
                      {...register(item.name)}
                      id={item.label}
                      placeholder={item.value}
                      className="h-11 bg-white  rounded-[4.33px] border-[0.43px] border-[#00000070]"
                    />
                  </div>
                ))}
              </div>
            </section>
            {/* set! */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <CalendarIcon className="text-[#0E7076] w-5 h-5" />
                <h5 className="text-[17px] [font-family:'Inter',Helvetica] font-normal text-black">
                  Attendance Patterns
                </h5>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4">
                {attendanceData.map((item, index) => (
                  <div key={index + item.value}>
                    <Label 
                    htmlFor={item.label} >
                      {item.label}
                    </Label>
                    <Input
                    disabled={isSubmitting}
                      {...register(item.name)}
                      id={item.label}
                      placeholder={item.value}
                      className="h-11 bg-white rounded-[4.33px] border-[0.43px] border-[#00000070]"
                    />
                  </div>
                ))}
              </div>
            </section>
            {/* set! */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <HomeIcon className="text-[#0E7076] w-6 h-6" />
                <h5 className="text-[17px] [font-family:'Inter',Helvetica] font-normal text-black">
                  Socioeconomic Indicators
                </h5>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4">
                  {socioeconomicData
                    .filter((item) => !item.fullWidth)
                    .map((item, index) => (
                      <div key={index + item.value}>
                        <Label htmlFor={item.label}>
                          {item.label}
                        </Label>
                        <Input
                        disabled={isSubmitting}
                        {...register(item.name)}
                        id={item.label}
                          placeholder={item.value}
                          className="h-11 bg-white rounded-[4.33px] border-[0.43px] border-[#00000070]"
                        />
                      </div>
                    ))}
                </div>
                {socioeconomicData
                  .filter((item) => item.fullWidth)
                  .map((item, index) => (
                    <div key={index + item.value}>
                      <Label htmlFor={item.label} >
                        {item.label}
                      </Label>
                      <Input
                      disabled={isSubmitting}
                      id={item.label}
                        placeholder={item.value}
                        className="h-11 bg-white rounded-[4.33px] border-[0.43px] border-[#00000070]"
                      />
                    </div>
                  ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCapIcon className="text-[#0E7076] w-6 h-6" />
                <h5 className="text-[17px] [font-family:'Inter',Helvetica] font-normal text-black">
                  School Engagement
                </h5>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4">
                  {schoolEngagementData
                    .filter((item) => !item.fullWidth)
                    .map((item, index) => (
                      <div key={index + item.value}>
                        <Label htmlFor={item.label}  >
                          {item.label}
                        </Label>
                        <Input
                        disabled={isSubmitting}
                          {...register(item.name)}
                          placeholder={item.value}
                          id={item.label}
                          className="h-11 bg-white rounded-[4.33px] border-[0.43px] border-[#00000070]"
                        />
                      </div>
                    ))}
                </div>
                {schoolEngagementData
                  .filter((item) => item.fullWidth)
                  .map((item, index) => (
                    <div key={index + item.value}>
                      <Label htmlFor={item.value} >
                        {item.label}
                      </Label>
                      <Input
                      disabled={isSubmitting}
                        {...register(item.name)}
                        id={item.value}
                        placeholder={item.value}
                        className="h-11 bg-white rounded-[4.33px] border-[0.43px] border-[#00000070]"
                      />
                    </div>
                  ))}
              </div>
            </section>
         
            <section>
              <div className="flex items-center gap-2 mb-4">
                <UserIcon className="text-[#0E7076] w-6 h-6"  />
                <h5 className="text-[17px] [font-family:'Inter',Helvetica] font-normal text-black">
                  Personal Information
                </h5>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {personalInfoData.map((item, index) =>{
                  if (item.label.toLowerCase() === 'gender') 
                    return( 
                    <div key={`${index} + ${item.value}`}>
                    <Label 
                    htmlFor={item.label} 
                    >
                      {item.label}
                    </Label>
                   <select disabled={isSubmitting} {...register(item.name)} className="block w-full h-11 bg-white rounded-[4.33px] border-[0.43px] border-[#00000070] border-input px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="Nil">Rather not say</option>
                   </select>
                  </div>)
                  
                  return (
                  <div key={`${index} + ${item.value}`}>
                    <Label 
                    htmlFor={item.label} 
                    >
                      {item.label}
                    </Label>
                    <Input
                    disabled={isSubmitting}
                      {...register(item.name)}
                      id={item.label}
                      placeholder={item.value}
                      className="h-11 bg-white rounded-[4.33px] border-[0.43px] border-[#00000070]"
                    />
                  </div>
                )})}
              </div>
            </section>

            <button 
            disabled={isSubmitting} 
            className=" flex items-center justify-center py-2 shadow w-full h-11 bg-[#12ab47] hover:bg-[#0f9940] text-white [font-family:'Inter',Helvetica] font-extrabold text-base rounded-[4.33px]"
            >
              {
                isSubmitting ? 
                <Loader className="w-6 h-6 animate-spin text-inactive-dark" /> :
                'Generate Risk Assessment'
              }
            </button>
          </form>
        </div>

        <div className="w-full md:w-[455px] space-y-6 rounded-xl bg-white p-3 sm:p-6 md:p-3 px-1 lg:p-6 shadow-[0px_4px_20px_#0000001a]">
	
{/* Response body
Download
{
  "advise": "High risk assessment. Student demonstrates good academic performance, regular attendance, and positive engagement. Continue current support and maintain regular check-ins.",
  "probability": 0.02,
  "risk_score": 0
} */}
            <div className={'flex flex-col space-y-1.5 p-3 sm:p-6 md:p-2 lg:p-6'}>
              <h3 className="leading-none tracking-tight [font-family:'Inter',Helvetica] font-bold text-black text-[23px] md:text-[27px] text-center">
                Risk Assessment
              </h3>
            </div>

            { assessment ?
              <>
              <div className={'px-2 sm:px-6 md:px-2 lg:px-6 p-6 pt-0'}>
              <div className={cn("rounded-[10px] p-3 sm:p-6 text-center mb-6", isLowRisk ? 'bg-[#3ad42212] border border-[#12d93d]' : 'set-red bg-[#D5232312] border border-[#C52112]')}>
                {
                  isLowRisk ?
                   <CheckCircleIcon className={cn("w-[35px] h-[35px] mx-auto mb-4 text-green-500")} /> :
                   <ShieldAlert className={cn("w-[35px] h-[35px] mx-auto mb-4 text-[#BC1010]")} />
                }
                <h3 className={cn("[font-family:'Inter',Helvetica] font-bold text-[27px] mb-2", isLowRisk ? 'text-[#77b255]' : 'text-[#BC1010]')}>
                  {isLowRisk ? 'Low Risk' : 'High Risk'}
                </h3>
                <p className={cn("[font-family:'Inter',Helvetica] font-extralight text-base mb-4", isLowRisk ? 'text-[#12ab47]' : 'text-[#BC1010]')}>
                  Risk Score: {assessment.risk_score}
                </p>
                <p className={cn("[font-family:'Inter',Helvetica] font-normal text-lg leading-[30px]", isLowRisk ? 'text-[#087921]' : 'text-[#BC1010]')}>
                  {assessment.advise}
                </p>
              </div>
            </div>

            <div className="rounded-xl border bg-card text-card-foreground bg-[#d9d9d92b]">
              <div className="p-6 py-8">
                <h4 className="[font-family:'Inter',Helvetica] font-medium text-black text-lg leading-[30px] mb-4">
                  Assessment Factors
                </h4>
                <div className="space-y-2">
                  {/* {asses smentFactors.map((item, index) => (
                    <div
                      key={index + item.factor}
                      className="flex justify-between items-center"
                    >
                      <span className="[font-family:'Inter',Helvetica] font-light text-black text-xs leading-[30px]">
                        {item.factor}
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-medium text-black text-[10px] leading-[30px]">
                        {item.percentage}
                      </span>
                    </div>
                  ))} */}
                   <div className="flex justify-between items-center">
                      <span className="[font-family:'Inter',Helvetica] font-light text-black text-sm leading-[30px]">
                        Risk Probability
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-medium text-black text-[14px] leading-[30px]">
                        {(assessment.probability * 100) + '%'}
                      </span>
                    </div>
                </div>
              </div>
            </div>
            </> : 
            
            <div className="">
              <p className="text-center text-gray-500 text-base [font-family:'Inter',Helvetica] py-8">
                Fill out the form to generate a personalized dropout risk assessment.
              </p>
            </div>
            }

          <div className="rounded-xl border bg-card text-card-foreground bg-[#d9d9d92b]">
            <div className="p-6 px-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <AlertTriangleIcon className="text-black w-6 h-6" />
                <h4 className="[font-family:'Inter',Helvetica] font-medium text-black text-lg leading-[30px]">
                  Advanced ML Model
                </h4>
              </div>
              <p className="[font-family:'Inter',Helvetica] text-center font-light text-black text-base leading-[30px] mb-4">
                This comprehensive predictor analyzes academic performance,
                attendance patterns, socioeconomic indicators, and school
                engagement to provide accurate dropout risk assessments.
              </p>
              <p className="[font-family:'Inter',Helvetica] text-center font-light text-black text-base leading-[30px]">
                Designed for early intervention and student support planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
