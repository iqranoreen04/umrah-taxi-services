"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ChevronRight } from "lucide-react";
import CTASection from "@/components/site/cta-section";
import BlogCard from "@/components/site/blog-card";
import { getBlogPost, blogPosts } from "@/lib/data/blog";
import { staggerContainer } from "@/lib/motion";

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-mx container-px relative z-10 max-w-3xl">
          <nav className="flex items-center gap-1.5 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full bg-gold text-charcoal text-xs font-semibold mb-4">
            {post.category}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readingTime}</span>
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="container-mx container-px max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg"
          >
            <p className="text-foreground font-medium">{post.excerpt}</p>
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.article>
        </div>
      </section>

      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <h2 className="font-display text-2xl font-bold mb-6">More Articles</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
