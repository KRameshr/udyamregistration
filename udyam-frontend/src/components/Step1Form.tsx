import React, { useState } from "react";

interface Step1FormProps {
  onSubmit: (step1Data: any) => void;
}

const Step1Form: React.FC<Step1FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    aadhaar: "",
    ownerName: "",
    declaration: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="aadhaar"
        placeholder="Your Aadhaar No"
        value={formData.aadhaar}
        onChange={handleChange}
      />
      <input
        type="text"
        name="ownerName"
        placeholder="Name as per Aadhaar"
        value={formData.ownerName}
        onChange={handleChange}
      />
      <label>
        <input
          type="checkbox"
          name="declaration"
          checked={formData.declaration}
          onChange={handleChange}
        />
        Declaration
      </label>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step1Form;
