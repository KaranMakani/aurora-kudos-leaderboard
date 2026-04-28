// Aurora Kudos UI Kit — Cosmic backdrop (starfield + radial glows)
function Backdrop() {
  return (
    <>
      <div style={{content:"",position:"fixed",inset:0,pointerEvents:"none",zIndex:0,
        background:`radial-gradient(900px 500px at 85% -5%, rgba(93,235,90,.12), transparent 60%),
          radial-gradient(1100px 600px at 10% 10%, rgba(18,56,62,.55), transparent 60%),
          radial-gradient(1400px 700px at 50% 110%, rgba(18,56,62,.7), transparent 60%),
          linear-gradient(180deg, var(--aurora-black), var(--aurora-black))`}} />
      <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:1,opacity:.35,
        backgroundImage:`
          radial-gradient(1.4px 1.4px at 20% 30%, #fff 50%, transparent 51%),
          radial-gradient(1px 1px at 70% 15%, #fff 50%, transparent 51%),
          radial-gradient(1.2px 1.2px at 40% 60%, #fff 50%, transparent 51%),
          radial-gradient(1px 1px at 90% 45%, #fff 50%, transparent 51%),
          radial-gradient(1px 1px at 15% 80%, #fff 50%, transparent 51%),
          radial-gradient(1px 1px at 85% 75%, #fff 50%, transparent 51%),
          radial-gradient(1px 1px at 55% 90%, #fff 50%, transparent 51%),
          radial-gradient(1px 1px at 35% 25%, #fff 50%, transparent 51%)`}} />
    </>
  );
}
window.Backdrop = Backdrop;
