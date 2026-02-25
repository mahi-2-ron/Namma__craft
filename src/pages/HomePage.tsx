import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { CategoryGrid } from '../components/CategoryGrid';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { ArtisanSpotlight } from '../components/ArtisanSpotlight';
import { TraditionalFoods } from '../components/TraditionalFoods';
import { Recommendations } from '../components/Recommendations';
import { ArtisanStory } from '../components/ArtisanStory';
import { CulturalMap } from '../components/CulturalMap';
import { GiftBundles } from '../components/GiftBundles';
import { FuturePlans } from '../components/FuturePlans';

export const HomePage = () => (
    <>
        <Hero />
        {/* Festival Banner */}
        <Link to="/festival-home" className="block bg-primary py-4 relative overflow-hidden group">
            <div className="absolute inset-0 mandala-bg opacity-[0.05]" />
            <div className="container-custom relative z-10 flex items-center justify-center gap-6">
                <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                <p className="text-white text-sm font-bold uppercase tracking-[0.3em]">
                    Celebrate <span className="text-accent">Diwali</span> with our Exclusive Heritage Collection
                </p>
                <ChevronRight className="w-5 h-5 text-accent group-hover:translate-x-2 transition-transform" />
            </div>
        </Link>
        <CategoryGrid />
        <CulturalMap />
        <FeaturedProducts />
        <GiftBundles />
        <ArtisanStory />
        <TraditionalFoods />
        <ArtisanSpotlight />
        <FuturePlans />
        <Recommendations />
    </>
);
