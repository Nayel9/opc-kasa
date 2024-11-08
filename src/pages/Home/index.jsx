import BgImg from '../../assets/bgimg.jpg';
import '../../utils/style/global.scss';
import Card from '../../components/Card/index.jsx';
import logements from '../../data/logements.json';

function Home() {
  return (
    <div className="MainWrapper">
      <div className="ImgWrapper">
        <h1 className="HomeTitle">Chez vous, partout et ailleurs</h1>
        <img src={BgImg} alt="Background Image" className="BgImage" />
      </div>
      <div className="CardsWrapper">
        {logements.map(({ title, cover }) => (
          <Card key={title} title={title} cover={cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;
