
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/jeux', require('./routes/jeux'));
app.use('/genres', require('./routes/genres'));
app.use('/plateformes', require('./routes/plateformes'));
app.use('/editeurs', require('./routes/editeurs'));
app.use('/utilisateurs', require('./routes/utilisateurs'));
app.use('/avis', require('./routes/avis'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
