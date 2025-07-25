
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  const { rows } = await db.query(\`
    SELECT jeux.*, editeurs.nom AS editeur
    FROM jeux
    LEFT JOIN editeurs ON jeux.editeur_id = editeurs.id
  \`);
  res.json(rows);
});

module.exports = router;
