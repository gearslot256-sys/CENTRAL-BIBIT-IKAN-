import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Fish, Phone, MapPin, MessageSquare, Send, Droplets, Bot, ChevronDown, CheckCircle2, AlertCircle, Clock, Loader2, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
const genAI = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || ((import.meta as any).env.VITE_GEMINI_API_KEY as string) || "" 
});

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <img 
                src="https://ik.imagekit.io/m5nxcflpg4/Picsart_26-02-26_02-12-33-867.png" 
                alt="Logo Central Bibit Ikan" 
                className="h-12 w-12 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold text-xl text-blue-900 tracking-tight">CENTRAL BIBIT IKAN</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-blue-900 font-medium hover:text-emerald-500 transition-colors">Beranda</a>
            <a href="#katalog" className="text-slate-600 font-medium hover:text-emerald-500 transition-colors">Katalog Bibit</a>
            <a href="#tentang" className="text-slate-600 font-medium hover:text-emerald-500 transition-colors">Tentang Kami</a>
            <a href="#kontak" className="bg-blue-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Hubungi Owner
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-blue-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#" className="block px-3 py-2 text-base font-medium text-blue-900 bg-slate-50 rounded-md">Beranda</a>
              <a href="#katalog" className="block px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md">Katalog Bibit</a>
              <a href="#tentang" className="block px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md">Tentang Kami</a>
              <a href="#kontak" className="block px-3 py-2 text-base font-medium text-emerald-600 hover:bg-slate-50 rounded-md">Hubungi Owner</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  const images = [
    "https://ik.imagekit.io/m5nxcflpg4/FB_IMG_1772043867450.jpg",
    "https://ik.imagekit.io/m5nxcflpg4/FB_IMG_1772043870803.jpg",
    "https://ik.imagekit.io/m5nxcflpg4/FB_IMG_1772043852771.jpg"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative bg-blue-900 overflow-hidden min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover"
            src={images[currentIndex]}
            alt="Kolam pembibitan ikan"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/40 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium text-sm mb-6 border border-emerald-500/30">
            <CheckCircle2 className="w-4 h-4" />
            <span>Supplier Resmi & Tersertifikasi</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Mitra Terpercaya Suplai Bibit Ikan Berkualitas di Kalimantan Timur
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-xl leading-relaxed">
            Melayani Kebutuhan Pemerintah dan Kelompok Masyarakat dengan Standar Mutu Terbaik. Tersedia berbagai jenis bibit ikan air tawar unggulan.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#katalog" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-blue-900 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/30">
              Lihat E-Katalog Bibit
            </a>
            <a href="#kontak" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-base font-medium rounded-xl text-white hover:bg-white/10 transition-all backdrop-blur-sm">
              Konsultasi Proyek
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Catalog() {
  const products = [
    {
      id: 1,
      name: 'Bibit Nila',
      image: 'https://ik.imagekit.io/m5nxcflpg4/Ikan%20/images%20(3).jpeg?updatedAt=1772048298401',
      specs: 'Ukuran menyesuaikan',
      status: 'Stok Tersedia',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      icon: CheckCircle2
    },
    {
      id: 2,
      name: 'Bibit Lele Sangkuriang',
      image: 'https://ik.imagekit.io/m5nxcflpg4/Ikan%20/images%20(4).jpeg?updatedAt=1772048297566',
      specs: 'Ukuran menyesuaikan',
      status: 'Stok Tersedia',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      icon: CheckCircle2
    },
    {
      id: 3,
      name: 'Bibit Patin',
      image: 'https://ik.imagekit.io/m5nxcflpg4/Ikan%20/images%20(6).jpeg?updatedAt=1772048297737',
      specs: 'Ukuran menyesuaikan',
      status: 'Stok Tersedia',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      icon: CheckCircle2
    },
    {
      id: 4,
      name: 'Bibit Gurame',
      image: 'https://ik.imagekit.io/m5nxcflpg4/Ikan%20/images%20(7).jpeg?updatedAt=1772048297508',
      specs: 'Ukuran menyesuaikan',
      status: 'Stok Tersedia',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      icon: CheckCircle2
    },
    {
      id: 5,
      name: 'Bibit Baung',
      image: 'https://ik.imagekit.io/m5nxcflpg4/Ikan%20/images%20(8).jpeg?updatedAt=1772048298657',
      specs: 'Ukuran menyesuaikan',
      status: 'Stok Tersedia',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      icon: CheckCircle2
    },
    {
      id: 6,
      name: 'Bibit Bawal',
      image: 'https://ik.imagekit.io/m5nxcflpg4/Ikan%20/045756d0-75ce-4d62-8655-787b6267d657.jpg~tplv-aphluv4xwc-resize-jpeg_700_0.jpg?updatedAt=1772048297683',
      specs: 'Ukuran menyesuaikan',
      status: 'Stok Tersedia',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      icon: CheckCircle2
    },
    {
      id: 7,
      name: 'Bibit Gabus',
      image: 'https://ik.imagekit.io/m5nxcflpg4/Ikan%20/Bibit-Ikan-Gabus.jpg?updatedAt=1772048299741',
      specs: 'Ukuran menyesuaikan',
      status: 'Stok Tersedia',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      icon: CheckCircle2
    },
    {
      id: 8,
      name: 'Larva Udang Galah',
      image: 'https://ik.imagekit.io/m5nxcflpg4/Ikan%20/id-11134207-7r98q-ll9hp8k15cw496.jpeg?updatedAt=1772048307552',
      specs: 'Ukuran menyesuaikan',
      status: 'Pre-Order',
      statusColor: 'text-blue-700 bg-blue-50 border-blue-200',
      icon: Clock
    }
  ];

  return (
    <div id="katalog" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">E-Katalog</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-900 sm:text-4xl">
            Katalog Bibit Tersedia
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Pilihan bibit unggul hasil pembenihan standar tinggi, siap tebar untuk kolam budidaya Anda.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base font-bold text-slate-900 leading-tight">{product.name}</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-slate-600">
                    <Fish className="w-3.5 h-3.5 mr-2 text-blue-500" />
                    <span className="text-xs font-medium">{product.specs}</span>
                  </div>
                  <div className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium border ${product.statusColor}`}>
                    <product.icon className="w-3 h-3 mr-1" />
                    {product.status}
                  </div>
                </div>
                
                <button className="w-full bg-slate-50 hover:bg-blue-50 text-blue-700 font-bold py-2 rounded-lg border border-slate-200 hover:border-blue-200 transition-colors flex items-center justify-center gap-2 text-[11px] uppercase">
                  Minta Penawaran
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const images = [
    "https://ik.imagekit.io/m5nxcflpg4/CBI/FB_IMG_1772046819446.jpg?updatedAt=1772047116749",
    "https://ik.imagekit.io/m5nxcflpg4/CBI/FB_IMG_1772046821747.jpg?updatedAt=1772047117137",
    "https://ik.imagekit.io/m5nxcflpg4/CBI/FB_IMG_1772046841634.jpg?updatedAt=1772047126078",
    "https://ik.imagekit.io/m5nxcflpg4/CBI/FB_IMG_1772046848328.jpg?updatedAt=1772047124058",
    "https://ik.imagekit.io/m5nxcflpg4/CBI/FB_IMG_1772046816721.jpg?updatedAt=1772047117666",
    "https://ik.imagekit.io/m5nxcflpg4/CBI/FB_IMG_1772046833491.jpg?updatedAt=1772047119971",
    "https://ik.imagekit.io/m5nxcflpg4/CBI/FB_IMG_1772046829000.jpg?updatedAt=1772047121578",
    "https://ik.imagekit.io/m5nxcflpg4/CBI/FB_IMG_1772046839125.jpg?updatedAt=1772047127205",
    "https://ik.imagekit.io/m5nxcflpg4/CBI/FB_IMG_1772046836791.jpg?updatedAt=1772047127258",
    "https://ik.imagekit.io/m5nxcflpg4/CBI/FB_IMG_1772046882002.jpg?updatedAt=1772047127840",
    "https://ik.imagekit.io/m5nxcflpg4/CBI/FB_IMG_1772046873983.jpg?updatedAt=1772047129634"
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">Pengalaman & Kemitraan</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-900 sm:text-4xl">
              Dedikasi Untuk Kalimantan & IKN
            </p>
            <div className="mt-6 text-lg text-slate-600 space-y-4 leading-relaxed">
              <p>
                Central Bibit Ikan telah lama menjadi mitra strategis bagi berbagai instansi pemerintah di Kalimantan Timur. Kami bangga telah dipercaya oleh <strong>Dinas Perikanan Kutai Kartanegara, Kutai Barat, dan Kutai Timur</strong> dalam berbagai program pengadaan bibit ikan unggul.
              </p>
              <p>
                Jangkauan layanan kami tidak hanya terbatas pada wilayah tersebut, namun telah meluas ke seluruh penjuru <strong>Kalimantan</strong>. Kepercayaan ini lahir dari komitmen kami dalam menjaga standar mutu bibit yang kami hasilkan.
              </p>
              <p>
                Salah satu pencapaian membanggakan kami adalah kontribusi aktif dalam mendukung pembangunan <strong>Ibu Kota Nusantara (IKN)</strong>. Central Bibit Ikan telah dipercaya untuk menyediakan dan menebar bibit ikan berkualitas di berbagai <strong>danau-danau di kawasan IKN</strong>, sebagai bagian dari upaya pelestarian ekosistem perairan dan ketahanan pangan lokal.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={images[0]} 
                alt="Dokumentasi Pengadaan 1" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src={images[1]} 
                alt="Dokumentasi Pengadaan 2" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-xs uppercase tracking-wider font-medium">Tahun Pengalaman</p>
            </div>
          </motion.div>
        </div>

        {/* Photo Grid Gallery */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-blue-900">Galeri Dokumentasi</h3>
            <div className="h-1 flex-grow mx-8 bg-slate-100 rounded-full hidden sm:block"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {images.slice(2).map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <img 
                  src={img} 
                  alt={`Dokumentasi ${idx + 3}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="kontak" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Kolom Kiri */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="https://ik.imagekit.io/m5nxcflpg4/Picsart_26-02-26_02-12-33-867.png" 
                alt="Logo Central Bibit Ikan" 
                className="h-10 w-10 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold text-xl text-white tracking-tight">CENTRAL BIBIT IKAN</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Dedikasi kami adalah menyediakan bibit ikan air tawar berkualitas tinggi untuk mendukung ketahanan pangan dan kesuksesan para pembudidaya di Kalimantan Timur dan sekitarnya.
            </p>
          </div>

          {/* Kolom Tengah */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-emerald-400" />
              Hubungi Kami
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-slate-800 p-2 rounded-full mt-1">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Telepon / WhatsApp</p>
                  <p className="text-white font-medium text-lg">0812-5445-5070 <span className="text-sm font-normal text-slate-400">(Owner)</span></p>
                </div>
              </div>
              <a 
                href="https://wa.me/6281254455070" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-medium rounded-lg transition-colors gap-2 mt-2"
              >
                <MessageSquare className="w-4 h-4" />
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-400" />
              Lokasi Kolam
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                Jl. Rapak Indah, Loa Bakung, Kec. Sungai Kunjang, Kota Samarinda, Kalimantan Timur 75243
              </p>
              <a 
                href="https://maps.app.goo.gl/XFAHopqTn3aaCybd7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500 transition-colors group relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400&h=200" 
                  alt="Peta Lokasi" 
                  className="w-full h-32 object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 group-hover:bg-transparent transition-colors">
                  <div className="bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium text-white flex items-center gap-2 border border-slate-700">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    Buka di Google Maps
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Central Bibit Ikan. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface Message {
  role: 'user' | 'model';
  text: string;
  buttonType?: 'wa' | 'map';
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Assalamualaikum wr.wb, saya Abie. Ada yang bisa dibantu? 😊' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chat = genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction: "Anda adalah Abie, asisten manusia asli dari 'Central Bibit Ikan'. Gaya bicara Anda sangat natural, santai, dan hangat. \n\nAturan Penting:\n1. Balas dengan SINGKAT, PADAT, dan LANGSUNG ke poinnya.\n2. Gunakan bahasa Indonesia yang luwes (panggil 'kak', 'bang', atau 'mas/mbak').\n3. Lokasi: Jl. Rapak Indah, Loa Bakung, Samarinda.\n4. Produk: Bibit Nila Merah, Lele, Patin, Gurame, Baung, Bawal, Gabus, Udang Galah. Semua ukuran menyesuaikan stok.\n5. Owner: Bpk Hairin Nortomy (0812-5445-5070).\n6. JANGAN PERNAH sebut alamat PM Noor.\n\nAturan Tombol Khusus:\n- Jika user bertanya tentang owner, cara pesan, atau setuju untuk menghubungi owner/memesan, akhiri jawaban Anda dengan kode [SHOW_WA_BUTTON].\n- Jika user bertanya tentang lokasi atau alamat, akhiri jawaban Anda dengan kode [SHOW_MAP_BUTTON].\n- Jangan tampilkan tombol jika tidak ditanya atau tidak relevan.",
        }
      });

      const response = await chat;
      let modelText = response.text || "Maaf ya, Abie sedang sedikit kendala teknis. Boleh diulang pertanyaannya?";
      
      let buttonType: 'wa' | 'map' | undefined = undefined;
      
      if (modelText.includes('[SHOW_WA_BUTTON]')) {
        buttonType = 'wa';
        modelText = modelText.replace('[SHOW_WA_BUTTON]', '').trim();
      } else if (modelText.includes('[SHOW_MAP_BUTTON]')) {
        buttonType = 'map';
        modelText = modelText.replace('[SHOW_MAP_BUTTON]', '').trim();
      }
      
      setMessages(prev => [...prev, { role: 'model', text: modelText, buttonType }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Aduh, maaf banget ya kak, sepertinya ada gangguan koneksi. Coba lagi sebentar lagi ya, Abie tunggu! 🙏" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 sm:w-96 mb-4 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-900 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1 rounded-full overflow-hidden w-10 h-10 flex items-center justify-center">
                  <img 
                    src="https://ik.imagekit.io/m5nxcflpg4/Picsart_26-02-26_02-12-33-867.png" 
                    alt="Abie" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Abie - Central Bibit</h4>
                  <p className="text-blue-200 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Online & Siap Ngobrol
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-blue-200 hover:text-white transition-colors p-1"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="p-4 bg-slate-50 h-96 overflow-y-auto flex flex-col gap-4 scroll-smooth"
            >
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${msg.role === 'model' ? 'bg-white border border-slate-200' : 'bg-emerald-100'}`}>
                    {msg.role === 'model' ? (
                      <img 
                        src="https://ik.imagekit.io/m5nxcflpg4/Picsart_26-02-26_02-12-33-867.png" 
                        alt="Abie" 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <User className="w-4 h-4 text-emerald-700" />
                    )}
                  </div>
                  <div className={`p-3 rounded-2xl shadow-sm border text-sm leading-relaxed max-w-[80%] ${
                    msg.role === 'model' 
                      ? 'bg-white rounded-tl-none border-slate-100 text-slate-700' 
                      : 'bg-blue-900 rounded-tr-none border-blue-800 text-white'
                  }`}>
                    {msg.text}
                    {msg.buttonType === 'wa' && (
                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <a 
                          href={`https://wa.me/6281254455070?text=${encodeURIComponent('Halo Bpk Hairin, saya ingin memesan bibit ikan dari Central Bibit Ikan...')}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-bold rounded-lg transition-colors shadow-sm uppercase"
                        >
                          <MessageSquare className="w-3 h-3" />
                          Hubungi Bpk Hairin (Owner)
                        </a>
                      </div>
                    )}
                    {msg.buttonType === 'map' && (
                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <a 
                          href="https://maps.app.goo.gl/XFAHopqTn3aaCybd7"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold rounded-lg transition-colors shadow-sm uppercase"
                        >
                          <MapPin className="w-3 h-3" />
                          Lihat Lokasi di Maps
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img 
                      src="https://ik.imagekit.io/m5nxcflpg4/Picsart_26-02-26_02-12-33-867.png" 
                      alt="Abie" 
                      className="w-full h-full object-contain opacity-50"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-400 italic">
                    Abie sedang mengetik...
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-100">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                className="relative"
              >
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tanya Abie apa saja..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all"
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="bg-blue-900 text-white p-4 rounded-full shadow-xl hover:bg-blue-800 transition-colors flex items-center justify-center relative"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
        </motion.button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <Experience />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
