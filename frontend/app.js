
fetch('http://localhost:3000/jeux')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('jeux-container');
    data.forEach(jeu => {
      const div = document.createElement('div');
      div.className = 'jeu';
      div.innerHTML = `
        <h3>${jeu.titre}</h3>
        <p><strong>Éditeur:</strong> ${jeu.editeur}</p>
        <p>${jeu.description}</p>
      `;
      container.appendChild(div);
    });
  });
