import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.length < 5 || !email.includes("@")) {
      setError("Por favor verifique que su nombre tenga mas de 5 caracteres");
      return;
    }

    setSuccessMessage(
      `Gracias ${name}, te contactaremos lo antes posible vía email a ${email}`
    );
    setError("");
  };

  useEffect(() => {
    if (successMessage) {
      const messageTimeout = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(messageTimeout);
    }
  }, [successMessage]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ingresa tu nombre"
        className="form-input"
      />

      <br />
      <br />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ingresa tu Email"
        className="form-input"
      />

      <br />
      <br />
      
      <button type="submit" className="form-button">Enviar</button>
      
      {error && <p className="form-error">{error}</p>}
      {successMessage && <p className="form-success">{successMessage}</p>}
    </form>
  );
};

export default Form;

