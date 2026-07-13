import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

function PrivacyApp() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav homePath="../" />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer privacyHref="./" />
    </div>
  );
}

export default PrivacyApp;
