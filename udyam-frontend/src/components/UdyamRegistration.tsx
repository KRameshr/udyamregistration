// UdyamRegistration.tsx
import React, { useState } from "react";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";

const UdyamRegistration: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({}); // Collect all form data here

  // Called when Step 1 is completed
  const handleStep1Submit = (step1Data: any) => {
    setFormData((prev: any) => ({ ...prev, ...step1Data }));
    setCurrentStep(2);
  };

  // Called when Step 2 is completed
  const handleStep2Submit = (step2Data: any) => {
    const finalData = { ...formData, ...step2Data };
    console.log("Final collected data:", finalData);

    // TODO: Send finalData to backend API
    alert("Registration complete! (Check console for data)");
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>Udyam Registration</h1>
      <p>Step {currentStep} of 2</p>

      {currentStep === 1 && <Step1Form onSubmit={handleStep1Submit} />}
      {currentStep === 2 && (
        <Step2Form
          onSubmit={handleStep2Submit}
          onBack={() => setCurrentStep(1)}
        />
      )}
    </div>
  );
};

export default UdyamRegistration;
