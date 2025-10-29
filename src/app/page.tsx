"use client"

import { Award, Camera, Crown, DollarSign, Eye, Mail, MessageCircle, Star, Users, Zap } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "feature" },
            { name: "Portfolio", id: "product" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Capture Studio"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Capture Your Perfect Moments"
          description="Professional photography services for portraits, weddings, events, and commercial projects. We bring your vision to life with stunning, high-quality images."
          tag="Photography Studio"
          tagIcon={Camera}
          buttons={[
            { text: "Book Session", href: "contact" },
            { text: "View Portfolio", href: "product" }
          ]}
          imageSrc="https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional photography studio"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose Our Studio"
          description="With over 10 years of experience, we specialize in creating timeless photographs that tell your unique story."
          tag="Our Expertise"
          tagIcon={Award}
          bulletPoints={[
            {
              title: "Professional Equipment",
              description: "State-of-the-art cameras and lighting equipment for exceptional image quality",
              icon: Camera
            },
            {
              title: "Creative Vision",
              description: "Artistic approach combined with technical expertise for unique results",
              icon: Eye
            },
            {
              title: "Fast Turnaround",
              description: "Quick editing and delivery without compromising on quality",
              icon: Zap
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7205283/pexels-photo-7205283.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional portrait photography session"
          imagePosition="right"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Photography Services"
          description="From intimate portraits to grand celebrations, we offer comprehensive photography services tailored to your needs."
          tag="Services"
          tagIcon={Star}
          features={[
            {
              title: "Portrait Photography",
              description: "Professional headshots, family portraits, and personal branding photography",
              imageSrc: "https://images.pexels.com/photos/7205283/pexels-photo-7205283.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait photography session"
            },
            {
              title: "Wedding Photography",
              description: "Capture your special day with romantic, timeless wedding photography",
              imageSrc: "https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Wedding photography"
            },
            {
              title: "Event Photography",
              description: "Corporate events, parties, and special occasions documented beautifully",
              imageSrc: "https://images.pexels.com/photos/6518727/pexels-photo-6518727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Event photography"
            },
            {
              title: "Product Photography",
              description: "High-quality commercial photography for your business and marketing needs",
              imageSrc: "https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Product photography setup"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Don't just take our word for it - hear from our satisfied clients"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              testimonial: "The team at Capture Studio exceeded our expectations. The photos were absolutely stunning and perfectly captured the essence of our brand.",
              imageSrc: "https://images.pexels.com/photos/8546799/pexels-photo-8546799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Wedding Couple",
              testimonial: "Our wedding photos are breathtaking! They captured every special moment and emotion. We couldn't be happier with the results.",
              imageSrc: "https://images.pexels.com/photos/34490273/pexels-photo-34490273.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Business Owner",
              testimonial: "Professional, creative, and reliable. The headshots they took have been amazing for my business networking and online presence.",
              imageSrc: "https://images.pexels.com/photos/23496599/pexels-photo-23496599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Event Organizer",
              testimonial: "They documented our corporate event flawlessly. Every important moment was captured with incredible attention to detail.",
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Passionate photographers dedicated to capturing your most precious moments"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alex Morrison",
              role: "Lead Photographer",
              description: "Award-winning photographer with 15+ years of experience in portrait and wedding photography. Specializes in natural light photography.",
              imageSrc: "https://images.pexels.com/photos/17858618/pexels-photo-17858618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Morrison",
              socialLinks: [
                { icon: "Instagram", url: "https://instagram.com/alexmorrison" },
                { icon: "Globe", url: "https://alexmorrison.photography" }
              ]
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Photography Packages"
          description="Choose the perfect package for your photography needs"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "basic",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$299",
              subtitle: "Perfect for portraits and small events",
              features: [
                "2-hour photography session",
                "20 edited high-resolution photos",
                "Online gallery for viewing and download",
                "Basic retouching included"
              ]
            },
            {
              id: "premium",
              badge: "Great Value",
              badgeIcon: Award,
              price: "$599",
              subtitle: "Ideal for weddings and special occasions",
              features: [
                "6-hour photography coverage",
                "100+ edited high-resolution photos",
                "Private online gallery",
                "Professional retouching",
                "USB drive with all photos"
              ]
            },
            {
              id: "deluxe",
              badge: "Premium",
              badgeIcon: Crown,
              price: "$999",
              subtitle: "Complete coverage for your biggest moments",
              features: [
                "Full day photography coverage",
                "300+ edited high-resolution photos",
                "Premium online gallery",
                "Advanced retouching and editing",
                "Custom photo album included",
                "Second photographer available"
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contact Us"
          tagIcon={Mail}
          title="Ready to Book Your Session?"
          description="Get in touch to discuss your photography needs and schedule your session. We'll work together to create beautiful memories that last a lifetime."
          imageSrc="https://images.pexels.com/photos/6226725/pexels-photo-6226725.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Photography studio interior"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Send Message"
          termsText="We'll get back to you within 24 hours to discuss your photography session."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                { label: "Portrait Photography", href: "feature" },
                { label: "Wedding Photography", href: "feature" },
                { label: "Event Photography", href: "feature" },
                { label: "Product Photography", href: "feature" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Portfolio", href: "product" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Pricing", href: "pricing" },
                { label: "Book Session", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | Capture Studio"
        />
      </div>
    </ThemeProvider>
  );
}