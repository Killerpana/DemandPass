"use client";

import { useEffect, useState } from "react";
import { dashboardData } from "@/lib/data";

const d = dashboardData;

type FilterCity = "Todas" | string;
type FilterPrice = "Todos" | string;
type ViewMode = "chart" | "table";

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [cityFilter, setCityFilter] = useState<FilterCity>("Todas");
  const [priceFilter, setPriceFilter] = useState<FilterPrice>("Todos");
  const [fadeKey, setFadeKey] = useState(0);
  const [cityView, setCityView] = useState<ViewMode>("chart");
  const [priceView, setPriceView] = useState<ViewMode>("chart");
  const [exportModal, setExportModal] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setMounted(true), 100);
    const t2 = setTimeout(() => setShowSkeleton(false), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  function applyFilters() {
    setFadeKey(k => k + 1);
  }

  const cities = cityFilter === "Todas"
    ? d.cities
    : d.cities.filter(c => c.name === cityFilter);

  const prices = priceFilter === "Todos"
    ? d.prices
    : d.prices.filter(p => p.range === priceFilter);

  const exportText = `DemandPass — Resumen de campaña
Generado: ${new Date().toLocaleDateString("es-AR")}

KPIs:
- Interesados totales: 12.450
- Reservas condicionales: 4.820
- Fans verificados: 82%
- Precio promedio: USD 74
- Forecast 48hs: 7.800 tickets

Demanda por ciudad:
${d.cities.map(c => `- ${c.name}: ${c.pct}% (${c.fans.toLocaleString("es-AR")} fans)`).join("\n")}

Rango de precio:
${d.prices.map(p => `- ${p.range}: ${p.pct}%`).join("\n")}

Recomendación: Venue 8.000-12.000 personas en Buenos Aires, precio base USD 70.`;

  return (
    <div style={{ paddingBottom: 60 }}>
      {/* Demo banner */}
      <div style={{ background:"rgba(217,119,6,0.08)", borderBottom:"1px solid rgba(217,119,6,0.2)", padding:"10px 24px", textAlign:"center" }}>
        <p style={{ fontSize:12, color:"var(--amber2)", fontWeight:500 }}>
          Vista demo — todos los datos son simulados y no representan información real de ningún artista o evento
        </p>
      </div>

      {/* Header */}
      <div style={{ background:"var(--surface)", borderBottom:"1px solid var(--border)", padding:"20px 24px" }}>
        <div className="wrap">
          <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
                <h1 style={{ fontSize:20, fontWeight:800, letterSpacing:"-0.3px", color:"var(--txt)" }}>Dashboard Productora</h1>
                <span className="badge badge-violet">Beta</span>
              </div>
              <p style={{ fontSize:13, color:"var(--txt2)" }}>
                Lenny Kravitz — Tour Latinoamérica 2025 &nbsp;·&nbsp;{" "}
                <span style={{ color:"var(--emerald2)" }}>Actualizado hace 3 min</span>
              </p>
            </div>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              <button className="btn btn-ghost btn-sm" onClick={() => setExportModal(true)}>📊 Exportar resumen</button>
            </div>
          </div>

          {/* Filters */}
          <div style={{ display:"flex", gap:10, marginTop:16, flexWrap:"wrap", alignItems:"center" }}>
            <span style={{ fontSize:12, color:"var(--txt3)", fontWeight:600 }}>Filtrar:</span>
            {[
              { label:"Ciudad", value:cityFilter, setter:setCityFilter, opts:["Todas", ...d.cities.map(c=>c.name)] },
              { label:"Precio", value:priceFilter, setter:setPriceFilter, opts:["Todos", ...d.prices.map(p=>p.range)] },
            ].map(({label, value, setter, opts}) => (
              <select
                key={label}
                value={value}
                onChange={e => { setter(e.target.value); applyFilters(); }}
                style={{
                  background:"var(--surface2)", border:"1px solid var(--border2)", color:"var(--txt)",
                  padding:"6px 12px", borderRadius:"var(--r8)", fontSize:13,
                  fontFamily:"Outfit, sans-serif", cursor:"pointer",
                }}
              >
                {opts.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            ))}
            {(cityFilter !== "Todas" || priceFilter !== "Todos") && (
              <button className="btn btn-ghost btn-sm" onClick={() => { setCityFilter("Todas"); setPriceFilter("Todos"); setFadeKey(k=>k+1); }}>
                ✕ Limpiar filtros
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="wrap" style={{ paddingTop:24 }}>

        {/* KPIs — skeleton or real */}
        <div className="grid-3" style={{ marginBottom:20 }}>
          {showSkeleton ? (
            Array.from({length:6}).map((_,i) => (
              <div key={i} style={{ height:84, borderRadius:"var(--r12)" }} className="skeleton" />
            ))
          ) : (
            [
              { val:"12.450", label:"Interesados totales", change:"+234 esta semana", color:"var(--emerald2)" },
              { val:"4.820", label:"Reservas condicionales", change:"+89 hoy", color:"var(--emerald2)" },
              { val:"82%", label:"Fans verificados", change:"Sin cambios", color:"var(--txt3)" },
              { val:"USD 74", label:"Precio promedio aceptado", change:"▲ vs USD 68 estimado", color:"var(--emerald2)" },
              { val:"7.800", label:"Forecast tickets 48 hs", change:"Confianza: alta", color:"var(--violet2)" },
              { val:"8–12K", label:"Venue recomendado", change:"Buenos Aires", color:"var(--amber2)" },
            ].map(({ val, label, change, color }) => (
              <div key={label} className="stat-card">
                <div className="stat-val">{val}</div>
                <div className="stat-label">{label}</div>
                <div className="stat-change" style={{ color }}>{change}</div>
              </div>
            ))
          )}
        </div>

        {/* Recommendation */}
        <div style={{ background:"linear-gradient(135deg, #0a1a0e, #081814)", border:"1px solid rgba(16,185,129,0.2)", borderRadius:"var(--r16)", padding:20, marginBottom:20 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"var(--emerald2)" }} />
            <span style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"1.5px", color:"var(--emerald3)" }}>Recomendación automática</span>
          </div>
          <p style={{ fontSize:14, color:"#d1fae5", lineHeight:1.7, marginBottom:14 }}>
            La demanda validada sugiere lanzar una preventa limitada en Buenos Aires, con precio base entre{" "}
            <strong style={{ color:"#6ee7b7" }}>USD 60–90</strong>, cupo inicial de{" "}
            <strong style={{ color:"#6ee7b7" }}>8.000 tickets</strong> y ventana prioritaria para usuarios Plata/Oro.
          </p>
          <div>
            {["Venue 8.000–12.000 personas","Preventa 72 hs antes","Precio base: USD 70"].map(t => (
              <span key={t} className="tag tag-active">{t}</span>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div
          key={fadeKey}
          className="grid-2"
          style={{ marginBottom:20, animation:"fadeInUp 0.3s ease both" }}
        >
          {/* Cities chart */}
          <div className="card">
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
              <p style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"1.5px", color:"var(--txt3)" }}>Demanda por ciudad</p>
              <button
                className="btn btn-ghost btn-sm"
                style={{ fontSize:11, padding:"4px 10px" }}
                onClick={() => setCityView(v => v === "chart" ? "table" : "chart")}
              >
                {cityView === "chart" ? "📋 Tabla" : "📊 Gráfico"}
              </button>
            </div>
            {cityView === "chart" ? (
              cities.map(({ name, pct, fans }) => (
                <BarRow key={name} label={name} pct={pct} sub={`${fans.toLocaleString("es-AR")} fans`} color="linear-gradient(90deg, var(--violet), var(--blue))" animate={mounted} tooltip={`${pct}% del total — ${fans.toLocaleString("es-AR")} fans`} />
              ))
            ) : (
              <table className="data-table">
                <thead><tr><th>Ciudad</th><th>Fans</th><th>%</th></tr></thead>
                <tbody>{cities.map(c => <tr key={c.name}><td>{c.name}</td><td>{c.fans.toLocaleString("es-AR")}</td><td>{c.pct}%</td></tr>)}</tbody>
              </table>
            )}
          </div>

          {/* Price chart */}
          <div className="card">
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
              <p style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"1.5px", color:"var(--txt3)" }}>Rango de precio</p>
              <button
                className="btn btn-ghost btn-sm"
                style={{ fontSize:11, padding:"4px 10px" }}
                onClick={() => setPriceView(v => v === "chart" ? "table" : "chart")}
              >
                {priceView === "chart" ? "📋 Tabla" : "📊 Gráfico"}
              </button>
            </div>
            {priceView === "chart" ? (
              prices.map(({ range, pct }) => (
                <BarRow key={range} label={range} pct={pct} sub={`${pct}%`} color="linear-gradient(90deg, var(--blue), var(--violet2))" animate={mounted} tooltip={`${pct}% de los fans`} />
              ))
            ) : (
              <table className="data-table">
                <thead><tr><th>Rango</th><th>%</th></tr></thead>
                <tbody>{prices.map(p => <tr key={p.range}><td>{p.range}</td><td>{p.pct}%</td></tr>)}</tbody>
              </table>
            )}
          </div>
        </div>

        {/* Levels + Quality */}
        <div className="grid-2" style={{ marginBottom:20 }}>
          <div className="card">
            <p style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"1.5px", color:"var(--txt3)", marginBottom:16 }}>Fans por nivel</p>
            <div style={{ display:"flex", gap:10 }}>
              {d.levels.map(({ name, count, pct, color }) => (
                <div key={name} style={{ flex:1, background:"var(--surface2)", borderRadius:"var(--r12)", padding:14, textAlign:"center", borderTop:`3px solid ${color}`, border:`1px solid var(--border)`, borderTopColor:color }}>
                  <div style={{ fontSize:20, fontWeight:800, color, letterSpacing:"-0.5px" }}>{count.toLocaleString("es-AR")}</div>
                  <div style={{ fontSize:11, color:"var(--txt3)", marginTop:4, fontWeight:500 }}>{name}</div>
                  <div style={{ fontSize:10, color:"var(--txt3)", marginTop:2 }}>{pct}%</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <p style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"1.5px", color:"var(--txt3)", marginBottom:16 }}>Calidad de demanda</p>
            {d.quality.map(({ label, pct, count, color }) => (
              <div key={label} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
                <div style={{ width:8, height:8, borderRadius:"50%", background:color, flexShrink:0 }} />
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                    <span style={{ fontSize:13, color:"var(--txt)" }}>{label}</span>
                    <span style={{ fontSize:12, color, fontWeight:600 }}>{pct}% · {count.toLocaleString("es-AR")}</span>
                  </div>
                  <div className="progress">
                    <div style={{ height:"100%", borderRadius:3, background:color, width:mounted?`${pct}%`:"0%", transition:"width 0.8s ease" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="card">
          <p style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"1.5px", color:"var(--txt3)", marginBottom:16 }}>Beneficios más solicitados</p>
          <div className="grid-2">
            {d.benefits.map(({ label, pct }) => (
              <BarRow key={label} label={label} pct={pct} sub={`${pct}%`} color="linear-gradient(90deg, var(--violet), var(--blue))" animate={mounted} tooltip={`${pct}% de los fans lo eligieron`} />
            ))}
          </div>
        </div>
      </div>

      {/* Export modal */}
      {exportModal && (
        <div
          onClick={() => setExportModal(false)}
          style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.7)", zIndex:500, display:"flex", alignItems:"center", justifyContent:"center", padding:24 }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ background:"var(--surface)", border:"1px solid var(--border2)", borderRadius:"var(--r20)", padding:24, maxWidth:540, width:"100%" }}
          >
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
              <h3 style={{ fontSize:16, fontWeight:700, color:"var(--txt)" }}>📊 Resumen exportable</h3>
              <button className="btn btn-ghost btn-sm" onClick={() => setExportModal(false)}>✕</button>
            </div>
            <textarea
              readOnly
              value={exportText}
              style={{ width:"100%", height:200, background:"var(--surface2)", border:"1px solid var(--border)", color:"var(--txt2)", borderRadius:"var(--r8)", padding:12, fontSize:12, fontFamily:"'JetBrains Mono', monospace", resize:"none", lineHeight:1.7 }}
            />
            <button
              className="btn btn-violet btn-full"
              style={{ marginTop:12 }}
              onClick={() => { navigator.clipboard.writeText(exportText).catch(()=>{}); }}
            >
              Copiar al portapapeles
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function BarRow({ label, pct, sub, color, animate, tooltip }: {
  label: string; pct: number; sub: string; color: string; animate: boolean; tooltip?: string;
}) {
  return (
    <div style={{ marginBottom:14 }} data-tooltip={tooltip}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:5 }}>
        <span style={{ fontSize:13, color:"var(--txt)", fontWeight:500 }}>{label}</span>
        <span style={{ fontSize:12, color:"var(--txt3)" }}>{sub}</span>
      </div>
      <div className="progress">
        <div style={{ height:"100%", borderRadius:3, background:color, width:animate?`${pct}%`:"0%", transition:"width 0.8s ease" }} />
      </div>
    </div>
  );
}
