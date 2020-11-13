import './css/Card.css';

function Card(prop) {
  return (
    <div className="card">
      <div className="img-col">
        <img src={prop.img} alt={prop.alt}/>
      </div>
      <div className="text-col">
        <div className="Content">
          <p className="date">LE {prop.date}</p>
          <h2>{prop.h2}</h2>
          <p className="text">{prop.text}</p>
        </div>
        <div className="Buttons">
          <ul className="listTag">{prop.tag.map(i => {
          return <li className="listTagItem"><a className="tagButton">{i}</a></li>;
          })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
