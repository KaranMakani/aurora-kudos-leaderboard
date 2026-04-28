// Aurora Kudos UI Kit — Final CTA card + Footer
function FinalCTA({ onJoin }) {
  return (
    <div style={{margin:"112px auto 80px",maxWidth:1200,padding:"0 40px"}}>
      <div style={{position:"relative",borderRadius:20,overflow:"hidden",padding:"72px 56px",background:"radial-gradient(700px 340px at 20% 20%, rgba(93,235,90,.18), transparent 60%),radial-gradient(700px 340px at 85% 90%, rgba(18,56,62,.9), transparent 60%),linear-gradient(180deg, var(--aurora-cloud-black), var(--aurora-black))",border:"1px solid var(--line-2)",display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:40,alignItems:"center"}}>
        <div>
          <h2 style={{fontSize:"clamp(36px,4.6vw,54px)",margin:"0 0 16px",letterSpacing:"-.03em",fontWeight:700,lineHeight:1.05,background:"var(--headline-gradient)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}}>
            Ready to make your mark? Join the fun.
          </h2>
          <p style={{color:"var(--fg-muted)",fontSize:17,lineHeight:1.55,margin:"0 0 24px",maxWidth:440}}>
            Sign up in under a minute. Start helping, start earning, start climbing. The top of the leaderboard is closer than you think.
          </p>
          <CTAPrimary href="#join" onClick={onJoin}>Join the fun</CTAPrimary>
          <span style={{display:"block",marginTop:16,fontSize:12.5,color:"var(--fg-dim)",fontFamily:"var(--font-mono)",lineHeight:1.55}}>
            Participating implies acceptance of the <a href="#" style={{color:"var(--fg-muted)",textDecoration:"underline",textDecorationColor:"rgba(255,255,255,.2)"}}>Kudos Program Terms & Conditions</a>.
          </span>
        </div>
        <div style={{position:"relative",height:300}}>
          <Medal variant="m2" place="2ND" val="$150" />
          <Medal variant="m1" place="1ST" val="$200" />
          <Medal variant="m3" place="3RD" val="$100" />
        </div>
      </div>
    </div>
  );
}

function Medal({ variant, place, val }) {
  const styles = {
    m1:{background:"var(--aurora-green)",color:"var(--aurora-black)",left:"30%",top:20,zIndex:3,width:190,height:190,boxShadow:"0 0 40px rgba(93,235,90,.35)"},
    m2:{background:"var(--aurora-white)",color:"var(--aurora-black)",left:"2%",top:80,zIndex:2,width:160,height:160},
    m3:{background:"var(--aurora-dark-green)",color:"var(--aurora-green)",right:"2%",top:100,zIndex:1,width:160,height:160,borderColor:"var(--aurora-green)"},
  };
  return (
    <div style={{position:"absolute",borderRadius:"50%",display:"grid",placeItems:"center",fontFamily:"var(--font-mono)",fontWeight:700,border:"4px solid var(--aurora-black)",transition:"transform .3s",...styles[variant]}}>
      <div style={{textAlign:"center",lineHeight:1.1}}>
        <div style={{fontSize:11,letterSpacing:".18em",opacity:.75}}>{place}</div>
        <div style={{fontSize:26,marginTop:4,letterSpacing:"-.02em",fontWeight:800}}>{val}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{borderTop:"1px solid var(--line)",marginTop:40,padding:"56px 40px 40px",maxWidth:1360,marginLeft:"auto",marginRight:"auto",display:"grid",gridTemplateColumns:"1.3fr 1fr 1fr 1fr 1fr",gap:32,color:"var(--fg-muted)",fontSize:14}}>
      <div>
        <Logo height={22} />
        <p style={{color:"var(--fg-muted)",maxWidth:280,margin:"14px 0 0",fontSize:13.5,lineHeight:1.55}}>A layer‑2 home for community‑driven projects. Kudos is our way of saying thanks — with receipts.</p>
      </div>
      {[
        {h:"Program",items:["Ways to earn","Leaderboard","Join the fun"]},
        {h:"Community",items:["Discord","Telegram","Forum","X / Twitter"]},
        {h:"Resources",items:["Docs","Blog","Press kit","FAQ"]},
        {h:"Legal",items:["Terms & conditions","Privacy","Contact"]},
      ].map(col=>(
        <div key={col.h}>
          <h4 style={{color:"var(--aurora-white)",fontSize:14,margin:"0 0 14px",fontWeight:700}}>{col.h}</h4>
          <ul style={{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:10}}>
            {col.items.map(i=><li key={i}><a href="#" style={{color:"inherit",textDecoration:"none"}}>{i}</a></li>)}
          </ul>
        </div>
      ))}
      <div style={{gridColumn:"1/-1",paddingTop:24,borderTop:"1px solid var(--line)",display:"flex",justifyContent:"space-between",fontFamily:"var(--font-mono)",fontSize:12,color:"var(--fg-dim)"}}>
        <span>© 2026 Aurora Labs — Kudos Program</span><span>Next payout · 08d 14h 22m</span>
      </div>
    </footer>
  );
}

window.FinalCTA = FinalCTA;
window.Medal = Medal;
window.Footer = Footer;
