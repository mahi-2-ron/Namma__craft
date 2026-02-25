// Mock Database for NammaCraft

export const craftCategories = ['All', 'Pottery', 'Textiles', 'Woodwork', 'Jewelry', 'Paintings'];
export const foodCategories = ['All', 'Sweets', 'Savories', 'Spices', 'Pickles', 'Beverages'];
export const regions = ['All India', 'Jaipur, Rajasthan', 'Varanasi, UP', 'Kutch, Gujarat', 'Bhubaneswar, Odisha', 'Mysore, Karnataka'];
export const foodSpecialties = ['All', 'Homemade', 'Festival Special', 'Organic', 'Vegan'];

export const craftProducts = [
    {
        id: 1,
        name: 'Hand-Painted Blue Pottery Vase',
        artisan: 'Ananya Sharma',
        price: 2450,
        region: 'Jaipur, Rajasthan',
        image: 'https://picsum.photos/seed/jaipur-pottery/600/800',
        rarity: 'Rare',
        stock: 5,
        isPopularInAuction: true,
        category: 'Pottery',
        description: 'This exquisite blue pottery vase is a masterpiece of Jaipur craftsmanship. Each piece is hand-painted with intricate floral motifs using traditional cobalt blue and turquoise dyes.',
        culturalStory: 'Blue Pottery is a traditional craft of Jaipur, Rajasthan, with roots tracing back to Turko-Persian origins. Unlike conventional pottery, it does not use clay; instead, it is made from a mix of quartz stone powder, powdered glass, Multani Mitti (Fuller\'s Earth), borax, gum, and water.'
    },
    { id: 2, name: 'Hand-Woven Banarasi Silk Stole', artisan: 'Rajesh Kumar', price: 4500, region: 'Varanasi, UP', image: 'https://picsum.photos/seed/silk/600/800', rarity: 'Limited Edition', stock: 2, isPopularInAuction: false, category: 'Textiles' },
    { id: 3, name: 'Intricate Teak Wood Carving', artisan: 'Vikram Singh', price: 3200, region: 'Saharanpur, UP', image: 'https://picsum.photos/seed/wood/600/800', rarity: 'One-of-a-kind', stock: 1, isPopularInAuction: true, category: 'Woodwork' },
    { id: 4, name: 'Traditional Meenakari Jhumkas', artisan: 'Priya Das', price: 1800, region: 'Bikaner, Rajasthan', image: 'https://picsum.photos/seed/jewelry-india/600/800', rarity: 'Common', stock: 12, isPopularInAuction: false, category: 'Jewelry' },
    { id: 5, name: 'Hand-Block Printed Cushion', artisan: 'Suresh Meena', price: 850, region: 'Sanganer, Rajasthan', image: 'https://picsum.photos/seed/block-print/600/800', rarity: 'Common', stock: 25, isPopularInAuction: false, category: 'Textiles' },
    { id: 6, name: 'Terracotta Diya Set', artisan: 'Kavita Devi', price: 450, region: 'Gorakhpur, UP', image: 'https://picsum.photos/seed/diya/600/800', rarity: 'Common', stock: 50, isPopularInAuction: true, category: 'Pottery' },
    { id: 7, name: 'Hand-Woven Jute Basket', artisan: 'Arjun Das', price: 1200, region: 'Kolkata, WB', image: 'https://picsum.photos/seed/jute/600/800', rarity: 'Rare', stock: 8, isPopularInAuction: false, category: 'Woodwork' },
    { id: 8, name: 'Dhokra Art Figurine', artisan: 'Sunita Murmu', price: 2100, region: 'Bastar, Chhattisgarh', image: 'https://picsum.photos/seed/dhokra/600/800', rarity: 'Limited Edition', stock: 3, isPopularInAuction: true, category: 'Paintings' },
];

export const foodProducts = [
    { id: 1, name: 'Authentic Mysore Pak', creator: 'Lakshmi Devi', price: 450, region: 'Mysore, Karnataka', tag: 'Homemade', category: 'Sweets', image: 'https://picsum.photos/seed/mysorepak/600/800', desc: 'A rich, buttery sweet made from gram flour, ghee, and sugar.' },
    { id: 2, name: 'Rajasthani Ghevar', creator: 'Shanti Devi', price: 650, region: 'Jaipur, Rajasthan', tag: 'Festival Special', category: 'Sweets', image: 'https://picsum.photos/seed/ghevar/600/800', desc: 'A disc-shaped honeycomb sweet made from all-purpose flour and soaked in sugar syrup.' },
    { id: 3, name: 'Malabar Parotta (Pack of 5)', creator: 'Mariam Beevi', price: 180, region: 'Kozhikode, Kerala', tag: 'Homemade', category: 'Savories', image: 'https://picsum.photos/seed/parotta/600/800' },
    { id: 4, name: 'Organic Lakadong Turmeric', creator: 'Kong Mary', price: 320, region: 'Jaintia Hills, Meghalaya', tag: 'Organic', category: 'Spices', image: 'https://picsum.photos/seed/turmeric/600/800' },
    { id: 5, name: 'Hand-Pounded Red Rice', creator: 'Suresh Gowda', price: 240, region: 'Coorg, Karnataka', tag: 'Organic', category: 'Savories', image: 'https://picsum.photos/seed/redrice/600/800' },
    { id: 6, name: 'Spicy Mango Pickle', creator: 'Amma\'s Kitchen', price: 150, region: 'Guntur, AP', tag: 'Homemade', category: 'Pickles', image: 'https://picsum.photos/seed/pickle/600/800' },
    { id: 7, name: 'Darjeeling First Flush Tea', creator: 'Tenzing Norgay', price: 850, region: 'Darjeeling, WB', tag: 'Specialty', category: 'Beverages', image: 'https://picsum.photos/seed/tea/600/800' },
    { id: 8, name: 'Kashmiri Saffron (1g)', creator: 'Bilal Ahmad', price: 450, region: 'Pampore, J&K', tag: 'Specialty', category: 'Spices', image: 'https://picsum.photos/seed/saffron/600/800' },
];

export const auctions = [
    { id: 1, name: 'Antique Dhokra Art Chariot', artisan: 'Suresh Murmu', origin: 'Bastar, Chhattisgarh', currentBid: 28500, timeLeft: '00:45:12', image: 'https://picsum.photos/seed/dhokra-1/600/800' },
    { id: 2, name: 'Hand-Woven Pashmina Shawl', artisan: 'Zahoor Ahmed', origin: 'Srinagar, Kashmir', currentBid: 42000, timeLeft: '02:15:30', image: 'https://picsum.photos/seed/pashmina-1/600/800' },
    { id: 3, name: 'Marble Inlay Jewelry Box', artisan: 'Irfan Khan', origin: 'Agra, Uttar Pradesh', currentBid: 12500, timeLeft: '01:10:05', image: 'https://picsum.photos/seed/marble-1/600/800' },
    { id: 4, name: 'Tanjore Gold Leaf Painting', artisan: 'R. Meenakshi', origin: 'Thanjavur, Tamil Nadu', currentBid: 55000, timeLeft: '05:20:45', image: 'https://picsum.photos/seed/tanjore-1/600/800' },
    { id: 5, name: 'Bidriware Silver Inlay Vase', artisan: 'Mohammed Abdul', origin: 'Bidar, Karnataka', currentBid: 18000, timeLeft: '00:15:20', image: 'https://picsum.photos/seed/bidri-1/600/800' },
    { id: 6, name: 'Pattachitra Scroll Painting', artisan: 'Bijay Maharana', origin: 'Raghurajpur, Odisha', currentBid: 9500, timeLeft: '03:40:10', image: 'https://picsum.photos/seed/pattachitra-1/600/800' },
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
        reviewsCount: '1.2k+',
        image: 'https://picsum.photos/seed/indian-face/600/600',
        bio: 'Growing up in the vibrant streets of Jaipur, I was always surrounded by the mesmerizing blue pottery that our city is famous for...',
    }
];

export const reviews = [
    { id: 1, user: 'Priya M.', rating: 5, comment: 'The blue pottery is exquisite. The colors are so vibrant and the finish is perfect.', date: '2 days ago' },
    { id: 2, user: 'Amit S.', rating: 4, comment: 'Beautiful craftsmanship. It arrived safely in very secure packaging.', date: '1 week ago' },
];
