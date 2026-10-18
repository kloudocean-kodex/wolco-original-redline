const areas=[{name:"EPPING",x:47,y:35},{name:"CRAIGIEBURN",x:56,y:25},{name:"WOLLERT",x:50,y:21},{name:"KALKALLO",x:59,y:14},{name:"DONNYBROOK",x:53,y:11}];
export function BuildMap(){
  return <section id="land" className="build-map section-pad surface-ivory">
    <div className="map-copy"><div className="eyebrow">07 / YOUR PLACE</div><h2 className="display-lg">Melbourne,<br/>mapped with intent.</h2><p className="lede">A new block. A place you already know. Bring your site or preferred area to the conversation; WOLCO will confirm feasibility and availability individually.</p><a href="#start" className="text-link">Talk to us about your land</a></div>
    <div className="map-visual"><svg viewBox="0 0 100 70" role="img" aria-label="Illustrative northern Melbourne map; build availability is confirmed individually"><path className="map-line" d="M9 61 C20 44 18 29 32 18 C43 10 58 6 87 7"/><path className="map-line faint" d="M12 52 C29 50 39 42 45 30 C51 17 66 12 92 17"/><path className="map-line faint" d="M21 66 C27 50 37 41 58 37 C72 34 83 26 90 11"/>{areas.map(a=><g key={a.name} className="map-point" transform={`translate(${a.x} ${a.y})`}><circle r="1.15"/><circle className="pulse" r="3.2"/><text x="2.8" y="1">{a.name}</text></g>)}</svg></div>
  </section>;
}
