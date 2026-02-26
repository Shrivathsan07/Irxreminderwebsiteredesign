import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { FadeUp } from "@/app/components/animations";
import { newsArticles } from "@/app/data/newsArticles";

export function News() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0891b2]/15 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Updates
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              News &amp; Milestones
            </h1>
            <p className="text-xl text-blue-100/80">
              Grants, studies, partnerships, and recognition
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Items */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {newsArticles.map((item, index) => (
              <FadeUp key={item.slug} delay={index * 0.05}>
                <Link
                  to={`/news/${item.slug}`}
                  className={`group block p-8 rounded-2xl border transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 ${
                    item.featured
                      ? "bg-[#0891b2]/5 border-[#0891b2]/20 shadow-[0_1px_3px_rgba(8,145,178,0.06),0_4px_12px_rgba(8,145,178,0.08)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.08),0_8px_20px_rgba(8,145,178,0.12)]"
                      : "bg-white border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_4px_12px_rgba(30,58,138,0.04)] hover:shadow-[0_1px_3px_rgba(30,58,138,0.06),0_8px_20px_rgba(30,58,138,0.08)]"
                  }`}
                >
                  <article>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                      {item.date}
                    </div>
                    <h2
                      className={`text-xl font-bold mb-3 tracking-tight group-hover:text-[#0891b2] transition-colors ${
                        item.featured ? "text-[#1e3a8a]" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-4">{item.excerpt}</p>
                    <span className="inline-flex items-center text-[#0891b2] font-semibold text-sm gap-2 group-hover:gap-3 transition-[gap]">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </article>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0891b2]/15 rounded-full blur-[80px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              See What Real-Time Monitoring Looks Like
            </h2>
            <p className="text-xl text-blue-100/80 mb-10">
              Schedule a pilot configured for your specific use case
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] transition-[background-color,box-shadow]">
                <Link to="/schedule-pilot">
                  Schedule a Pilot
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/60 hover:border-white/80 text-white hover:bg-white/10 transition-colors">
                <Link to="/platform">Explore the Platform</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
