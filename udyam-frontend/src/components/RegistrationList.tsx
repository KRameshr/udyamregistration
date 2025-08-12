import React, { useEffect, useState } from "react";
import "./RegistrationList.css";

interface Registration {
  id: string;
  aadhaarNumber: string;
  ownerName: string;
  declarationA: boolean;
  createdAt: string;
}

const RegistrationList: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:4090/registrations")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setRegistrations(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  }, []);

  const fetchRegistrations = () => {
    setLoading(true);
    setError(null);
    fetch("http://localhost:4090/registrations")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setRegistrations(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  if (loading) return <p>Loading registrations...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>All Registrations</h2>
      {/* <button
        onClick={() => window.location.reload()}
        style={{ marginBottom: "1rem" }}
      >
        Refresh
      </button> */}
      <button
        onClick={fetchRegistrations}
        disabled={loading}
        style={{ marginBottom: "1rem" }}
      >
        {loading ? "Loading..." : "Refresh List"}
      </button>

      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Aadhaar Number</th>
            <th>Owner Name</th>
            <th>Declaration A</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((reg) => (
            <tr key={reg.id}>
              <td>{reg.aadhaarNumber}</td>
              <td>{reg.ownerName}</td>
              <td>{reg.declarationA ? "Yes" : "No"}</td>
              <td>{new Date(reg.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationList;
