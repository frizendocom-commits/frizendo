"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "923498901846";

const PROJECT_TYPES = [
  "SEO & Local SEO",
  "Google Ads / Paid Advertising",
  "Social Media Marketing",
  "Branding",
  "Web Development",
  "Growth Strategy",
  "Other",
];

export default function ContactBriefForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [details, setDetails] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Hi Frizendo, I'd like to discuss a project.",
      "",
      `Name: ${name}`,
      email ? `Email: ${email}` : null,
      `Project type: ${projectType}`,
      "",
      "Project details:",
      details,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="brief-card" onSubmit={handleSubmit}>
      <h1 className="brief-title">Send a project brief</h1>
      <p className="brief-sub">
        Fill this in and I&apos;ll open WhatsApp with your message ready.
        Nothing is sent automatically — you review and send it yourself.
      </p>

      <div className="row g-3">
        <div className="col-md-6">
          <label className="brief-label" htmlFor="brief-name">
            Your name
          </label>
          <input
            autoComplete="name"
            className="brief-input"
            id="brief-name"
            name="name"
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            required
            type="text"
            value={name}
          />
        </div>
        <div className="col-md-6">
          <label className="brief-label" htmlFor="brief-email">
            Email
          </label>
          <input
            autoComplete="email"
            className="brief-input"
            id="brief-email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            type="email"
            value={email}
          />
        </div>
        <div className="col-12">
          <label className="brief-label" htmlFor="brief-type">
            Project type
          </label>
          <select
            className="brief-select"
            id="brief-type"
            name="projectType"
            onChange={(event) => setProjectType(event.target.value)}
            value={projectType}
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <label className="brief-label" htmlFor="brief-details">
            Project details
          </label>
          <textarea
            className="brief-textarea"
            id="brief-details"
            name="details"
            onChange={(event) => setDetails(event.target.value)}
            placeholder="What are you building, who is it for, and what does success look like?"
            required
            rows={5}
            value={details}
          />
        </div>
      </div>

      <button className="brief-submit" type="submit">
        Send via WhatsApp <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
