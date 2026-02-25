import { Link } from "react-router";
import { ArrowRight, Shield, Wifi, DollarSign, Mail, GraduationCap, Factory, Code2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 300, damping: 30 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

const leaders = [
  {
    name: "Anthony Sterns, PhD",
    title: "Founder & Chief Executive Officer",
    bio: "BS Engineering (University of Michigan), PhD Organizational Psychology (University of Akron). Pioneer in gerontechnology with 12 US patents, 33 publications, and 100+ international presentations. Created Memory Magic Program impacting 500K+ older adults across 2,400+ facilities in 7 countries. Secretary General, International Society for Gerontechnology. Led iRxReminder through 10 years of dementia care research to FDA-cleared IoT platform.",
    email: "asterns@irxreminder.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    name: "Fred Ma, MD, PhD",
    title: "Chief Operating Officer",
    bio: "Conducted 1,200+ clinical trials and taken 200+ drugs and medical devices through FDA validation and clearance processes. Leading iRxReminder's FDA Class II clearance submission. Brings unparalleled regulatory expertise to ensure product safety, efficacy, and compliance.",
    email: "fma@irxreminder.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Owen Muir, M.D.",
    title: "Chief Medical Officer",
    bio: "Board-certified Psychiatrist and Mayo Clinic faculty member, specializing in child and adolescent psychology. Experienced principal investigator with deep expertise in behavioral health and telehealth. Joined September 2022 to guide clinical validation and product development strategy.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
  },
  {
    name: "William Yuan",
    title: "Chief Strategy Officer",
    bio: "Former CEO of nGloballink and media G3. Led early-stage company from inception to $310M public company. Track record of successful exits including IPO and acquisitions with 100x ROI. Joined October 2022 to drive strategic growth and market expansion.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
  {
    name: "Larry Tusick",
    title: "Chief Business Officer / VP Sales",
    bio: "25+ years of healthcare experience. Former director at Baxter and Care USA. University of Alabama graduate. Leads partnership development, market expansion strategies, and commercial growth initiatives.",
    email: "ltusick@irxreminder.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Josh Smith, MBA",
    title: "Chief Technology Officer",
    bio: "Former IBM and IBM Watson engineer. Agile practitioner with full software lifecycle experience in online media and mobile products. Leads technology development and platform architecture for iRxReminder's cloud-app-IoT ecosystem.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
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

export function About() {
  return (
    <div className="bg-white overflow-hidden">
      {/* ======= HERO ======= */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-[#0891b2]/20 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 300, damping: 30 }}
            >
              <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-6">
                Our Story
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
                About
                <br />
                <span className="text-[#0891b2]">iRxReminder</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-2xl">
                Monitor. Remind. Connect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-6 text-sm text-blue-200/70"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#0891b2]" />
                10+ Years Research
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#0891b2]" />
                12 US Patents
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#0891b2]" />
                500K+ Lives Impacted
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-6 tracking-tight">
              Empowering Patients to Achieve
              <br className="hidden md:block" /> and Thrive in Independence
            </h2>
            <p className="text-xl text-gray-600 text-center mb-6 max-w-3xl mx-auto leading-relaxed">
              iRxReminder is a clinically validated digital health platform that ensures patients take their medications correctly and on time. We deliver strong ROI potential while making a measurable social impact.
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
              Our Origin
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight">
              A Decade of Purpose-Driven Innovation
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="relative bg-white p-8 md:p-12 rounded-2xl border border-[#1e3a8a]/10 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_4px_12px_rgba(30,58,138,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
              <div className="absolute top-6 left-8 text-[#1e3a8a]/10 text-8xl font-serif leading-none">
                &ldquo;
              </div>
              <div className="relative pl-4 md:pl-8">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Founded by <strong className="text-[#1e3a8a]">Anthony Sterns, PhD</strong>, iRxReminder emerged from
                  10 years of rigorous research on dementia care and medication management. Dr. Sterns, a pioneer in
                  gerontechnology with 12 US patents and 33 publications, created the{" "}
                  <strong className="text-[#1e3a8a]">Memory Magic Program</strong> which has impacted{" "}
                  <strong>500,000+ older adults</strong> across <strong>2,400+ facilities</strong> in 7 countries.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Recognizing that medication non-adherence costs the U.S. healthcare system{" "}
                  <strong className="text-[#1e3a8a]">$300 billion+ annually</strong> and results in 125,000 deaths each
                  year, Dr. Sterns set out to create a technology platform that would fundamentally change how patients
                  and providers manage medications.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ======= THREE PILLARS: SAFE. CONNECTED. REIMBURSABLE. ======= */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Our Promise
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
                desc: "FDA-cleared technology with 83% adherence rates proven in NIH-funded trials. Pharmacist-filled pods eliminate sorting errors.",
              },
              {
                icon: Wifi,
                title: "Connected",
                color: "#0891b2",
                desc: "Real-time data flow from patient to care team enables proactive intervention before problems escalate.",
              },
              {
                icon: DollarSign,
                title: "Reimbursable",
                color: "#1e3a8a",
                desc: "RPM/RTM billing codes generate 3x ROI, making the program financially sustainable for health systems.",
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              Experienced leaders in healthcare technology, clinical medicine, regulatory affairs, and product innovation
            </p>
          </FadeUp>

          <div className="space-y-10">
            {leaders.map((leader, index) => (
              <FadeUp key={leader.name} delay={0.05 + index * 0.05}>
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center bg-white p-6 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_4px_12px_rgba(30,58,138,0.06),0_16px_40px_rgba(30,58,138,0.06)]`}
                >
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="relative overflow-hidden rounded-2xl shadow-[0_4px_16px_rgba(30,58,138,0.1),0_12px_32px_rgba(30,58,138,0.08)]">
                      <ImageWithFallback
                        src={leader.image}
                        alt={leader.name}
                        className="w-full aspect-square object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/20 to-transparent" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-2 tracking-tight">
                      {leader.name}
                    </h3>
                    <div className="text-[#0891b2] font-semibold text-lg mb-5">{leader.title}</div>
                    <p className="text-gray-600 leading-relaxed mb-5">{leader.bio}</p>
                    {leader.email && (
                      <a
                        href={`mailto:${leader.email}`}
                        className="inline-flex items-center gap-2 text-[#0891b2] hover:text-[#0e7490] font-medium transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {leader.email}
                      </a>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
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
              Strategic Partners
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeUp delay={0.1}>
              <div className="bg-[#f8fafc] p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_4px_12px_rgba(30,58,138,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#1e3a8a]/10">
                  <Factory className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Manufacturing Partners</h3>
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
                <h3 className="text-xl font-bold text-gray-900 mb-6">Development & Support</h3>
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
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0891b2] mt-2.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Burton Morton Mentoring</span>
                      <span className="text-gray-500"> (JumpStart)</span>
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
                <h3 className="text-xl font-bold text-gray-900">University & Research Collaborators</h3>
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

      {/* ======= CTA ======= */}
      <Section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              See how iRxReminder can transform medication adherence for your organization
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#0891b2] hover:bg-[#0e7490] text-white text-lg px-8 py-6 shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.4),0_8px_28px_rgba(8,145,178,0.3)] transition-[background-color,box-shadow]"
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 hover:border-white/80 text-white hover:bg-white/10 text-lg px-8 py-6 transition-colors"
              >
                <Link to="/schedule-pilot">Schedule a Pilot</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </Section>
    </div>
  );
}
