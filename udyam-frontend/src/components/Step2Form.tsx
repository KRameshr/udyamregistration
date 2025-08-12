import React, { useState } from "react";

interface Step2FormProps {
  onSubmit: (step2Data: any) => void;
  onBack: () => void;
}

const Step2Form: React.FC<Step2FormProps> = ({ onSubmit, onBack }) => {
  const [pan, setPan] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = () => {
    if (!pan) return;
    setOtpSent(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ pan, otp });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="button" onClick={onBack}>
        ← Back
      </button>
      <input
        type="text"
        placeholder="PAN Number"
        value={pan}
        onChange={(e) => setPan(e.target.value.toUpperCase())}
      />
      {otpSent && (
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      )}
      {!otpSent && (
        <button type="button" onClick={sendOtp}>
          Send OTP
        </button>
      )}
      {otpSent && <button type="submit">Verify</button>}
    </form>
  );
};

export default Step2Form;
