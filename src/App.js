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
      pros: ['Meilleure couverture', '5G disponible', 'eSIM', 'Boutiques partout'],
      cons: ['Tarifs plus élevés', 'Service client parfois lent'],
    },
    ora: {
      name: 'Ora',
      logo: 'https://www.ora.pf/wp-content/uploads/svg/ora.svg',
      color: '#005528',
      tagline: "Pionnier de l'internet sans ligne fixe",
      description: 'Premier internet sans ligne téléphonique depuis 2011',
      coverage: 4, speed: 4, price: 5, support: 4,
      pros: ['Meilleurs prix', 'Pas de ligne fixe', 'Box 4G+ offerte', 'Fibre 5 990 F'],
      cons: ['Couverture limitée hors Tahiti', 'Réseau mobile moins dense'],
    },
    vodafone: {
      name: 'Vodafone',
      logo: 'https://www.vodafone.pf/images/logo.png',
      color: '#E60000',
      tagline: "La puissance d'un réseau mondial",
      description: 'Entreprise 100% polynésienne avec expertise internationale',
      coverage: 3, speed: 4, price: 4, support: 5,
      pros: ['Report des crédits', 'Appels internationaux', '5G', 'Service client réactif'],
      cons: ['Couverture réduite dans les îles', 'Moins de points de vente'],
    },
  };

  const offers = {
    fibre: [
      { operator: 'vini', name: 'Vinibox POP', download: '100', upload: '50', price: 6100, data: 'Illimité', features: ['Appels fixes illimités', 'TV en option'] },
      { operator: 'vini', name: 'Vinibox UP', download: '300', upload: '150', price: 9000, data: 'Illimité', features: ['Appels internationaux', 'ViniSPOT'] },
      { operator: 'ora', name: 'Ora Fibre Power', download: '50', upload: '10', price: 6990, data: 'Illimité', features: ['Sans ligne fixe', 'Modem Wi-Fi 6'] },
      { operator: 'ora', name: 'Ora Fibre Max', download: '200', upload: '100', price: 9990, data: 'Illimité', features: ['Sans ligne fixe', 'Ultra rapide'] },
      { operator: 'vodafone', name: 'VodaFibre', download: '100', upload: '50', price: 9900, data: 'Illimité', features: ['Secours 4G inclus'] },
    ],
    box4g: [
      { operator: 'ora', name: 'Ora Box Classik', download: '30', upload: '10', price: 4995, data: '200 Go', features: ['Box 4G+ offerte'] },
      { operator: 'ora', name: 'Ora Box Confort', download: '30', upload: '10', price: 6995, data: '400 Go', features: ['Box 4G+ offerte'] },
      { operator: 'ora', name: 'Ora Box No Limit', download: '50', upload: '10', price: 8995, data: 'Illimité', features: ['5G ready'] },
      { operator: 'vodafone', name: 'Vodasurf', download: '30', upload: '10', price: 4900, data: '100 Go', features: ['Sans ligne fixe'] },
      { operator: 'vodafone', name: 'Vodasurf Supreme', download: '200', upload: '100', price: 8900, data: 'Illimité', features: ['5G', 'Routeur offert'] },
      { operator: 'vini', name: 'Vinibox 4G', download: '50', upload: '20', price: 5500, data: '100 Go', features: ['Couverture étendue'] },
    ],
    mobile: [
      { operator: 'vini', name: 'Vini Iti', download: '4G', upload: '-', price: 450, data: '1 Go', features: ['SMS illimités'] },
      { operator: 'vini', name: 'Vini Nui 5 Go', download: '4G/5G', upload: '-', price: 1200, data: '5 Go', features: ['Appels fixes illimités'] },
      { operator: 'vini', name: 'Vini Nui 20 Go', download: '5G', upload: '-', price: 2700, data: '20 Go', features: ['Appels illimités'] },
      { operator: 'ora', name: 'Ora Access', download: '4G', upload: '-', price: 995, data: '20 Go', features: ['Sans engagement'] },
      { operator: 'ora', name: 'Ora Enjoy 5G', download: '5G', upload: '-', price: 2995, data: '80 Go', features: ['Appels illimités'] },
      { operator: 'vodafone', name: 'Smile', download: '4G', upload: '-', price: 1500, data: '10 Go', features: ['Report crédits'] },
      { operator: 'vodafone', name: 'Prestige', download: '5G', upload: '-', price: 4900, data: '120 Go', features: ['Appels internationaux 28 pays'] },
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

        <section style={styles.section}>
          <div style={{ marginBottom: '1.5rem' }}>
            {[{ id: 'fibre', label: '🌐 Fibre' }, { id: 'box4g', label: '📡 Box 4G/5G' }, { id: 'mobile', label: '📱 Mobile' }].map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                style={{ ...styles.button, backgroundColor: activeTab === tab.id ? '#0891B2' : 'white', color: activeTab === tab.id ? 'white' : '#333' }}>
                {tab.label}
              </button>
            ))}
            {selectedOperator && <button onClick={() => setSelectedOperator(null)} style={{ ...styles.button, backgroundColor: '#EEE' }}>✕ Voir tous</button>}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {filteredOffers.sort((a, b) => a.price - b.price).map((offer, i) => {
              const op = operators[offer.operator];
              const isMobile = activeTab === 'mobile';
              return (
                <div key={i} style={{ ...styles.offerCard, borderLeftColor: op.color }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <img src={op.logo} alt={op.name} style={{ height: '24px', maxWidth: '60px', objectFit: 'contain' }} />
                      <div>
                        <strong>{offer.name}</strong>
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

        <section style={styles.section}>
          <div style={{ background: 'linear-gradient(135deg, #581C87, #312E81)', borderRadius: '1rem', padding: '1.5rem', color: 'white' }}>
            <h2 style={{ marginBottom: '1rem' }}>🎮 Latence Gaming (Ping)</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #6B21A8' }}>
                  <th style={{ textAlign: 'left', padding: '0.5rem' }}>Jeu</th>
                  <th style={{ textAlign: 'center', padding: '0.5rem' }}><img src={operators.vini.logo} alt="Vini" style={{ height: '20px' }} /></th>
                  <th style={{ textAlign: 'center', padding: '0.5rem' }}><img src={operators.ora.logo} alt="Ora" style={{ height: '20px' }} /></th>
                  <th style={{ textAlign: 'center', padding: '0.5rem' }}><img src={operators.vodafone.logo} alt="Vodafone" style={{ height: '20px' }} /></th>
                </tr>
              </thead>
              <tbody>
                {[{ game: 'Fortnite', v: 108, o: 125, vf: 130 }, { game: 'Marvel Rivals', v: 126, o: 140, vf: 145 }, { game: 'Call of Duty', v: 115, o: 135, vf: 140 }].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #6B21A850' }}>
                    <td style={{ padding: '0.5rem' }}>{row.game}</td>
                    <td style={{ textAlign: 'center', padding: '0.5rem' }}><span style={{ backgroundColor: row.v <= Math.min(row.o, row.vf) ? '#22C55E' : '#6B21A8', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>{row.v} ms</span></td>
                    <td style={{ textAlign: 'center', padding: '0.5rem' }}><span style={{ backgroundColor: '#6B21A8', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>{row.o} ms</span></td>
                    <td style={{ textAlign: 'center', padding: '0.5rem' }}><span style={{ backgroundColor: '#6B21A8', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>{row.vf} ms</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: '0.75rem', color: '#C4B5FD', marginTop: '1rem', textAlign: 'center' }}>💡 Données Vini Gaming Ping - Paea</p>
          </div>
        </section>

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
      </footer>
    </div>
  );
};

export default App;
