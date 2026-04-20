import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { BookOpen, GraduationCap, Users, Star, ArrowRight, Instagram, Send, Phone, MapPin, Mail, Play, CheckCircle2, ChevronRight, Quote, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Course, Feature, GalleryImage, Testimonial } from "./types";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "bg-white/95 backdrop-blur-xl py-4 shadow-2xl" : "bg-transparent py-10"}`}>
      <div className="container mx-auto px-10 flex justify-between items-center text-brand-green">
        <a href="#" className="flex flex-col group">
          <span className="font-serif text-3xl font-black tracking-tighter leading-none">IRODA USTOZ</span>
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-gold mt-1">Academy of Excellence</span>
        </a>
        
        <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-60">
          <a href="#about" className="hover:text-brand-gold transition-colors">Biz haqimizda</a>
          <a href="#courses" className="hover:text-brand-gold transition-colors">Dasturlar</a>
          <a href="#gallery" className="hover:text-brand-gold transition-colors">Galereya</a>
          <a href="#testimonials" className="hover:text-brand-gold transition-colors">Fikrlar</a>
        </div>

        <a href="#contact" className="hidden lg:block bg-brand-green text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transform hover:-translate-y-1 shadow-xl hover:shadow-brand-green/20 transition-all">
          Maslahat Olish
        </a>

        <button className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5">
          <div className="w-6 h-[2px] bg-brand-green" />
          <div className="w-6 h-[2px] bg-brand-green" />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FDFCF9] overflow-hidden pt-20">
      {/* Decorative Text */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display text-brand-green/[0.02] select-none pointer-events-none z-0">
        TA'LIM
      </h1>
      
      <div className="container mx-auto px-10 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[1px] bg-brand-gold" />
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-gold">O'zbekistonning eng nufuzli akademiyasi</span>
          </div>
          
          <h1 className="text-8xl md:text-[12rem] font-serif text-brand-green leading-[0.82] mb-12 tracking-tighter">
            Kelajakni <br />
            <span className="italic font-light text-brand-gold">O'zingiz</span> <br />
            Tanlang.
          </h1>
          
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            <p className="text-xl text-brand-green/50 max-w-sm leading-relaxed font-light">
              Iroda Ustoz — bu ta'limdagi yangi bosqich. Biz bilan siz nafaqat bilim olasiz, balki o'z yetakchilik salohiyatingizni dunyo darajasiga olib chiqasiz.
            </p>
            <button className="h-20 w-20 rounded-full border border-brand-green/10 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all cursor-pointer group">
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative px-6"
        >
          <div className="aspect-[3/4] rounded-[6rem] overflow-hidden shadow-[0_100px_200px_rgba(45,79,62,0.15)] relative z-10 bg-brand-green">
             <img 
               src="https://images.unsplash.com/photo-1544717297-fa154da09f9b?q=80&w=1200&auto=format&fit=crop" 
               alt="Iroda Ustoz Hero" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-green/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000" />
          </div>
          
          {/* Floating Stats */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -right-10 top-1/3 bg-white/90 backdrop-blur-3xl p-8 rounded-[3rem] shadow-2xl z-20 border border-brand-green/5 max-w-[200px]"
          >
            <div className="text-4xl font-serif text-brand-green font-bold mb-1">98%</div>
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Muvaffaqiyatli Bitiruvchilar</p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[150px] -z-0" />
    </section>
  );
};

const SectionHeader = ({ num, title, subtitle, center = false }: { num: string, title: string, subtitle: string, center?: boolean }) => (
  <div className={`mb-32 ${center ? "text-center mx-auto" : ""}`}>
    <div className={`flex items-center gap-4 mb-6 ${center ? "justify-center" : ""}`}>
      <span className="text-[10px] font-black text-brand-gold">{num}</span>
      <div className="w-10 h-[1px] bg-brand-gold/30" />
      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-gold">{subtitle}</span>
    </div>
    <h2 className="text-7xl md:text-[8rem] font-serif text-brand-green leading-[0.9] tracking-tighter">
      {title}
    </h2>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-40 bg-white">
      <div className="container mx-auto px-10">
        <SectionHeader num="01" subtitle="Biz haqimizda" title="Ta'lim Inqilobi Sirlari" />
        
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="grid grid-cols-2 gap-8 relative">
             <div className="space-y-8">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600" className="rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1497633762265-9a179c93b947?q=80&w=600" className="rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
             </div>
             <div className="space-y-8 pt-20">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600" className="rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1523240715630-99fb0d1ad3f2?q=80&w=600" className="rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
             </div>
             {/* Circular badge */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-gold rounded-full flex items-center justify-center p-8 text-center text-white shadow-2xl z-20 overflow-hidden">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] leading-tight">10 Yillik Tajriba va Biznes</span>
             </div>
          </div>
          
          <div className="space-y-12">
            <h3 className="text-5xl font-serif text-brand-green leading-tight">
               Biz faqat bilim bermaymiz, <span className="italic font-light text-brand-gold">biz natija yaratamiz.</span>
            </h3>
            <p className="text-xl text-brand-green/60 font-light leading-relaxed">
               Iroda Ustoz Elite Academy — bu har bir individual qobiliyatni eng yuqori darajaga olib chiquvchi ekotizimdir. Bizning falsafamiz: har bir bitiruvchi o'z sohasida eng yaxshisi bo'lishi shart.
            </p>
            <ul className="space-y-6">
              {[
                { t: "Elite Mentorlik", d: "Faqatgina praktik va soha ustalari dars beradi." },
                { t: "Individual Strategiya", d: "Har bir o'quvchi uchun maxsus muvaffaqiyat xaritasi." },
                { t: "Global Imkoniyat", d: "Bitiruvchilarimiz Google, Amazon va Inha kabi nufuzli joylarda." }
              ].map((item, i) => (
                <li key={i} className="flex gap-6 items-start group">
                   <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-brand-gold group-hover:bg-brand-green group-hover:text-white transition-all duration-500 shrink-0">
                      <CheckCircle2 size={20} />
                   </div>
                   <div>
                      <h4 className="text-xl font-serif text-brand-green font-bold mb-1">{item.t}</h4>
                      <p className="text-sm text-brand-green/50 font-light">{item.d}</p>
                   </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const CourseCard = ({ title, level, price, duration, image, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group bg-white rounded-[5rem] overflow-hidden border border-brand-green/5 hover:border-brand-gold/10 hover:shadow-[0_50px_100px_rgba(45,79,62,0.1)] transition-all duration-700"
  >
    <div className="h-[450px] relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-[3000ms] group-hover:scale-110" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-brand-green/40 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="absolute top-10 left-10">
        <span className="px-6 py-2 bg-white/90 backdrop-blur-xl rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-brand-green shadow-xl">
           Elite {level}
        </span>
      </div>
      <div className="absolute bottom-10 left-10 right-10 flex flex-col justify-end translate-y-20 group-hover:translate-y-0 transition-transform duration-1000">
         <h3 className="text-5xl font-serif text-white mb-6 italic">{title}</h3>
         <div className="flex justify-between items-center text-white/80 text-[10px] font-black uppercase tracking-widest border-t border-white/20 pt-6">
            <span className="flex items-center gap-2"><BookOpen size={14} /> {duration}</span>
            <span className="text-brand-gold">{price}</span>
         </div>
      </div>
    </div>
  </motion.div>
);

const Courses = () => {
  const eliteCourses = [
    { title: "Dasturlash Strategiyasi", level: "Pro", price: "500k", duration: "6 oy", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200" },
    { title: "Matematik Logika", level: "Elite", price: "400k", duration: "4 oy", image: "https://images.unsplash.com/photo-1509228468518-180dd482180c?q=80&w=1200" },
    { title: "IELTS Premium", level: "Master", price: "600k", duration: "8 oy", image: "https://images.unsplash.com/photo-1516321406647-e214da09191c?q=80&w=1200" }
  ];

  return (
    <section id="courses" className="py-40 bg-brand-cream/30">
      <div className="container mx-auto px-10">
        <SectionHeader num="02" subtitle="Dasturlarimiz" title="Eng Kuchli Kurslar" center />
        <div className="grid md:grid-cols-3 gap-12">
          {eliteCourses.map((c, i) => (
             <CourseCard key={i} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryGrid = () => {
  return (
    <section id="gallery" className="py-40 bg-white">
      <div className="container mx-auto px-10">
        <SectionHeader num="03" subtitle="Galereya" title="Elite Muhit Lavhalari" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           <div className="md:col-span-2 aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl relative group">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-green/80 flex items-center justify-center p-12 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-md">
                 <h3 className="text-white text-4xl font-serif italic text-center">Guruh Ishtirokidagi Amaliy Mashg'ulotlar</h3>
              </div>
           </div>
           <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative group">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
           </div>
           <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative group">
              <img src="https://images.unsplash.com/photo-1523240715630-99fb0d1ad3f2?q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
           </div>
           
           <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative group">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
           </div>
           <div className="md:col-span-2 aspect-video rounded-[4rem] overflow-hidden shadow-2xl relative group">
              <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
           </div>
           <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative group">
              <img src="https://images.unsplash.com/photo-1434039318934-896ce43ee17e?q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
           </div>
           
           <div className="md:col-span-4 aspect-[21/9] rounded-[4rem] overflow-hidden shadow-2xl relative group mt-8">
              <img src="https://images.unsplash.com/photo-1513258496099-48168024adb0?q=80&w=1600" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-green/80 flex items-center justify-center p-12 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-md text-white text-5xl font-serif italic">
                 Bilim Markazimiz - Kelajak Maskani
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Umarxon Ismailov",
      role: "Elite Developer @ Google",
      text: "Iroda Ustoz Academy nafaqat bilim berdi, balki dunyoga bo'lgan qat'iy munosabatimni shakllantirdi. Mana 5 yildirki, men professional sohamda eng yaxshilaridan biriman.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
    },
    {
      name: "Shoxakbar To'xtaraliyif",
      role: "Elite Entrepreneur",
      text: "Matematika va mantiqiy fikrlash bu koinotning tili ekanligini ushbu maskanda angladim. Mening barcha muvaffaqiyatlarim mana shu yerdagi poydevordan boshlangan.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
    }
  ];

  return (
    <section id="testimonials" className="py-40 bg-brand-green text-brand-cream relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/[0.03] rounded-full blur-[150px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] -z-0" />
      
      <div className="container mx-auto px-10 relative z-10">
        <SectionHeader num="04" subtitle="Fikrlar" title="Muvaffaqiyatlarimiz Akssadosi" />
        
        <div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="p-16 rounded-[6rem] bg-white/5 border border-white/10 backdrop-blur-3xl hover:bg-white/10 transition-all duration-700 relative group"
             >
                <Quote size={64} className="text-brand-gold mb-12 opacity-20 transform group-hover:rotate-12 transition-transform duration-700" />
                <p className="text-3xl font-serif leading-relaxed italic mb-16 opacity-80 group-hover:opacity-100 transition-opacity">
                   "{r.text}"
                </p>
                <div className="flex items-center gap-8">
                   <div className="w-20 h-20 rounded-full border-2 border-brand-gold/50 p-1.5 shrink-0 overflow-hidden">
                      <img src={r.avatar} alt={r.name} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                   </div>
                   <div>
                      <h4 className="text-brand-gold font-serif text-3xl tracking-tight leading-none mb-2">{r.name}</h4>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">{r.role}</span>
                   </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-40 bg-[#FDFCF9] relative">
      <div className="container mx-auto px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 shadow-[0_100px_200px_rgba(45,79,62,0.1)] rounded-[6rem] overflow-hidden bg-white">
          <div className="p-20 bg-brand-green text-white flex flex-col justify-between relative">
             <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 blur-[100px] -z-0" />
             <div className="relative z-10">
                <h2 className="text-7xl font-serif italic mb-16 leading-tight">Elite Muloqot <br />Boshlansin</h2>
                <div className="space-y-12">
                   {[
                     { icon: Phone, val: "+998 90 123 45 67", label: "Murojaat uchun" },
                     { icon: Instagram, val: "@iroda_ustoz_edu", label: "Instagram Sahifamiz" },
                     { icon: Send, val: "t.me/irodaustoz_bot", label: "Telegram Bot" }
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-8 group">
                         <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-all duration-500">
                            <item.icon size={24} />
                         </div>
                         <div>
                            <div className="text-2xl font-serif text-white">{item.val}</div>
                            <div className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-gold">{item.label}</div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
             
             <div className="relative z-10 pt-20 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                © {new Date().getFullYear()} Iroda Ustoz Academy. All Excellence Reserved.
             </div>
          </div>
          
          <div className="p-20 bg-white">
             <h3 className="text-4xl font-serif text-brand-green mb-12 italic">Ariza Qoldirish</h3>
             <form className="space-y-12">
                <div className="space-y-4">
                   <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-green/20">Sizning Ismingiz</label>
                   <input type="text" className="w-full bg-brand-cream/30 border-b-2 border-brand-green/10 p-6 text-3xl font-serif text-brand-green focus:border-brand-gold outline-none transition-all placeholder:text-brand-green/5" placeholder="Bekzod..." />
                </div>
                <div className="space-y-4">
                   <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-green/20">Sizning Telefoningiz</label>
                   <input type="tel" className="w-full bg-brand-cream/30 border-b-2 border-brand-green/10 p-6 text-3xl font-serif text-brand-green focus:border-brand-gold outline-none transition-all placeholder:text-brand-green/5" placeholder="+998" />
                </div>
                <div className="space-y-4">
                   <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-green/20">Qanday savollaringiz bor?</label>
                   <textarea rows={2} className="w-full bg-brand-cream/30 border-b-2 border-brand-green/10 p-6 text-3xl font-serif text-brand-green focus:border-brand-gold outline-none transition-all placeholder:text-brand-green/5 resize-none" placeholder="Masalan: Kurslar narxi..." />
                </div>
                <button className="w-full py-8 rounded-full bg-brand-gold text-white text-[12px] font-black uppercase tracking-[0.5em] shadow-2xl shadow-brand-gold/30 hover:bg-brand-green transition-all transform hover:-translate-y-2 cursor-pointer">
                   A'zo Bo'lish
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Atmosphere = () => (
  <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
    <motion.div 
      initial={{ scale: 1.2 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 3 }}
      className="absolute inset-0"
    >
      <img 
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop" 
        className="w-full h-full object-cover grayscale brightness-50"
        referrerPolicy="no-referrer"
        alt="Academy Atmosphere"
      />
    </motion.div>
    <div className="container mx-auto px-10 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.8em] text-brand-gold mb-8 block">Bilim va Ma'rifat</span>
        <h2 className="text-white text-6xl md:text-[10rem] font-serif italic tracking-tighter leading-none">
          Kelajak — bilimli <br />yoshlar qo'lida
        </h2>
      </motion.div>
    </div>
  </section>
);

export default function IrodaUstozFamousEdition() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white bg-white">
      <Navbar />
      <Hero />
      <About />
      <Atmosphere />
      <Courses />
      <GalleryGrid />
      <Testimonials />
      <Contact />
      
      <footer className="py-20 border-t border-brand-green/5 flex flex-col items-center gap-12 bg-white">
         <div className="flex flex-col items-center">
            <span className="font-serif text-5xl font-black text-brand-green tracking-tighter">IRODA USTOZ</span>
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-brand-gold mt-2">Elite Legacy Academy</span>
         </div>
         <div className="flex gap-16 text-[9px] font-black uppercase tracking-[0.4em] text-brand-green/40">
            <a href="#about" className="hover:text-brand-gold transition-colors">Biz Haqimizda</a>
            <a href="#courses" className="hover:text-brand-gold transition-colors">Kurslar</a>
            <a href="#contact" className="hover:text-brand-gold transition-colors">Bog'lanish</a>
         </div>
      </footer>
    </div>
  );
}
