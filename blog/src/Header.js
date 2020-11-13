import './css/Header.css';

const ItemsMenu = ["NOTRE REVOLUTION", "PARTAGE DE FRAIS", "TARIFS", "BLOG", "CONTACT"]
function Header() {
  return (
    <header>
      <img src="./images/logo-com.png"/>
    <menu>
    {ItemsMenu.map(i => {
      return <li><a>{i}</a></li>;
    })}
      </menu>
    </header>
    );
}

export default Header;
