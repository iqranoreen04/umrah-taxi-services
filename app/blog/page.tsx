"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/site/page-hero";
import CTASection from "@/components/site/cta-section";
import BlogCard from "@/components/site/blog-card";
import { blogPosts } from "@/lib/data/blog";
import { staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function BlogPage() {
  const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const posts = active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Travel Blog"
        title="Guides & Tips for Your Sacred Journey"
        description="Practical advice on Umrah travel, transportation, and visiting the holy cities."
      />

      <section className="section-py">
        <div className="container-mx container-px">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                  active === c
                    ? "bg-emerald text-white border-emerald"
                    : "bg-white border-border text-muted-foreground hover:border-emerald hover:text-emerald"
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <motion.div
            key={active}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
