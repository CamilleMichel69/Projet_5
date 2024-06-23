import { NavLink } from "react-router-dom";
import '../../style/composants/error.scss';

function NotFound() {
  return (
    <section className="error">
        <p className="error__number">404</p>
        <p className="error__text">
            <span>Oups! La page que </span><span>vous demandez n'existe pas.</span>
        </p>
        <div className="error__linkContainer">
        <NavLink to="/" className="error__link">
            Retourner sur la page d'accueil
        </NavLink>
        </div>
    </section>
  );
}

export default NotFound;