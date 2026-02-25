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
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
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
    const auctions = db.prepare('SELECT * FROM auctions').all();
    res.json(auctions);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
