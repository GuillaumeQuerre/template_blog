import './css/Footer.css';

const Navigation= ["Mentions légales", "Conditions générales", "Presse", "Contact"]
function Footer() {
  return (
    <footer>
      <div className="marge-out"> </div>
      <div className="footer-content">
        <div className="copyright">Epictopus © Tous droits réservés - 2020</div>
        <div className="marge"></div>
        <ul className="nav">
          {Navigation.map(i => {
           return <li><a>{i}</a></li>;
          })}
        </ul>
      </div>
      <div className="marge-out"> </div>
    </footer>
  );
}

export default Footer;
