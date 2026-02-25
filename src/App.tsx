import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Sparkles, ChevronRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ArtisanSpotlight } from './components/ArtisanSpotlight';
import { TraditionalFoods } from './components/TraditionalFoods';
import { Recommendations } from './components/Recommendations';
import { Marketplace } from './components/Marketplace';
import { ArtisanProfile } from './components/ArtisanProfile';
import { ProductDetail } from './components/ProductDetail';
import { LiveAuction } from './components/LiveAuction';
import { AuctionListing } from './components/AuctionListing';
import { AdminDashboard } from './components/AdminDashboard';
import { CreatorDashboard } from './components/CreatorDashboard';
import { CreateAuction } from './components/CreateAuction';
import { Login } from './components/Login';
import { Checkout } from './components/Checkout';
import { FoodDetail } from './components/FoodDetail';
import { AddFoodItem } from './components/AddFoodItem';
import { CulturalDiscovery } from './components/CulturalDiscovery';
import { FestivalHome } from './components/FestivalHome';
import { ArtisanStory } from './components/ArtisanStory';
import { CulturalMap } from './components/CulturalMap';
import { GiftBundles } from './components/GiftBundles';
import { FuturePlans } from './components/FuturePlans';
import { Footer } from './components/Footer';

const HomePage = () => (
  <>
    <Hero onNavigate={() => { }} />
    {/* Festival Banner */}
    <a href="/festival-home" className="block bg-primary py-4 relative overflow-hidden group">
      <div className="absolute inset-0 mandala-bg opacity-[0.05]" />
      <div className="container-custom relative z-10 flex items-center justify-center gap-6">
        <Sparkles className="w-5 h-5 text-accent animate-pulse" />
        <p className="text-white text-sm font-bold uppercase tracking-[0.3em]">
          Celebrate <span className="text-accent">Diwali</span> with our Exclusive Heritage Collection
        </p>
        <ChevronRight className="w-5 h-5 text-accent group-hover:translate-x-2 transition-transform" />
      </div>
    </a>
    <CategoryGrid onNavigate={() => { }} />
    <CulturalMap onNavigate={() => { }} />
    <FeaturedProducts onNavigate={() => { }} />
    <GiftBundles onNavigate={() => { }} />
    <ArtisanStory onNavigate={() => { }} />
    <TraditionalFoods onNavigate={() => { }} />
    <ArtisanSpotlight onNavigate={() => { }} />
    <FuturePlans />
    <Recommendations onNavigate={() => { }} />
  </>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/auction-listing" element={<AuctionListing />} />
            <Route path="/auction/:id" element={<LiveAuction />} />
            <Route path="/artisan/:id" element={<ArtisanProfile />} />
            <Route path="/seller" element={<CreatorDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/create-auction" element={<CreateAuction />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/food-detail/:id" element={<FoodDetail />} />
            <Route path="/add-food" element={<AddFoodItem />} />
            <Route path="/discovery" element={<CulturalDiscovery />} />
            <Route path="/festival-home" element={<FestivalHome />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
