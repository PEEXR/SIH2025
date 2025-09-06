import { Brain, Heart, Users, Calendar, Star, Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
const services = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Hassle Free Counseling Sessions",
    description: "One-on-one sessions with licensed therapists to help you navigate academic and personal challenges. No psych eval tests necessary."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Support Groups and Online consultation",
    description: "Connect with peers facing similar challenges in our safe, facilitated group discussions, while always having the support of a professional."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Crisis Support",
    description: "24/7 crisis helpline and immediate support for urgent mental health needs."
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Journaling and Progress Tracking",
    description: "Robust support for stress management, mindfulness, and building resilience."
  }
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Undergraduate Student",
    content: "SafeSpace helped me through my most challenging semester. The counselors are understanding and truly care.",
    rating: 5
  },
  {
    name: "Alex R.",
    role: "Graduate Student",
    content: "The support groups created a community I never knew I needed. I'm not alone in this journey anymore.",
    rating: 5
  },
  {
    name: "Maya K.",
    role: "International Student",
    content: "As an international student, SafeSpace provided culturally sensitive support that made all the difference.",
    rating: 5
  }
];

const stats = [
  { number: "10,000+", label: "Instituions backed" },
  { number: "95%", label: "Satisfaction Rate" },
  { number: "24/7", label: "Crisis Support" },
  { number: "50+", label: "Expert Therapists" }
];

export {
  stats,
  testimonials,
  services,
};
