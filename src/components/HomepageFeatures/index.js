import React from 'react';

export default function HomepageFeatures() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'stretch', // Étire les colonnes pour qu'elles aient la même hauteur
    backgroundColor: '#f9f9f9',
    padding: '3rem 1.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  };

  const imageColumnStyle = {
    flex: '1', // Ratio égal pour image et texte
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#fff', // Ajout d'une couleur de fond pour démarquer l'image
    borderRadius: '10px',
  };

  const imageStyle = {
    borderRadius: '10px',
    width: '100%',
    height: '100%', // S'assure que l'image prend toute la hauteur disponible
    objectFit: 'cover',
  };

  const textColumnStyle = {
    flex: '1', // Ratio égal pour texte et image
    textAlign: 'justify',
    color: '#555',
    lineHeight: '1.8',
    padding: '1rem',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1.5rem',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
  };

  const highlightStyle = {
    color: '#0073e6',
    fontWeight: 'bold',
  };

  const conclusionStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#222',
    marginTop: '2rem',
    textAlign: 'center',
  };

  return (
    <section style={{ backgroundColor: '#f9f9f9', padding: '3rem 1.5rem' }}>
      <div style={containerStyle}>
        {/* Section Image */}
        <div style={imageColumnStyle}>
          <img
            src={require('@site/static/img/maher_photo.jpg').default}
            alt="Photo de Maher Daaloul"
            style={imageStyle}
          />

<img
            src={require('@site/static/img/maher_photo.jpg').default}
            alt="Photo de Maher Daaloul"
            style={imageStyle}
          />
        </div>
        {/* Section Texte */}
        <div style={textColumnStyle}>
          <h1 style={titleStyle}>Maher Daaloul</h1>
          <p style={descriptionStyle}>
            Cette plateforme est une <span style={highlightStyle}>dédiée</span> aux travaux, à la
            créativité et à la passion inébranlable de Maher Daaloul. À travers ses innovations
            et ses réalisations, Maher a laissé une empreinte indélébile dans le cœur de tous
            ceux qui l'ont connu.
          </p>
          <p style={descriptionStyle}>
            Dans un monde où la <span style={highlightStyle}>résilience</span> et l'
            <span style={highlightStyle}>innovation</span> se rencontrent, Maher se démarque
            comme un exemple rare d'excellence. Non seulement un professionnel accompli, mais
            aussi un homme guidé par des valeurs profondes comme la <span style={highlightStyle}>
              loyauté</span>, l'<span style={highlightStyle}>humilité</span>, et l'
            <span style={highlightStyle}>amour inconditionnel</span>.
          </p>
          <p style={descriptionStyle}>
            Il avait un profond respect pour son père, une admiration sans bornes pour sa mère,
            et un amour incommensurable pour sa famille. Sa vie personnelle, empreinte de
            simplicité et d'authenticité, était le reflet d'une âme belle et généreuse.
          </p>
          <p style={descriptionStyle}>
            Son parcours professionnel, riche et captivant, est digne des plus grands récits.
            Tel un héros de films d'action qu'il chérissait tant, Maher incarnait courage et
            détermination dans tout ce qu'il entreprenait.
          </p>
          <p style={conclusionStyle}>
            <strong>
              Maher Daaloul, merci pour chaque instant partagé. Ton héritage continuera
              d'inspirer pour les générations à venir.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
