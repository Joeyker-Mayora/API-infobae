import express from 'express';
import cors from 'cors';
import data from './data.js';


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

// Ruta para obtener un post por ID
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = data.find((p) => p.id === parseInt(id));

  if (!post) {
    return res.status(404).json({ message: "Post no encontrado" });
  }

  res.json(post);
  
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



