import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import process from 'process';
import data from './data.js'; 

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 


app.get('/', (req, res) => {
  res.send(data);
});

// Ruta para obtener los posts
app.get('/posts', (req, res) => {
  res.json(data); 
});
app.get("/posts/:id", (req, res) => {
    const { id } = req.params; 
    const post = data.find((p) => p.id === parseInt(id)); 
  
    if (!post) {
      return res.status(404).json({ message: "Post no encontrado" }); 
    }
  
    res.json(post); 
  });

// Puerto
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
