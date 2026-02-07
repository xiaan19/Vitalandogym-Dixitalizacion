
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import Trainers from './components/Trainers';
import Profile from './components/Profile';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [bookedClassIds, setBookedClassIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('vitalando_bookings');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('vitalando_bookings', JSON.stringify(bookedClassIds));
  }, [bookedClassIds]);

  const toggleBooking = (classId: string) => {
    setBookedClassIds(prev => 
      prev.includes(classId) 
        ? prev.filter(id => id !== classId) 
        : [...prev, classId]
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto text-center relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px] -z-10"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] -z-10"></div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-none">
                <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent italic">VITAL</span>ANDO
                <br />
                <span className="text-white">EVOLUCIÓN</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                El único gimnasio donde entrenas tu cuerpo y tu mente. Ahora con <span className="text-orange-500 font-bold">English Sessions</span> impartidas por Montse. 
                Une el poder del fitness con el dominio del inglés.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => setActiveSection('calendario')}
                  className="group relative px-10 py-5 bg-cyan-400 text-black font-black rounded-2xl hover:scale-105 transition-all text-lg shadow-xl shadow-cyan-400/20"
                >
                  RESERVAR CLASE
                </button>
                <button 
                  onClick={() => setActiveSection('tecnicos')}
                  className="px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-lg border border-white/10"
                >
                  NUESTROS COACHES
                </button>
              </div>
            </div>
            
            <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="glass p-10 rounded-3xl border-t-2 border-cyan-400 group hover:bg-cyan-400/5 transition-all">
                <div className="w-14 h-14 bg-cyan-400/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10"/><path d="M18.4 4.6a10 10 0 1 1-12.8 0"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Full Focus</h3>
                <p className="text-gray-500 leading-relaxed">Equipamiento bilingüe y monitorización en tiempo real de tus marcas personales.</p>
              </div>
              <div className="glass p-10 rounded-3xl border-t-2 border-orange-500 group hover:bg-orange-500/5 transition-all">
                <div className="w-14 h-14 bg-orange-500/20 text-orange-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M9 12V4l3 2 3-2v8"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">English Sessions</h3>
                <p className="text-gray-500 leading-relaxed">Clases de Yoga y Crossfit íntegramente en inglés con nuestra coach Montse. Learn & Burn.</p>
              </div>
              <div className="glass p-10 rounded-3xl border-t-2 border-cyan-400 group hover:bg-cyan-400/5 transition-all">
                <div className="w-14 h-14 bg-cyan-400/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">24/7 Access</h3>
                <p className="text-gray-500 leading-relaxed">Tu progreso no tiene horario. Acceso total a nuestras instalaciones y coaching digital.</p>
              </div>
            </div>
          </div>
        );
      case 'calendario':
        return <Calendar bookedClassIds={bookedClassIds} onToggleBooking={toggleBooking} />;
      case 'tecnicos':
        return <Trainers />;
      case 'perfil':
        return <Profile bookedClassIds={bookedClassIds} onToggleBooking={toggleBooking} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-20 selection:bg-cyan-400 selection:text-black">
      <Navbar onNavigate={setActiveSection} activeSection={activeSection} />
      <main className="transition-all duration-700 ease-in-out">
        {renderContent()}
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 glass border-t border-white/10 md:hidden flex justify-around items-center py-5 z-50 backdrop-blur-xl">
        <button onClick={() => setActiveSection('home')} className={`flex flex-col items-center gap-1 transition-all ${activeSection === 'home' ? 'text-cyan-400 scale-110' : 'text-gray-500'}`}>
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
           <span className="text-[10px] font-bold">INICIO</span>
        </button>
        <button onClick={() => setActiveSection('calendario')} className={`flex flex-col items-center gap-1 transition-all ${activeSection === 'calendario' ? 'text-cyan-400 scale-110' : 'text-gray-500'}`}>
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
           <span className="text-[10px] font-bold">HORARIOS</span>
        </button>
        <button onClick={() => setActiveSection('perfil')} className={`flex flex-col items-center gap-1 transition-all ${activeSection === 'perfil' ? 'text-orange-500 scale-110' : 'text-gray-500'}`}>
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
           <span className="text-[10px] font-bold">PERFIL</span>
        </button>
      </footer>
    </div>
  );
};

export default App;
