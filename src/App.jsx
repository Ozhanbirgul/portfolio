import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Test from "./Test";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
    <section>
      <Services />
    </section>
    <section>
      <Portfolio/>
    </section>
    <section id="Contact">Contact</section> 
    {/*<Test />
    <Test />*/}
  </div>;
};

export default App;
