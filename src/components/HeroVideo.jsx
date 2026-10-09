export function HeroVideo(){
 return <div className="home-hero-video">
  <video autoPlay muted loop playsInline preload="auto" poster="/images/jain-desi-video-poster.jpg" aria-label="Jain Desi & Pure introduction">
   <source src="/videos/jain-desi-home.mp4" type="video/mp4"/>
   Your browser does not support video playback.
  </video>
 </div>;
}
