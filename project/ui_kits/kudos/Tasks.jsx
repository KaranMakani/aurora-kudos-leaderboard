// Aurora Kudos UI Kit — Task list + icons
const TaskIcons = {
  help:     <path d="M20 12a8 8 0 1 0-3.3 6.5L20 20l-1.5-3.3"/>,
  discuss:  <><path d="M4 5h16v12H8l-4 4z"/><path d="M8 10h8M8 13h5"/></>,
  guide:    <><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M4 9h16M9 14h6"/></>,
  event:    <><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/></>,
  feedback: <><path d="M4 6l8 6 8-6"/><rect x="4" y="6" width="16" height="12" rx="2"/></>,
  invite:   <path d="M12 3v18M3 12h18"/>,
};

function TaskIcon({ name }) {
  return (
    <div style={{width:34,height:34,borderRadius:10,display:"grid",placeItems:"center",background:"rgba(93,235,90,.08)",border:"1px solid rgba(93,235,90,.22)",color:"var(--aurora-green)"}}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{width:16,height:16}}>
        {TaskIcons[name]}
      </svg>
    </div>
  );
}

function TaskRow({ icon, name, desc, channel, reward }) {
  return (
    <div style={{display:"grid",gridTemplateColumns:"60px 1fr 180px 120px",alignItems:"center",padding:"18px 24px",borderBottom:"1px solid rgba(255,255,255,.05)",transition:"background .15s"}}>
      <TaskIcon name={icon} />
      <div style={{fontWeight:600,fontSize:15.5,letterSpacing:"-.005em"}}>
        {name}
        <span style={{display:"block",color:"var(--fg-muted)",fontWeight:400,fontSize:13.5,marginTop:3,letterSpacing:0}}>{desc}</span>
      </div>
      <div style={{fontFamily:"var(--font-mono)",fontSize:12,color:"var(--fg-muted)"}}>
        <span style={{display:"inline-block",padding:"3px 8px",border:"1px solid var(--line)",borderRadius:6,background:"rgba(255,255,255,.02)"}}>#{channel}</span>
      </div>
      <div style={{textAlign:"right",fontFamily:"var(--font-mono)",fontSize:14,color:"var(--aurora-green)",fontWeight:500}}>
        +{reward} <small style={{color:"var(--fg-dim)"}}>Kudos</small>
      </div>
    </div>
  );
}

function Tasks() {
  const items = [
    {icon:"help",     name:"Help someone in support",   desc:"Answer a real question and get a ✅ from a mod.",       channel:"help",     reward:10},
    {icon:"discuss",  name:"Start a great discussion",  desc:"Post something thoughtful that gets the community talking.", channel:"general",  reward:15},
    {icon:"guide",    name:"Write a tutorial or guide", desc:"A blog, Twitter thread, or video that helps others onboard.", channel:"showcase", reward:50},
    {icon:"event",    name:"Show up for AMAs & events", desc:"Attend live, ask smart questions, bring the energy.",   channel:"events",   reward:20},
    {icon:"feedback", name:"Ship feedback we act on",   desc:"Spot a bug, suggest a feature, tell us where things break.", channel:"feedback", reward:25},
    {icon:"invite",   name:"Bring a friend who sticks", desc:"Referrals who become active contributors count too.",    channel:"invite",   reward:30},
  ];
  return (
    <section style={{maxWidth:1200,margin:"0 auto",padding:"96px 40px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:16,marginBottom:48}}>
        <span style={{fontFamily:"var(--font-mono)",fontSize:12,letterSpacing:".22em",color:"var(--aurora-grad-pink)",textTransform:"uppercase"}}>03 · Ways to earn</span>
        <h2 style={{fontSize:"clamp(34px,4.6vw,56px)",lineHeight:1.04,letterSpacing:"-.03em",fontWeight:700,margin:0,background:"var(--headline-gradient)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}}>
          Every good deed counts. Here's how they add up.
        </h2>
        <p style={{color:"var(--fg-muted)",fontSize:16,maxWidth:640,margin:0,lineHeight:1.55}}>Kudos aren't farmed — they're awarded by moderators and the community for genuine contributions. Here's the kind of stuff that earns them.</p>
      </div>
      <div style={{border:"1px solid var(--line)",borderRadius:16,overflow:"hidden",background:"linear-gradient(180deg, rgba(21,30,39,.85), rgba(18,56,62,.35))",backdropFilter:"blur(8px)"}}>
        <div style={{display:"grid",gridTemplateColumns:"60px 1fr 180px 120px",padding:"16px 24px",borderBottom:"1px solid var(--line)",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".18em",color:"var(--fg-dim)",textTransform:"uppercase"}}>
          <div></div><div>Activity</div><div>Where</div><div style={{textAlign:"right"}}>Kudos</div>
        </div>
        {items.map((t,i)=><TaskRow key={i} {...t} />)}
      </div>
    </section>
  );
}

window.Tasks = Tasks;
window.TaskRow = TaskRow;
window.TaskIcon = TaskIcon;
