import { Link, useParams, Navigate } from "react-router";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { FadeUp } from "@/app/components/animations";
import { getArticleBySlug, getRelatedArticles } from "@/app/data/newsArticles";

const categoryLabels: Record<string, string> = {
  grant: "Grant",
  study: "Clinical Study",
  leadership: "Leadership",
  accelerator: "Accelerator",
  award: "Award",
  partnership: "Partnership",
};

export function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const related = getRelatedArticles(article.slug, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0891b2]/15 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-blue-200/70 hover:text-white text-sm font-medium mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 text-blue-200/70 text-xs font-medium">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#0891b2]/20 text-[#0891b2] px-3 py-1 rounded-full text-xs font-semibold">
                <Tag className="w-3 h-3" />
                {categoryLabels[article.category] || article.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="space-y-6">
              {article.body.map((paragraph, i) => (
                <p key={i} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 bg-[#f8fafc]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-8 tracking-tight">
                Related Articles
              </h2>
            </FadeUp>
            <div className="space-y-4">
              {related.map((item, i) => (
                <FadeUp key={item.slug} delay={i * 0.08}>
                  <Link
                    to={`/news/${item.slug}`}
                    className="group block bg-white p-6 rounded-xl border border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_4px_12px_rgba(30,58,138,0.04)] hover:shadow-[0_1px_3px_rgba(30,58,138,0.06),0_8px_20px_rgba(30,58,138,0.08)] transition-[box-shadow] duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">
                        {item.date}
                      </span>
                      <span className="text-xs text-[#0891b2] font-medium">
                        {categoryLabels[item.category]}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#0891b2] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center text-[#0891b2] font-semibold text-sm gap-2 group-hover:gap-3 transition-[gap]">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
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
