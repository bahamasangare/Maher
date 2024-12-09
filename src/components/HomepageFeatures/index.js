import React from 'react';

export default function HomepageFeatures() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: '3rem 1.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const imageColumnStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '2rem',
  };

  const imageStyle = {
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    width: '100%',
    maxWidth: '300px',
    objectFit: 'cover',
  };

  const textColumnStyle = {
    flex: '2',
    textAlign: 'justify',
    color: '#555',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
  };

  const conclusionStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#222',
  };

  return (
    <section style={{ backgroundColor: '#f9f9f9', padding: '3rem 1.5rem' }}>
      <div style={containerStyle}>
        {/* Image Section */}
        <div style={imageColumnStyle}>
          <img
            src={require('@site/static/img/maher_photo.jpg').default}
            alt="Photo de Maher Daaloul"
            style={imageStyle}
          />
        </div>
        {/* Text Section */}
        <div style={textColumnStyle}>
          <h1 style={titleStyle}>Maher Daaloul</h1>
          <p style={descriptionStyle}>
            Cette plateforme est dédiée aux travaux de Maher Daalooul. Sa passion était son
            travail, ses créations, ses innovations... c’est impossible de laisser toute cette
            connaissance sans que ça profite aux autres.
          </p>
          <p style={descriptionStyle}>
            Dans un monde où la passion et l'innovation se côtoient, Maher Daalooul émerge comme
            une figure emblématique de créativité et d'humanité. Sa vie est un témoignage de
            résilience et d'optimisme. Maher n'est pas seulement un professionnel talentueux ; il
            incarne également des valeurs profondes telles que l'humilité, la loyauté et l'amour
            inconditionnel pour sa famille.
          </p>
          <p style={descriptionStyle}>
            L’humilité, la générosité, la loyauté, le pardon et l’amour sont ses maîtres mots.
          </p>
          <p style={conclusionStyle}>
            <strong>Maher Daaloul, Mad Maher, merci pour chaque seconde que j’ai partagée avec toi !</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
