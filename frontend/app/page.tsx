"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "../components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Section from "@/components/Section";
import Background from "@/components/Background";
import { Mail, Phone, MapPin, Send, AlertCircle, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch("http://localhost:5001/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
        } else {
          toast.error(result.message || "Failed to send message. Please try again later.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An error occurred. Please check your connection and try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <main className="min-h-screen bg-transparent font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30 overflow-x-hidden relative">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />

      <Projects />

      <Testimonials />

      <Section id="contact" title="Contact Me" className="bg-transparent">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Left Side: Direct Contact Info */}
          <div className="lg:w-1/3">
            <h3 className="text-3xl font-bold text-black dark:text-white mb-8 transition-colors">
              Get in Touch
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 mb-10 text-lg leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out through the form or my direct contact details.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:cheemahussnain155@gmail.com" className="text-lg font-semibold text-black dark:text-white hover:text-blue-600 transition-colors">
                    cheemahussnain155@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-green-50 dark:bg-zinc-900 border border-green-100 dark:border-zinc-800 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Call Me</p>
                  <a href="tel:+923216447958" className="text-lg font-semibold text-black dark:text-white hover:text-green-600 transition-colors">
                    +92 321 6447958
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-zinc-900 border border-purple-100 dark:border-zinc-800 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">My Location</p>
                  <p className="text-lg font-semibold text-black dark:text-white">
                    Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:w-2/3 bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[40px] border border-zinc-200 dark:border-zinc-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl -mr-16 -mt-16" />

            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className={`w-full p-4 bg-zinc-50 dark:bg-black border ${errors.name ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-800'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className={`w-full p-4 bg-zinc-50 dark:bg-black border ${errors.email ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-800'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 ml-1">Mobile Number</label>
                  <input
                    type="text"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="+92 321 6447958"
                    className={`w-full p-4 bg-zinc-50 dark:bg-black border ${errors.mobile ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-800'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.mobile}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 ml-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry"
                    className={`w-full p-4 bg-zinc-50 dark:bg-black border ${errors.subject ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-800'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.subject}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2 ml-1">Your Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`w-full p-4 bg-zinc-50 dark:bg-black border ${errors.message ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-800'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-4 border-zinc-400 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </Section>

      <footer className="py-20 border-t border-zinc-200 dark:border-zinc-800 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Let's Connect</h2>
          <div className="flex justify-center gap-8 mb-10">
            <a href="https://github.com/hussnaincheema" target="_blank" className="text-zinc-500 hover:text-black dark:hover:text-white transition-all transform hover:scale-110">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/hussnain-cheema/" target="_blank" className="text-zinc-500 hover:text-black dark:hover:text-white transition-all transform hover:scale-110">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="https://wa.me/923216447958" target="_blank" className="text-zinc-500 hover:text-black dark:hover:text-white transition-all transform hover:scale-110">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            </a>
            <a href="mailto:cheemahussnain155@gmail.com" className="text-zinc-500 hover:text-black dark:hover:text-white transition-all transform hover:scale-110">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 mb-2 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Lahore, Punjab, Pakistan
          </p>
          <p className="text-zinc-500 dark:text-zinc-400" suppressHydrationWarning>&copy; {new Date().getFullYear()} Hussnain Cheema. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
