import { CharacterMarquee } from "./components/CharacterMarquee";
import { DownloadCta } from "./components/DownloadCta";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Worlds } from "./components/Worlds";

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main>
        <Hero />
        <Features />
        <CharacterMarquee />
        <Worlds />
        <DownloadCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
