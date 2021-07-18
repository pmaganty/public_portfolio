import Header from '../header';
import Center from './center';
import Projects from './projects';
import Footer from '../footer';
import './home.css';

function Home() {
    return (
      <div>
          <Header />
          <Center />
          <Projects />
          <Footer />
      </div>
    );
  }
  
  export default Home;