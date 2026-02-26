import { Link } from "react-router";
import { useState } from "react";
import { ArrowRight, Shield, Wifi, DollarSign, Mail, GraduationCap, Factory, Code2, ChevronDown, TrendingUp, Users, Award, Trophy } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { FadeUp, Section, CountUp } from "@/app/components/animations";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

const leaders = [
  {
    name: "Anthony Sterns, PhD",
    title: "Founder & Chief Executive Officer",
    bio: "Spent a decade researching why people with dementia lose their independence. The answer kept coming back to medication. 12 US patents, 33 publications, 100+ international presentations. Created Memory Magic Program impacting 500K+ older adults across 2,400+ facilities in 7 countries.",
    email: "asterns@irxreminder.com",
    image: "/images/team/anthony-sterns.jpg",
  },
  {
    name: "Fred Ma, MD, PhD",
    title: "Chief Operating Officer",
    bio: "1,200+ clinical trials. 200+ drugs and medical devices through FDA validation and clearance. Leading iRxReminder\u2019s FDA Class II clearance submission.",
    email: "fma@irxreminder.com",
    image: "/images/team/fred-ma.jpeg",
  },
  {
    name: "Owen Muir, M.D.",
    title: "Chief Medical Officer",
    bio: "Board-certified Psychiatrist. Mayo Clinic faculty. Specializes in behavioral health and telehealth. Principal investigator guiding clinical validation.",
    image: "/images/team/owen-muir.jpeg",
  },
  {
    name: "William Yuan",
    title: "Chief Strategy Officer",
    bio: "Former CEO of nGloballink. Led early-stage company from inception to $310M public company. Track record of 100x ROI exits. Drives strategic growth and market expansion.",
    image: "/images/team/william-yuan.jpg",
  },
  {
    name: "Larry Tusick",
    title: "Chief Business Officer / VP Sales",
    bio: "25+ years healthcare experience. Former director at Baxter and Care USA. Leads partnership development and commercial growth.",
    email: "ltusick@irxreminder.com",
    image: "/images/team/larry-tusick.jpg",
  },
  {
    name: "Josh Smith, MBA",
    title: "Chief Technology Officer",
    bio: "Former IBM and IBM Watson engineer. Full software lifecycle experience. Leads platform architecture for the cloud-app-IoT ecosystem.",
    image: "",
  },
];

const universityPartners = [
  "Harvard University",
  "University of Michigan",
  "Brown University",
  "Kent State University",
  "MetroHealth",
  "Butler Hospital",
  "Case Western Reserve",
  "George Mason University",
];

function LeaderCards() {
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({});

  const toggleBio = (name: string) => {
    setExpandedBios((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="space-y-10">
      {leaders.map((leader, index) => {
        const isExpanded = expandedBios[leader.name] ?? false;
        const firstSentence = leader.bio.split(". ")[0] + ".";
        const hasMore = leader.bio.length > firstSentence.length + 5;

        return (
          <FadeUp key={leader.name} delay={0.05 + index * 0.05}>
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center bg-white p-6 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_4px_12px_rgba(30,58,138,0.06),0_16px_40px_rgba(30,58,138,0.06)]`}
            >
              <div className="md:w-1/3 flex-shrink-0">
                <div className="relative overflow-hidden rounded-2xl shadow-[0_4px_16px_rgba(30,58,138,0.1),0_12px_32px_rgba(30,58,138,0.08)]">
                  {leader.image ? (
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full aspect-square object-cover"
                    />
                  ) : (
                    <div className="w-full aspect-square bg-gradient-to-br from-[#1e3a8a] to-[#2d4fa6] flex items-center justify-center">
                      <span className="text-6xl md:text-7xl font-bold text-white/90 tracking-tight select-none">
                        {leader.name.split(" ").map((n) => n[0]).filter((_, i, a) => i === 0 || i === a.length - 1).join("")}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/20 to-transparent" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-2 tracking-tight">
                  {leader.name}
                </h3>
                <div className="text-[#0891b2] font-semibold text-lg mb-5">{leader.title}</div>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {isExpanded || !hasMore ? leader.bio : firstSentence}
                </p>
                {hasMore && (
                  <button
                    onClick={() => toggleBio(leader.name)}
                    className="inline-flex items-center gap-1.5 text-[#0891b2] hover:text-[#0e7490] font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891b2]/40 focus-visible:ring-offset-2 rounded-sm mb-4"
                  >
                    {isExpanded ? "Show less" : "Read full bio"}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                )}
                {leader.email && (
                  <div>
                    <a
                      href={`mailto:${leader.email}`}
                      className="inline-flex items-center gap-2 text-[#0891b2] hover:text-[#0e7490] font-medium transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {leader.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </FadeUp>
        );
      })}
    </div>
  );
}

export function About() {
  const prefersReducedMotion = useReducedMotion();
  const heroAnimation = prefersReducedMotion ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, type: "spring", stiffness: 300, damping: 30 } };
  const heroFadeIn = prefersReducedMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 0.5 } };

  return (
    <div className="bg-white overflow-hidden">
      {/* ======= HERO ======= */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-[#0891b2]/20 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <motion.div {...heroAnimation}>
              <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-6">
                Our Story
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
                Built from a
                <br />
                <span className="text-[#0891b2]">decade of research.</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-2xl">
                Dr. Anthony Sterns spent ten years studying why people with
                dementia lose their independence. The answer kept coming back
                to one thing: medication. That&rsquo;s why he built iRxReminder.
              </p>
            </motion.div>

            <motion.div
              {...heroFadeIn}
              className="mt-12 flex flex-wrap items-center gap-6 text-sm text-blue-200/70"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#0891b2]" />
                10+ Years R&amp;D
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#0891b2]" />
                12 US Patents
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#0891b2]" />
                NIH-Funded
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======= MISSION ======= */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Our Mission
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-8 tracking-tight">
              Give Patients and Their Healthcare Teams
              <br className="hidden md:block" /> the Tools to Manage Medications Together
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              We have effective medications for nearly every chronic condition.
              No one should lose their independence&nbsp;&mdash; or their
              life&nbsp;&mdash; because they forgot a pill.
            </p>
          </FadeUp>

          {/* Impact numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: "500K+", label: "Older adults impacted" },
              { value: "2,400+", label: "Facilities worldwide" },
              { value: "7", label: "Countries reached" },
              { value: "83%", label: "Adherence rate achieved" },
            ].map((stat, i) => (
              <FadeUp key={stat.value} delay={0.1 + i * 0.08}>
                <div className="text-center p-6 md:p-8 rounded-xl bg-[#f8fafc] border border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_4px_12px_rgba(30,58,138,0.06)]">
                  <div className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 leading-snug">{stat.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* ======= ORIGIN STORY ======= */}
      <Section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Why We Exist
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight">
              The Problem Was Never the Medication
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="relative bg-white p-8 md:p-12 rounded-2xl border border-[#1e3a8a]/10 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_4px_12px_rgba(30,58,138,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
              <div className="absolute top-6 left-8 text-[#1e3a8a]/10 text-8xl font-serif leading-none">
                &ldquo;
              </div>
              <div className="relative pl-4 md:pl-8">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Dr. Sterns spent a decade researching why people with dementia
                  lose their independence. The answer kept coming back to
                  medication. They had the right prescriptions. They just
                  couldn&rsquo;t manage them.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Medication non-adherence costs the U.S. healthcare system{" "}
                  <strong className="text-[#1e3a8a]">$300 billion+ annually</strong>{" "}
                  and takes 125,000 lives each year. Existing tools were part
                  of the problem&nbsp;&mdash; pill organizers cause sorting errors,
                  text reminders get ignored, bottle caps count openings without
                  knowing if the right dose was taken. Every existing approach
                  added burden instead of removing it.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ======= SAFE. CONNECTED. REIMBURSABLE. ======= */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              What We Built
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight">
              Safe. Connected. Reimbursable.
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safe",
                color: "#1e3a8a",
                desc: "Pharmacist-filled pods. Gesture-based dispensing. 83% adherence in clinical trials. No sorting errors. No double-dosing.",
              },
              {
                icon: Wifi,
                title: "Connected",
                color: "#0891b2",
                desc: "Real-time data from patient to care team. Intervene when needed. Not after the ER visit.",
              },
              {
                icon: DollarSign,
                title: "Reimbursable",
                color: "#1e3a8a",
                desc: "RPM/RTM billing codes generate 3x cost recovery. Financially sustainable for health systems.",
              },
            ].map((pillar, i) => (
              <FadeUp key={pillar.title} delay={0.1 + i * 0.1}>
                <div className="group relative bg-[#f8fafc] p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${pillar.color}10` }}
                  >
                    <pillar.icon className="w-6 h-6" style={{ color: pillar.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* ======= LEADERSHIP TEAM ======= */}
      <Section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Leadership
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-4 tracking-tight">
              The Team
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              Healthcare, clinical medicine, regulatory affairs, and enterprise software.
            </p>
          </FadeUp>

          <LeaderCards />
        </div>
      </Section>

      {/* ======= STRATEGIC PARTNERS ======= */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Our Ecosystem
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight">
              Partners &amp; Collaborators
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeUp delay={0.1}>
              <div className="bg-[#f8fafc] p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_4px_12px_rgba(30,58,138,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#1e3a8a]/10">
                  <Factory className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Manufacturing</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] mt-2.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Parallel Design Inc.</span>
                      <span className="text-gray-500"> (Wooster, OH)</span>
                      <p className="text-gray-500 text-sm mt-1">Pod manufacturing and industrial design</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] mt-2.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">LogiSync</span>
                      <span className="text-gray-500"> (Avon Lake, OH)</span>
                      <p className="text-gray-500 text-sm mt-1">Electronics manufacturing and assembly</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-[#f8fafc] p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_4px_12px_rgba(30,58,138,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#0891b2]/10">
                  <Code2 className="w-6 h-6 text-[#0891b2]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Development &amp; Support</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0891b2] mt-2.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">InterSystems</span>
                      <p className="text-gray-500 text-sm mt-1">Development partner</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0891b2] mt-2.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">BioEnterprise</span>
                      <p className="text-gray-500 text-sm mt-1">Portfolio company</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0891b2] mt-2.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">MAGNET Incubator</span>
                      <span className="text-gray-500"> (Cleveland, OH)</span>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeUp>
          </div>

          {/* University Collaborators */}
          <FadeUp delay={0.25}>
            <div className="relative bg-gradient-to-br from-[#f8fafc] to-[#eef5ff] p-8 md:p-12 rounded-2xl border border-[#1e3a8a]/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#1e3a8a]/10">
                  <GraduationCap className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">University &amp; Research Collaborators</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {universityPartners.map((partner, i) => (
                  <FadeUp key={partner} delay={0.3 + i * 0.04}>
                    <div className="bg-white px-4 py-3 rounded-xl text-center text-gray-700 font-medium text-sm border border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04)]">
                      {partner}
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ======= MARKET OPPORTUNITY ======= */}
      <Section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Market Opportunity
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight">
              The Numbers Behind the Opportunity
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { end: 15, prefix: "$", suffix: "B", label: "Market Size", desc: "Global medication adherence market by 2030", color: "#0891b2" },
              { end: 10, suffix: "M+", label: "Patients", desc: "Americans with complex multi-drug regimens requiring monitoring", color: "#1e3a8a" },
              { end: 2, suffix: "\u00d7", label: "Population Growth", desc: "Older adult population doubling by 2030", color: "#0891b2" },
            ].map((stat, i) => (
              <FadeUp key={stat.label} delay={0.1 + i * 0.1}>
                <div className="text-center p-8 md:p-10 rounded-2xl bg-white border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
                  <div className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tight" style={{ color: stat.color }}>
                    <CountUp end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                    {stat.label}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {stat.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* ======= COMPANY TIMELINE ======= */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Our Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight">
              From Research to Platform
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-[#0891b2]/40 via-[#1e3a8a]/20 to-transparent hidden md:block" />

            <div className="space-y-8">
              {[
                { year: "2010\u20132015", title: "NIH-Funded Research", description: "Dr. Sterns conducts decade-long research into medication adherence for aging populations. Memory Magic program impacts 500K+ older adults.", icon: GraduationCap, color: "#1e3a8a" },
                { year: "2015\u20132017", title: "Platform Development", description: "First iLidRx pod prototypes developed. 12 US patents filed and granted. Hold, Place, and Tilt\u2122 dispensing mechanism invented.", icon: Factory, color: "#0891b2" },
                { year: "2017\u20132019", title: "Industry Recognition", description: "AMIA PitchIT Grand Prize. Best Tech Startup in Cleveland. AARP/MedCity 50+ Innovation Leader.", icon: Trophy, color: "#1e3a8a" },
                { year: "2019\u20132021", title: "Clinical Validation", description: "NIH adherence study across 350+ participants: 48% \u2192 80%+ improvement. University of Michigan Cancer Center trial: 25% fewer dropouts.", icon: TrendingUp, color: "#0891b2" },
                { year: "2021\u20132022", title: "Accelerator Growth", description: "NewChip, OCEAN, and Whatif! fellowship programs. C-suite expansion with CMO and CSO appointments.", icon: Users, color: "#1e3a8a" },
                { year: "2023\u2013Present", title: "AI & Diagnostics Expansion", description: "$871K NIMH grant for TDtect\u2122 study. First patients enrolled. FDA Class II clearance pathway underway.", icon: Award, color: "#0891b2" },
              ].map((milestone, i) => (
                <FadeUp key={milestone.year} delay={i * 0.08}>
                  <div className="flex items-start gap-5 md:gap-6">
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${milestone.color}10` }}
                      >
                        <milestone.icon className="w-5 h-5" style={{ color: milestone.color }} />
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{milestone.year}</div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1.5">{milestone.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ======= CTA ======= */}
      <Section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              See What iRxReminder
              <br />
              Can Do for <span className="text-[#0891b2]">Your Team</span>
            </h2>
            <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Schedule a pilot configured for your use case
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#0891b2] hover:bg-[#0e7490] text-white text-lg px-8 py-6 shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.4),0_8px_28px_rgba(8,145,178,0.3)] transition-[background-color,box-shadow]"
              >
                <Link to="/schedule-pilot">
                  Schedule a Pilot
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 hover:border-white/80 text-white hover:bg-white/10 text-lg px-8 py-6 transition-colors"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </Section>
    </div>
  );
}
