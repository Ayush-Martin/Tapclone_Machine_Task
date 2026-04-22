import React from 'react';
import { Icon } from '@iconify/react';
import FooterBg from "../../assets/Images/earth_bg.png"; // Path to your uploaded footer image

const Footer: React.FC = () => {
    return (
        <footer className="relative w-full bg-black pt-20 pb-10 overflow-hidden border-t border-white/5">

            {/* 1. Earth Background Layer */}
            <div className="absolute inset-0 z-0 flex justify-center items-start">
                <img
                    src={FooterBg}
                    alt="Earth Background"
                    className="w-full h-full object-cover opacity-40 select-none pointer-events-none"
                />
                {/* Subtle top fade to blend with the previous section */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
            </div>

            {/* 2. Main Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: Branding */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center">
                            <img src="/src/assets/Icons/logo.svg" alt="ABC Technologies" className="h-20" />
                            <div className='text-center text-white font-nunito font-light'>
                                <h1 className='text-2xl lg:text-3xl leading-none'>ABC</h1>
                                <p className='text-[10px] lg:text-[12px] uppercase tracking-widest'>Technologies</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className="text-brand-green text-center font-nunito font-medium tracking-wide">Energy Redefined</p>
                            <div className="mt-6 text-white/70 font-nunito  leading-relaxed">
                                <p className='text-center'>ABC Technologies <br/> UAE</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-nunito font-semibold tracking-[0.2em] text-sm uppercase">Quick Links</h4>
                        <ul className="flex flex-col gap-4 text-white/60 font-nunito text-sm">
                            <li className="hover:text-brand-green transition-colors cursor-pointer flex items-center gap-2">
                                <span className="w-1 h-1 bg-white/20 rounded-full"></span> About Us
                            </li>
                            <li className="hover:text-brand-green transition-colors cursor-pointer flex items-center gap-2">
                                <span className="w-1 h-1 bg-white/20 rounded-full"></span> Services
                            </li>
                            <li className="hover:text-brand-green transition-colors cursor-pointer flex items-center gap-2">
                                <span className="w-1 h-1 bg-white/20 rounded-full"></span> Sectors
                            </li>
                            <li className="hover:text-brand-green transition-colors cursor-pointer flex items-center gap-2">
                                <span className="w-1 h-1 bg-white/20 rounded-full"></span> Contact
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-nunito font-semibold tracking-[0.2em] text-sm uppercase">Services</h4>
                        <ul className="flex flex-col gap-4 text-white/60 font-nunito text-sm">
                            <li className="hover:text-brand-green transition-colors cursor-pointer flex items-center gap-2">
                                <span className="w-1 h-1 bg-white/20 rounded-full"></span> Global Trading & Export
                            </li>
                            <li className="hover:text-brand-green transition-colors cursor-pointer flex items-center gap-2">
                                <span className="w-1 h-1 bg-white/20 rounded-full"></span> Technical Consultation & Engineering Advisory
                            </li>
                            <li className="hover:text-brand-green transition-colors cursor-pointer flex items-center gap-2">
                                <span className="w-1 h-1 bg-white/20 rounded-full"></span> Technology & Solution Delivery
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-nunito font-semibold tracking-[0.2em] text-sm uppercase">Contact</h4>
                        <div className="flex flex-col gap-5 text-white/70 font-nunito text-sm">
                            <div className="flex items-center gap-3 group">
                                <Icon icon="lucide:phone" className="text-brand-green h-5 w-5" />
                                <span className="group-hover:text-white transition-colors tracking-wider">+971 00 223 0000</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <Icon icon="ic:baseline-whatsapp" className="text-brand-green h-5 w-5" />
                                <span className="group-hover:text-white transition-colors tracking-wider">+971 00223 0000</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <Icon icon="mdi:email-outline" className="text-brand-green h-5 w-5" />
                                <span className="group-hover:text-white transition-colors tracking-wider lowercase">abc@gmail.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* 3. Bottom Copyright Bar */}
                <div className="mt-24 pt-8 border-t border-white/10 text-center">
                    <p className="text-white/40 font-nunito text-[11px] tracking-widest uppercase">
                        © 2026 Tapclone | All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;