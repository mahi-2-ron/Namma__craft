import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Database(join(__dirname, 'nammacraft.db'));

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    role TEXT DEFAULT 'user',
    avatar TEXT
  );

  CREATE TABLE IF NOT EXISTS artisans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT,
    location TEXT,
    experience TEXT,
    specialty TEXT,
    rating REAL,
    reviews_count TEXT,
    image TEXT,
    bio TEXT
  );

  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    artisan_id INTEGER,
    price INTEGER,
    region TEXT,
    image TEXT,
    rarity TEXT,
    stock INTEGER,
    is_popular_auction BOOLEAN,
    category TEXT,
    description TEXT,
    cultural_story TEXT,
    FOREIGN KEY (artisan_id) REFERENCES artisans (id)
  );

  CREATE TABLE IF NOT EXISTS foods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    creator TEXT,
    price INTEGER,
    region TEXT,
    tag TEXT,
    category TEXT,
    image TEXT,
    description TEXT
  );

  CREATE TABLE IF NOT EXISTS auctions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    artisan_id INTEGER,
    origin TEXT,
    current_bid INTEGER,
    start_price INTEGER,
    time_left TEXT,
    image TEXT,
    status TEXT DEFAULT 'Active',
    FOREIGN KEY (artisan_id) REFERENCES artisans (id)
  );

  CREATE TABLE IF NOT EXISTS bids (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    auction_id INTEGER,
    user_id INTEGER,
    amount INTEGER,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (auction_id) REFERENCES auctions (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
  );

  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    total_amount INTEGER,
    status TEXT DEFAULT 'Pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
  );

  CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER,
    user_id INTEGER,
    rating INTEGER,
    comment TEXT,
    date TEXT,
    FOREIGN KEY (product_id) REFERENCES products (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
  );
`);

// Seed Data
const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get();

if (userCount.count === 0) {
    // Users
    const insertUser = db.prepare('INSERT INTO users (name, email, role, avatar) VALUES (?, ?, ?, ?)');
    insertUser.run('Admin User', 'admin@nammacraft.com', 'admin', 'https://picsum.photos/seed/admin/100/100');
    insertUser.run('Rahul M.', 'rahul@gmail.com', 'user', 'https://picsum.photos/seed/user1/100/100');
    insertUser.run('Sita R.', 'sita@gmail.com', 'user', 'https://picsum.photos/seed/user2/100/100');

    // Artisans
    const insertArtisan = db.prepare(`
    INSERT INTO artisans (name, role, location, experience, specialty, rating, reviews_count, image, bio)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

    insertArtisan.run('Ananya Sharma', 'Master Artisan', 'Jaipur, Rajasthan', '15+ Years', 'Blue Pottery', 4.9, '1.2k+', 'https://picsum.photos/seed/ann/600/600', 'Growing up in Jaipur...');
    insertArtisan.run('Suresh Murmu', 'Tribal Artist', 'Bastar, Chhattisgarh', '20+ Years', 'Dhokra Art', 4.8, '850', 'https://picsum.photos/seed/sur/600/600', 'Specializing in ancient bell metal craft...');
    insertArtisan.run('Zahoor Ahmed', 'Master Weaver', 'Srinagar, Kashmir', '25+ Years', 'Pashmina', 4.9, '2.1k+', 'https://picsum.photos/seed/zah/600/600', 'Weaving legacy for generations...');

    // Products
    const insertProduct = db.prepare(`
    INSERT INTO products (name, artisan_id, price, region, image, rarity, stock, is_popular_auction, category, description, cultural_story)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

    insertProduct.run('Hand-Painted Blue Pottery Vase', 1, 2450, 'Jaipur, Rajasthan', 'https://picsum.photos/seed/jaipur-pottery/600/800', 'Rare', 5, 1, 'Pottery', 'Exquisite vase...', 'Traditional Jaipur art...');
    insertProduct.run('Hand-Woven Pashmina Shawl', 3, 42000, 'Srinagar, Kashmir', 'https://picsum.photos/seed/pashmina/600/800', 'Limited Edition', 2, 0, 'Textiles', 'Pure Pashmina...', 'Kashmiri heritage...');

    // Foods
    const insertFood = db.prepare(`
    INSERT INTO foods (name, creator, price, region, tag, category, image, description)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

    insertFood.run('Authentic Mysore Pak', 'Lakshmi Devi', 450, 'Mysore, Karnataka', 'Homemade', 'Sweets', 'https://picsum.photos/seed/mysorepak/600/800', 'Rich buttery sweet...');
    insertFood.run('Rajasthani Ghevar', 'Shanti Devi', 650, 'Jaipur, Rajasthan', 'Festival Special', 'Sweets', 'https://picsum.photos/seed/ghevar/600/800', 'Honeycomb sweet...');

    // Auctions
    const insertAuction = db.prepare(`
    INSERT INTO auctions (name, artisan_id, origin, current_bid, start_price, time_left, image)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

    insertAuction.run('Antique Dhokra Art Chariot', 2, 'Bastar, Chhattisgarh', 28500, 15000, '00:45:12', 'https://picsum.photos/seed/dhokra-1/600/800');
    insertAuction.run('Royal Inlay Jewelry Box', 1, 'Agra, UP', 12500, 8000, '02:15:30', 'https://picsum.photos/seed/inlay/600/800');

    // Bids
    const insertBid = db.prepare('INSERT INTO bids (auction_id, user_id, amount) VALUES (?, ?, ?)');
    insertBid.run(1, 2, 28500);
    insertBid.run(1, 3, 27000);

    // Reviews
    const insertReview = db.prepare('INSERT INTO reviews (product_id, user_id, rating, comment, date) VALUES (?, ?, ?, ?, ?)');
    insertReview.run(1, 2, 5, 'Beautiful craft!', '2 days ago');
    insertReview.run(1, 3, 4, 'Very well packed.', '1 week ago');
}

export default db;
