import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Featured from './components/Featured';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Featured />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
