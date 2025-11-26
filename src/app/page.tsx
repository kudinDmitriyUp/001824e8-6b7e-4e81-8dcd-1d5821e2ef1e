"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardFour from '@/components/sections/metrics/MetricCardFour';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Lightbulb, Rocket, TrendingUp, Users, Award, Globe, Linkedin, Github, Twitter, MessageCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="floatingGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="TechShop Milano"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145370296-qgof7596.jpg"
          logoAlt="TechShop Milano"
          navItems={[
            { name: "About", id: "about" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get in Touch",
            href: "contact"
          }}
          className="z-50"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="TechShop Milano"
          description="Backing ambitious founders building the future of European technology. We invest in early-stage companies with exponential potential."
          buttons={[
            { text: "View Portfolio", href: "portfolio" },
            { text: "Start Conversation", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145370782-ox4jocl4.jpg"
          imageAlt="Modern tech startup environment"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Approach"
          tagIcon={Lightbulb}
          title="Deep Tech, Bold Vision"
          description="We partner with founders at the intersection of innovation and market opportunity. Our investment thesis focuses on companies solving fundamental problems through technology, whether in AI, fintech, climate tech, or deep tech infrastructure. We provide not just capital, but strategic guidance, network access, and operational expertise."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145374662-2yzeiga2.jpg"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145374662-2yzeiga2.jpg"
          }}
          buttons={[
            { text: "Learn More", href: "#faq" }
          ]}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardOne
          title="Portfolio Companies"
          description="Meet the innovative founders and companies we back"
          tag="Featured"
          tagIcon={Rocket}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "AI Analytics Platform",
              price: "Series A",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145371721-crpkzk2k.jpg"
            },
            {
              id: "2",
              name: "Fintech Infrastructure",
              price: "Seed",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145372213-pr7i45qh.jpg"
            },
            {
              id: "3",
              name: "SaaS Data Layer",
              price: "Series A",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145372974-6tk27bzy.jpg"
            },
            {
              id: "4",
              name: "Cloud Platform",
              price: "Seed",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145373742-h6hppczs.jpg"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFour
          title="Our Impact"
          description="Metrics that matter in venture capital"
          tag="Performance"
          textboxLayout="default"
          metrics={[
            {
              id: "1",
              icon: TrendingUp,
              title: "Portfolio Value",
              value: "€200M+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145374662-2yzeiga2.jpg"
            },
            {
              id: "2",
              icon: Users,
              title: "Founded Companies",
              value: "45+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145374662-2yzeiga2.jpg"
            },
            {
              id: "3",
              icon: Award,
              title: "Exit Success Rate",
              value: "78%",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145374662-2yzeiga2.jpg"
            },
            {
              id: "4",
              icon: Globe,
              title: "European Reach",
              value: "15+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145374662-2yzeiga2.jpg"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Experienced investors and operators backing the next generation"
          tag="Leadership"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Managing Partner",
              description: "20+ years in tech investment and operations. Previously led successful exits in SaaS and fintech.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145375582-xk7v5hg2.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://example.com" }
              ]
            },
            {
              id: "2",
              name: "Sofia Bianchi",
              role: "Principal Investor",
              description: "Former CTO and founder. Deep expertise in AI and machine learning infrastructure.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145376131-uzuaf0da.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ]
            },
            {
              id: "3",
              name: "Luca Parisi",
              role: "Operations Partner",
              description: "Scaled multiple startups to unicorn status. Focuses on go-to-market and product-market fit.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145376930-m2iaotj5.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Founders Say"
          description="Hear from the entrepreneurs we back"
          tag="Testimonials"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alessandro Rossi",
              handle: "@arossi_founder",
              testimonial: "TechShop Milano didn't just provide capital, they became true partners. Their network and strategic guidance were invaluable in scaling our AI platform across Europe.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145377374-lf41qstc.jpg"
            },
            {
              id: "2",
              name: "Emma Conti",
              handle: "@emmaconti_ceo",
              testimonial: "The team understood our vision immediately. They've been instrumental in our Series A preparation and beyond. Highly recommend for any founder serious about scale.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145378058-ff7dpood.jpg"
            },
            {
              id: "3",
              name: "Francesco Bruno",
              handle: "@fbruno_tech",
              testimonial: "Working with TechShop Milano has been transformative. They brought credibility, connections, and genuine expertise that accelerated our growth significantly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145378568-o018ryxh.jpg"
            },
            {
              id: "4",
              name: "Giulia Martinelli",
              handle: "@giumartin_dev",
              testimonial: "Beyond capital, TechShop Milano provided operational guidance that helped us focus on product. Their commitment to founder success is genuinely refreshing.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145379150-fevbmig8.jpg"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Investment FAQs"
          description="Common questions from founders and investors"
          tag="Questions"
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764145379640-hdbcudqs.jpg"
          mediaPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What stage do you typically invest in?",
              content: "We focus on seed and Series A rounds, typically investing between €500K and €5M. We look for early-stage companies with strong founders, clear market opportunity, and differentiated technology."
            },
            {
              id: "2",
              title: "What is your investment thesis?",
              content: "We invest in founders building transformative technology in AI, fintech, climate tech, and deep tech infrastructure. We seek companies solving fundamental problems with sustainable business models."
            },
            {
              id: "3",
              title: "How long is your investment process?",
              content: "Our investment process typically takes 6-8 weeks from initial meeting to term sheet. We move fast for the right opportunities. Our goal is to be a founder-friendly investor who respects your time."
            },
            {
              id: "4",
              title: "Do you take board seats?",
              content: "Yes, we typically take board seats in our investments. We believe in active partnership and operational support. However, we respect founder autonomy and work collaboratively on all decisions."
            },
            {
              id: "5",
              title: "What's your follow-on investment strategy?",
              content: "We're committed to supporting our portfolio companies through multiple rounds. We allocate capital specifically for follow-on investments and aim to participate in your Series B and beyond."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to explore partnership?"
          description="Send us a brief overview of your vision and we'll reach out within 48 hours. We'd love to hear about what you're building."
          tagIcon={MessageCircle}
          inputPlaceholder="founder@yourcompany.com"
          buttonText="Send Pitch"
          termsText="We respect your privacy. We'll only use your email to follow up about potential investment opportunities."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="TechShop Milano"
          copyrightText="© 2025 TechShop Milano VC. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Team", href: "team" },
                { label: "Portfolio", href: "portfolio" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Investment FAQ", href: "faq" },
                { label: "Founder Resources", href: "#" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}