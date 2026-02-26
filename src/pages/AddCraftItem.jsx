import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
    Upload,
    X,
    ChevronRight,
    Palette,
    Clock,
    Archive,
    MapPin,
    IndianRupee,
    Package,
    Sparkles,
    ArrowLeft,
    CheckCircle2,
    Gem,
    Plus
} from 'lucide-react';
import { SmartPricingPanel } from '../components/SmartPricingPanel';
import { VoiceAssistant } from '../components/VoiceAssistant';

export const AddCraftItem = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        category: 'Pottery',
        origin: '',
        materials: '',
        price: '',
        stock: '',
        story: '',
        rarity: 'Common' // Common, Rare, Artifact
    });

    const [image, setImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleVoiceData = (data) => {
        setFormData(prev => ({
            ...prev,
            name: data.name || prev.name,
            origin: data.origin || prev.origin,
            price: data.startPrice?.toString() || prev.price,
            story: data.craftStory || prev.story
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-cream flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-white rounded-[48px] p-12 text-center shadow-premium relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
                    <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-primary mb-4">Masterpiece Listed!</h2>
                    <p className="text-text-soft mb-10">Your heritage craft is now live in the global marketplace. Collectors can now discover the soul of your work.</p>
                    <div className="space-y-4">
                        <button onClick={() => navigate('/seller')} className="w-full btn-primary !py-4">Back to Studio</button>
                        <button onClick={() => setIsSuccess(false)} className="w-full py-4 text-accent font-bold uppercase tracking-widest text-xs">List Another Craft</button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cream pt-32 pb-20 px-6 relative overflow-hidden">
            <div className="absolute inset-0 mandala-bg opacity-[0.03] pointer-events-none" />

            <div className="container-custom max-w-6xl mx-auto relative z-10">
                <button
                    onClick={() => navigate('/seller')}
                    className="flex items-center gap-2 text-text-soft hover:text-accent transition-all text-xs font-bold uppercase tracking-widest mb-10"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Studio
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Form Side */}
                    <div className="lg:col-span-7 space-y-10">
                        <div>
                            <h1 className="text-5xl font-display font-bold text-primary mb-4">List New Craft</h1>
                            <p className="text-text-soft text-lg max-w-xl">Share the story and soul of your handmade heritage with collectors worldwide.</p>
                        </div>

                        <VoiceAssistant onDataExtracted={handleVoiceData} />

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Basic Info */}
                            <div className="bg-white p-10 rounded-[40px] border border-highlight/10 shadow-sm space-y-8">
                                <div className="flex items-center gap-3 border-b border-highlight/10 pb-6">
                                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                        <Palette className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-primary">Craft Details</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-soft ml-2">Product Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-6 py-4 bg-cream/30 rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all text-sm font-medium"
                                            placeholder="e.g. Pashmina Silk Shawl"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-soft ml-2">Category</label>
                                        <select
                                            className="w-full px-6 py-4 bg-cream/30 rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all text-sm font-medium appearance-none"
                                            value={formData.category}
                                            onChange={e => setFormData({ ...formData, category: e.target.value })}
                                        >
                                            <option>Pottery</option>
                                            <option>Textiles</option>
                                            <option>Woodwork</option>
                                            <option>Jewelry</option>
                                            <option>Paintings</option>
                                            <option>Metalwork</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-soft ml-2">Origin Region</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                                            <input
                                                required
                                                type="text"
                                                className="w-full pl-14 pr-6 py-4 bg-cream/30 rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all text-sm font-medium"
                                                placeholder="e.g. Srinagar, Kashmir"
                                                value={formData.origin}
                                                onChange={e => setFormData({ ...formData, origin: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-soft ml-2">Materials Used</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-6 py-4 bg-cream/30 rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all text-sm font-medium"
                                            placeholder="e.g. Pure Silk, Natural Dyes"
                                            value={formData.materials}
                                            onChange={e => setFormData({ ...formData, materials: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-soft ml-2">The Craft Story</label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full px-6 py-4 bg-cream/30 rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all text-sm font-medium resize-none"
                                        placeholder="Share the history, technique, and soul behind this piece..."
                                        value={formData.story}
                                        onChange={e => setFormData({ ...formData, story: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Pricing & Inventory */}
                            <div className="bg-white p-10 rounded-[40px] border border-highlight/10 shadow-sm space-y-8">
                                <div className="flex items-center gap-3 border-b border-highlight/10 pb-6">
                                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                        <IndianRupee className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-primary">Pricing & Inventory</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-soft ml-2">Price (INR)</label>
                                        <input
                                            required
                                            type="number"
                                            className="w-full px-6 py-4 bg-cream/30 rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all text-sm font-medium"
                                            placeholder="0.00"
                                            value={formData.price}
                                            onChange={e => setFormData({ ...formData, price: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-soft ml-2">Stock Available</label>
                                        <input
                                            required
                                            type="number"
                                            className="w-full px-6 py-4 bg-cream/30 rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white outline-none transition-all text-sm font-medium"
                                            placeholder="e.g. 5"
                                            value={formData.stock}
                                            onChange={e => setFormData({ ...formData, stock: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-soft ml-2">Rarity Level</label>
                                    <div className="flex gap-4">
                                        {['Common', 'Rare', 'Artifact'].map(level => (
                                            <button
                                                key={level}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, rarity: level })}
                                                className={`flex-1 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all border-2 ${formData.rarity === level ? 'bg-primary text-white border-primary shadow-lg' : 'bg-cream/50 text-text-soft border-transparent hover:border-accent/20'}`}
                                            >
                                                {level}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Image Upload */}
                            <div className="bg-white p-10 rounded-[40px] border border-highlight/10 shadow-sm space-y-8">
                                <div className="flex items-center gap-3 border-b border-highlight/10 pb-6">
                                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                        <Upload className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-primary">Masterpiece Visuals</h3>
                                </div>

                                <div className="relative group">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    />
                                    <div className={`border-2 border-dashed rounded-[32px] p-12 flex flex-col items-center justify-center gap-4 transition-all ${image ? 'border-accent bg-accent/5' : 'border-highlight/20 bg-cream/10 group-hover:border-accent/40'}`}>
                                        {image ? (
                                            <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                                <img src={image} alt="Preview" className="w-full h-full object-cover" />
                                            </div>
                                        ) : (
                                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                                <Upload className="w-8 h-8" />
                                            </div>
                                        )}
                                        <div className="text-center">
                                            <p className="text-primary font-bold">{image ? 'Click to change image' : 'Click or drag image here'}</p>
                                            <p className="text-text-soft text-xs mt-1">High-quality workspace photos build trust.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                disabled={isSubmitting}
                                className="w-full btn-primary !py-6 text-lg shadow-2xl shadow-primary/20 flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                                        Listing Masterpiece...
                                    </>
                                ) : (
                                    <>
                                        <Plus className="w-6 h-6" />
                                        List Craft Product
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Tips Side */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-32 space-y-8">
                            <SmartPricingPanel name={formData.name} category={formData.category} />

                            <div className="bg-primary rounded-[40px] p-10 text-cream relative overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 mandala-bg opacity-[0.05] pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
                                        <Gem className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-4 leading-tight">Authenticity Verification</h3>
                                    <p className="text-cream/70 text-sm leading-relaxed mb-8">
                                        Every product listed on NammaCraft is manually verified by our heritage experts. Ensure your "Craft Story" includes details about your lineage and traditional techniques used.
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            { icon: Sparkles, text: 'Automatic AI tagging by region' },
                                            { icon: Archive, text: 'Free shipping facilitation' },
                                            { icon: Clock, text: '24-hour verification window' }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-cream/60">
                                                <item.icon className="w-4 h-4 text-accent" />
                                                <span className="text-xs font-medium uppercase tracking-widest">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Preview Rendering */}
                            <div className="bg-white rounded-[40px] p-6 border border-highlight/10 shadow-sm">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-text-soft/40 mb-4 text-center">Marketplace Preview</p>
                                <div className="aspect-[4/5] rounded-[32px] overflow-hidden bg-cream mb-6 opacity-40">
                                    {image ? (
                                        <img src={image} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <Package className="w-12 h-12 text-text-soft" />
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-2 text-center">
                                    <p className="text-lg font-display font-bold text-primary">{formData.name || 'Masterpiece Name'}</p>
                                    <p className="text-sm text-text-soft italic">By Ananya Sharma</p>
                                    <p className="text-2xl font-display font-bold text-accent mt-4">₹{formData.price || '0'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
