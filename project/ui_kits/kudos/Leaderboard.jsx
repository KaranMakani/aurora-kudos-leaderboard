// Aurora Kudos UI Kit — Leaderboard (live-updating)
function LiveDot() {
  return <span style={{width:8,height:8,borderRadius:"50%",background:"var(--aurora-green)",boxShadow:"0 0 10px var(--aurora-green)",animation:"aurora-pulse 1.6s ease-in-out infinite"}} />;
}

function initials(name){ return (name.replace(/[^a-z0-9]/gi,"").slice(0,2) || "??").toUpperCase(); }

function Rank({ n }) {
  const cls = n===1?"g1":n===2?"g2":n===3?"g3":"";
  const base = {display:"inline-grid",placeItems:"center",width:34,height:34,borderRadius:"50%",fontFamily:"var(--font-mono)",fontSize:13,fontWeight:500};
  const styles = {
    g1:{...base,background:"var(--aurora-green)",border:"1px solid var(--aurora-green)",color:"var(--aurora-black)",fontWeight:700,boxShadow:"0 0 20px rgba(93,235,90,.45)"},
    g2:{...base,background:"rgba(255,255,255,.9)",border:"1px solid #fff",color:"var(--aurora-black)",fontWeight:700},
    g3:{...base,background:"var(--aurora-dark-green)",border:"1px solid var(--aurora-green)",color:"var(--aurora-green)",fontWeight:700},
    "" :{...base,background:"rgba(255,255,255,.04)",border:"1px solid var(--line)",color:"#c5cdda"}
  };
  return <span style={styles[cls]}>{n}</span>;
}

function Avatar({ name }) {
  return (
    <span style={{width:28,height:28,borderRadius:"50%",background:"var(--aurora-dark-green)",display:"grid",placeItems:"center",fontSize:10.5,fontWeight:700,color:"var(--aurora-green)",border:"1px solid rgba(93,235,90,.3)",fontFamily:"var(--font-mono)"}}>{initials(name)}</span>
  );
}

function SourceBadge({ src }) {
  return (
    <span style={{display:"inline-flex",alignItems:"center",gap:6,padding:"2px 8px",borderRadius:6,background:"rgba(93,235,90,.08)",color:"var(--aurora-green)",fontFamily:"var(--font-mono)",fontSize:11,border:"1px solid rgba(93,235,90,.22)"}}>
      {src==="github" ? "◆" : "●"} {src}
    </span>
  );
}

function Delta({ d }) {
  const cls = d>0?"up":d<0?"down":"same";
  const color = d>0?"var(--aurora-green)":d<0?"var(--danger)":"var(--fg-dim)";
  const tri = d>0 ? <span style={{width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderBottom:`6px solid ${color}`}} /> :
              d<0 ? <span style={{width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:`6px solid ${color}`}} /> :
                    <span style={{width:8,height:2,background:color}} />;
  return (
    <div style={{fontFamily:"var(--font-mono)",fontSize:12.5,color,display:"flex",alignItems:"center",gap:6}}>
      {tri}{d===0?"—":(d>0?`+${d}`:d)}{d!==0?" ranks":""}
    </div>
  );
}

function Leaderboard() {
  const SEED = [
    {name:"leotcn", pts:1740, src:"discord"},
    {name:"syedwaris", pts:1470, src:"discord"},
    {name:"praise_ali", pts:1185, src:"discord"},
    {name:"jeancash251", pts:1040, src:"discord"},
    {name:"kevlahr", pts:985, src:"discord"},
    {name:"Oodokha", pts:930, src:"github"},
    {name:"obdsidian", pts:860, src:"discord"},
    {name:"zaynche22", pts:790, src:"discord"},
    {name:"youngmister", pts:740, src:"discord"},
    {name:"craigmorroti", pts:655, src:"discord"},
  ];
  const [state, setState] = useState(SEED.map((u,i)=>({...u,prevRank:i+1,delta:0,flash:false})));
  const [lastUpdate, setLastUpdate] = useState("just now");

  React.useEffect(()=>{
    const id = setInterval(()=>{
      setState(prev=>{
        const next = prev.map(u=>({...u,flash:false}));
        const n = Math.random()<0.35 ? 2 : 1;
        const picks = new Set();
        while(picks.size<n) picks.add(Math.floor(Math.random()*next.length));
        picks.forEach(i=>{
          next[i].pts += Math.floor(5 + Math.random()*35);
          next[i].flash = true;
        });
        next.sort((a,b)=>b.pts-a.pts);
        next.forEach((u,i)=>{ u.delta = u.prevRank - (i+1); u.prevRank = i+1; });
        return next;
      });
      setLastUpdate("just now");
      setTimeout(()=>setLastUpdate("a few seconds ago"), 4000);
    }, 3200);
    return ()=>clearInterval(id);
  },[]);

  return (
    <section style={{maxWidth:1200,margin:"0 auto",padding:"96px 40px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:16,marginBottom:48}}>
        <span style={{fontFamily:"var(--font-mono)",fontSize:12,letterSpacing:".22em",color:"var(--aurora-grad-pink)",textTransform:"uppercase"}}>02 · Leaderboard</span>
        <h2 style={{fontSize:"clamp(34px,4.6vw,56px)",lineHeight:1.04,letterSpacing:"-.03em",fontWeight:700,margin:0,background:"var(--headline-gradient)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}}>
          The top 10 right now. Live.
        </h2>
        <p style={{color:"var(--fg-muted)",fontSize:16,maxWidth:640,margin:0,lineHeight:1.55}}>Updating as Kudos come in. Resets at the end of every month — fresh pot, fresh climb.</p>
      </div>

      <div style={{border:"1px solid var(--line)",borderRadius:16,overflow:"hidden",background:"linear-gradient(180deg, rgba(21,30,39,.92), rgba(16,24,32,.85))",backdropFilter:"blur(8px)"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 22px",borderBottom:"1px solid var(--line)",background:"rgba(18,56,62,.25)"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,fontWeight:700,fontSize:15}}>
            <LiveDot />Leaderboard <span style={{color:"var(--fg-dim)",fontWeight:400,fontFamily:"var(--font-mono)",fontSize:12,marginLeft:6}}>· live</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"1px solid var(--line)",borderRadius:8,background:"rgba(255,255,255,.02)",color:"#c5cdda",fontSize:13}}>
            <span style={{color:"var(--fg-dim)",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".1em",textTransform:"uppercase"}}>Range</span>
            <span>Apr 01 — Apr 30, 2026</span>
          </div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"80px 1fr 160px 160px",padding:"12px 24px",borderBottom:"1px solid var(--line)",fontFamily:"var(--font-mono)",fontSize:11,color:"var(--fg-dim)",letterSpacing:".18em",textTransform:"uppercase"}}>
          <div>Rank</div><div>User</div><div>Trend</div><div style={{textAlign:"right"}}>Kudos (AURKu)</div>
        </div>

        <div>
          {state.map((u,i)=>(
            <div key={u.name} style={{display:"grid",gridTemplateColumns:"80px 1fr 160px 160px",alignItems:"center",padding:"14px 24px",borderBottom:"1px solid rgba(255,255,255,.04)",position:"relative",background:u.flash?"rgba(93,235,90,.04)":"transparent",transition:"background .6s"}}>
              <div><Rank n={i+1} /></div>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <Avatar name={u.name} />
                <div style={{fontWeight:600,fontSize:14.5,letterSpacing:"-.005em"}}>{u.name}<span style={{color:"var(--fg-dim)",fontWeight:400,marginLeft:2}}>#0</span></div>
                <SourceBadge src={u.src} />
              </div>
              <Delta d={u.delta} />
              <div style={{textAlign:"right",fontFamily:"var(--font-mono)",fontSize:15,fontWeight:700}}>{u.pts.toLocaleString()}<span style={{color:"var(--fg-dim)",fontWeight:400,fontSize:12,marginLeft:4}}>AURKu</span></div>
            </div>
          ))}
        </div>

        <div style={{padding:"14px 22px",borderTop:"1px solid var(--line)",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"var(--font-mono)",fontSize:12,color:"var(--fg-dim)"}}>
          <span>Last update · {lastUpdate}</span>
          <a href="#" style={{color:"var(--aurora-green)",textDecoration:"none"}}>View full leaderboard →</a>
        </div>
      </div>
    </section>
  );
}

window.Leaderboard = Leaderboard;
