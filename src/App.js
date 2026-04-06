import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('fibre');
  const [selectedOperator, setSelectedOperator] = useState(null);

  const operators = {
    vini: {
      name: 'Vini',
      logo: 'https://www.vini.pf/themes/vini/images/logo.svg',
      color: '#dc001c',
      tagline: 'Opérateur historique - Réseau le plus étendu',
      description: "Filiale de l'OPT, couverture sur tous les archipels",
      coverage: 5, speed: 5, price: 3, support: 4,
    },
    ora: {
      name: 'Ora',
      logo: 'https://www.ora.pf/wp-content/uploads/svg/ora.svg',
      color: '#005528',
      tagline: "Pionnier de l'internet sans ligne fixe",
      description: 'Premier internet sans ligne téléphonique depuis 2011',
      coverage: 4, speed: 4, price: 5, support: 4,
    },
    vodafone: {
      name: 'Vodafone',
      logo: 'https://www.vodafone.pf/images/logo.png',
      color: '#F28705',
      tagline: "La puissance d'un réseau mondial",
      description: 'Entreprise 100% polynésienne avec expertise internationale',
      coverage: 3, speed: 4, price: 4, support: 5,
    },
  };

  const offers = {
    fibre: [
      // VINI FIBRE
      { operator: 'vini', name: 'Vinibox POP', download: '30', upload: '10', price: 6100, data: 'Illimité', features: ['ViniSPOT 1h', 'Appels illimités entre box', 'TV en option'] },
      { operator: 'vini', name: 'Vinibox POP + TV', download: '30', upload: '10', price: 8600, data: 'Illimité', features: ['ViniSPOT 1h', 'Appels illimités entre box', 'CANAL+ inclus'] },
      { operator: 'vini', name: 'Vinibox UP', download: '200', upload: '75', price: 9000, data: 'Illimité', features: ['ViniSPOT 1h', '2h appels internationaux', 'Appels illimités entre box'] },
      { operator: 'vini', name: 'Vinibox UP + TV', download: '200', upload: '75', price: 9900, data: 'Illimité', features: ['ViniSPOT 1h', '2h appels internationaux', 'CANAL+ inclus'] },
      { operator: 'vini', name: 'Vinibox JET', download: '300', upload: '100', price: 12900, data: 'Illimité', features: ['ViniSPOT 1h', '3h appels internationaux', 'Appels illimités entre box'] },
      { operator: 'vini', name: 'Vinibox JET + TV', download: '300', upload: '100', price: 13800, data: 'Illimité', features: ['ViniSPOT 1h', '3h appels internationaux', 'CANAL+ inclus'] },
      // ORA FIBRE
      { operator: 'ora', name: 'Ora Fibre Power', download: '50', upload: '10', price: 6990, data: 'Illimité', features: ['Sans ligne fixe', 'Modem Wi-Fi 6', 'Aide raccordement 50 000 F'] },
      { operator: 'ora', name: 'Ora Fibre Max', download: '200', upload: '100', price: 9990, data: 'Illimité', features: ['Sans ligne fixe', 'Modem Wi-Fi 6', 'Ultra rapide'] },
      // VODAFONE FIBRE
      { operator: 'vodafone', name: 'VodaFibre', download: '100', upload: '50', price: 9900, data: 'Illimité', features: ['Secours 4G inclus', 'Installation simplifiée'] },
    ],
    box4g: [
      // ORA BOX
      { operator: 'ora', name: 'Ora Box Classik', download: '30', upload: '10', price: 4995, data: '200 Go', features: ['Box 4G+ offerte', 'Illimité 00h-06h'] },
      { operator: 'ora', name: 'Ora Box Confort', download: '30', upload: '10', price: 6995, data: '400 Go', features: ['Box 4G+ offerte', 'Illimité 00h-06h'] },
      { operator: 'ora', name: 'Ora Box No Limit Confort', download: '50', upload: '10', price: 8995, data: 'Illimité', features: ['Box 4G+ offerte', '4G/5G'] },
      { operator: 'ora', name: 'Ora Box No Limit Intense', download: '200', upload: '100', price: 11995, data: 'Illimité', features: ['Box 4G+ offerte', '5G'] },
      // VINI BOX 4G/5G
      { operator: 'vini', name: 'Vinibox 4G 30 Go', download: '10', upload: '2', price: 1500, data: '30 Go', features: ['Sans engagement', 'Débit débridé en option'] },
      { operator: 'vini', name: 'Vinibox 4G 60 Go', download: '10', upload: '2', price: 3500, data: '60 Go', features: ['Sans engagement', 'Débit débridé en option'] },
      { operator: 'vini', name: 'Vinibox 4G 100 Go', download: '10', upload: '2', price: 4500, data: '100 Go', features: ['Sans engagement', 'Débit débridé en option'] },
      { operator: 'vini', name: 'Vinibox 4G/5G 200 Go', download: '20', upload: '10', price: 7900, data: '200 Go', features: ['5G', 'Débit débridé en option'] },
      { operator: 'vini', name: 'Vinibox 4G/5G Illimité Standard', download: '20', upload: '10', price: 8900, data: 'Illimité', features: ['Routeur 4G/5G offert', 'Engagement 24 mois'] },
      { operator: 'vini', name: 'Vinibox 4G/5G Illimité Options', download: '100', upload: '60', price: 11900, data: 'Illimité', features: ['Routeur 4G/5G offert', 'Débit débridé', 'Maintien du débit'] },
      // VODAFONE VODASURF
      { operator: 'vodafone', name: 'Vodasurf Master', download: '30', upload: '10', price: 4900, data: '200 Go', features: ['5G', 'Illimité 00h-06h'] },
      { operator: 'vodafone', name: 'Vodasurf Elite', download: '30', upload: '10', price: 6900, data: '300 Go', features: ['5G', 'Illimité 00h-06h'] },
      { operator: 'vodafone', name: 'Vodasurf Supreme', download: '30', upload: '10', price: 8900, data: 'Illimité', features: ['5G', 'Routeur offert'] },
      { operator: 'vodafone', name: 'Vodasurf Ultra', download: '200', upload: '100', price: 10900, data: 'Illimité', features: ['5G', 'Équivalent fibre', 'Routeur offert'] },
    ],
    mobile: [
      // VINI MOBILE
      { operator: 'vini', name: 'Vini Iti', download: '4G', upload: '-', price: 450, data: '100 Mo', features: ['1h appels', 'SMS illimités', '+10 Go bonus jeune'] },
      { operator: 'vini', name: 'Vini Nui 5 Go', download: '4G', upload: '-', price: 1200, data: '5 Go', features: ['2h appels', 'SMS illimités', '+10 Go bonus jeune'] },
      { operator: 'vini', name: 'Vini Nui 20 Go', download: '4G', upload: '-', price: 2700, data: '20 Go', features: ['Appels illimités', 'SMS illimités', '+10 Go bonus jeune'] },
      { operator: 'vini', name: 'Vini Reva 80 Go', download: '5G', upload: '-', price: 4900, data: '80 Go', features: ['Appels illimités', '6h international', 'eSIM offerte 24 mois'] },
      { operator: 'vini', name: 'Vini Reva 150 Go', download: '5G', upload: '-', price: 7900, data: '150 Go', features: ['Appels illimités', '12h international', 'eSIM offerte 24 mois'] },
      { operator: 'vini', name: 'Vini Reva 250 Go', download: '5G', upload: '-', price: 9900, data: '250 Go', features: ['Appels illimités', 'International illimité', 'eSIM offerte 24 mois'] },
      // ORA MOBILE
      { operator: 'ora', name: 'Ora Access', download: '4G', upload: '-', price: 995, data: '20 Go', features: ['2h appels locaux', 'SMS illimités', 'Sans engagement'] },
      { operator: 'ora', name: 'Ora Like 5G', download: '5G', upload: '-', price: 1995, data: '50 Go', features: ['Appels illimités', '2h international', 'SMS illimités'] },
      { operator: 'ora', name: 'Ora Enjoy 5G', download: '5G', upload: '-', price: 2995, data: '80 Go', features: ['Appels illimités', '10h international', 'SMS illimités'] },
      { operator: 'ora', name: 'Ora Smart 5G', download: '5G', upload: '-', price: 4995, data: '120 Go', features: ['Appels illimités', 'International illimité', '2 Go roaming'] },
      // VODAFONE MOBILE
      { operator: 'vodafone', name: 'Smile x2 Base', download: '4G', upload: '-', price: 500, data: '12 Go', features: ['2h appels', 'SMS illimités', 'Personnalisable'] },
      { operator: 'vodafone', name: 'Smile x2 25 Go', download: '4G', upload: '-', price: 2200, data: '25 Go', features: ['8h appels', 'SMS illimités', 'Personnalisable'] },
      { operator: 'vodafone', name: 'Prestige x2', download: '5G', upload: '-', price: 4900, data: '120 Go', features: ['Appels illimités', 'International illimité', 'SMS illimités'] },
    ],
  };

  const styles = {
    container: { minHeight: '100vh', background: 'linear-gradient(180deg, #0C4A6E 0%, #0369A1 50%, #0EA5E9 100%)', fontFamily: "'Poppins', sans-serif" },
    header: { padding: '2rem 1rem 5rem', textAlign: 'center', color: 'white', position: 'relative' },
    main: { backgroundColor: '#F8FAFC', padding: '1rem', paddingBottom: '3rem' },
    section: { maxWidth: '1200px', margin: '0 auto 3rem' },
    card: { padding: '1.5rem', borderRadius: '1rem', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.3s', marginBottom: '1rem' },
    button: { padding: '0.75rem 1.5rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', fontWeight: '600', marginRight: '0.5rem', marginBottom: '0.5rem' },
    offerCard: { backgroundColor: 'white', borderRadius: '0.75rem', padding: '1.25rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderLeft: '4px solid' },
    footer: { backgroundColor: '#0F172A', color: 'white', padding: '2rem', textAlign: 'center' }
  };

  const StarRating = ({ rating, color }) => (
    <span>{[1,2,3,4,5].map(i => <span key={i} style={{ color: i <= rating ? color : '#E5E7EB' }}>★</span>)}</span>
  );

  const filteredOffers = selectedOperator ? offers[activeTab].filter(o => o.operator === selectedOperator) : offers[activeTab];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '3rem' }}>🌺</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', margin: 0 }}>Comparateur FAI</h1>
          <span style={{ fontSize: '3rem' }}>🌴</span>
        </div>
        <p style={{ fontSize: '1.25rem', color: '#BAE6FD' }}>Polynésie Française - Vini • Ora • Vodafone</p>
        <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }} viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1350,90 1440,60 L1440,120 L0,120 Z" fill="#F8FAFC" />
        </svg>
      </header>

      <main style={styles.main}>
        {/* Opérateurs */}
        <section style={styles.section}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>📊 Comparez les opérateurs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {Object.entries(operators).map(([id, op]) => (
              <div key={id} onClick={() => setSelectedOperator(selectedOperator === id ? null : id)}
                style={{ ...styles.card, border: selectedOperator === id ? `3px solid ${op.color}` : '1px solid #E5E7EB', transform: selectedOperator === id ? 'scale(1.02)' : 'scale(1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <img src={op.logo} alt={op.name} style={{ height: '40px', maxWidth: '100px', objectFit: 'contain' }} />
                  <div>
                    <h3 style={{ margin: 0, color: op.color, fontSize: '1.5rem' }}>{op.name}</h3>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>{op.tagline}</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#444', marginBottom: '1rem' }}>{op.description}</p>
                {['Couverture', 'Vitesse', 'Prix', 'Support'].map((label, i) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>{label}</span>
                    <StarRating rating={[op.coverage, op.speed, op.price, op.support][i]} color={op.color} />
                  </div>
                ))}
                <a href={`https://www.${id}.pf`} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                  style={{ display: 'block', textAlign: 'center', marginTop: '1rem', padding: '0.5rem', borderRadius: '0.5rem', backgroundColor: op.color, color: 'white', textDecoration: 'none', fontWeight: '600' }}>
                  Visiter {op.name} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Offres */}
        <section style={styles.section}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>💰 Toutes les offres</h2>
          <div style={{ marginBottom: '1.5rem' }}>
            {[{ id: 'fibre', label: '🌐 Fibre' }, { id: 'box4g', label: '📡 Box 4G/5G' }, { id: 'mobile', label: '📱 Mobile' }].map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                style={{ ...styles.button, backgroundColor: activeTab === tab.id ? '#0891B2' : 'white', color: activeTab === tab.id ? 'white' : '#333' }}>
                {tab.label}
              </button>
            ))}
            {selectedOperator && <button onClick={() => setSelectedOperator(null)} style={{ ...styles.button, backgroundColor: '#EEE' }}>✕ Voir tous</button>}
          </div>
          
          {/* Compteur */}
          <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            {filteredOffers.length} offre{filteredOffers.length > 1 ? 's' : ''} {selectedOperator ? `chez ${operators[selectedOperator].name}` : 'disponibles'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {filteredOffers.sort((a, b) => a.price - b.price).map((offer, i) => {
              const op = operators[offer.operator];
              const isMobile = activeTab === 'mobile';
              const hasTV = offer.name.includes('+ TV') || offer.name.includes('CANAL');
              const is5G = offer.name.includes('5G') || offer.download === '5G';
              return (
                <div key={i} style={{ ...styles.offerCard, borderLeftColor: op.color, position: 'relative' }}>
                  {hasTV && <span style={{ position: 'absolute', top: '-8px', right: '10px', backgroundColor: '#9333EA', color: 'white', fontSize: '0.65rem', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>📺 CANAL+</span>}
                  {is5G && !hasTV && <span style={{ position: 'absolute', top: '-8px', right: '10px', backgroundColor: '#0891B2', color: 'white', fontSize: '0.65rem', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>5G</span>}
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <img src={op.logo} alt={op.name} style={{ height: '24px', maxWidth: '60px', objectFit: 'contain' }} />
                      <div>
                        <strong style={{ fontSize: '0.95rem' }}>{offer.name}</strong>
                        <span style={{ display: 'block', fontSize: '0.7rem', backgroundColor: op.color, color: 'white', padding: '0.1rem 0.4rem', borderRadius: '9999px', width: 'fit-content', marginTop: '0.25rem' }}>{op.name}</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.4rem', fontWeight: '900', color: op.color }}>{offer.price.toLocaleString()} F</div>
                      <div style={{ fontSize: '0.7rem', color: '#999' }}>/mois</div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr 1fr', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ backgroundColor: '#F3F4F6', padding: '0.4rem', borderRadius: '0.4rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.65rem', color: '#888' }}>{isMobile ? 'Réseau' : '↓ Download'}</div>
                      <div style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>{offer.download}{!isMobile && ' Mb/s'}</div>
                    </div>
                    {!isMobile && (
                      <div style={{ backgroundColor: '#F3F4F6', padding: '0.4rem', borderRadius: '0.4rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '0.65rem', color: '#888' }}>↑ Upload</div>
                        <div style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>{offer.upload} Mb/s</div>
                      </div>
                    )}
                    <div style={{ backgroundColor: '#F3F4F6', padding: '0.4rem', borderRadius: '0.4rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.65rem', color: '#888' }}>Data</div>
                      <div style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>{offer.data}</div>
                    </div>
                  </div>

                  {offer.features.map((f, j) => <div key={j} style={{ fontSize: '0.75rem', color: '#666' }}>✓ {f}</div>)}
                </div>
              );
            })}
          </div>
        </section>

        {/* Sites officiels */}
        <section style={styles.section}>
          <div style={{ background: 'linear-gradient(to right, #0891B2, #2563EB)', borderRadius: '1rem', padding: '1.5rem', color: 'white', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1rem' }}>🔗 Sites officiels</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              {Object.entries(operators).map(([id, op]) => (
                <a key={id} href={`https://www.${id}.pf`} target="_blank" rel="noopener noreferrer"
                  style={{ backgroundColor: 'white', color: '#333', padding: '1rem 2rem', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <img src={op.logo} alt={op.name} style={{ height: '24px' }} /> {op.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p style={{ fontSize: '1.5rem' }}>🌺 Mauruuru roa ! 🌴</p>
        <p style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Comparateur FAI Polynésie - Avril 2026</p>
        <p style={{ color: '#64748B', fontSize: '0.75rem', marginTop: '0.5rem' }}>Données mises à jour le 05/04/2026 • Sources : vini.pf, ora.pf, vodafone.pf</p>
      </footer>
    </div>
  );
};

export default App;
