import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Marketplace } from '../pages/Marketplace';
import { ProductDetail } from '../pages/ProductDetail';
import { AuctionListing } from '../pages/AuctionListing';
import { LiveAuction } from '../pages/LiveAuction';
import { ArtisanProfile } from '../pages/ArtisanProfile';
import { CreatorDashboard } from '../pages/CreatorDashboard';
import { AdminDashboard } from '../pages/AdminDashboard';
import { CreateAuction } from '../pages/CreateAuction';
import { Login } from '../pages/Login';
import { Checkout } from '../pages/Checkout';
import { FoodDetail } from '../pages/FoodDetail';
import { AddFoodItem } from '../pages/AddFoodItem';
import { AddCraftItem } from '../pages/AddCraftItem';
import { CulturalDiscovery } from '../pages/CulturalDiscovery';
import { FestivalHome } from '../pages/FestivalHome';

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
            <Route path="/seller/dashboard" element={<Navigate to="/seller" replace />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/create-auction" element={<CreateAuction />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/food-detail/:id" element={<FoodDetail />} />
            <Route path="/add-food" element={<AddFoodItem />} />
            <Route path="/add-craft" element={<AddCraftItem />} />
            <Route path="/discovery" element={<CulturalDiscovery />} />
            <Route path="/festival-home" element={<FestivalHome />} />
        </Routes>
    );
};
