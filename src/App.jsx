import {
  AlertTriangleIcon,
  CalendarIcon,
  CheckCircleIcon,
  GraduationCapIcon,
  HomeIcon,
  TrendingUpIcon,
  UserIcon,
} from "lucide-react";
import { Input } from "./ui/Input";
import Label from "./ui/Label";

const academicPerformanceData = [
  { label: "Grade Period 1", value: "100", leftColumn: true },
  { label: "Grade Period 2", value: "99", leftColumn: false },
  { label: "Final Grade", value: "100", leftColumn: true },
  { label: "Average Test Scores", value: "99", leftColumn: false },
];

const attendanceData = [
  { label: "Total Absences", value: "44", leftColumn: true },
  { label: "Weekly Study Time (hours)", value: "49", leftColumn: false },
];

const socioeconomicData = [
  {
    label: "Parent Education Level",
    value: "Higher education",
    leftColumn: true,
  },
  { label: "Family Income Level", value: "High", leftColumn: false },
  {
    label: "Working Student Status",
    value: "Not working",
    leftColumn: true,
    fullWidth: true,
  },
];

const schoolEngagementData = [
  {
    label: "Extracurricular Activities",
    value: "High participation",
    leftColumn: true,
  },
  {
    label: "School Support Services",
    value: "Use support service",
    leftColumn: false,
  },
  {
    label: "Library Usage (hours/week)",
    value: "39",
    leftColumn: true,
    fullWidth: true,
  },
];

const personalInfoData = [
  { label: "Age", value: "15" },
  { label: "Gender", value: "Male" },
  { label: "Past Academic Failures", value: "0" },
];

const assessmentFactors = [
  { factor: "Academic Performance", percentage: "40%" },
  { factor: "Attendance Patterns", percentage: "25%" },
  { factor: "Socioeconomic Factors", percentage: "20%" },
  { factor: "School Engagement", percentage: "15%" },
];

export default function App() {
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
          
          <div className="md:p-2 lg:p-4 p-4 space-y-8">

            <section>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUpIcon className="w-5 h-5 text-[#0E7076]" />
                <h5 className="text-[17px] [font-family:'Inter',Helvetica] font-normal text-black">
                  Academic Performance
                </h5>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4">
                {academicPerformanceData.map((item, index) => (
                  <div key={index + item.value}>
                    <Label htmlFor={item.label}>
                      {item.label}
                    </Label>
                    <Input
                      id={item.label}
                      placeholder={item.value}
                      className="h-11 bg-white  rounded-[4.33px] border-[0.43px] border-[#00000070]"
                    />
                  </div>
                ))}
              </div>
            </section>

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
                {personalInfoData.map((item, index) => (
                  <div key={`${index} + ${item.value}`}>
                    <Label 
                    htmlFor={item.label} 
                    >
                      {item.label}
                    </Label>
                    <Input
                      id={item.label}
                      placeholder={item.value}
                      className="h-11 bg-white rounded-[4.33px] border-[0.43px] border-[#00000070]"
                    />
                  </div>
                ))}
              </div>
            </section>

            <button className=" py-2 shadow w-full h-11 bg-[#12ab47] hover:bg-[#0f9940] text-white [font-family:'Inter',Helvetica] font-extrabold text-base rounded-[4.33px]">
              Generate Risk Assessment
            </button>
          </div>
        </div>


        <div className="w-full md:w-[455px] space-y-6 rounded-xl bg-white p-3 sm:p-6 md:p-3 px-1 lg:p-6 shadow-[0px_4px_20px_#0000001a]">

            <div className={'flex flex-col space-y-1.5 p-3 sm:p-6 md:p-2 lg:p-6'}>
              <h3 className="leading-none tracking-tight [font-family:'Inter',Helvetica] font-bold text-black text-[23px] md:text-[27px] text-center">
                Risk Assessment
              </h3>
            </div>

            <div className={'px-2 sm:px-6 md:px-2 lg:px-6 p-6 pt-0'}>
              <div className="bg-[#3ad42212] border border-[#12d93d] rounded-[10px] p-3 sm:p-6 text-center mb-6">
                <CheckCircleIcon className="w-[35px] h-[35px] mx-auto mb-4 text-green-500" />
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#77b255] text-[27px] mb-2">
                  Low Risk
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-extralight text-[#12ab47] text-base mb-4">
                  Risk Score: 3/15
                </p>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#087921] text-lg leading-[30px]">
                  Low risk assessment. Student demonstrates good academic
                  performance, regular attendance, and positive engagement.
                  Continue current support and maintain regular check-ins.
                </p>
              </div>
            </div>

          <div className="rounded-xl border bg-card text-card-foreground bg-[#d9d9d92b]">
            <div className="p-6">
              <h4 className="[font-family:'Inter',Helvetica] font-medium text-black text-lg leading-[30px] mb-4">
                Assessment Factors
              </h4>
              <div className="space-y-2">
                {assessmentFactors.map((item, index) => (
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
                ))}
              </div>
            </div>
          </div>

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
