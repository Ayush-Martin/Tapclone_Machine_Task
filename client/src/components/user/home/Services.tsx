import { useEffect, useState } from 'react';
import serviceImage from "../../../assets/Icons/Service_Icon.svg";
import api from "../../../api/axios";

interface Service {
  id: string;
  name: string;
  description: string;
}

// ─── Skeleton Card ─────────────────────────────────────────────────────────────
const SkeletonCard = () => (
  <div className="relative flex flex-col justify-between h-[390px] p-6 bg-white/[0.03] border border-white/10 rounded-xl animate-pulse">
    <div className="absolute top-2 right-1 w-32 h-32 opacity-10 bg-white/20 rounded-full" />
    <div className="mt-auto flex flex-col gap-4">
      <div className="h-6 bg-white/10 rounded-md w-3/4" />
      <div className="space-y-2">
        <div className="h-3 bg-white/10 rounded-md w-full" />
        <div className="h-3 bg-white/10 rounded-md w-5/6" />
        <div className="h-3 bg-white/10 rounded-md w-4/6" />
      </div>
      <div className="h-10 bg-white/10 rounded-md w-full mt-2" />
    </div>
  </div>
);

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const res = await api.get('/services');
        setServices(res.data?.data ?? []);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className='relative w-full py-16'>
      {/* Background Gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-brand-background via-brand-background/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col gap-4 mb-14">
          <p className='text-[#3BA65E] uppercase text-sm tracking-widest'>What we do</p>
          <h1 className="text-3xl md:text-4xl font-light text-white uppercase leading-tight">
            Your Single-Window Partner for<br />
            <span className="text-[#3BA65E]">Global Solutions</span>
          </h1>
          <p className="text-gray-400 font-nunito text-base leading-relaxed max-w-xl">
            ABC Technologies LLC operates as a single-window partner for global clients seeking reliable sourcing, technical expertise, and deployment of advanced engineering and technology solutions.
          </p>
        </div>

        {/* Section Title */}
        <div className="mb-10 text-center">
          <h1 className='uppercase text-3xl tracking-widest text-white'>
            <span className='text-[#3BA65E]'>Our</span> Services
          </h1>
        </div>

        {/* Grid */}
        {error ? (
          <p className="text-center text-white/40 text-sm py-12">
            Unable to load services at this time.
          </p>
        ) : isLoading ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : services.length === 0 ? (
          <p className="text-center text-white/40 text-sm py-12">
            No services available right now.
          </p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between h-[390px] p-6
                           bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl
                           transition-all duration-500 overflow-hidden
                           hover:bg-gradient-to-b hover:from-[#1a3a25] hover:to-[#0a150e]
                           hover:border-[#3BA65E]/50 hover:-translate-y-1"
              >
                {/* Background Icon */}
                <div className="absolute top-2 right-1 w-32 h-32 group-hover:opacity-40 transition-opacity">
                  <img src={serviceImage} alt="" className="w-full h-full object-contain" />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto flex flex-col gap-4">
                  <h1 className="text-xl text-white font-medium leading-tight tracking-wide">
                    {service.name}
                  </h1>
                  <p className="text-white/60 font-nunito text-sm font-light leading-snug">
                    {service.description}
                  </p>
                  <button className="mt-2 w-full py-2.5 flex items-center justify-center gap-2
                                     border border-white/20 rounded-md text-[11px] font-bold tracking-widest text-white
                                     group-hover:bg-[#3BA65E] group-hover:border-[#3BA65E] transition-all">
                    LEARN MORE <span>↗</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;