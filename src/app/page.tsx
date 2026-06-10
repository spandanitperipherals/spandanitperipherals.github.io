'use client';

import React, { useState } from 'react';
import { 
  Network, 
  ShieldAlert, 
  Tv, 
  Users, 
  Cpu, 
  Wrench, 
  Layers, 
  Upload, 
  FileCheck, 
  Send, 
  Info, 
  CheckCircle2, 
  Flame, 
  Activity,
  Briefcase
} from 'lucide-react';

export default function SpandanITPortal() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'projects' | 'careers' | 'inquiry'>('home');
  
  // Interactive Project Filter State
  const [projectFilter, setProjectFilter] = useState<'all' | 'networking' | 'safety' | 'cctv'>('all');

  // Client Side Status Notifications
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  // Mock Data arrays mapped directly from your PDF specifications
  const servicesList = [
    { id: 'net', icon: <Network className="w-6 h-6 text-blue-400" />, title: 'IT Networking Solutions', items: ['Structured LAN Cabling', 'Core Switch & Router Engineering', 'Enterprise Access Points & Security Wireless', 'Server Rack Cleanups & Patch Planning', 'Performance Mapping & Optimization'] },
    { id: 'cctv', icon: <Tv className="w-6 h-6 text-emerald-400" />, title: 'CCTV Surveillance Systems', items: ['IP & Analog High-Definition Cameras', 'Industrial Outdoor Perimeter Surveillance', 'Storage Arrays (DVR/NVR Multi-TB Layouts)', 'Remote Streaming & Mobile Access Enforcements', 'AMC Continuous Lens Diagnostics'] },
    { id: 'fire', icon: <Flame className="w-6 h-6 text-orange-500" />, title: 'Fire Detection & Alarm Systems', items: ['Intelligent Control Panel Commissions', 'Thermal, Smoke, and Flame Multi-Sensors', 'Manual Call Points & Addressable Hooters', 'Regulatory Compliance Auditing Support', 'System Commissioning Certificates'] },
    { id: 'man', icon: <Users className="w-6 h-6 text-purple-400" />, title: 'Specialized Manpower Supply', items: ['Certified On-Site Maintenance Crews', 'L1/L2 Technical Resident Network Engineers', 'Security Deployment Implementation Teams', 'Outsourced Technology Asset Management'] },
    { id: 'iot', icon: <Cpu className="w-6 h-6 text-cyan-400" />, title: 'Advanced IoT & Automation Solutions', items: ['Periphery Telemetry Sensing Integrations', 'Smart Facility Security Aggregations', 'Hardware-to-Cloud Integration Pipelines', 'Dynamic Status Monitoring Deployments'] },
    { id: 'amc', icon: <Wrench className="w-6 h-6 text-amber-400" />, title: 'Annual Maintenance Contracts', items: ['Preventive Infrastructure Cleanups', 'Emergency Priority Site Breakdowns', 'Guaranteed SLA Turnaround Timelines', 'OEM Part Replacements & Rotations'] }
  ];

  const projectsGallery = [
    { title: 'Enterprise LAN Overhaul', category: 'networking', desc: 'Managed multi-tier switches mapping across 4 core floors.', stats: '1.2 Gbps Constant Load Balance', icon: <Network className="w-4 h-4 text-blue-400" /> },
    { title: 'Industrial IP Surveillance Array', category: 'cctv', desc: '4K outdoor matrix featuring real-time stream aggregation.', stats: '45 Cameras Active 24/7', icon: <Tv className="w-4 h-4 text-emerald-400" /> },
    { title: 'MSME Manufacturing Fire Grid', category: 'safety', desc: 'Addressable panels configured alongside flame safety metrics.', stats: '0.4s Sensing Trigger Lag', icon: <Flame className="w-4 h-4 text-orange-400" /> },
    { title: 'Commercial Server Infrastructure', category: 'networking', desc: 'Complete server cleanup, logical interface labeling, and rack tuning.', stats: 'Zero Loop Disruption Metrics', icon: <Layers className="w-4 h-4 text-indigo-400" /> }
  ];

  const filteredProjects = projectFilter === 'all' 
    ? projectsGallery 
    : projectsGallery.filter(p => p.category === projectFilter);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-between">
      
      {/* OPERATIONS CENTER NAV BAR */}
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            {/* Embedded Placeholder SVG Icon representing company logo styling */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2.5 rounded-lg shadow-md flex items-center justify-center">
              <Activity className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white block">SPANDAN</span>
              <span className="text-xs text-amber-500 tracking-widest font-mono uppercase block -mt-1">IT Peripherals</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-1.5 font-mono text-xs">
            {(['home', 'services', 'projects', 'careers', 'inquiry'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md uppercase font-bold tracking-wider transition-all duration-200 ${
                  activeTab === tab 
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/10' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* CORE FRAME LAUNCH ENGINE */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* VIEW: HOME ENGINE */}
        {activeTab === 'home' && (
          <div className="space-y-16 animate-fadeIn">
            {/* HERO PANEL */}
            <div className="bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden glow-blue">
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono px-3 py-1 rounded-md mb-6 uppercase tracking-widest">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>Ops Control Status: Operational</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                  Industrial-Grade Deployment. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                    Zero Downtime Execution.
                  </span>
                </h1>
                <p class="text-sm sm:text-base text-slate-400 mb-8 font-sans leading-relaxed max-w-2xl">
                  Spandan IT Peripherals engineered solutions bridge infrastructure complexity with robust stability[cite: 6]. We scale secure topologies across IT Networking, CCTV Surveillance matrices, and strict Fire Safety Standards compliance[cite: 6, 10].
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => setActiveTab('inquiry')} className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-md transition-all">
                    Initialize Site Inquiry
                  </button>
                  <button onClick={() => setActiveTab('services')} className="bg-slate-800 hover:bg-slate-700 text-white font-mono font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg border border-slate-700 transition-all">
                    View Systems Catalog
                  </button>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-5 hidden lg:block bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
            </div>

            {/* QUICK STATS DASHBOARD */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'ESTABLISHED YEAR', val: '2018', sub: 'Filing Registry Verified [cite: 7]', icon: <FileCheck className="w-5 h-5 text-amber-400" /> },
                { title: 'MSME IDENTIFIER', val: 'UDYAM Registered', sub: 'GJ-10-0069615 [cite: 109]', icon: <Cpu className="w-5 h-5 text-cyan-400" /> },
                { title: 'TAX ENFORCEMENT', val: 'GSTIN Compliant', sub: '24DPJPM5684FIZK [cite: 111]', icon: <Layers className="w-5 h-5 text-blue-400" /> },
                { title: 'OPERATION AUDITS', val: '100% Certified', sub: 'Safety Compliance Rules [cite: 10]', icon: <ShieldAlert className="w-5 h-5 text-orange-400" /> }
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800/80 p-6 rounded-xl flex items-start justify-between">
                  <div>
                    <span className="block text-[10px] font-mono tracking-widest text-slate-500 uppercase">{stat.title}</span>
                    <span className="block text-xl font-bold text-white mt-1 mb-0.5">{stat.val}</span>
                    <span className="block text-xs font-sans text-slate-400">{stat.sub}</span>
                  </div>
                  <div className="bg-slate-800 p-2 rounded-lg border border-slate-700">{stat.icon}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: SERVICES ENGINE */}
        {activeTab === 'services' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-amber-500">Core Matrix</h2>
              <p className="text-2xl font-black text-white uppercase tracking-tight">Systems Engineering & Managed Services [cite: 28]</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service) => (
                <div key={service.id} className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-slate-700 transition-colors">
                  <div className="flex items-center space-x-3.5 mb-5">
                    <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">{service.icon}</div>
                    <h3 className="text-md font-bold text-white tracking-tight">{service.title} </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start text-xs font-sans text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 mr-2 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: PROJECTS GALLERY */}
        {activeTab === 'projects' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-6 gap-4">
              <div>
                <h2 class="text-xs font-mono uppercase tracking-widest text-emerald-400">Deployment Telemetry</h2>
                <p className="text-2xl font-black text-white uppercase tracking-tight">Successful Site Formations</p>
              </div>
              <div className="flex flex-wrap gap-1 bg-slate-900 p-1 border border-slate-800 rounded-lg self-start">
                {(['all', 'networking', 'safety', 'cctv'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setProjectFilter(cat)}
                    className={`px-3 py-1.5 font-mono text-[10px] uppercase font-bold rounded-md tracking-wider transition-all ${
                      projectFilter === cat ? 'bg-slate-800 text-white border border-slate-700' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group hover:border-slate-700 transition-all flex flex-col justify-between">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-sm uppercase tracking-wider text-slate-400">
                        {project.category}
                      </span>
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{project.title}</h3>
                    <p className="text-xs font-sans text-slate-400 leading-relaxed">{project.desc}</p>
                  </div>
                  <div className="bg-slate-950 px-6 py-3 border-t border-slate-800/60 font-mono text-[11px] text-slate-500 flex justify-between items-center">
                    <span>Live Verification:</span>
                    <span className="text-emerald-400 font-bold">{project.stats}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: CAREERS INTAKE */}
        {activeTab === 'careers' && (
          <div className="max-w-2xl mx-auto space-y-10 animate-fadeIn">
            <div className="text-center">
              <Briefcase className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h2 class="text-2xl font-black text-white uppercase tracking-tight">Join Spandan Engineering Crew</h2>
              <p className="text-xs font-sans text-slate-400 mt-2">
                Deploy your technical skill sets across mission-critical enterprise systems[cite: 3]. Fill out the payload registration below.
              </p>
            </div>

            {/* FORMSPREE CAREER ROUTER */}
            <form 
              action="https://formspree.io/f/xzdqvwvw" 
              method="POST" 
              encType="multipart/form-data"
              className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-xl space-y-5 shadow-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">Candidate Full Name *</label>
                  <input type="text" name="name" required className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-white focus:outline-hidden focus:border-purple-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">Contact Email *</label>
                  <input type="email" name="email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-white focus:outline-hidden focus:border-purple-500 transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">Target Technical Role *</label>
                <select name="role" required className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-400 focus:outline-hidden focus:border-purple-500 transition-colors">
                  <option value="">Select Domain Assignment...</option>
                  <option value="netops">Network DevOps / Field Engineer</option>
                  <option value="safety">Fire Safety Commissioning Specialist</option>
                  <option value="cctv">Surveillance & Storage Technician</option>
                  <option value="other">General Technical Support Operator</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">Technical Core Competencies *</label>
                <textarea name="experience" rows={4} required className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-white focus:outline-hidden focus:border-purple-500 transition-colors" placeholder="Summarize certifications, routing loops diagnostics, or fire systems alignments..."></textarea>
              </div>

              <div className="border border-dashed border-slate-800 bg-slate-950 rounded-xl p-6 text-center relative group hover:border-purple-500/40 transition-colors">
                <Upload className="w-6 h-6 text-slate-500 mx-auto mb-2 group-hover:text-purple-400 transition-colors" />
                <span className="block text-xs font-mono text-slate-400 font-bold mb-1">Upload CV Document</span>
                <span className="block text-[10px] text-slate-500 font-sans">PDF format preferred (Max size 5MB)</span>
                <input type="file" name="resume" required className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>

              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs uppercase tracking-widest p-4 rounded-lg flex items-center justify-center space-x-2 shadow-md transition-all">
                <Send className="w-4 h-4" />
                <span>Submit Candidate Payload</span>
              </button>
            </form>
          </div>
        )}

        {/* VIEW: INQUIRY TELEMETRY PIPELINE */}
        {activeTab === 'inquiry' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Info className="w-5 h-5 text-amber-500" />
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">Direct Line Operations</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                  Route your architectural layout parameters directly to our configuration desk.
                </p>
                <span className="block font-mono text-xs text-amber-400 font-bold">spandanitperipherals@gmail.com [cite: 133]</span>
              </div>

              <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl text-[11px] font-sans text-slate-500 leading-relaxed">
                * Formspree processing mechanisms automatically format incoming client telemetry and send them to the corresponding email matrix endpoint instantly.
              </div>
            </div>

            {/* FORMSPREE INQUIRY GRID */}
            <div className="lg:col-span-8 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white mb-6">Initialize New Project Architecture</h3>
              
              <form action="https://formspree.io/f/xzdqvwvw" method="POST" className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">Corporate Entity Name *</label>
                    <input type="text" name="company" required className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-white focus:outline-hidden focus:border-amber-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">Operator Email *</label>
                    <input type="email" name="email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-white focus:outline-hidden focus:border-amber-500 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">Primary Infrastructure Core Assignment *</label>
                  <select name="infrastructure_target" required className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-400 focus:outline-hidden focus:border-amber-500 transition-colors">
                    <option value="">Select Domain Core...</option>
                    <option value="networking">IT Networking Topologies [cite: 22]</option>
                    <option value="cctv">Perimeter CCTV Deployments [cite: 23]</option>
                    <option value="safety">Fire Detection & Regulations Control [cite: 24]</option>
                    <option value="manpower">Technical Manpower Integration</option>
                    <option value="amc">Rigid Lifecycle AMC Engineering [cite: 25]</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">Project Scope Specification Payload *</label>
                  <textarea name="scope_details" rows={5} required className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-white focus:outline-hidden focus:border-amber-500 transition-colors" placeholder="Provide dimensions, switch port counts, sensor density parameters, or active timeline boundaries..."></textarea>
                </div>

                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-widest p-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/10 transition-all">
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Transmit Inquiry Telemetry</span>
                </button>
              </form>
            </div>

          </div>
        )}

      </main>

      {/* OPERATIONS CENTER CONTROLS FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center font-mono text-[10px] text-slate-500 tracking-wider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>&copy; 2026 SPANDAN IT PERIPHERALS. SECURITY AND NETWORK TOPOLOGIES REGISTERED[cite: 2].</p>
          <div className="flex space-x-4 text-slate-400">
            <span>UDYAM-GJ-10-0069615 [cite: 109]</span>
            <span>|</span>
            <span>GSTIN: 24DPJPM5684FIZK [cite: 111]</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
