import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30">
      <Navbar />
      <Hero />
      <About />

      <Section id="skills" title="Skills" className="bg-zinc-50 dark:bg-[#0a0a0a]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS", "PostgreSQL", "Docker", "AWS"].map((skill) => (
            <div key={skill} className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center font-medium shadow-sm transition-transform hover:scale-105">
              {skill}
            </div>
          ))}
        </div>
      </Section>

      <Section id="services" title="Services" className="bg-white dark:bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Web Development", desc: "Building responsive and performant web applications using modern frameworks." },
            { title: "Backend Systems", desc: "Designing scalable APIs and robust database architectures." },
            { title: "UI/UX Design", desc: "Creating intuitive and visually appealing user interfaces." }
          ].map((service) => (
            <div key={service.title} className="p-8 bg-zinc-50 dark:bg-[#0a0a0a] rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{service.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" className="bg-zinc-50 dark:bg-[#0a0a0a]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg transition-all hover:-translate-y-2">
              <div className="aspect-video bg-zinc-200 dark:bg-zinc-800" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">Project {i}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">A detailed description of the amazing work done on this project.</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="testimonials" title="Testimonials" className="bg-white dark:bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "John Doe", role: "CEO at TechCorp", content: "Hussnain is an exceptional engineer who delivers high-quality work consistently." },
            { name: "Jane Smith", role: "Product Manager", content: "Working with Hussnain was a pleasure. He really understands the user's perspective." }
          ].map((t) => (
            <div key={t.name} className="p-8 bg-zinc-50 dark:bg-[#0a0a0a] rounded-2xl border border-zinc-200 dark:border-zinc-800 italic">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">"{t.content}"</p>
              <div className="not-italic">
                <p className="font-bold text-black dark:text-white">{t.name}</p>
                <p className="text-sm text-zinc-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact Me" className="bg-zinc-50 dark:bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="w-full p-4 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Email" className="w-full p-4 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <textarea placeholder="Message" rows={5} className="w-full p-4 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </Section>

      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-center text-zinc-500 dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Hussnain Cheema. All rights reserved.</p>
      </footer>
    </main>
  );
}
