import BgImg from '../../assets/bgimg.jpg';
import '../../utils/style/home.scss';
import Card from '../../components/Card/index.jsx';
import logements from '../../data/logements.json';

function Home() {
  return (
    <div className="MainWrapper">
      <div className="ImgWrapper">
        <h1 className="HomeTitle">Chez vous, partout et ailleurs</h1>
        <img src={BgImg} alt="Background Image" className="BgImage" loading="lazy" rel="preload"/>
      </div>
      <div className="CardsWrapper">
        {logements.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;
