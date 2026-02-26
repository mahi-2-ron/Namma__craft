import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Star, Heart, MessageCircle, Share2, Palette, Hammer, Scissors, Coffee, Gem } from 'lucide-react';
import { ProductCard } from '../components/FeaturedProducts';
import { useNavigate } from 'react-router-dom';

export const ArtisanProfile = () => {
  const navigate = useNavigate();
  const artisanProducts = [
    { id: 1, name: 'Hand-Painted Blue Pottery Vase', artisan: 'Ananya Sharma', price: 2450, image: 'https://picsum.photos/seed/jaipur-pottery/600/800' },
    { id: 5, name: 'Cobalt Blue Ceramic Bowl', artisan: 'Ananya Sharma', price: 1250, image: 'https://picsum.photos/seed/blue-bowl/600/800' },
    { id: 6, name: 'Floral Pattern Serving Tray', artisan: 'Ananya Sharma', price: 1850, image: 'https://picsum.photos/seed/tray/600/800' },
    { id: 7, name: 'Decorative Wall Plate', artisan: 'Ananya Sharma', price: 950, image: 'https://picsum.photos/seed/wall-plate/600/800' },
  ];

  const reviews = [
    { id: 1, user: 'Priya M.', rating: 5, comment: 'The blue pottery is exquisite. The colors are so vibrant and the finish is perfect.', date: '2 days ago' },
    { id: 2, user: 'Amit S.', rating: 4, comment: 'Beautiful craftsmanship. It arrived safely in very secure packaging.', date: '1 week ago' },
  ];

  const [isFollowing, setIsFollowing] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Ananya Sharma - Master Artisan",
          text: "Discover the amazing craft of Ananya Sharma on NammaCraft!",
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      alert('Link copied to clipboard!');
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="bg-cream min-h-screen pb-20 selection:bg-accent/20">
      {/* Header Section */}
      <div className="relative">
        <div className="h-64 md:h-[450px] w-full overflow-hidden relative">
          <img
            src="https://picsum.photos/seed/rajasthan-landscape/1920/800"
            alt="Artisan Workshop"
            className="w-full h-full object-cover brightness-[0.85]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 mandala-bg opacity-[0.03]" />
        </div>

        <div className="container-custom relative -mt-32 md:-mt-48 z-10">
          <div className="bg-white/80 backdrop-blur-2xl rounded-[60px] p-8 md:p-16 border border-white shadow-premium flex flex-col md:flex-row items-center md:items-end gap-10 md:gap-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-[48px] overflow-hidden border-[8px] border-white shadow-2xl relative">
                <img
                  src="https://picsum.photos/seed/artisan-ananya/600/600"
                  alt="Ananya Sharma"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent rounded-3xl flex items-center justify-center text-white shadow-xl border-4 border-white group cursor-pointer hover:rotate-12 transition-transform">
                <Palette className="w-8 h-8" />
              </div>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                <span className="badge-indian shadow-sm">Master Artisan</span>
                <span className="badge-indian !bg-primary/5 !text-primary !border-primary/20">15+ Years Exp.</span>
                <span className="badge-indian !bg-emerald-50 !text-emerald-600 !border-emerald-200">Verified Heritage</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-6 leading-tight">Ananya Sharma</h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 text-text-soft">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="font-bold text-sm uppercase tracking-widest">Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  <span className="font-bold text-sm uppercase tracking-widest">4.9 (1240 Reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`flex-1 md:flex-none btn-primary !py-4 !px-10 text-xs uppercase tracking-widest shadow-xl transition-all ${isFollowing ? '!bg-text-soft' : ''}`}
              >
                {isFollowing ? 'Following' : 'Follow Artisan'}
              </button>
              <button
                onClick={handleShare}
                className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all border border-highlight/10 shadow-sm"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Story & Process */}
          <div className="lg:col-span-8 space-y-16">
            <section className="bg-white rounded-[48px] p-10 md:p-16 border border-highlight/10 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 mandala-bg opacity-[0.02] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-accent" />
                  <span className="text-accent font-bold text-[10px] tracking-[0.3em] uppercase">The Story</span>
                </div>
                <div className="relative mb-12">
                  <div className="absolute -left-10 top-0 text-[120px] font-display text-primary/5 select-none pointer-events-none">
                    Story
                  </div>
                  <p className="text-2xl md:text-3xl font-light text-text-soft/80 leading-relaxed italic relative z-10">
                    "Growing up in the pink city of Jaipur, pottery wasn't just a craft I saw - it was the rhythm of our street, the dust in my clothes and the colors in my dreams."
                  </p>
                </div>
                <div className="prose prose-lg text-text-soft font-light leading-relaxed max-w-none first-letter:text-7xl first-letter:font-display first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                  <p className="mb-6">
                    Ananya Sharma is one of the few remaining master artisans specializing in the authentic Turko-Persian Blue Pottery of Jaipur. Unlike traditional ceramics, this craft uses no clay. Instead, Ananya meticulously prepares a mixture of Egyptian paste, powdered glass, and borax, hand-shaping each piece before painting them with cobalt and turquoise pigments extracted from natural minerals.
                  </p>
                  <p>
                    Her studio, 'Virasat Pottery', has become a beacon for preserving this 17th-century art form. Each piece she creates takes 15 to 20 days to complete, involving multiple stages of shaping, drying, painting, and a precise kiln firing process that she has perfected over two decades.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex justify-between items-end mb-12 px-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-[1px] w-8 bg-accent/30" />
                    <span className="text-accent font-bold text-[10px] tracking-widest uppercase">The Collection</span>
                  </div>
                  <h2 className="text-4xl font-display font-bold text-primary">Masterpieces from the Studio</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {artisanProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Details & Contact */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary rounded-[48px] p-10 text-cream relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 mandala-bg opacity-[0.05]" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-accent rounded-[28px] flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Inquire About Commisions</h3>
                <p className="text-cream/70 text-sm mb-8 leading-relaxed">
                  Looking for a custom blue pottery set for your home or a special gift? Ananya takes limited private commissions throughout the year.
                </p>
                <button
                  onClick={() => alert('Message feature coming soon!')}
                  className="w-full py-5 bg-white text-primary rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-white transition-all shadow-lg"
                >
                  Send a Message
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-10 border border-highlight/10 shadow-sm space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent text-center mb-4">Artisan's Specialities</h4>
              <div className="space-y-4">
                {[
                  { icon: Palette, label: 'Hand-Painting', desc: 'Natural mineral pigments' },
                  { icon: Hammer, label: 'Traditional Kiln', desc: 'Slow wood-fired process' },
                  { icon: Scissors, label: 'Egyptian Paste', desc: 'Clay-free ancient formula' },
                  { icon: Coffee, label: 'Functional Art', desc: 'Safe for daily heritage use' }
                ].map((spec, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-cream/30 border border-highlight/5 group hover:border-accent/20 transition-all">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                      <spec.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-primary font-bold text-sm tracking-tight">{spec.label}</p>
                      <p className="text-text-soft text-[10px] uppercase font-medium">{spec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-10 border border-highlight/10 shadow-sm">
              <div className="flex justify-between items-center mb-10">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent">Patron Reviews</h4>
                <div className="flex items-center gap-1 text-accent">
                  <Star className="w-3 h-3 fill-accent" />
                  <span className="text-xs font-bold">4.9</span>
                </div>
              </div>

              <div className="space-y-8">
                {reviews.map((review) => (
                  <div key={review.id} className="space-y-4 relative">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-primary">{review.user}</span>
                      <span className="text-[9px] text-text-soft uppercase tracking-widest">{review.date}</span>
                    </div>
                    <p className="text-text-soft italic text-xs leading-relaxed">
                      "{review.comment}"
                    </p>
                    <div className="h-[1px] w-full bg-highlight/10" />
                  </div>
                ))}
                <button
                  onClick={() => alert('View all reviews!')}
                  className="w-full py-4 text-primary font-bold uppercase tracking-widest text-[9px] hover:text-accent transition-colors flex items-center justify-center gap-2"
                >
                  View All Reviews <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
