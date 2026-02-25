import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Marketplace } from '../components/Marketplace';
import { ProductDetail } from '../components/ProductDetail';
import { AuctionListing } from '../components/AuctionListing';
import { LiveAuction } from '../components/LiveAuction';
import { ArtisanProfile } from '../components/ArtisanProfile';
import { CreatorDashboard } from '../components/CreatorDashboard';
import { AdminDashboard } from '../components/AdminDashboard';
import { CreateAuction } from '../components/CreateAuction';
import { Login } from '../components/Login';
import { Checkout } from '../components/Checkout';
import { FoodDetail } from '../components/FoodDetail';
import { AddFoodItem } from '../components/AddFoodItem';
import { CulturalDiscovery } from '../components/CulturalDiscovery';
import { FestivalHome } from '../components/FestivalHome';

export const AppRoutes = () => {
    return (
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
    );
};
