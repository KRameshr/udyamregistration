import React, { useState } from "react";
import FormRenderer from "./components/FormRenderer";
import RegistrationList from "./components/RegistrationList";
import Step1Form from "./components/Step1Form";
import Step2Form from "./components/Step2Form";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Data, setStep1Data] = useState<any>(null);
  const [registrations, setRegistrations] = useState<any[]>([]);

  const handleStep1Submit = (data: any) => {
    setStep1Data(data);
    setCurrentStep(2);
  };

  const handleStep2Submit = (data: any) => {
    const fullData = { ...step1Data, ...data };
    setRegistrations((prev) => [...prev, fullData]);
    setCurrentStep(1);
    setStep1Data(null);
  };

  return (
    <div>
      <h1>Udyam Registration App</h1>

      <FormRenderer />
      <hr />

      {currentStep === 1 && <Step1Form onSubmit={handleStep1Submit} />}
      {currentStep === 2 && (
        <Step2Form
          onSubmit={handleStep2Submit}
          onBack={() => setCurrentStep(1)}
        />
      )}

      <hr />
      <RegistrationList registrations={registrations} />
    </div>
  );
};

export default App;
