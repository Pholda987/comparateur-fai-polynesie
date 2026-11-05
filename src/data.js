export const operators = {
    vini: {
      name: 'Vini',
      logo: 'https://www.vini.pf/themes/vini/images/logo.svg',
      color: '#dc001c',
      tagline: 'Opérateur historique',
      description: "Filiale de l'OPT, couverture sur tous les archipels",
      coverage: 5, speed: 5, price: 3, support: 4,
    },
    ora: {
      name: 'Ora',
      logo: 'https://www.ora.pf/wp-content/uploads/svg/ora.svg',
      color: '#005528',
      tagline: "Pionnier de l'internet sans ligne fixe",
      description: 'Premier internet sans ligne téléphonique depuis 2011',
      coverage: 4, speed: 4, price: 4, support: 4,
    },
    vodafone: {
      name: 'Vodafone',
      logo: 'https://www.vodafone.pf/images/logo.png',
      color: '#8C1F28',
      tagline: "La puissance d'un réseau mondial",
      description: 'Entreprise 100% polynésienne avec expertise internationale',
      coverage: 3, speed: 5, price: 5, support: 4,
    },
  };

export const offers = {
    fibre: [
      // VINI FIBRE
      { operator: 'vini', name: 'Vinibox POP', download: '30', upload: '10', price: 6100, data: 'Illimité', features: ['ViniSPOT 1h', 'Appels illimités entre box'] },
      { operator: 'vini', name: 'Vinibox POP + TV', internetPrice: 6100, download: '30', upload: '10', price: 8600, data: 'Illimité', features: ['ViniSPOT 1h', 'Appels illimités entre box', 'CANAL+ inclus'] },
      { operator: 'vini', name: 'Vinibox UP', download: '200', upload: '75', price: 9000, data: 'Illimité', features: ['ViniSPOT 1h', '2h appels internationaux', 'Appels illimités entre box'] },
      { operator: 'vini', name: 'Vinibox UP + TV', internetPrice: 9000, download: '200', upload: '75', price: 9900, data: 'Illimité', features: ['ViniSPOT 1h', '2h appels internationaux', 'CANAL+ inclus'] },
      { operator: 'vini', name: 'Vinibox JET', download: '300', upload: '100', price: 12900, data: 'Illimité', features: ['ViniSPOT 1h', '3h appels internationaux', 'Appels illimités entre box'] },
      { operator: 'vini', name: 'Vinibox JET + TV', internetPrice: 12900, download: '300', upload: '100', price: 13800, data: 'Illimité', features: ['ViniSPOT 1h', '3h appels internationaux', 'CANAL+ inclus'] },
      // ORA FIBRE
      { operator: 'ora', name: 'Ora Fibre Essentiel', download: '10', upload: '10', price: 5990, data: 'Illimité', features: ['Illimité 24h/24'] },
      { operator: 'ora', name: 'Ora Fibre Power', discontinued: 'N\'apparaît plus sur ora.pf depuis novembre 2026. Vérifiez sa disponibilité auprès d\'Ora.', download: '50', upload: '10', price: 6990, data: 'Illimité', features: ['Modem Wi-Fi 6', 'Aide raccordement 50 000 F'] },
      { operator: 'ora', name: 'Ora Fibre Max', download: '200', upload: '100', price: 9990, data: 'Illimité', features: ['Modem Wi-Fi 6', 'Ultra rapide', 'Aide raccordement 50 000 F'] },
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
      { operator: 'vini', name: 'Vinibox 4G/5G 50 Go', download: '20', upload: '10', price: 1500, data: '50 Go', features: ['Avec ou sans engagement', 'Débit débridé en option'] },
      { operator: 'vini', name: 'Vinibox 4G/5G 150 Go', reva: { price: 4500, data: '200 Go', note: '+50 Go offerts' }, download: '20', upload: '10', price: 4500, data: '150 Go', features: ['Avec ou sans engagement', 'Débit débridé en option'] },
      { operator: 'vini', name: 'Vinibox 4G/5G Illimité', reva: { price: 8900, note: 'Maintien du débit offert' }, download: '50', upload: '20', price: 8900, data: 'Illimité', features: ['Routeur 4G/5G offert', 'Engagement 24 mois (12 mois ou sans dispo)', 'Débit débridé et Maintien du débit en option'] },
      { operator: 'vini', name: 'Vinibox 4G/5G MAX illimité', reva: { price: 9900, note: '−2 000 F par mois' }, download: '200', upload: '100', price: 11900, data: 'Illimité', features: ['Routeur 4G/5G offert', 'Engagement 24 mois (12 mois ou sans dispo)', 'Débit débridé et Maintien du débit inclus'] },
      // VODAFONE VODASURF
      { operator: 'vodafone', name: 'Vodasurf Master', download: '50', upload: '10', price: 4900, data: '200 Go', features: ['5G', 'Illimité 00h-06h'] },
      { operator: 'vodafone', name: 'Vodasurf Elite', download: '50', upload: '10', price: 6900, data: '400 Go', features: ['5G', 'Illimité 00h-06h'] },
      { operator: 'vodafone', name: 'Vodasurf Supreme', download: '50', upload: '10', price: 8900, data: 'Illimité', features: ['5G', 'Routeur offert'] },
      { operator: 'vodafone', name: 'Vodasurf Ultra', download: '200', upload: '100', price: 10900, data: 'Illimité', features: ['5G', 'Routeur offert', 'Nouveau : disponible sur Moorea', 'Compatible uniquement avec un routeur 4G/5G'] },
    ],
    mobile: [
      // VINI MOBILE
      { operator: 'vini', name: 'Vini Iti', download: '4G', upload: '-', price: 450, data: '100 Mo', features: ['1h appels', 'SMS illimités', '+10 Go bonus jeune', 'Disponible en eSIM'] },
      { operator: 'vini', name: 'Vini Nui 5 Go', download: '4G', upload: '-', price: 1200, data: '5 Go', features: ['2h appels', 'SMS illimités', '+10 Go bonus jeune', 'Disponible en eSIM'] },
      { operator: 'vini', name: 'Vini Nui 20 Go', download: '4G', upload: '-', price: 2700, data: '20 Go', features: ['Appels illimités', 'SMS illimités', '+10 Go bonus jeune', 'Disponible en eSIM'] },
      { operator: 'vini', name: 'Vini Reva 80 Go', download: '5G', upload: '-', price: 4900, data: '80 Go', features: ['Appels illimités', '6h international', 'eSIM offerte 24 mois'] },
      { operator: 'vini', name: 'Vini Reva 150 Go', download: '5G', upload: '-', price: 7900, data: '150 Go', features: ['Appels illimités', '12h international', 'eSIM offerte 24 mois'] },
      { operator: 'vini', name: 'Vini Reva 250 Go', download: '5G', upload: '-', price: 9900, data: '250 Go', features: ['Appels illimités', 'International illimité', 'eSIM offerte 24 mois'] },
      // ORA MOBILE
      { operator: 'ora', name: 'Ora Access', download: '4G', upload: '-', price: 995, data: '20 Go', features: ['2h appels locaux', 'SMS illimités', 'Sans engagement', 'Disponible en eSIM'] },
      { operator: 'ora', name: 'Ora Like 5G', download: '5G', upload: '-', price: 1995, data: '50 Go', features: ['Appels illimités', '2h international', 'SMS illimités', 'Disponible en eSIM'] },
      { operator: 'ora', name: 'Ora Enjoy 5G', download: '5G', upload: '-', price: 2995, data: '80 Go', features: ['Appels illimités', '10h international', 'SMS illimités', 'Disponible en eSIM'] },
      { operator: 'ora', name: 'Ora Smart 5G', download: '5G', upload: '-', price: 4995, data: '120 Go', features: ['Appels illimités', 'International illimité', '2 Go roaming', 'Disponible en eSIM'] },
      // VODAFONE MOBILE
      { operator: 'vodafone', name: 'Smile x2 Base', download: '4G', upload: '-', price: 500, data: '12 Go', features: ['2h appels', 'SMS illimités', 'Personnalisable', 'Disponible en eSIM'] },
      { operator: 'vodafone', name: 'Smile x2 25 Go', download: '4G', upload: '-', price: 2200, data: '25 Go', features: ['8h appels', 'SMS illimités', 'Personnalisable', 'Disponible en eSIM'] },
      { operator: 'vodafone', name: 'Prestige x2', download: '5G', upload: '-', price: 4900, data: '120 Go', features: ['Appels illimités', 'International illimité', 'SMS illimités', 'Personnalisable', 'Disponible en eSIM'] },
    ],
    fibrePro: [
      // VINI PRO
      { operator: 'vini', name: 'Vinibox PRO', download: '400', upload: '150', price: 13000, data: 'Illimité', features: ['2h appels internationaux', 'Appels Vinibox illimités', 'Appels fixes PF illimités', 'Option adresse IP fixe', 'Secours 4G automatique', 'Prix HT'] },
      { operator: 'vini', name: 'Vinibox PRO OPTIMAL', download: '800', upload: '200', price: 25000, data: 'Illimité', features: ['3h appels internationaux', 'Appels Vinibox illimités', 'Appels fixes PF illimités', 'Option adresse IP fixe', 'Secours 4G automatique', 'Prix HT'] },
      // ORA BUSINESS
      { operator: 'ora', name: 'Ora Pro Fibre Select', download: '400', upload: '300', price: 15000, data: 'Illimité', features: ['Contact dédié', 'SAV priorisé', '+ ligne ONATi 3 127 F HT/mois', 'Frais d\'accès 30 000 F HT', 'IP fixe en option (3 097 F HT/mois)', 'Secours automatique illimité 30/10 Mb/s (frais d\'accès en sus)', 'Engagement 2 ans', 'Prix HT (+13 % TVA)'] },
      { operator: 'ora', name: 'Ora Pro Fibre Signature', download: '600', upload: '600', price: 20000, data: 'Illimité', features: ['Contact dédié', 'SAV priorisé', '+ ligne ONATi 3 127 F HT/mois', 'Frais d\'accès 30 000 F HT', 'IP fixe en option (3 097 F HT/mois)', 'Secours automatique illimité 30/10 Mb/s (frais d\'accès en sus)', 'Engagement 2 ans', 'Prix HT (+13 % TVA)'] },
      { operator: 'ora', name: 'Ora Pro Fibre Evolve', download: '800', upload: '800', price: 25000, data: 'Illimité', features: ['Contact dédié', 'SAV priorisé', '+ ligne ONATi 3 127 F HT/mois', 'Frais d\'accès 30 000 F HT', 'IP fixe en option (3 097 F HT/mois)', 'Secours automatique illimité 30/10 Mb/s (frais d\'accès en sus)', 'Engagement 2 ans', 'Prix HT (+13 % TVA)'] },
      { operator: 'ora', name: 'Ora Pro Fibre Infinity', download: '1000', upload: '1000', price: 40000, data: 'Illimité', features: ['Contact dédié', 'SAV priorisé', '+ ligne ONATi 3 127 F HT/mois', 'Frais d\'accès 30 000 F HT', 'IP fixe incluse (fibre et secours)', 'Secours automatique illimité 30/10 Mb/s (frais d\'accès en sus)', 'Engagement 2 ans', 'Prix HT (+13 % TVA)'] },
    ],
  };
