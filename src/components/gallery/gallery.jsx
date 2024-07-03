import { Link } from "react-router-dom";
import logements from "../../datas/logements.json";
import Card from "../card/card";

const Gallery = () => {
    return (
      <section className="gallery">
        {logements.map((logement) => (
          <article key={logement.id}>
            <Link to={`/location/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        ))}
      </section>
    );
  };

export default Gallery;