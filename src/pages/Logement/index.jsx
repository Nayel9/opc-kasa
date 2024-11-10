import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import Carrousel from '../../components/Carrousel';
import '../../utils/style/logement.scss';
import Tags from '../../components/Tags';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const [firstName, lastName] = logement.host.name.split(' ');

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="PageLogement">
      <Carrousel id={id} />
      <div className="LogementDetails">
        <div className="HeaderDetails">
          <div className="TitlesWrapper">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            <span>
              <Tags tags={logement.tags} />
            </span>
          </div>
          <div className="HostRating">
            <div className="Host">
              <span className="HostName" data-name={lastName}>
                {firstName}
              </span>
              <img
                src={logement.host.picture}
                alt="Hôte"
                className="HostPicture"
              />
            </div>
            <Rating rating={Number(logement.rating)} />
          </div>
        </div>
        <div className="Collapses">
          <Collapse title="Description">
            <div>{logement.description}</div>
          </Collapse>
          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Logement;
