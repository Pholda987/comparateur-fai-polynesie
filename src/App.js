import React, { useMemo, useState } from 'react';
import { operators, offers } from './data';

const TABS = [
  { id: 'fibre', label: 'Fibre' },
  { id: 'box4g', label: 'Box 4G/5G' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'fibrePro', label: 'Fibre PRO' },
];

const SORTS = [
  { id: 'price', label: 'Prix croissant' },
  { id: 'speed', label: 'Débit le plus rapide' },
  { id: 'ratio', label: 'Meilleur prix par Mb/s' },
];

const MAX_SPEED = 1000; // échelle logarithmique des barres de débit

const num = (v) => {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : null;
};

const fmt = (n) => n.toLocaleString('fr-FR').replace(/ /g, ' ');

const barWidth = (v) => {
  const n = num(v);
  if (!n) return 0;
  return Math.max(6, Math.min(100, (Math.log10(n) / Math.log10(MAX_SPEED)) * 100));
};

const Stars = ({ value }) => (
  <span className="stars" aria-label={`${value} sur 5`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} className={i <= value ? 'star on' : 'star'} />
    ))}
  </span>
);

const SignalTrace = () => (
  <svg className="trace" viewBox="0 0 560 300" aria-hidden="true">
    <path className="trace-faint" d="M40 220 Q 220 250 420 150 M40 220 Q 200 180 360 230 M150 236 Q 300 120 520 90" />
    <path className="trace-main" d="M40 220 C 180 214 330 150 420 112 C 452 98 476 92 510 88" />
    <circle className="node" cx="40" cy="220" r="8" />
    <circle className="node" cx="510" cy="88" r="8" />
    <text className="node-label" x="40" y="256" textAnchor="middle">Votre box</text>
    <text className="node-label" x="510" y="64" textAnchor="middle">Internet</text>
  </svg>
);

const OfferCard = ({ offer, tab, reva, best }) => {
  const op = operators[offer.operator];
  const isMobile = tab === 'mobile';
  const isPro = tab === 'fibrePro';
  const hasTV = offer.name.includes('+ TV');
  const revaActive = reva && offer.reva;
  const price = revaActive ? offer.reva.price : offer.price;
  const data = revaActive && offer.reva.data ? offer.reva.data : offer.data;
  const down = num(offer.download);
  const ratio = !isMobile && down ? Math.round(price / down) : null;

  return (
    <article className={offer.discontinued ? 'offer offer-retired' : 'offer'} style={{ '--op': op.color }}>
      <header className="offer-head">
        <span className="op-chip">
          <img src={op.logo} alt="" />
          {op.name}
        </span>
        <div className="tags">
          {offer.discontinued && <span className="tag tag-retired">N&apos;est plus commercialisé</span>}
          {best && <span className="tag tag-best">Meilleur prix par Mb/s en illimité</span>}
          {hasTV && <span className="tag">CANAL+</span>}
          {isPro && <span className="tag">Prix HT</span>}
        </div>
      </header>

      <h3 className="offer-name">{offer.name}</h3>

      <div className="price-row">
        <p className="price">
          {fmt(price)}
          <span className="unit"> F/mois</span>
        </p>
        {revaActive && offer.reva.price !== offer.price && (
          <p className="old-price">au lieu de {fmt(offer.price)} F</p>
        )}
      </div>
      {revaActive && <p className="reva-note">Avec Vini Reva : {offer.reva.note}</p>}
      {offer.discontinued && <p className="retired-note">{offer.discontinued}</p>}

      {isMobile ? (
        <dl className="specs">
          <div><dt>Réseau</dt><dd>{offer.download}</dd></div>
          <div><dt>Data</dt><dd>{data}</dd></div>
        </dl>
      ) : (
        <>
          <div className="meter">
            <div className="meter-row">
              <span className="meter-label">Réception</span>
              <span className="meter-track">
                <span className="meter-bar down" style={{ width: `${barWidth(offer.download)}%` }} />
              </span>
              <span className="meter-value">{offer.download} Mb/s</span>
            </div>
            <div className="meter-row">
              <span className="meter-label">Envoi</span>
              <span className="meter-track">
                <span className="meter-bar up" style={{ width: `${barWidth(offer.upload)}%` }} />
              </span>
              <span className="meter-value">{offer.upload} Mb/s</span>
            </div>
          </div>
          <dl className="specs">
            <div><dt>Data</dt><dd>{data}</dd></div>
            {ratio !== null && <div><dt>Prix par Mb/s</dt><dd>{fmt(ratio)} F</dd></div>}
          </dl>
        </>
      )}

      <ul className="features">
        {offer.features.map((f) => <li key={f}>{f}</li>)}
      </ul>
    </article>
  );
};

const App = () => {
  const [tab, setTab] = useState('fibre');
  const [operator, setOperator] = useState(null);
  const [sort, setSort] = useState('price');
  const [reva, setReva] = useState(false);

  const isMobile = tab === 'mobile';
  const revaAvailable = offers[tab].some((o) => o.reva);
  const revaOn = reva && revaAvailable;

  const list = useMemo(() => {
    const eff = (o) => (revaOn && o.reva ? o.reva.price : o.price);
    const items = offers[tab].filter((o) => !operator || o.operator === operator);
    const sorted = [...items];
    if (sort === 'speed' && !isMobile) {
      sorted.sort((a, b) => (num(b.download) || 0) - (num(a.download) || 0) || eff(a) - eff(b));
    } else if (sort === 'ratio' && !isMobile) {
      sorted.sort((a, b) => eff(a) / (num(a.download) || 1) - eff(b) / (num(b.download) || 1));
    } else {
      sorted.sort((a, b) => eff(a) - eff(b));
    }
    let bestName = null;
    const unlimited = items.filter((o) => o.data === 'Illimité' && num(o.download) && !o.discontinued);
    if (!isMobile && unlimited.length > 1) {
      bestName = unlimited.reduce((best, o) =>
        eff(o) / num(o.download) < eff(best) / num(best.download) ? o : best
      ).name;
    }
    return { sorted, bestName };
  }, [tab, operator, sort, revaOn, isMobile]);

  const sortOptions = isMobile ? SORTS.slice(0, 1) : SORTS;

  return (
    <div className="page">
      <header className="hero">
        <div className="arc" aria-hidden="true" />
        <div className="hero-text">
          <p className="kicker">Vini, Ora et Vodafone en Polynésie française</p>
          <h1>
            <span className="h1-main">Comparez</span>
            <span className="h1-sub">les offres internet du Fenua</span>
          </h1>
          <p className="lede">
            Fibre, box 4G/5G et forfaits mobiles : prix, débits réels annoncés et options,
            réunis sur une seule page.
          </p>
        </div>
        <SignalTrace />
      </header>

      <main>
        <section className="offers" aria-labelledby="offres-titre">
          <h2 id="offres-titre" className="visually-hidden">Toutes les offres</h2>

          <div className="controls">
            <div className="tabs" role="tablist" aria-label="Type d'offre">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={tab === t.id}
                  className={tab === t.id ? 'tab active' : 'tab'}
                  onClick={() => {
                    setTab(t.id);
                    if (t.id === 'mobile') setSort('price');
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="filters">
              <div className="chips" role="group" aria-label="Opérateur">
                <button className={!operator ? 'chip active' : 'chip'} onClick={() => setOperator(null)}>
                  Tous
                </button>
                {Object.entries(operators).map(([id, op]) => (
                  <button
                    key={id}
                    style={{ '--op': op.color }}
                    className={operator === id ? 'chip active' : 'chip'}
                    aria-pressed={operator === id}
                    onClick={() => setOperator(operator === id ? null : id)}
                  >
                    <span className="dot" />
                    {op.name}
                  </button>
                ))}
              </div>

              <label className="sort">
                <span>Trier par</span>
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                  {sortOptions.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
                </select>
              </label>

              {revaAvailable && (
                <label className="switch">
                  <input type="checkbox" checked={reva} onChange={(e) => setReva(e.target.checked)} />
                  <span className="switch-ui" aria-hidden="true" />
                  <span>J'ai un forfait Vini Reva</span>
                </label>
              )}
            </div>
          </div>

          <p className="count">
            {list.sorted.length} offre{list.sorted.length > 1 ? 's' : ''}
            {operator ? ` chez ${operators[operator].name}` : ''}
            {revaOn && ', tarifs Vini Reva appliqués (engagement 24 mois)'}
          </p>

          <div className="grid">
            {list.sorted.map((o) => (
              <OfferCard key={o.name} offer={o} tab={tab} reva={revaOn} best={o.name === list.bestName} />
            ))}
          </div>
        </section>

        <section className="operators" aria-labelledby="op-titre">
          <h2 id="op-titre">Les trois opérateurs</h2>
          <p className="note">Notes subjectives de l'auteur, non officielles.</p>
          <div className="op-list">
            {Object.entries(operators).map(([id, op]) => (
              <article key={id} className="op" style={{ '--op': op.color }}>
                <div className="op-top">
                  <span className="op-logo"><img src={op.logo} alt={op.name} /></span>
                  <div>
                    <h3>{op.name}</h3>
                    <p className="op-tag">{op.tagline}</p>
                  </div>
                </div>
                <p className="op-desc">{op.description}</p>
                <dl className="ratings">
                  {[['Couverture', op.coverage], ['Vitesse', op.speed], ['Prix', op.price], ['Support', op.support]].map(([l, v]) => (
                    <div key={l}><dt>{l}</dt><dd><Stars value={v} /></dd></div>
                  ))}
                </dl>
                <a className="op-link" href={`https://www.${id}.pf`} target="_blank" rel="noopener noreferrer">
                  Voir le site {op.name}
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="mauruuru">Mauruuru roa</p>
        <p>Box 4G/5G Vini et fibre PRO Ora mises à jour le 04/11/2026. Autres offres relevées le 05/04/2026.</p>
        <p>Sources : vini.pf, ora.pf, vodafone.pf. Vérifiez toujours l'éligibilité de votre adresse auprès de l'opérateur.</p>
      </footer>
    </div>
  );
};

export default App;
