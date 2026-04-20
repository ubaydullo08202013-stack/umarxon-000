import { motion } from "motion/react";
import { BookOpen, GraduationCap, Users, Star, ArrowRight, Instagram, Send, Phone, LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-cream/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-bold tracking-tight text-brand-green">
          Iroda Ustoz
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-brand-green/70">
          <a href="#about" className="hover:text-brand-gold transition-colors">Biz haqimizda</a>
          <a href="#courses" className="hover:text-brand-gold transition-colors">Kurslar</a>
          <a href="#gallery" className="hover:text-brand-gold transition-colors">Galereya</a>
          <a href="#testimonials" className="hover:text-brand-gold transition-colors">Fikrlar</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Bog'lanish</a>
        </div>
        <a href="#contact" className="hidden md:block bg-brand-olive text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-brand-green transition-all transform hover:-translate-y-1">
          Ariza qoldirish
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-olive/5 -skew-x-12 transform origin-top-right -z-10" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Sifatli ta'lim garovi
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-brand-green leading-[0.9] mb-8">
            Kelajagingizni <br />
            <span className="italic text-brand-gold">Iroda Ustoz</span> <br />
            bilan quring
          </h1>
          <p className="text-lg text-brand-green/70 mb-10 max-w-lg leading-relaxed">
            Har bir o'quvchiga individual yondashuv, zamonaviy metodika va yuqori natijalar. Biz bilan bilimingizni yangi bosqichga olib chiqing.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-green text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-2 group hover:gap-4 transition-all shadow-xl cursor-pointer">
              Kurslarga yozilish <ArrowRight size={18} />
            </button>
            <button className="border-2 border-brand-olive text-brand-olive px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-olive hover:text-white transition-all cursor-pointer">
              Batafsil ma'lumot
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[8rem] shadow-2xl relative z-10 border-8 border-white/20 backdrop-blur-sm group">
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa154da09f9b?q=80&w=1000&auto=format&fit=crop" 
              alt="Iroda Ustoz" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-gold rounded-full -z-10 blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-olive rounded-full -z-10 blur-3xl opacity-20" />
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureCardProps extends Feature {
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="p-8 bg-white rounded-3xl border border-brand-green/5 hover:border-brand-gold/20 shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-serif text-brand-green mb-4">{title}</h3>
    <p className="text-brand-green/60 leading-relaxed">{description}</p>
  </motion.div>
);

const About = () => {
  const stats = [
    { label: "O'quvchilar", value: "500+" },
    { label: "Tajriba", value: "8 yil" },
    { label: "Dars soatlari", value: "2000+" },
    { label: "Yutuqlar", value: "50+" },
  ];

  return (
    <section id="about" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&h=500&auto=format&fit=crop" 
                alt="Dars jarayoni" 
                className="rounded-[2rem] object-cover w-full shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=400&h=300&auto=format&fit=crop" 
                alt="Mentor" 
                className="rounded-[2rem] object-cover w-full shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1523240715630-99fb0d1ad3f2?q=80&w=400&h=300&auto=format&fit=crop" 
                alt="O'quvchi" 
                className="rounded-[2rem] object-cover w-full shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=400&h=500&auto=format&fit=crop" 
                alt="Sertifikat" 
                className="rounded-[2rem] object-cover w-full shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <div>
            <span className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Tajriba va Mahorat</span>
            <h2 className="text-5xl font-serif text-brand-green mb-8 leading-tight">
              Ta'lim bu — kelajak eshiklarini <span className="italic">ochuvchi kalit</span>
            </h2>
            <p className="text-brand-green/70 text-lg mb-8 leading-relaxed">
              Iroda Ustoz - bu shunchaki o'quv markazi emas. Bu har bir shaxsning salohiyatini kashf etish va uni maksimal darajada rivojlantirishga qaratilgan ekotizimdir. Bizning falsafamiz: har bir bola iqtidorli, faqat unga to'g'ri kalit topish kerak.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="border-b border-brand-green/10 pb-4">
                  <div className="text-3xl font-serif text-brand-green font-bold mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-brand-green/50 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard 
            icon={GraduationCap}
            title="Professional metod"
            description="Xalqaro standartlar asosida ishlab chiqilgan maxsus o'quv dasturlari."
            index={0}
          />
          <FeatureCard 
            icon={Users}
            title="Kichik guruhlar"
            description="Har bir o'quvchi e'tibor markazida bo'lishi uchun guruhlar 10 kishidan oshmaydi."
            index={1}
          />
          <FeatureCard 
            icon={Star}
            title="Natijaga yo'naltirilgan"
            description="Biz faqat bilim bermaymiz, biz hayotda muvaffaqiyat qozonishni o'rgatamiz."
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

const CourseCard = ({ title, level, price, duration, image }: Course) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-brand-green/5 group"
  >
    <div className="h-64 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-green shadow-sm">
        {level}
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-serif text-brand-green mb-2">{title}</h3>
      <div className="flex justify-between items-center mb-6 text-sm text-brand-green/50">
        <span className="flex items-center gap-1"><BookOpen size={14} /> {duration}</span>
        <span className="font-bold text-brand-gold">{price}</span>
      </div>
      <button className="w-full py-4 rounded-xl bg-brand-cream border border-brand-gold/20 text-brand-green font-bold uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-white transition-all shadow-sm cursor-pointer">
        Kursga yozilish
      </button>
    </div>
  </motion.div>
);

const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[100px] -z-10" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
          <div className="max-w-xl mx-auto md:mx-0">
            <span className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4 block">O'quv yo'nalishlari</span>
            <h2 className="text-5xl font-serif text-brand-green leading-tight">Bizning eng mashhur <br /><span className="italic">kurslarimiz</span></h2>
          </div>
          <p className="text-brand-green/50 max-w-xs md:text-right mx-auto md:mx-0">
            O'zingizga mos kursni tanlang va bugunoq o'rganishni boshlang.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <CourseCard 
            title="Dasturlash asoslari"
            level="Boshlang'ich"
            price="450.000 so'm"
            duration="3 oy"
            image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&h=400&auto=format&fit=crop"
          />
          <CourseCard 
            title="Matematika (Logika)"
            level="O'rta"
            price="300.000 so'm"
            duration="4 oy"
            image="https://images.unsplash.com/photo-1509228468518-180dd482180c?q=80&w=600&h=400&auto=format&fit=crop"
          />
          <CourseCard 
            title="Ingliz tili (IELTS)"
            level="Barcha bosqichlar"
            price="500.000 so'm"
            duration="6 oy"
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&h=400&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images: GalleryImage[] = [
    { src: "https://images.unsplash.com/photo-1497633762265-9a179c93b947?q=80&w=800&h=600&auto=format&fit=crop", title: "O'quv xonalarimiz" },
    { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&h=800&auto=format&fit=crop", title: "Amaliy darslar" },
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=800&auto=format&fit=crop", title: "Guruh ishlari" },
    { src: "https://images.unsplash.com/photo-1513258496099-48168024adb0?q=80&w=600&h=600&auto=format&fit=crop", title: "Seminar va treninglar" },
    { src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&h=600&auto=format&fit=crop", title: "Ochiq darslar" },
    { src: "https://images.unsplash.com/photo-1523240715630-99fb0d1ad3f2?q=80&w=600&h=800&auto=format&fit=crop", title: "Yutuqlarimiz" },
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6 text-center">
        <span className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-6 block">Galereya</span>
        <h2 className="text-5xl font-serif text-brand-green mb-16">Markazimiz <span className="italic">hayotidan</span> lavhalar</h2>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-[2rem] shadow-md border border-brand-green/5"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <h3 className="text-white font-serif text-xl">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews: Testimonial[] = [
    {
      name: "Umarxon Ismoilov",
      role: "Dasturchi, EPAM Systems",
      text: "Iroda Ustoz darslari menga nafaqat bilimlarni, balki o'zimga bo'lgan ishonchni qaytardi. Metodika juda oson va tushunarli. Hozirda orzu qilgan ishimda ishlayapman.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Shoxakbar To'xtaraliyev",
      role: "Talaba, INHA Universiteti",
      text: "Matematika va mantiqiy fikrlash bo'yicha olgan bilimlarim o'qishga kirishimda hal qiluvchi rol o'ynadi. Har bir dars qiziqarli va foydali o'tardi.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-green text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 text-center">
        <span className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-6 block">Muvaffaqiyat hikoyalari</span>
        <h2 className="text-5xl font-serif mb-20">O'quvchilarimiz <span className="italic">nima deydi?</span></h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-left max-w-5xl mx-auto">
          {reviews.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm relative"
            >
              <div className="absolute top-8 right-8 text-brand-gold opacity-30">
                <Star size={40} fill="currentColor" />
              </div>
              <p className="text-lg italic leading-relaxed mb-8 opacity-80">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-brand-gold/50 p-0.5 overflow-hidden">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="font-bold text-brand-gold">{testimonial.name}</div>
                  <div className="text-xs uppercase tracking-widest opacity-50">{testimonial.role}</div>
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
    <section id="contact" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[4rem] shadow-2xl overflow-hidden grid md:grid-cols-2">
          <div className="p-16 bg-brand-olive text-white flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-serif mb-8 leading-tight italic text-brand-cream">Bog'lanish <br />o'z qo'lingizda</h2>
              <p className="opacity-70 mb-12 max-w-xs leading-relaxed">
                Savollaringiz bormi? Biz bilan bog'laning va bepul konsultatsiyaga yoziling.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <span className="font-medium">+998 90 123 45 67</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Instagram size={18} />
                  </div>
                  <span className="font-medium">@iroda_ustoz_edu</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Send size={18} />
                  </div>
                  <span className="font-medium">t.me/iroda_ustoz</span>
                </div>
              </div>
            </div>
            
            <div className="pt-12 text-xs uppercase tracking-widest font-bold opacity-50">
              © {new Date().getFullYear()} Iroda Ustoz. Barcha huquqlar himoyalangan.
            </div>
          </div>
          
          <div className="p-16">
            <h3 className="text-3xl font-serif text-brand-green mb-8">Ariza qoldirish</h3>
            <form className="space-y-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/40 mb-2 block">Ismingiz</label>
                <input type="text" placeholder="Ismingizni kiriting" className="w-full bg-brand-cream/50 border border-brand-green/5 rounded-2xl px-6 py-4 focus:border-brand-gold outline-none transition-all" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/40 mb-2 block">Telefon raqamingiz</label>
                <input type="tel" placeholder="+998" className="w-full bg-brand-cream/50 border border-brand-green/5 rounded-2xl px-6 py-4 focus:border-brand-gold outline-none transition-all" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/40 mb-2 block">Xabar (ixtiyoriy)</label>
                <textarea rows={4} placeholder="Qanday savollaringiz bor?" className="w-full bg-brand-cream/50 border border-brand-green/5 rounded-2xl px-6 py-4 focus:border-brand-gold outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-brand-gold text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-green transition-all shadow-lg cursor-pointer">
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function IrodaUstozSite() {
  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-gold selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}
