import React, { useState } from "react";
import formSchema from "../data/step1.json";
import "./FormRenderer.css";

interface FormField {
  id: string;
  name: string;
  type: string;
  placeholder: string | null;
  label?: string | null;
  required: boolean;
}

const FormRenderer: React.FC = () => {
  // Filter out hidden inputs and empty name fields
  const fields: FormField[] = formSchema.filter(
    (field) => field.type !== "hidden" && field.name !== ""
  );

  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   {fields.map((field) => (
    //     <div key={field.id} style={{ marginBottom: "1rem" }}>
    //       {field.type !== "checkbox" && (
    //         <>
    //           <label htmlFor={field.id}>
    //             {field.placeholder || field.label || field.name}
    //           </label>
    //           <br />
    //         </>
    //       )}

    //       {field.type === "text" && (
    //         <input
    //           id={field.id}
    //           name={field.name}
    //           type="text"
    //           placeholder={field.placeholder || ""}
    //           required={field.required}
    //           onChange={handleChange}
    //           value={formData[field.name] || ""}
    //           style={{ padding: "0.5rem", width: "100%" }}
    //         />
    //       )}

    //       {field.type === "checkbox" && (
    //         <>
    //           <input
    //             id={field.id}
    //             name={field.name}
    //             type="checkbox"
    //             onChange={handleChange}
    //             checked={formData[field.name] || false}
    //           />
    //           <label htmlFor={field.id} style={{ marginLeft: "0.5rem" }}>
    //             {field.placeholder || field.label || field.name}
    //           </label>
    //         </>
    //       )}

    //       {field.type === "submit" && (
    //         <button type="submit" style={{ padding: "0.5rem 1rem" }}>
    //           {field.placeholder || "Submit"}
    //         </button>
    //       )}
    //     </div>
    //   ))}
    // </form>
    <form onSubmit={handleSubmit} className="form-container">
      {fields.map((field) => (
        <div
          key={field.id}
          className={`form-group ${
            field.type === "checkbox" ? "checkbox-group" : ""
          }`}
        >
          {field.type !== "checkbox" && (
            <label htmlFor={field.id}>
              {field.placeholder || field.label || field.name}
            </label>
          )}

          {field.type === "text" && (
            <input
              id={field.id}
              name={field.name}
              type="text"
              placeholder={field.placeholder || ""}
              required={field.required}
              onChange={handleChange}
              value={formData[field.name] || ""}
            />
          )}

          {field.type === "checkbox" && (
            <>
              <input
                id={field.id}
                name={field.name}
                type="checkbox"
                onChange={handleChange}
                checked={formData[field.name] || false}
              />
              <label htmlFor={field.id} className="checkbox-label">
                {field.placeholder || field.label || field.name}
              </label>
            </>
          )}

          {field.type === "submit" && (
            <button type="submit">{field.placeholder || "Submit"}</button>
          )}
        </div>
      ))}
    </form>
  );
};

export default FormRenderer;
