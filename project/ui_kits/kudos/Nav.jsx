// Aurora Kudos UI Kit — Nav
// Inline logo (with clearspace), nav links, ghost CTA. Active state = green dot underline.
const { useState } = React;

function Logo({ src = "../../assets/aurora-logo-inline-light.png", height = 40 }) {
  return (
    <a className="logo-inline" href="#" aria-label="Aurora" style={{display:"inline-flex",alignItems:"center",padding:"var(--mark-clear)",margin:"calc(-1 * var(--mark-clear))"}}>
      <img src={src} alt="Aurora" style={{height,display:"block",userSelect:"none"}} />
    </a>
  );
}

function NavLink({ children, active }) {
  return (
    <a href="#" className={active ? "active" : ""} style={{position:"relative",color:active?"#fff":"#cfd6e1",fontWeight:500,fontSize:15,transition:"color .15s"}}>
      {children}
      {active && <span style={{position:"absolute",left:"50%",transform:"translateX(-50%)",bottom:-10,width:5,height:5,borderRadius:"50%",background:"var(--aurora-green)",boxShadow:"0 0 10px var(--aurora-green)"}} />}
    </a>
  );
}

function GhostButton({ children, onClick }) {
  return (
    <button onClick={onClick} style={{background:"var(--aurora-white)",color:"var(--aurora-black)",fontWeight:700,fontSize:13,padding:"10px 18px",borderRadius:8,border:0,cursor:"pointer",transition:"transform .15s"}}
      onMouseEnter={e=>e.currentTarget.style.transform="translateY(-1px)"}
      onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}
    >{children}</button>
  );
}

function Nav({ active = "Kudos", onCTA }) {
  const links = ["About","Ecosystem","Community","Developers","Support","Kudos"];
  return (
    <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px 40px",maxWidth:1360,margin:"0 auto",position:"relative",zIndex:2}}>
      <Logo />
      <div style={{display:"flex",gap:32}}>
        {links.map(l => <NavLink key={l} active={l===active}>{l}</NavLink>)}
      </div>
      <GhostButton onClick={onCTA}>Get started</GhostButton>
    </nav>
  );
}

function PromoBanner({ onClick }) {
  return (
    <div style={{position:"relative",zIndex:3,background:"var(--aurora-green)",color:"var(--aurora-black)",fontWeight:700,fontSize:13,padding:"10px 24px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",gap:12,letterSpacing:"-.005em"}}>
      <span style={{transform:"translateY(-1px)"}}>✦</span>
      <span>Kudos is live — the top 10 contributors earn $AURORA every month.</span>
      <a href="#join" onClick={onClick} style={{color:"inherit",textDecoration:"underline",fontWeight:700}}>Join the fun →</a>
    </div>
  );
}

window.Nav = Nav;
window.Logo = Logo;
window.NavLink = NavLink;
window.GhostButton = GhostButton;
window.PromoBanner = PromoBanner;
