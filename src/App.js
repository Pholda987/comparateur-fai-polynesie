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
      { operator: 'vini', name: 'Vinibox POP', speed: '100 Mb/s', price: 6100, data: 'Illimité', features: ['Appels fixes illimités', 'TV en option'] },
      { operator: 'vini', name: 'Vinibox UP', speed: '300 Mb/s', price: 9000, data: 'Illimité', features: ['Appels internationaux', 'ViniSPOT'] },
      { operator: 'ora', name: 'Ora Fibre', speed: '50 Mb/s', price: 5990, data: 'Illimité', features: ['Sans ligne fixe', 'Modem Wi-Fi 6'] },
      { operator: 'vodafone', name: 'VodaFibre', speed: '100 Mb/s', price: 9900, data: 'Illimité', features: ['Secours 4G inclus'] },
    ],
    box4g: [
      { operator: 'ora', name: 'Ora Box Confort', speed: '50 Mb/s', price: 4995, data: '150 Go', features: ['Box 4G+ offerte'] },
      { operator: 'vodafone', name: 'Vodasurf', speed: '8 Mb/s', price: 4900, data: '100 Go', features: ['Sans ligne fixe'] },
      { operator: 'vodafone', name: 'Vodasurf Supreme', speed: '200 Mb/s', price: 8900, data: 'Illimité', features: ['5G', 'Routeur offert'] },
      { operator: 'vini', name: 'Vinibox 4G', speed: '50 Mb/s', price: 5500, data: '100 Go', features: ['Couverture étendue'] },
    ],
    mobile: [
      { operator: 'vini', name: 'Vini Iti', speed: '4G', price: 450, data: '1 Go', features: ['SMS illimités'] },
      { operator: 'vini', name: 'Vini Nui 20 Go', speed: '5G', price: 2700, data: '20 Go', features: ['Appels illimités'] },
      { operator: 'ora', name: 'Ora Mobile', speed: '5G', price: 2500, data: '30 Go', features: ['Appels illimités'] },
      { operator: 'vodafone', name: 'Prestige', speed: '5G', price: 4900, data: '120 Go', features: ['Appels internationaux 28 pays'] },
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
            {Object.entries(operators).m
