import "./css/List.css"
import Content from './Card'
function List() {
  return (
    <div className="grid-container">
      <div className="List">
            <img src="./images/logo-com.png"/>
      <img src="./test.png"/>
        <ul>
          <li>
            <Content/>
          </li>
          <li>
            <Content/>
          </li>
          <li>
            <Content/>
          </li>
          <li>
            <Content/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
