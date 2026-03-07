import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Section from "@/components/Section";
import Background from "@/components/Background";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30 overflow-x-hidden relative">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />

      <Section id="services" title="Services" className="bg-transparent overflow-hidden">
        <div className="relative group max-w-[100vw]">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing scroll-smooth px-4 md:px-0">
            {[
              {
                title: "Web Development",
                desc: "As an accomplished Full Stack Web Developer, I specialize in React.js, Next.js, Node.js, and MongoDB. My skill set covers both front-end and back-end technologies, allowing me to build dynamic, responsive, and scalable web applications. I focus on creating seamless user experiences while ensuring efficient data handling and robust server-side functionality. Every project I work on is driven by a commitment to delivering innovative, high-quality solutions that truly meet client and user needs."
              },
              {
                title: "App Development",
                desc: "I am a skilled Full Stack App Developer specializing in React Native, Node.js, Express.js, and MongoDB. With over two years of experience, I build high-performance mobile applications that are both intuitive and responsive. From designing smooth user interfaces to managing backend logic and database integration, I handle the entire development process. My goal is to deliver mobile solutions that are reliable, scalable, and tailored to real-world user requirements."
              },
              {
                title: "API Integration Services",
                desc: "As a Full Stack Web Developer experienced in React.js, Next.js, Node.js, and MongoDB, I also offer comprehensive API integration services. I specialize in connecting applications and systems through secure and efficient APIs. Whether it's integrating third-party services, connecting databases, or building custom API solutions, I ensure smooth communication between different platforms. My approach focuses on reliability, scalability, and creating connected digital ecosystems that enhance overall application functionality."
              },
              {
                title: "Native Features for React Native Apps",
                desc: "I specialize in integrating native device features into React Native applications to create powerful and engaging mobile experiences. From accessing the camera, GPS, and microphone to implementing biometric authentication, push notifications, and offline storage, I ensure your app feels truly native. Whether you need file system access, sensors integration, or background services, I bring deep expertise in bridging native code with React Native for smooth and high-performance results."
              },
              {
                title: "Complete App Deployment Services",
                desc: "I handle end-to-end deployment of React Native applications to both major app stores. From generating signed builds to managing certificates and provisioning profiles, I ensure your app reaches users smoothly on Apple App Store and Google Play Store. I also set up TestFlight and Internal Testing tracks for beta testing before public release."
              }
            ].map((service) => (
              <div
                key={service.title}
                className="min-w-[85vw] md:min-w-[450px] p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300 snap-center"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{service.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">{service.desc}</p>
                </div>
                <a
                  href="https://wa.me/923216447958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-bold hover:scale-105 transition-all w-fit shadow-lg shadow-green-500/20"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Contact Me
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            ))}
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects" className="bg-transparent">
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

      <Section id="testimonials" title="Testimonials" className="bg-transparent">
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

      <Section id="contact" title="Contact Me" className="bg-transparent">
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
