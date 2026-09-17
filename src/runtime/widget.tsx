/** @jsx jsx */
import { React, type AllWidgetProps, jsx, css } from 'jimu-core'
import { type IMConfig } from '../config'

interface FeatureRecord {
  fid: number
  damage_gra: string
  dpto_cnmbr: string
  mpio_cnmbr: string
  type: string
  source?: string
}

const Lucide = {
  BarChart2: (props?: any) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>
    </svg>
  ),
  PieChart: (props?: any) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
    </svg>
  ),
  Building: (props?: any) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/>
    </svg>
  ),
  MapPin: (props?: any) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Filter: (props?: any) => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </svg>
  ),
  RotateCcw: (props?: any) => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
    </svg>
  ),
  RefreshCw: (props?: any) => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>
    </svg>
  ),
  AlertTriangle: (props?: any) => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>
    </svg>
  )
}

const estiloDashboard = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@600;700&display=swap');

  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #0f172a;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none;

  .dash-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    overflow: hidden;
    position: relative;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  }

  /* ── Header ── */
  .dash-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 0.9rem;
    background: #09090b;
    color: #ffffff;
    border-bottom: 1px solid #27272a;
    flex-shrink: 0;
  }

  .dash-brand {
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }

  .dash-logo-img {
    height: 28px;
    max-width: 120px;
    object-fit: contain;
    display: block;
  }

  .dash-title-wrap {
    display: flex;
    flex-direction: column;
  }

  .dash-pill {
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #93c5fd;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .dash-pill-dot {
    width: 5px;
    height: 5px;
    border-radius: 9999px;
    background: #10b981;
    box-shadow: 0 0 6px #10b981;
  }

  .dash-heading {
    font-size: 0.85rem;
    font-weight: 700;
    color: #f8fafc;
    letter-spacing: -0.015em;
    margin: 0;
    line-height: 1.2;
  }

  .dash-header-actions {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  .btn-dash-icon {
    width: 28px;
    height: 28px;
    border-radius: 0.375rem;
    background: #18181b;
    border: 1px solid #27272a;
    color: #cbd5e1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .btn-dash-icon:hover {
    background: #27272a;
    color: #ffffff;
  }

  /* ── Barra de Filtros ── */
  .dash-filter-bar {
    padding: 0.45rem 0.85rem;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    flex-wrap: wrap;
    flex-shrink: 0;
  }

  .filter-select {
    height: 1.85rem;
    border-radius: 0.375rem;
    border: 1px solid #cbd5e1;
    background: #ffffff;
    color: #0f172a;
    font-size: 0.7rem;
    font-family: inherit;
    padding: 0 0.45rem;
    outline: none;
    cursor: pointer;
    flex: 1;
    min-width: 110px;
    transition: border-color 0.15s ease;
  }
  .filter-select:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 1px #2563eb;
  }

  .btn-reset-filters {
    height: 1.85rem;
    padding: 0 0.5rem;
    border-radius: 0.375rem;
    border: 1px solid #e2e8f0;
    background: #ffffff;
    color: #64748b;
    font-size: 0.68rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
  }
  .btn-reset-filters:hover {
    background: #f1f5f9;
    color: #0f172a;
  }

  /* ── KPI Cards Grid ── */
  .kpi-grid {
    padding: 0.6rem 0.85rem 0.4rem 0.85rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.45rem;
    flex-shrink: 0;
  }

  .kpi-card {
    padding: 0.45rem 0.55rem;
    border-radius: 0.5rem;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
    position: relative;
    overflow: hidden;
  }

  .kpi-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 3px;
  }
  .kpi-total::before { background: #2563eb; }
  .kpi-destroyed::before { background: #ef4444; }
  .kpi-damaged::before { background: #f97316; }
  .kpi-possible::before { background: #eab308; }

  .kpi-title {
    font-size: 0.6rem;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .kpi-value-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 4px;
  }

  .kpi-number {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.15rem;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.1;
  }

  .kpi-percent {
    font-size: 0.6rem;
    font-weight: 700;
    padding: 1px 4px;
    border-radius: 3px;
  }
  .percent-destroyed { background: #fee2e2; color: #b91c1c; }
  .percent-damaged { background: #ffedd5; color: #c2410c; }
  .percent-possible { background: #fef9c3; color: #a16207; }

  /* ── Tabs Selector ── */
  .diagram-tabs-bar {
    padding: 0 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    border-bottom: 1px solid #e2e8f0;
    background: #ffffff;
    flex-shrink: 0;
    overflow-x: auto;
  }

  .diagram-tab-btn {
    padding: 0.45rem 0.6rem;
    font-size: 0.72rem;
    font-weight: 500;
    color: #64748b;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
    transition: all 0.15s ease;
  }
  .diagram-tab-btn:hover {
    color: #0f172a;
  }
  .diagram-tab-btn.tab-active {
    color: #2563eb;
    font-weight: 700;
    border-bottom-color: #2563eb;
  }

  /* ── Canvas de Diagramas (Scrollable) ── */
  .dash-content-area {
    flex: 1 1 0%;
    overflow-y: auto;
    padding: 0.75rem 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-height: 0;
  }

  /* Barras Estilizadas */
  .chart-section-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .chart-card-title {
    font-size: 0.76rem;
    font-weight: 700;
    color: #1e293b;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bar-item-row {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .bar-info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.7rem;
  }

  .bar-label {
    font-weight: 600;
    color: #334155;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .bar-tag-dot {
    width: 8px;
    height: 8px;
    border-radius: 2px;
  }

  .bar-value {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 700;
    color: #0f172a;
  }

  .bar-track {
    width: 100%;
    height: 8px;
    background: #f1f5f9;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }

  .bar-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.4s ease-in-out;
  }

  /* Stacked segmented bar for municipalities */
  .stacked-bar-track {
    width: 100%;
    height: 10px;
    background: #f1f5f9;
    border-radius: 5px;
    display: flex;
    overflow: hidden;
  }
  .stacked-seg {
    height: 100%;
    transition: width 0.3s ease;
  }

  /* Donut SVG */
  .donut-chart-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 0.5rem 0;
  }

  .donut-legend {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    flex: 1;
    min-width: 140px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.68rem;
    gap: 6px;
  }

  /* Footer */
  .dash-footer {
    padding: 0.35rem 0.85rem;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
    font-size: 0.64rem;
    color: #64748b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
  }
`

const DAMAGE_COLORS: Record<string, string> = {
  'Destroyed': '#ef4444',
  'Damaged': '#f97316',
  'Possibly damaged': '#eab308'
}

const DAMAGE_LABELS: Record<string, string> = {
  'Destroyed': 'Destruida',
  'Damaged': 'Daño Severo',
  'Possibly damaged': 'Posible Daño'
}

const DPTO_COLORS = ['#2563eb', '#7c3aed', '#059669', '#d97706', '#ec4899']

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const serviceUrl = props.config?.serviceUrl || 'https://eqchoco.gestiondelriesgo.gov.co/server/rest/services/Hosted/inventario_de_edificaciones_/FeatureServer/0'
  const title = props.config?.title || 'Evaluación de Daños en Edificaciones'

  const [features, setFeatures] = React.useState<FeatureRecord[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [activeTab, setActiveTab] = React.useState<'damage' | 'dpto' | 'mpio' | 'type'>('damage')

  // Filtros
  const [selectedDpto, setSelectedDpto] = React.useState<string>('TODOS')
  const [selectedMpio, setSelectedMpio] = React.useState<string>('TODOS')
  const [selectedDamage, setSelectedDamage] = React.useState<string>('TODOS')

  // Cargar datos oficiales de edificaciones
  const loadData = React.useCallback(async () => {
    setIsLoading(true)
    try {
      // Query con paginación para traer las 2160 edificaciones
      const queryUrl = `${serviceUrl}/query?where=1%3D1&outFields=fid,damage_gra,dpto_cnmbr,mpio_cnmbr,type,source&returnGeometry=false&f=json`
      const res = await fetch(queryUrl)
      if (res.ok) {
        const json = await res.json()
        if (json.features) {
          const rows: FeatureRecord[] = json.features.map((f: any) => ({
            fid: f.attributes.fid || f.attributes.FID || f.attributes.OBJECTID,
            damage_gra: (f.attributes.damage_gra || 'Possibly damaged').trim(),
            dpto_cnmbr: (f.attributes.dpto_cnmbr || 'CHOCÓ').trim(),
            mpio_cnmbr: (f.attributes.mpio_cnmbr || 'SIN ESPECIFICAR').trim(),
            type: (f.attributes.type || 'Residencial').trim() || 'Residencial',
            source: f.attributes.source
          }))
          setFeatures(rows)
        }
      }
    } catch (e) {
      console.warn('Error loading edificaciones features:', e)
    } finally {
      setIsLoading(false)
    }
  }, [serviceUrl])

  React.useEffect(() => {
    loadData()
  }, [loadData])

  // Listas únicas para selectores
  const dptoList = React.useMemo(() => {
    const set = new Set(features.map(f => f.dpto_cnmbr))
    return Array.from(set).filter(Boolean).sort()
  }, [features])

  const mpioList = React.useMemo(() => {
    let subset = features
    if (selectedDpto !== 'TODOS') {
      subset = subset.filter(f => f.dpto_cnmbr === selectedDpto)
    }
    const set = new Set(subset.map(f => f.mpio_cnmbr))
    return Array.from(set).filter(Boolean).sort()
  }, [features, selectedDpto])

  // Registros filtrados
  const filteredRecords = React.useMemo(() => {
    return features.filter(f => {
      if (selectedDpto !== 'TODOS' && f.dpto_cnmbr !== selectedDpto) return false
      if (selectedMpio !== 'TODOS' && f.mpio_cnmbr !== selectedMpio) return false
      if (selectedDamage !== 'TODOS' && f.damage_gra !== selectedDamage) return false
      return true
    })
  }, [features, selectedDpto, selectedMpio, selectedDamage])

  // Métricas Totales y por Daño
  const totalCount = filteredRecords.length
  const destroyedCount = filteredRecords.filter(f => f.damage_gra === 'Destroyed').length
  const damagedCount = filteredRecords.filter(f => f.damage_gra === 'Damaged').length
  const possibleCount = filteredRecords.filter(f => f.damage_gra === 'Possibly damaged').length

  const destroyedPct = totalCount > 0 ? ((destroyedCount / totalCount) * 100).toFixed(1) : '0'
  const damagedPct = totalCount > 0 ? ((damagedCount / totalCount) * 100).toFixed(1) : '0'
  const possiblePct = totalCount > 0 ? ((possibleCount / totalCount) * 100).toFixed(1) : '0'

  // Agrupación por Departamento
  const dptoStats = React.useMemo(() => {
    const counts: Record<string, number> = {}
    filteredRecords.forEach(f => {
      counts[f.dpto_cnmbr] = (counts[f.dpto_cnmbr] || 0) + 1
    })
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count, pct: totalCount > 0 ? ((count / totalCount) * 100).toFixed(1) : '0' }))
      .sort((a, b) => b.count - a.count)
  }, [filteredRecords, totalCount])

  // Agrupación por Municipio (Top 12)
  const mpioStats = React.useMemo(() => {
    const groups: Record<string, { total: number; destroyed: number; damaged: number; possible: number }> = {}
    filteredRecords.forEach(f => {
      if (!groups[f.mpio_cnmbr]) {
        groups[f.mpio_cnmbr] = { total: 0, destroyed: 0, damaged: 0, possible: 0 }
      }
      groups[f.mpio_cnmbr].total += 1
      if (f.damage_gra === 'Destroyed') groups[f.mpio_cnmbr].destroyed += 1
      else if (f.damage_gra === 'Damaged') groups[f.mpio_cnmbr].damaged += 1
      else groups[f.mpio_cnmbr].possible += 1
    })
    return Object.entries(groups)
      .map(([name, data]) => ({ name, ...data, pct: totalCount > 0 ? ((data.total / totalCount) * 100).toFixed(1) : '0' }))
      .sort((a, b) => b.total - a.total)
  }, [filteredRecords, totalCount])

  // Agrupación por Tipología
  const typeStats = React.useMemo(() => {
    const counts: Record<string, number> = {}
    filteredRecords.forEach(f => {
      let t = f.type || 'Residencial'
      if (t === ' ' || t === 'No identificado' || t === 'otro') t = 'Residencial / Mixto'
      counts[t] = (counts[t] || 0) + 1
    })
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count, pct: totalCount > 0 ? ((count / totalCount) * 100).toFixed(1) : '0' }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8)
  }, [filteredRecords, totalCount])

  const resetFilters = () => {
    setSelectedDpto('TODOS')
    setSelectedMpio('TODOS')
    setSelectedDamage('TODOS')
  }

  // Generador de Donut SVG
  const renderDonutChart = () => {
    if (dptoStats.length === 0) return null
    let cumulativeAngle = 0
    const size = 120
    const center = size / 2
    const radius = 46
    const strokeWidth = 18

    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {dptoStats.map((d, idx) => {
          const fraction = totalCount > 0 ? d.count / totalCount : 0
          const strokeDasharray = `${fraction * 2 * Math.PI * radius} ${2 * Math.PI * radius}`
          const strokeDashoffset = -cumulativeAngle * 2 * Math.PI * radius
          cumulativeAngle += fraction
          const color = DPTO_COLORS[idx % DPTO_COLORS.length]

          return (
            <circle
              key={d.name}
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              transform={`rotate(-90 ${center} ${center})`}
            />
          )
        })}
        <text x={center} y={center - 3} textAnchor="middle" fontSize="12" fontWeight="800" fill="#0f172a" fontFamily="'JetBrains Mono', monospace">
          {totalCount}
        </text>
        <text x={center} y={center + 11} textAnchor="middle" fontSize="7" fontWeight="600" fill="#64748b">
          TOTAL
        </text>
      </svg>
    )
  }

  return (
    <div css={estiloDashboard} className="jimu-widget">
      <div className="dash-container">

        {/* ── Encabezado Institucional ── */}
        <header className="dash-header">
          <div className="dash-brand">
            <img
              src="https://eqchoco.gestiondelriesgo.gov.co/portal/sharing/rest/content/items/90af96c4ec1c46e9b47a691548365763/data"
              alt="Logo UNGRD"
              className="dash-logo-img"
              onError={e => { (e.target as HTMLElement).style.display = 'none' }}
            />
            <div className="dash-title-wrap">
              <div className="dash-pill">
                <span className="dash-pill-dot" />
                <span>UNGRD • CHOCÓ SÍSMICO</span>
              </div>
              <h1 className="dash-heading">{title}</h1>
            </div>
          </div>

          <div className="dash-header-actions">
            <button className="btn-dash-icon" onClick={loadData} title="Recargar datos">
              <Lucide.RefreshCw />
            </button>
          </div>
        </header>

        {/* ── Barra de Filtros en Tiempo Real ── */}
        <div className="dash-filter-bar">
          <select
            className="filter-select"
            value={selectedDpto}
            onChange={e => {
              setSelectedDpto(e.target.value)
              setSelectedMpio('TODOS')
            }}
          >
            <option value="TODOS">📍 Depto: Todos</option>
            {dptoList.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <select
            className="filter-select"
            value={selectedMpio}
            onChange={e => setSelectedMpio(e.target.value)}
          >
            <option value="TODOS">🏙️ Mpio: Todos</option>
            {mpioList.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          <select
            className="filter-select"
            value={selectedDamage}
            onChange={e => setSelectedDamage(e.target.value)}
          >
            <option value="TODOS">⚠️ Daño: Todos</option>
            <option value="Destroyed">🔴 Destruidas</option>
            <option value="Damaged">🟠 Daño Severo</option>
            <option value="Possibly damaged">🟡 Posible Daño</option>
          </select>

          {(selectedDpto !== 'TODOS' || selectedMpio !== 'TODOS' || selectedDamage !== 'TODOS') && (
            <button className="btn-reset-filters" onClick={resetFilters} title="Limpiar todos los filtros">
              <Lucide.RotateCcw />
              <span>Limpiar</span>
            </button>
          )}
        </div>

        {/* ── KPIs Cards Resumen ── */}
        <div className="kpi-grid">
          <div className="kpi-card kpi-total">
            <span className="kpi-title">Evaluadas</span>
            <div className="kpi-value-row">
              <span className="kpi-number">{totalCount}</span>
              <span style={{ fontSize: '0.6rem', color: '#64748b' }}>100%</span>
            </div>
          </div>

          <div className="kpi-card kpi-destroyed">
            <span className="kpi-title" style={{ color: '#b91c1c' }}>Destruidas</span>
            <div className="kpi-value-row">
              <span className="kpi-number" style={{ color: '#ef4444' }}>{destroyedCount}</span>
              <span className="kpi-percent percent-destroyed">{destroyedPct}%</span>
            </div>
          </div>

          <div className="kpi-card kpi-damaged">
            <span className="kpi-title" style={{ color: '#c2410c' }}>Dañadas</span>
            <div className="kpi-value-row">
              <span className="kpi-number" style={{ color: '#f97316' }}>{damagedCount}</span>
              <span className="kpi-percent percent-damaged">{damagedPct}%</span>
            </div>
          </div>

          <div className="kpi-card kpi-possible">
            <span className="kpi-title" style={{ color: '#a16207' }}>Posible Daño</span>
            <div className="kpi-value-row">
              <span className="kpi-number" style={{ color: '#eab308' }}>{possibleCount}</span>
              <span className="kpi-percent percent-possible">{possiblePct}%</span>
            </div>
          </div>
        </div>

        {/* ── Pestañas de Diagramas ── */}
        <div className="diagram-tabs-bar">
          <button
            className={`diagram-tab-btn ${activeTab === 'damage' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('damage')}
          >
            <Lucide.BarChart2 />
            <span>Severidad del Daño</span>
          </button>

          <button
            className={`diagram-tab-btn ${activeTab === 'dpto' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('dpto')}
          >
            <Lucide.PieChart />
            <span>Por Departamento</span>
          </button>

          <button
            className={`diagram-tab-btn ${activeTab === 'mpio' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('mpio')}
          >
            <Lucide.MapPin />
            <span>Ranking Municipios</span>
          </button>

          <button
            className={`diagram-tab-btn ${activeTab === 'type' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('type')}
          >
            <Lucide.Building />
            <span>Tipología / Uso</span>
          </button>
        </div>

        {/* ── Área de Diagramas ── */}
        <div className="dash-content-area">

          {/* 📊 PESTAÑA 1: SEVERIDAD DEL DAÑO */}
          {activeTab === 'damage' && (
            <div className="chart-section-card">
              <div className="chart-card-title">
                <span>Distribución por Severidad del Daño</span>
                <span style={{ fontSize: '0.65rem', color: '#64748b' }}>{totalCount} edificaciones</span>
              </div>

              {/* Barra Destruidas */}
              <div className="bar-item-row">
                <div className="bar-info-row">
                  <span className="bar-label">
                    <span className="bar-tag-dot" style={{ background: DAMAGE_COLORS['Destroyed'] }} />
                    Destruidas (Colapso Total / Inhabitable)
                  </span>
                  <span className="bar-value">{destroyedCount} ({destroyedPct}%)</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${destroyedPct}%`, background: DAMAGE_COLORS['Destroyed'] }} />
                </div>
              </div>

              {/* Barra Dañadas */}
              <div className="bar-item-row">
                <div className="bar-info-row">
                  <span className="bar-label">
                    <span className="bar-tag-dot" style={{ background: DAMAGE_COLORS['Damaged'] }} />
                    Dañadas (Afectación Estructural Severa)
                  </span>
                  <span className="bar-value">{damagedCount} ({damagedPct}%)</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${damagedPct}%`, background: DAMAGE_COLORS['Damaged'] }} />
                </div>
              </div>

              {/* Barra Posible Daño */}
              <div className="bar-item-row">
                <div className="bar-info-row">
                  <span className="bar-label">
                    <span className="bar-tag-dot" style={{ background: DAMAGE_COLORS['Possibly damaged'] }} />
                    Posible Daño (Fisuras / Daño No Estructural)
                  </span>
                  <span className="bar-value">{possibleCount} ({possiblePct}%)</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${possiblePct}%`, background: DAMAGE_COLORS['Possibly damaged'] }} />
                </div>
              </div>
            </div>
          )}

          {/* 🍩 PESTAÑA 2: POR DEPARTAMENTO */}
          {activeTab === 'dpto' && (
            <div className="chart-section-card">
              <div className="chart-card-title">
                <span>Afectación por Departamento</span>
                <span style={{ fontSize: '0.65rem', color: '#64748b' }}>{dptoStats.length} Departamentos</span>
              </div>

              <div className="donut-chart-box">
                {renderDonutChart()}

                <div className="donut-legend">
                  {dptoStats.map((d, idx) => (
                    <div key={d.name} className="legend-item">
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
                        <span className="bar-tag-dot" style={{ background: DPTO_COLORS[idx % DPTO_COLORS.length] }} />
                        {d.name}
                      </span>
                      <span className="bar-value">{d.count} ({d.pct}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 📈 PESTAÑA 3: RANKING DE MUNICIPIOS */}
          {activeTab === 'mpio' && (
            <div className="chart-section-card">
              <div className="chart-card-title">
                <span>Top Municipios con Mayor Número de Edificaciones</span>
                <span style={{ fontSize: '0.65rem', color: '#64748b' }}>Desglose por severidad</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {mpioStats.map(m => {
                  const maxMpio = mpioStats[0]?.total || 1
                  const totalPctOfMax = (m.total / maxMpio) * 100
                  const destSegPct = m.total > 0 ? (m.destroyed / m.total) * 100 : 0
                  const damSegPct = m.total > 0 ? (m.damaged / m.total) * 100 : 0
                  const posSegPct = m.total > 0 ? (m.possible / m.total) * 100 : 0

                  return (
                    <div key={m.name} className="bar-item-row">
                      <div className="bar-info-row">
                        <span className="bar-label">{m.name}</span>
                        <span className="bar-value">
                          {m.total} <span style={{ fontSize: '0.6rem', color: '#64748b' }}>({m.pct}%)</span>
                        </span>
                      </div>
                      <div className="bar-track" style={{ height: '9px' }}>
                        <div style={{ width: `${totalPctOfMax}%`, height: '100%', display: 'flex', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: `${destSegPct}%`, background: DAMAGE_COLORS['Destroyed'] }} title={`Destruidas: ${m.destroyed}`} />
                          <div style={{ width: `${damSegPct}%`, background: DAMAGE_COLORS['Damaged'] }} title={`Dañadas: ${m.damaged}`} />
                          <div style={{ width: `${posSegPct}%`, background: DAMAGE_COLORS['Possibly damaged'] }} title={`Posible daño: ${m.possible}`} />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* 🏛️ PESTAÑA 4: TIPOLOGÍA DE EDIFICACIONES */}
          {activeTab === 'type' && (
            <div className="chart-section-card">
              <div className="chart-card-title">
                <span>Clasificación por Uso de la Edificación</span>
                <span style={{ fontSize: '0.65rem', color: '#64748b' }}>Tipologías clave</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {typeStats.map((t, idx) => (
                  <div key={t.name} className="bar-item-row">
                    <div className="bar-info-row">
                      <span className="bar-label">
                        <span className="bar-tag-dot" style={{ background: DPTO_COLORS[idx % DPTO_COLORS.length] }} />
                        {t.name}
                      </span>
                      <span className="bar-value">{t.count} ({t.pct}%)</span>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: `${t.pct}%`, background: DPTO_COLORS[idx % DPTO_COLORS.length] }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* ── Footer ── */}
        <footer className="dash-footer">
          <div>
            <strong>Fuente:</strong> Verificación UNGRD / INGV • <strong>Capa:</strong> Inventario Consolidado
          </div>
          <div>
            <strong>Total Filtrado:</strong> {totalCount} / {features.length}
          </div>
        </footer>

      </div>
    </div>
  )
}

export default Widget
