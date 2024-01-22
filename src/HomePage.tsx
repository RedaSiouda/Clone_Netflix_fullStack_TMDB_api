
import Navbar from './Components/Navbar';
import RowMovie from './Components/RowMovie';
import './CSS/Homepage.css';



function HomePage() {
  
  return (
    <div className="homepage">
      <header className="homepage__header">
        <Navbar />
      </header>
      <section className="homepage__banner">
          <img
            src=''
            alt={`Selected Movie`}
            className="homepage__bannerImg"
          />
      </section>
      <section className="homepage__row">
        <RowMovie />
      </section>

    </div>
  );
}

export default HomePage;
