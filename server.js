const express = require('express');
const { swaggerUi, openapiSpecification } = require('./openapi');

const app = express();
const PORT = 3000;

app.use(express.json());

// Intégration de la documentation Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// Route de test
app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', message: 'Bienvenue sur l\'API CS 121 !' });
});

app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
  console.log(`La doc Swagger est disponible sur http://localhost:${PORT}/docs`);
});