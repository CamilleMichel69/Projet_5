import '../../../style/composants/host.scss';

function Host({ name, picture }) {
  return (
    <div className="host">
        <span className="host__name">{name}</span>
        <img src={picture} alt={name} className="host__picture" />
    </div>
  );
}
  
export default Host;