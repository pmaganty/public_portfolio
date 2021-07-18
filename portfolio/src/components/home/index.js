import Header from '../header';
import Center from './center';
import Projects from './projects';
import './home.css';

function Home() {
    return (
      <div>
          <Header />
          <Center />
          <Projects />
      </div>
    );
  }
  
  export default Home;