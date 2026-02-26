// Mock Database for NammaCraft - Frontend Side
// Matches the structure of the backend SQLite database

export const user = {
    id: 1,
    name: 'Ananya Sharma',
    email: 'ananya@nammacraft.com',
    role: 'artisan',
    avatar: 'https://picsum.photos/seed/indian-face/600/600',
    bio: 'Master Artisan from Jaipur with 15+ years of experience in Blue Pottery.'
};

export const craftCategories = ['All', 'Pottery', 'Textiles', 'Woodwork', 'Jewelry', 'Paintings'];
export const foodCategories = ['All', 'Sweets', 'Savories', 'Spices', 'Pickles', 'Beverages'];
export const regions = ['All India', 'Jaipur, Rajasthan', 'Varanasi, UP', 'Kutch, Gujarat', 'Bhubaneswar, Odisha', 'Mysore, Karnataka'];
export const foodSpecialties = ['All', 'Homemade', 'Festival Special', 'Organic', 'Vegan'];

export const craftProducts = [
    {
        id: 1,
        name: 'Hand-Painted Blue Pottery Vase',
        artisan: 'Ananya Sharma',
        artisan_id: 1,
        price: 2450,
        region: 'Jaipur, Rajasthan',
        image: 'https://picsum.photos/seed/jaipur-pottery/600/800',
        rarity: 'Rare',
        stock: 5,
        isPopularInAuction: true,
        category: 'Pottery',
        description: 'This exquisite blue pottery vase is a masterpiece of Jaipur craftsmanship.',
        culturalStory: 'Blue Pottery is a traditional craft of Jaipur, Rajasthan...'
    },
    { id: 2, name: 'Hand-Woven Pashmina Shawl', artisan: 'Zahoor Ahmed', artisan_id: 3, price: 42000, region: 'Srinagar, Kashmir', image: 'https://picsum.photos/seed/pashmina/600/800', rarity: 'Limited Edition', stock: 2, isPopularInAuction: false, category: 'Textiles' },
    { id: 3, name: 'Intricate Teak Wood Carving', artisan: 'Vikram Singh', artisan_id: 4, price: 3200, region: 'Saharanpur, UP', image: 'https://picsum.photos/seed/wood/600/800', rarity: 'One-of-a-kind', stock: 1, isPopularInAuction: true, category: 'Woodwork' },
    { id: 4, name: 'Traditional Meenakari Jhumkas', artisan: 'Priya Das', artisan_id: 5, price: 1800, region: 'Bikaner, Rajasthan', image: 'https://picsum.photos/seed/jewelry-india/600/800', rarity: 'Common', stock: 12, isPopularInAuction: false, category: 'Jewelry' },
];

export const foodProducts = [
    { id: 1, name: 'Authentic Mysore Pak', creator: 'Lakshmi Devi', price: 450, region: 'Mysore, Karnataka', tag: 'Homemade', category: 'Sweets', image: 'https://picsum.photos/seed/mysorepak/600/800', description: 'A rich, buttery sweet made from gram flour, ghee, and sugar.' },
    { id: 2, name: 'Rajasthani Ghevar', creator: 'Shanti Devi', price: 650, region: 'Jaipur, Rajasthan', tag: 'Festival Special', category: 'Sweets', image: 'https://picsum.photos/seed/ghevar/600/800', description: 'A disc-shaped honeycomb sweet.' },
];

export const auctions = [
    { id: 1, name: 'Antique Dhokra Art Chariot', artisan: 'Suresh Murmu', artisan_id: 2, origin: 'Bastar, Chhattisgarh', currentBid: 28500, timeLeft: '00:45:12', image: 'https://picsum.photos/seed/dhokra-1/600/800', status: 'Active', bidders: 14 },
    { id: 2, name: 'Royal Inlay Jewelry Box', artisan: 'Ananya Sharma', artisan_id: 1, origin: 'Agra, UP', currentBid: 12500, timeLeft: '02:15:30', image: 'https://picsum.photos/seed/inlay/600/800', status: 'Active', bidders: 8 },
];

export const artisans = [
    {
        id: 1,
        name: 'Ananya Sharma',
        role: 'Master Artisan',
        location: 'Jaipur, Rajasthan',
        experience: '15+ Years',
        specialty: 'Blue Pottery',
        rating: 4.9,
        reviews_count: '1.2k+',
        image: 'https://picsum.photos/seed/ann/600/600',
        bio: 'Growing up in Jaipur...'
    }
];

export const orders = [
    { id: 1, product_name: 'Blue Pottery Vase', amount: 2450, status: 'Shipped', date: 'Feb 24, 2024' },
    { id: 2, product_name: 'Mysore Pak', amount: 450, status: 'Pending', date: 'Feb 25, 2024' },
];

export const reviews = [
    { id: 1, user: 'Priya M.', rating: 5, comment: 'Beautiful craft!', date: '2 days ago' },
    { id: 2, user: 'Amit S.', rating: 4, comment: 'Very well packed.', date: '1 week ago' },
];
