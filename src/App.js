import React, { useState } from 'react';

const ComparateurFAI = () => {
  const [activeTab, setActiveTab] = useState('fibre');
  const [selectedOperator, setSelectedOperator] = useState(null);

  const operators = {
    vini: {
      name: 'Vini',
      logo: '🔵',
      color: '#dc001c',
      tagline: 'Opérateur historique - Réseau le plus étendu',
      description: "Filiale de l'OPT, couverture sur tous les archipels",
      coverage: 5,
      speed: 5,
      price: 3,
      support: 4,
      pros: ['Meilleure couverture géographique', '5G disponible', 'eSIM', 'Boutiques partout'],
      cons: ['Tarifs plus élevés', 'Service client parfois lent'],
    },
    ora: {
      name: 'Ora',
      logo: '🟠',
      color: '#005528',
      tagline: "Pionnier de l'internet sans ligne fixe",
      description: 'Premier à proposer internet sans ligne téléphonique depuis 2011',
      coverage: 4,
      speed: 4,
      price: 5,
      support: 4,
      pros: ['Meilleurs prix', 'Pas de ligne fixe obligatoire', 'Box 4G+ offerte', 'Fibre à 5 990 F'],
      cons: ['Couverture limitée hors Tahiti/Moorea', 'Réseau mobile moins dense'],
    },
    vodafone: {
      name: 'Vodafone',
      logo: '🔴',
      color: '#E60000',
      tagline: "La puissance d'un réseau mondial",
      description: 'Entreprise 100% polynésienne avec expertise internationale',
      coverage: 3,
      speed: 4,
      price: 4,
      support: 5,
      pros: ['Report des crédits non utilisés', 'Appels internationaux inclus', '5G', 'Service client réactif'],
      cons: ['Couverture réduite dans les îles', 'Moins de points de vente'],
    },
  };

  const offers = {
    fibre: [
      { operator: 'vini', name: 'Vinibox POP', speed: '100 Mb/s', price: 6100, data: 'Illimité', features: ['Appels fixes illimités', 'TV en option'] },
      { operator: 'vini', name: 'Vinibox UP', speed: '300 Mb/s', price: 9000, data: 'Illimité', features: ['Appels fixes illimités', 'Appels internationaux', 'ViniSPOT'] },
      { operator: 'ora', name: 'Ora Fibre', speed: '50 Mb/s', price: 5990, data: 'Illimité', features: ['Sans ligne fixe', 'Modem Wi-Fi 6', 'Aide raccordement 50 000 F'] },
      { operator: 'ora', name: 'Ora Fibre Power', speed: '50/10 Mb/s', price: 6990, data: 'Illimité', features: ['Upload boosté', 'Offre promo 2026'] },
      { operator: 'vodafone', name: 'VodaFibre', speed: '100 Mb/s', price: 9900, data: 'Illimité', features: ['Secours 4G inclus', 'Installation simplifiée'] },
    ],
    box4g: [
      { operator: 'ora', name: 'Ora Box Confort', speed: '50 Mb/s', price: 4995, data: '150 Go', features: ['Box 4G+ offerte', 'Sans ligne fixe'] },
      { operator: 'ora', name: 'Ora Box Premium', speed: '100 Mb/s', price: 7995, data: '250 Go', features: ['5G ready', 'Sans ligne fixe'] },
      { operator: 'vodafone', name: 'Vodasurf', speed: '8 Mb/s', price: 4900, data: '100 Go', features: ['Sans ligne fixe', '4.5G'] },
      { operator: 'vodafone', name: 'Vodasurf Supreme', speed: '200 Mb/s', price: 8900, data: 'Illimité', features: ['5G', 'Routeur offert (24 mois)'] },
      { operator: 'vini', name: 'Vinibox 4G', speed: '50 Mb/s', price: 5500, data: '100 Go', features: ['Couverture étendue', 'Backup 4G'] },
    ],
    mobile: [
      { operator: 'vini', name: 'Vini Iti', speed: '4G', price: 450, data: '1 Go', features: ['SMS illimités', 'Bonus jeune +10 Go'] },
      { operator: 'vini', name: 'Vini Nui 5 Go', speed: '4G/5G', price: 1200, data: '5 Go', features: ['Appels fixes illimités', 'SMS illimités'] },
      { operator: 'vini', name: 'Vini Nui 20 Go', speed: '5G', price: 2700, data: '20 Go', features: ['Appels illimités', 'SMS illimités'] },
      { operator: 'ora', name: 'Ora Mobile', speed: '5G', price: 2500, data: '30 Go', features: ['Appels illimités', 'eSIM disponible'] },
      { operator: 'vodafone', name: 'Vodafone Prestige', speed: '5G', price: 4900, data: '120 Go', features: ['Appels internationaux 28 pays', 'Report crédits'] },
      { operator: 'vodafone', name: 'Vodafone Smile', speed: '4G', price: 1500, data: '10 Go', features: ['Appels locaux', 'Report crédits'] },
    ],
  };

  const latencyData = [
    { game: 'Marvel Rivals', vini: 126, ora: 140, vodafone: 145 },
    { game: 'Fortnite', vini: 108, ora: 125, vodafone: 130 },
    { game: 'Arc Raiders', vini: 155, ora: 165, vodafone: 170 },
    { game: 'Call of Duty', vini: 115, ora: 135, vodafone: 140 },
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0C4A6E 0%, #0369A1 50%, #0EA5E9 100%)',
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
    },
    header: {
      position: 'relative',
      paddingTop: '2rem',
      paddingBottom: '5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      textAlign: 'center',
      color: 'white',
      overflow: 'hidden',
    },
    headerPattern: {
      position: 'absolute',
      inset: 0,
      opacity: 0.1,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='white' fill-opacity='0.1'/%3E%3C/svg%3E")`,
    },
    main: {
      backgroundColor: '#F8FAFC',
      padding: '1rem',
      paddingBottom: '3rem',
    },
    section: {
      maxWidth: '1200px',
      margin: '0 auto',
      marginBottom: '3rem',
    },
    operatorCard: {
      padding: '1.5rem',
      borderRadius: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    offerCard: {
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      padding: '1.25rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      borderLeftWidth: '4px',
      borderLeftStyle: 'solid',
    },
    tabButton: {
      padding: '0.75rem 1.5rem',
      borderRadius: '0.75rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
    },
    tabButtonActive: {
      backgroundColor: '#0891B2',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
    tabButtonInactive: {
      backgroundColor: 'white',
      color: '#374151',
    },
    gamingSection: {
      background: 'linear-gradient(135deg, #581C87, #312E81)',
      borderRadius: '1rem',
      padding: '1.5rem',
      color: 'white',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    },
    footer: {
      backgroundColor: '#0F172A',
      color: 'white',
      padding: '2rem 1rem',
      textAlign: 'center',
    },
  };

  const StarRating = ({ rating, color }) => (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ color: star <= rating ? color : '#E5E7EB', fontSize: '1.1rem' }}
        >
          ★
        </span>
      ))}
    </div>
  );

  const OperatorCard = ({ id, operator, isSelected, onClick }) => (
    <div
      onClick={onClick}
      style={{
        ...styles.operatorCard,
        background: isSelected
          ? `linear-gradient(135deg, ${operator.color}15, ${operator.color}30)`
          : 'white',
        border: isSelected ? `3px solid ${operator.color}` : '1px solid #E5E7EB',
        transform: isSelected ? 'scale(1.02)' : 'scale(1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '3rem' }}>{operator.logo}</span>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: operator.color, margin: 0 }}>
            {operator.name}
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#6B7280', margin: 0 }}>{operator.tagline}</p>
        </div>
      </div>

      <p style={{ color: '#374151', marginBottom: '1rem', fontSize: '0.875rem' }}>{operator.description}</p>

      <div style={{ marginBottom: '1rem' }}>
        {[
          { label: 'Couverture', value: operator.coverage },
          { label: 'Vitesse', value: operator.speed },
          { label: 'Prix', value: operator.price },
          { label: 'Support', value: operator.support },
        ].map((item) => (
          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>{item.label}</span>
            <StarRating rating={item.value} color={operator.color} />
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
        <div>
          <p style={{ fontSize: '0.75rem', fontWeight: '600', color: '#15803D', marginBottom: '0.25rem' }}>✓ Avantages</p>
          {operator.pros.slice(0, 2).map((pro, i) => (
            <p key={i} style={{ fontSize: '0.75rem', color: '#6B7280', margin: '0.125rem 0' }}>• {pro}</p>
          ))}
        </div>
        <div>
          <p style={{ fontSize: '0.75rem', fontWeight: '600', color: '#B91C1C', marginBottom: '0.25rem' }}>✗ Limites</p>
          {operator.cons.slice(0, 2).map((con, i) => (
            <p key={i} style={{ fontSize: '0.75rem', color: '#6B7280', margin: '0.125rem 0' }}>• {con}</p>
          ))}
        </div>
      </div>

      <a
        href={`https://www.${id}.pf`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          backgroundColor: operator.color,
          color: 'white',
          fontWeight: '600',
          textDecoration: 'none',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        Visiter {operator.name} →
      </a>
    </div>
  );

  const OfferCard = ({ offer }) => {
    const op = operators[offer.operator];
    return (
      <div style={{ ...styles.offerCard, borderLeftColor: op.color }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.5rem' }}>{op.logo}</span>
            <div>
              <h4 style={{ fontWeight: 'bold', color: '#111827', margin: 0 }}>{offer.name}</h4>
              <span style={{
                fontSize: '0.75rem',
                padding: '0.125rem 0.5rem',
                borderRadius: '9999px',
                backgroundColor: op.color,
                color: 'white',
              }}>
                {op.name}
              </span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: '900', color: op.color, margin: 0 }}>
              {offer.price.toLocaleString()} F
            </p>
            <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0 }}>/mois</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div style={{ backgroundColor: '#F9FAFB', borderRadius: '0.5rem', padding: '0.5rem', textAlign: 'center' }}>
            <p style={{ color: '#9CA3AF', fontSize: '0.75rem', margin: 0 }}>Débit</p>
            <p style={{ fontWeight: 'bold', color: '#111827', margin: 0 }}>{offer.speed}</p>
          </div>
          <div style={{ backgroundColor: '#F9FAFB', borderRadius: '0.5rem', padding: '0.5rem', textAlign: 'center' }}>
            <p style={{ color: '#9CA3AF', fontSize: '0.75rem', margin: 0 }}>Data</p>
            <p style={{ fontWeight: 'bold', color: '#111827', margin: 0 }}>{offer.data}</p>
          </div>
        </div>

        <div>
          {offer.features.map((feature, i) => (
            <p key={i} style={{ fontSize: '0.75rem', color: '#6B7280', margin: '0.25rem 0', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{ color: op.color }}>✓</span> {feature}
            </p>
          ))}
        </div>
      </div>
    );
  };

  const filteredOffers = selectedOperator
    ? offers[activeTab].filter((o) => o.operator === selectedOperator)
    : offers[activeTab];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerPattern} />
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '3rem' }}>🌺</span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '900', margin: 0 }}>Comparateur FAI</h1>
            <span style={{ fontSize: '3rem' }}>🌴</span>
          </div>
          <p style={{ fontSize: '1.25rem', color: '#A5F3FC', marginBottom: '0.5rem' }}>Polynésie Française</p>
          <p style={{ color: '#BAE6FD', maxWidth: '600px', margin: '0 auto' }}>
            Comparez les offres Fibre, 4G/5G et Mobile des 3 opérateurs du Fenua
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {['Vini', 'Ora', 'Vodafone'].map((name) => (
              <div key={name} style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(4px)',
                borderRadius: '0.75rem',
                padding: '0.5rem 1rem',
              }}>
                <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>
                  {name === 'Vini' ? '🔵' : name === 'Ora' ? '🟠' : '🔴'}
                </span>
                <span style={{ fontWeight: '600' }}>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vague */}
        <svg
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1350,90 1440,60 L1440,120 L0,120 Z" fill="#F8FAFC" />
        </svg>
      </header>

      {/* Main */}
      <main style={styles.main}>
        {/* Opérateurs */}
        <section style={{ ...styles.section, marginTop: '-1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>📊</span> Comparez les opérateurs
            {selectedOperator && (
              <button
                onClick={() => setSelectedOperator(null)}
                style={{
                  marginLeft: '1rem',
                  fontSize: '0.875rem',
                  backgroundColor: '#E5E7EB',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#374151',
                }}
              >
                ✕ Voir tous
              </button>
            )}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {Object.entries(operators).map(([id, op]) => (
              <OperatorCard
                key={id}
                id={id}
                operator={op}
                isSelected={selectedOperator === id}
                onClick={() => setSelectedOperator(selectedOperator === id ? null : id)}
              />
            ))}
          </div>
        </section>

        {/* Tabs */}
        <section style={styles.section}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'fibre', label: '🌐 Fibre Optique', desc: 'Internet illimité' },
              { id: 'box4g', label: '📡 Box 4G/5G', desc: 'Sans ligne fixe' },
              { id: 'mobile', label: '📱 Mobile', desc: 'Forfaits téléphone' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === tab.id ? styles.tabButtonActive : styles.tabButtonInactive),
                }}
              >
                <span style={{ display: 'block' }}>{tab.label}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.75 }}>{tab.desc}</span>
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {filteredOffers.sort((a, b) => a.price - b.price).map((offer, i) => (
              <OfferCard key={i} offer={offer} />
            ))}
          </div>

          {filteredOffers.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#9CA3AF' }}>
              <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</p>
              <p>Aucune offre disponible pour cet opérateur dans cette catégorie</p>
            </div>
          )}
        </section>

        {/* Gaming */}
        <section style={styles.section}>
          <div style={styles.gamingSection}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🎮</span> Latence Gaming (Ping moyen)
            </h2>
            <p style={{ color: '#C4B5FD', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              Données collectées depuis Paea vers serveurs GCP - Programme Vini Gaming Ping
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', fontSize: '0.875rem', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #6B21A8' }}>
                    <th style={{ textAlign: 'left', padding: '0.75rem 1rem' }}>Jeu</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem 1rem' }}><span style={{ fontSize: '1.5rem' }}>🔵</span> Vini</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem 1rem' }}><span style={{ fontSize: '1.5rem' }}>🟠</span> Ora</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem 1rem' }}><span style={{ fontSize: '1.5rem' }}>🔴</span> Vodafone</th>
                  </tr>
                </thead>
                <tbody>
                  {latencyData.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(107, 33, 168, 0.5)' }}>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: '500' }}>{row.game}</td>
                      <td style={{ textAlign: 'center', padding: '0.75rem 1rem' }}>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontWeight: 'bold',
                          backgroundColor: row.vini <= Math.min(row.ora, row.vodafone) ? '#22C55E' : '#6B21A8',
                          color: 'white',
                        }}>
                          {row.vini} ms
                        </span>
                      </td>
                      <td style={{ textAlign: 'center', padding: '0.75rem 1rem' }}>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontWeight: 'bold',
                          backgroundColor: row.ora <= Math.min(row.vini, row.vodafone) ? '#22C55E' : '#6B21A8',
                          color: 'white',
                        }}>
                          {row.ora} ms
                        </span>
                      </td>
                      <td style={{ textAlign: 'center', padding: '0.75rem 1rem' }}>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontWeight: 'bold',
                          backgroundColor: row.vodafone <= Math.min(row.vini, row.ora) ? '#22C55E' : '#6B21A8',
                          color: 'white',
                        }}>
                          {row.vodafone} ms
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ color: '#C4B5FD', fontSize: '0.75rem', marginTop: '1rem', textAlign: 'center' }}>
              💡 Le ping le plus bas est meilleur pour le jeu en ligne. Valeurs estimées basées sur tests réels.
            </p>
          </div>
        </section>

        {/* Couverture */}
        <section style={styles.section}>
          <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🗺️</span> Couverture par archipel
            </h2>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', fontSize: '0.875rem', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                    <th style={{ textAlign: 'left', padding: '0.75rem 1rem' }}>Archipel</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem 1rem' }}>🔵 Vini</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem 1rem' }}>🟠 Ora</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem 1rem' }}>🔴 Vodafone</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Îles de la Société', vini: '5G/4G/Fibre', ora: '5G/4G/Fibre', vodafone: '5G/4G/Fibre' },
                    { name: 'Tuamotu', vini: '4G/3G', ora: '4G (limité)', vodafone: '3G (limité)' },
                    { name: 'Marquises', vini: '4G/3G', ora: '4G (partiel)', vodafone: '3G' },
                    { name: 'Australes', vini: '3G/2G', ora: '—', vodafone: '—' },
                    { name: 'Gambier', vini: '3G', ora: '—', vodafone: '—' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #F3F4F6' }}>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: '500' }}>{row.name}</td>
                      <td style={{ textAlign: 'center', padding: '0.75rem 1rem', color: '#2563EB' }}>{row.vini}</td>
                      <td style={{ textAlign: 'center', padding: '0.75rem 1rem', color: '#EA580C' }}>{row.ora}</td>
                      <td style={{ textAlign: 'center', padding: '0.75rem 1rem', color: '#DC2626' }}>{row.vodafone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#ECFEFF', borderRadius: '0.75rem' }}>
              <p style={{ color: '#155E75', fontSize: '0.875rem', margin: 0 }}>
                <strong>💡 Conseil :</strong> Si vous voyagez dans les îles éloignées (Tuamotu, Marquises, Australes, Gambier),
                <span style={{ color: '#1D4ED8', fontWeight: '600' }}> Vini est indispensable</span> car c'est le seul opérateur avec une couverture étendue sur tous les archipels.
              </p>
            </div>
          </div>
        </section>

        {/* Liens */}
        <section style={styles.section}>
          <div style={{
            background: 'linear-gradient(to right, #0891B2, #2563EB)',
            borderRadius: '1rem',
            padding: '1.5rem',
            color: 'white',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>🔗 Sites officiels</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {[
                { name: 'Vini', url: 'https://www.vini.pf', logo: '🔵' },
                { name: 'Ora', url: 'https://www.ora.pf', logo: '🟠' },
                { name: 'Vodafone', url: 'https://www.vodafone.pf', logo: '🔴' },
              ].map((site) => (
                <a
                  key={site.name}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    backgroundColor: 'white',
                    color: '#111827',
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>{site.logo}</span>
                  {site.name}
                  <span style={{ display: 'block', fontSize: '0.75rem', color: '#9CA3AF', marginTop: '0.25rem' }}>{site.url}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🌺 Mauruuru roa ! 🌴</p>
        <p style={{ color: '#94A3B8', fontSize: '0.875rem', marginBottom: '1rem' }}>
          Comparateur FAI Polynésie - Données mises à jour en avril 2026
        </p>
        <p style={{ color: '#64748B', fontSize: '0.75rem' }}>
          Les tarifs et offres peuvent varier. Consultez les sites officiels pour les informations à jour.
          <br />
          Créé avec ❤️ pour le Fenua
        </p>
      </footer>
    </div>
  );
};

export default ComparateurFAI;
