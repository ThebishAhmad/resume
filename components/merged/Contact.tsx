"use client";

import { useState } from "react";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "900af035-23ef-4fcc-ba31-84972d86e775",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
        setErrorMessage("Failed to send message. Please try emailing directly.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection or email directly.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-orb"></div>
      <div className="contact-container">
        <h2>Say Hello :) I do reply (;</h2>
        <p>Send me a message for work or just to say hi.</p>

        {status === "success" && (
          <div className="success-message">
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {status === "error" && (
          <div className="error-message">
            ✗ {errorMessage}
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === "sending"}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === "sending"}
              />
            </div>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              rows={6}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={status === "sending"}
            ></textarea>
          </div>
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          <p className="contact-alt">
            Or email directly: <a href="mailto:tabishahmaddd@gmail.com">tabishahmaddd@gmail.com</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
