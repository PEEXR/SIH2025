import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Mountain, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Users, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const Sikkim = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedMonastery, setSelectedMonastery] = useState(null);

  // Mock data for Sikkim monasteries
  const monasteries = [
    {
      id: 1,
      name: "Pemayangtse Monastery",
      location: "Pelling",
      established: "1705",
      tradition: "Nyingma",
      description: "One of the oldest and most prestigious monasteries in Sikkim, Pemayangtse is a seat of the Nyingma order and houses exquisite wood carvings and ancient scriptures.",
      image: "https://picsum.photos/seed/pemayangtse/800/600",
      features: ["Ancient Manuscripts", "Wood Carvings", "Stupas", "Meditation Halls"],
      visitingHours: "6:00 AM - 6:00 PM",
      bestTime: "March - May, September - November",
      entryFee: "Free (Donations accepted)"
    },
    {
      id: 2,
      name: "Tashiding Monastery",
      location: "West Sikkim",
      established: "1641",
      tradition: "Nyingma",
      description: "Perched on a hilltop between two rivers, Tashiding is considered one of the most sacred monasteries in Sikkim, especially during the Bhumchu festival.",
      image: "https://picsum.photos/seed/tashiding/800/600",
      features: ["Bhumchu Festival", "Sacred Chortens", "Panoramic Views", "Prayer Wheels"],
      visitingHours: "5:30 AM - 7:00 PM",
      bestTime: "March - June, September - December",
      entryFee: "₹25 for Indians, ₹100 for foreigners"
    },
    {
      id: 3,
      name: "Rumtek Monastery",
      location: "East Sikkim",
      established: "1966",
      tradition: "Karma Kagyu",
      description: "Also known as Dharmachakra Centre, Rumtek is one of the largest monasteries in Sikkim and serves as the main seat of the Karmapa in exile.",
      image: "https://picsum.photos/seed/rumtek/800/600",
      features: ["Karma Kagyu Seat", "Thangka Paintings", "Monastic University", "Drum & Cymbal Rituals"],
      visitingHours: "6:00 AM - 5:30 PM",
      bestTime: "April - October",
      entryFee: "₹50 for all visitors"
    },
    {
      id: 4,
      name: "Phodong Monastery",
      location: "North Sikkim",
      established: "1726",
      tradition: "Karma Kagyu",
      description: "Nestled amidst pine forests, Phodong Monastery is known for its peaceful ambiance and the annual Chaam dance festival performed by monks in elaborate costumes.",
      image: "https://picsum.photos/seed/phodong/800/600",
      features: ["Chaam Dance", "Peaceful Environment", "Ancient Artifacts", "Meditation Retreats"],
      visitingHours: "6:30 AM - 5:00 PM",
      bestTime: "May - October",
      entryFee: "₹30 for Indians, ₹75 for foreigners"
    },
    {
      id: 5,
      name: "Enchey Monastery",
      location: "Gangtok",
      established: "1840",
      tradition: "Nyingma",
      description: "Believed to be inhabited by protective deities, Enchey Monastery offers stunning views of the Himalayas and hosts the famous Chaam dance in winter.",
      image: "https://picsum.photos/seed/enchey/800/600",
      features: ["Chaam Dance", "Himalayan Views", "Protective Deities", "Festivals"],
      visitingHours: "6:00 AM - 5:30 PM",
      bestTime: "October - February",
      entryFee: "₹20 for Indians, ₹50 for foreigners"
    },
    {
      id: 6,
      name: "Dubdi Monastery",
      location: "Yuksom",
      established: "1688",
      tradition: "Nyingma",
      description: "The oldest monastery in Sikkim, Dubdi is located in a serene forested area and marks the beginning of Buddhism in the region.",
      image: "https://picsum.photos/seed/dubdi/800/600",
      features: ["Oldest Monastery", "Historical Significance", "Forest Setting", "Peaceful Atmosphere"],
      visitingHours: "7:00 AM - 4:30 PM",
      bestTime: "March - June, September - November",
      entryFee: "₹15 for Indians, ₹40 for foreigners"
    }
  ];

  const heroSlides = [
    {
      image: "https://picsum.photos/seed/monastery1/1600/900",
      title: "Sacred Monasteries of Sikkim",
      subtitle: "Where Spirituality Meets Himalayan Majesty"
    },
    {
      image: "https://picsum.photos/seed/monastery2/1600/900",
      title: "Preserving Buddhist Heritage",
      subtitle: "Centuries of Wisdom and Tradition"
    },
    {
      image: "https://picsum.photos/seed/monastery3/1600/900",
      title: "Cultural Pilgrimage",
      subtitle: "Discover Peace, Art, and History"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-900">SikkimMonasteries</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Home</a>
              <a href="#monasteries" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Monasteries</a>
              <a href="#culture" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Culture</a>
              <a href="#visit" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Plan Visit</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('monasteries').scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Explore Monasteries
              </button>
              <button 
                onClick={() => document.getElementById('visit').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all"
              >
                Plan Your Visit
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Spiritual Heritage of the Himalayas
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sikkim's monasteries are not just places of worship but living repositories of Buddhist philosophy, art, and culture. 
                Nestled amidst the majestic Himalayas, these sacred sites have preserved ancient traditions for centuries, 
                offering visitors a profound experience of peace, wisdom, and spiritual connection.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From the oldest Dubdi Monastery to the grand Rumtek, each monastery tells a unique story of faith, resilience, 
                and cultural preservation. Our mission is to promote responsible tourism while ensuring these sacred sites 
                continue to thrive for future generations.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 text-amber-600 mr-2" />
                  <span className="font-semibold">600+ Years of History</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-amber-600 mr-2" />
                  <span className="font-semibold">200+ Monks</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-amber-600 mr-2" />
                  <span className="font-semibold">12 Major Monasteries</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/heritage/600/400"
                alt="Monastery heritage"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold">1641</div>
                <div className="text-sm">Year of establishment of Tashiding Monastery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monasteries Grid */}
      <section id="monasteries" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Sikkim's Sacred Monasteries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each monastery offers a unique glimpse into Buddhist philosophy, architecture, and spiritual practices. 
              Discover their history, traditions, and the best times to visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monasteries.map((monastery) => (
              <div
                key={monastery.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedMonastery(monastery)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={monastery.image}
                    alt={monastery.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {monastery.tradition}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{monastery.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{monastery.location}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    {monastery.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 font-semibold">Est. {monastery.established}</span>
                    <ArrowRight className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Preservation */}
      <section id="culture" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Cultural Preservation & Spiritual Practice</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                The monasteries of Sikkim are not merely tourist attractions but active centers of Buddhist learning, 
                meditation, and community life. Monks dedicate their lives to preserving ancient texts, practicing 
                meditation, and performing rituals that have been passed down through generations.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Through festivals like Losar, Saga Dawa, and Bhumchu, visitors can witness the living culture of 
                Himalayan Buddhism. These events showcase traditional music, masked Chaam dances, butter lamp offerings, 
                and communal prayers that connect the past with the present.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-amber-400">500+</div>
                  <div className="text-sm text-gray-300">Ancient Manuscripts Preserved</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-amber-400">12</div>
                  <div className="text-sm text-gray-300">Major Annual Festivals</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-amber-400">300+</div>
                  <div className="text-sm text-gray-300">Monks in Training</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-amber-400">800+</div>
                  <div className="text-sm text-gray-300">Years of Combined History</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/culture/600/400"
                alt="Monastic culture"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold">Monastic Education</h3>
                <p className="text-gray-200">Philosophy, Medicine, Art & Ritual Training</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Planning */}
      <section id="visit" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Plan Your Visit</h2>
            <p className="text-xl text-gray-600">
              Make the most of your pilgrimage with essential information for visitors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-amber-600 mr-2" />
                Best Times to Visit
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-amber-800 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">March - June</h4>
                    <p className="text-gray-600">Pleasant weather, clear mountain views, festival season</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-amber-800 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">September - November</h4>
                    <p className="text-gray-600">Post-monsoon clarity, golden landscapes, cultural events</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-gray-600 font-bold text-sm">○</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">December - February</h4>
                    <p className="text-gray-600">Cold but magical with snow; some areas may be inaccessible</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-gray-600 font-bold text-sm">○</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">July - August</h4>
                    <p className="text-gray-600">Monsoon season; landslides possible, limited visibility</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 text-amber-600 mr-2" />
                Visitor Guidelines
              </h3>
              <div className="space-y-4">
                <div className="flex">
                  <Clock className="h-5 w-5 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Respectful Hours</h4>
                    <p className="text-gray-600">Visit during designated hours; avoid early morning prayer sessions</p>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-amber-600 mt-1 mr-3 flex-shrink-0">📿</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dress Modestly</h4>
                    <p className="text-gray-600">Cover shoulders and knees; remove shoes before entering prayer halls</p>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-amber-600 mt-1 mr-3 flex-shrink-0">📸</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Photography</h4>
                    <p className="text-gray-600">Ask permission before photographing monks; no flash inside temples</p>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-amber-600 mt-1 mr-3 flex-shrink-0">🤫</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quiet Conduct</h4>
                    <p className="text-gray-600">Maintain silence; avoid loud conversations in sacred spaces</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                For more information about visiting Sikkim's monasteries, cultural programs, or preservation initiatives, 
                contact our heritage center.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@sikkimmonasteries.org</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">Heritage Center, Gangtok, Sikkim 737101</p>
                    <p className="text-sm text-gray-500">India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Visit Planning</option>
                    <option>Cultural Program</option>
                    <option>Preservation Initiative</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Monastery Detail Modal */}
      {selectedMonastery && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="relative">
              <img
                src={selectedMonastery.image}
                alt={selectedMonastery.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedMonastery(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {selectedMonastery.tradition}
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedMonastery.name}</h2>
                  <div className="flex items-center text-gray-600 mb-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{selectedMonastery.location}</span>
                  </div>
                  <div className="text-sm text-amber-600">Established: {selectedMonastery.established}</div>
                </div>
                <div className="mt-4 md:mt-0 bg-gray-50 px-4 py-2 rounded-lg">
                  <div className="text-sm text-gray-600">Entry Fee</div>
                  <div className="font-semibold text-gray-900">{selectedMonastery.entryFee}</div>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{selectedMonastery.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedMonastery.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Visitor Information</h3>
                  <div className="space-y-3">
                    <div className="flex">
                      <Clock className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Visiting Hours</div>
                        <div className="text-gray-600">{selectedMonastery.visitingHours}</div>
                      </div>
                    </div>
                    <div className="flex">
                      <Calendar className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Best Time to Visit</div>
                        <div className="text-gray-600">{selectedMonastery.bestTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    setSelectedMonastery(null);
                    document.getElementById('visit').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Plan Your Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-40"
      >
        <ChevronLeft className="h-6 w-6 transform rotate-90" />
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-8 w-8 text-amber-600" />
                <span className="text-2xl font-bold">SikkimMonasteries</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dedicated to preserving and promoting the rich Buddhist heritage of Sikkim's monasteries 
                through responsible tourism and cultural education.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  YouTube
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">Home</a></li>
                <li><a href="#monasteries" className="text-gray-300 hover:text-amber-400 transition-colors">Monasteries</a></li>
                <li><a href="#culture" className="text-gray-300 hover:text-amber-400 transition-colors">Culture</a></li>
                <li><a href="#visit" className="text-gray-300 hover:text-amber-400 transition-colors">Visit Planning</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Accessibility</a></li>
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Photo Guidelines</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Sikkim Monasteries Heritage. Promoting cultural preservation through responsible tourism.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sikkim;