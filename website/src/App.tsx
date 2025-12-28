import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import Explorer from './components/Explorer';
import PaperWallet from './components/PaperWallet';
import PaymentRequest from './components/PaymentRequest';
import MiningCalculator from './components/MiningCalculator';
import AddressValidator from './components/AddressValidator';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <div id="explorer">
        <Explorer />
      </div>
      <div id="paper-wallet-section">
        <PaperWallet />
      </div>
      <div id="payment-request">
        <PaymentRequest />
      </div>
      <div id="mining-calculator">
        <MiningCalculator />
      </div>
      <div id="address-validator">
        <AddressValidator />
      </div>
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
