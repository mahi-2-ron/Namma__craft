import express from 'express';
import cors from 'cors';
import db from './db.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Artisans API
app.get('/api/artisans', (req, res) => {
    const artisans = db.prepare('SELECT * FROM artisans').all();
    res.json(artisans);
});

app.get('/api/artisans/:id', (req, res) => {
    const artisan = db.prepare('SELECT * FROM artisans WHERE id = ?').get(req.params.id);
    if (artisan) res.json(artisan);
    else res.status(404).json({ error: 'Artisan not found' });
});

// Products API
app.get('/api/products', (req, res) => {
    const products = db.prepare('SELECT * FROM products').all();
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = db.prepare(`
    SELECT p.*, a.name as artisan_name 
    FROM products p 
    JOIN artisans a ON p.artisan_id = a.id 
    WHERE p.id = ?
  `).get(req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ error: 'Product not found' });
});

// Foods API
app.get('/api/foods', (req, res) => {
    const foods = db.prepare('SELECT * FROM foods').all();
    res.json(foods);
});

app.get('/api/foods/:id', (req, res) => {
    const food = db.prepare('SELECT * FROM foods WHERE id = ?').get(req.params.id);
    if (food) res.json(food);
    else res.status(404).json({ error: 'Food not found' });
});

// Auctions API
app.get('/api/auctions', (req, res) => {
    const auctions = db.prepare(`
    SELECT a.*, art.name as artisan_name 
    FROM auctions a 
    JOIN artisans art ON a.artisan_id = art.id
  `).all();
    res.json(auctions);
});

app.get('/api/auctions/:id', (req, res) => {
    const auction = db.prepare(`
    SELECT a.*, art.name as artisan_name 
    FROM auctions a 
    JOIN artisans art ON a.artisan_id = art.id 
    WHERE a.id = ?
  `).get(req.params.id);
    if (auction) {
        const bids = db.prepare(`
      SELECT b.*, u.name as user_name 
      FROM bids b 
      JOIN users u ON b.user_id = u.id 
      WHERE b.auction_id = ? 
      ORDER BY b.amount DESC
    `).all(req.params.id);
        res.json({ ...auction, bids });
    } else {
        res.status(404).json({ error: 'Auction not found' });
    }
});

// Users API
app.get('/api/users', (req, res) => {
    const users = db.prepare('SELECT * FROM users').all();
    res.json(users);
});

// Reviews API
app.get('/api/products/:id/reviews', (req, res) => {
    const reviews = db.prepare(`
    SELECT r.*, u.name as user_name, u.avatar 
    FROM reviews r 
    JOIN users u ON r.user_id = u.id 
    WHERE r.product_id = ?
  `).all(req.params.id);
    res.json(reviews);
});

// Orders API
app.get('/api/orders', (req, res) => {
    const orders = db.prepare(`
    SELECT o.*, u.name as user_name 
    FROM orders o 
    JOIN users u ON o.user_id = u.id
  `).all();
    res.json(orders);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
