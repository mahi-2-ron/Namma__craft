import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Database(join(__dirname, 'nammacraft.db'));

// Initialize Database
db.exec(`
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
    artisan TEXT,
    origin TEXT,
    current_bid INTEGER,
    time_left TEXT,
    image TEXT
  );
`);

// Seed Data (if empty)
const productCount = db.prepare('SELECT COUNT(*) as count FROM products').get();

if (productCount.count === 0) {
    const insertArtisan = db.prepare(`
    INSERT INTO artisans (name, role, location, experience, specialty, rating, reviews_count, image, bio)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

    insertArtisan.run(
        'Ananya Sharma',
        'Master Artisan',
        'Jaipur, Rajasthan',
        '15+ Years',
        'Blue Pottery',
        4.9,
        '1.2k+',
        'https://picsum.photos/seed/indian-face/600/600',
        'Growing up in the vibrant streets of Jaipur, I was always surrounded by the mesmerizing blue pottery...'
    );

    const insertProduct = db.prepare(`
    INSERT INTO products (name, artisan_id, price, region, image, rarity, stock, is_popular_auction, category, description, cultural_story)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

    insertProduct.run(
        'Hand-Painted Blue Pottery Vase',
        1,
        2450,
        'Jaipur, Rajasthan',
        'https://picsum.photos/seed/jaipur-pottery/600/800',
        'Rare',
        5,
        1,
        'Pottery',
        'This exquisite blue pottery vase is a masterpiece of Jaipur craftsmanship.',
        'Blue Pottery is a traditional craft of Jaipur, Rajasthan...'
    );

    const insertFood = db.prepare(`
    INSERT INTO foods (name, creator, price, region, tag, category, image, description)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

    insertFood.run(
        'Authentic Mysore Pak',
        'Lakshmi Devi',
        450,
        'Mysore, Karnataka',
        'Homemade',
        'Sweets',
        'https://picsum.photos/seed/mysorepak/600/800',
        'A rich, buttery sweet made from gram flour, ghee, and sugar.'
    );

    const insertAuction = db.prepare(`
    INSERT INTO auctions (name, artisan, origin, current_bid, time_left, image)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

    insertAuction.run(
        'Antique Dhokra Art Chariot',
        'Suresh Murmu',
        'Bastar, Chhattisgarh',
        28500,
        '00:45:12',
        'https://picsum.photos/seed/dhokra-1/600/800'
    );
}

export default db;
