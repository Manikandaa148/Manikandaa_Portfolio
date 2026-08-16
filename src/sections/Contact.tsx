import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../components/Icons";
import { personalInfo } from "../data/profileData";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Enter a valid email address.";
    }

    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setStatusMessage("Sending your message...");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Offline Simulation mode if no env key
      setTimeout(() => {
        setStatus("success");
        setStatusMessage("Message simulated successfully! Add VITE_WEB3FORMS_ACCESS_KEY in .env file to enable actual inbox routing.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1200);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: ${formData.subject}`,
          message: formData.message
        })
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully. I will get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(resData.message || "Something went wrong.");
      }
    } catch (err: any) {
      setStatus("error");
      setStatusMessage(err.message || "Failed to connect to the email server. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-obsidian-900 grid-lines transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-cyber-cyan mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Have an opportunity, a project proposal, or just want to chat? Drop me a message below or connect with me via socials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white dark:bg-obsidian-800 rounded-2xl p-6 sm:p-8 border border-gray-200/60 dark:border-obsidian-800/80 shadow-sm">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-sans">
                Contact Information
              </h3>
              <p className="text-gray-650 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                Feel free to reach out via email, phone call, or LinkedIn. I am based in India and open to both remote and on-site roles in Data Science, Machine Learning, and Analytics.
              </p>

              {/* Direct Info list */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#EA4335]/10 text-[#EA4335] dark:bg-[#EA4335]/5 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-bold uppercase tracking-wider">Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-800 dark:text-gray-200 hover:text-cyber-cyan font-mono text-sm sm:text-base font-semibold"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-cyber-cyan/10 text-cyber-cyan dark:bg-cyber-cyan/5 rounded-lg flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-bold uppercase tracking-wider">Phone</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-gray-800 dark:text-gray-200 hover:text-cyber-cyan font-mono text-sm sm:text-base font-semibold"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-cyber-cyan/10 text-cyber-cyan dark:bg-cyber-cyan/5 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-bold uppercase tracking-wider">Location</span>
                    <span className="text-gray-850 dark:text-gray-200 font-sans text-sm sm:text-base font-semibold">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials Connection */}
            <div className="border-t border-gray-100 dark:border-obsidian-750/50 pt-6 mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-450 dark:text-gray-500 mb-3">
                Social Profiles
              </h4>
              <div className="flex items-center space-x-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-50 dark:bg-obsidian-900 border border-gray-200 dark:border-obsidian-850 text-gray-700 dark:text-gray-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] rounded-lg text-sm transition-colors font-medium"
                >
                  <Linkedin className="h-4.5 w-4.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-50 dark:bg-obsidian-900 border border-gray-200 dark:border-obsidian-850 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white rounded-lg text-sm transition-colors font-medium"
                >
                  <Github className="h-4.5 w-4.5 text-[#24292F] dark:text-white" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white dark:bg-obsidian-800 rounded-2xl p-6 sm:p-8 border border-gray-200/60 dark:border-obsidian-800/80 shadow-sm flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-350 mb-1.5 font-sans">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-obsidian-900 border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyber-cyan focus:border-cyber-cyan ${
                      errors.name ? "border-red-500" : "border-gray-200 dark:border-obsidian-750"
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-550 flex items-center space-x-1 font-sans">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-350 mb-1.5 font-sans">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-obsidian-900 border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyber-cyan focus:border-cyber-cyan ${
                      errors.email ? "border-red-500" : "border-gray-200 dark:border-obsidian-750"
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-550 flex items-center space-x-1 font-sans">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-350 mb-1.5 font-sans">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`block w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-obsidian-900 border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyber-cyan focus:border-cyber-cyan ${
                    errors.subject ? "border-red-500" : "border-gray-200 dark:border-obsidian-750"
                  }`}
                  placeholder="Inquiry subject"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-550 flex items-center space-x-1 font-sans">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-350 mb-1.5 font-sans">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`block w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-obsidian-900 border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyber-cyan focus:border-cyber-cyan ${
                    errors.message ? "border-red-500" : "border-gray-200 dark:border-obsidian-750"
                  }`}
                  placeholder="How can I help you?"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-550 flex items-center space-x-1 font-sans">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-cyber-cyan to-cyber-blue hover:from-cyber-blue hover:to-cyber-cyan text-white font-semibold rounded-lg text-sm shadow-sm hover:shadow-cyber-cyan/10 transition-all disabled:opacity-50"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </button>
            </form>

            {/* Status Feedback Notification Alert */}
            {status !== "idle" && (
              <div
                className={`mt-4 p-4 rounded-lg flex items-start space-x-3 border text-sm ${
                  status === "submitting"
                    ? "bg-blue-50 dark:bg-blue-950/20 text-blue-800 dark:text-blue-400 border-blue-200 dark:border-blue-900/30"
                    : status === "success"
                    ? "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-400 border-emerald-250 dark:border-emerald-900/30"
                    : "bg-red-50 dark:bg-red-950/20 text-red-800 dark:text-red-400 border-red-200 dark:border-red-900/30"
                }`}
              >
                {status === "success" ? (
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                )}
                <span>{statusMessage}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
