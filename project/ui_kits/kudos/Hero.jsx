// Aurora Kudos UI Kit — Hero + CTA
function Eyebrow({ children, dotColor = "var(--aurora-green)" }) {
  return (
    <span style={{display:"inline-flex",alignItems:"center",gap:10,fontFamily:"var(--font-mono)",fontSize:12,color:"var(--fg-muted)",letterSpacing:".2em",textTransform:"uppercase",padding:"8px 14px",border:"1px solid var(--line)",borderRadius:999,background:"rgba(21,30,39,.6)",backdropFilter:"blur(6px)"}}>
      <span style={{width:6,height:6,borderRadius:"50%",background:dotColor,boxShadow:`0 0 10px ${dotColor}`,animation:"aurora-pulse 1.6s ease-in-out infinite"}} />
      {children}
    </span>
  );
}

function GradientHeadline({ children, size = 104 }) {
  return (
    <h1 style={{fontFamily:"var(--font-display)",fontSize:`clamp(48px, 8vw, ${size}px)`,lineHeight:.98,fontWeight:700,margin:"24px 0",letterSpacing:"-.035em",background:"var(--headline-gradient)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}}>
      {children}
    </h1>
  );
}

function CTAPrimary({ children, href = "#", onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={href} onClick={onClick}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{position:"relative",display:"inline-flex",alignItems:"center",gap:12,padding:"16px 24px",borderRadius:10,fontWeight:700,fontSize:15,background:"var(--aurora-green)",color:"var(--aurora-black)",border:"1px solid var(--aurora-green)",textDecoration:"none",letterSpacing:"-.005em",transition:"transform .15s, box-shadow .2s",transform:hover?"translateY(-1px)":"translateY(0)",boxShadow:hover?"0 10px 32px -8px rgba(93,235,90,.55)":"none"}}>
      {children}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{transform:hover?"translate(3px,-3px)":"translate(0,0)",transition:"transform .2s"}}>
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

function Hero({ onCTA }) {
  return (
    <section style={{maxWidth:1080,margin:"48px auto 80px",padding:"40px 32px 0",textAlign:"center"}}>
      <Eyebrow>Community rewards · live now</Eyebrow>
      <GradientHeadline>
        Earn Kudos.<br/>Get rewarded<br/>in $AURORA.
      </GradientHeadline>
      <p style={{fontSize:19,lineHeight:1.55,color:"#c5d1d4",maxWidth:640,margin:"0 auto 40px",fontWeight:400}}>
        Kudos is a reputation token and a way to recognize the community members who show up, help out, and build with us. Each month, the top 10 contributors split the pot.
      </p>
      <CTAPrimary href="#join" onClick={onCTA}>Join the fun</CTAPrimary>
      <RewardChips />
    </section>
  );
}

function RewardChips() {
  const rewards = [
    {p:"01", a:"$200", top:true},{p:"02", a:"$150", top:true},{p:"03", a:"$100", top:true},
    {p:"04", a:"$50"},{p:"05", a:"$30"},{p:"06", a:"$20"},{p:"07", a:"$20"},{p:"08", a:"$20"},{p:"09", a:"$20"},{p:"10", a:"$20"},
  ];
  return (
    <div style={{margin:"64px auto 0",maxWidth:860,display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10}}>
      {rewards.map(r => (
        <div key={r.p} style={{
          border:`1px solid ${r.top?"rgba(93,235,90,.38)":"var(--line)"}`,
          background:r.top?"linear-gradient(180deg,rgba(93,235,90,.1),rgba(21,30,39,.5))":"rgba(21,30,39,.5)",
          borderRadius:12,padding:"14px 12px",textAlign:"left",backdropFilter:"blur(6px)",
          display:"flex",flexDirection:"column",gap:6
        }}>
          <span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--fg-dim)",letterSpacing:".12em"}}>{r.p}</span>
          <span style={{fontSize:20,fontWeight:700,letterSpacing:"-.015em",color:r.top?"var(--aurora-green)":"inherit"}}>
            {r.a} <small style={{color:"var(--fg-muted)",fontWeight:500,fontSize:13}}>in $AURORA</small>
          </span>
        </div>
      ))}
    </div>
  );
}

window.Hero = Hero;
window.Eyebrow = Eyebrow;
window.GradientHeadline = GradientHeadline;
window.CTAPrimary = CTAPrimary;
window.RewardChips = RewardChips;
