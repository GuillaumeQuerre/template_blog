import "./css/List.css"
import Content from './Card'

const ItemsList = [
  Content(
    {img:"./images/library-com.jpeg",
    alt:"Superbe Bibliothèque",
    h2:"Ecrire en ligne ou sur papier : Les 5 conseils pour choisir le bon support.",
    date: "1ER OCTOBRE 2020",
    tag: ["Commencer à écrire", "Ecrire en ligne"],
    text:"Aliquam ac neque in sem rutrum congue sed ac diam. Aenean lobortis, est vitae hendrerit dignissim. Aliquam porttitor, sem semper ultricies posuere, lorem eros mollis eros, at laoreet eros tellus vitae risus."
  }),
  Content(
    {img:"./images/momentecriture-com.jpg",
    alt:"Personne écrivant sur un carnet vue de près. Gros stylo et carnet à spiral.",
    h2:"Commencer à écrire : Les 5 étapes indispensables pour le 1er chapitre.",
    date: "8 OCTOBRE 2020",
    tag: ["Commencer à écrire", "Ecrire en ligne"],
    text:"Praesent id arcu quis dui finibus vestibulum in semper sem. Quisque viverra a tellus in posuere. Ut vel nulla venenatis, eleifend purus sed, viverra mauris. Sed ultricies eu mi a pretium. "
  }),
  Content(
    {img:"./images/relais-com.jpeg",
    alt:"Passage de relais - course relais ",
    h2:"Ecriture collaborative E1 : Partagez les étapes !",
    date: "15 OCTOBRE 2020",
    tag: ["Ecriture collaborative", "Ecrire en ligne"],
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut neque sed nisl posuere suscipit. Quisque eu laoreet lectus. Duis dapibus ipsum nec turpis dictum efficitur."
  }),
  Content(
    {img:"./images/atelier_ecriture.jpg",
    alt:"Atelier d'écriture : personnes atablées et travaillant sur des carnets et feuilles. Focus sur la table et les mains des participants.",
    h2:"Ecriture collaborative E2 : Astuces pour travailler en groupe efficacement.",
    date: "22 OCTOBRE 2020",
    tag: ["Ecriture collaborative", "Ecrire en ligne"],
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut neque sed nisl posuere suscipit. Quisque eu laoreet lectus. Duis dapibus ipsum nec turpis dictum efficitur."
  })
];
function List() {
  return (
    <div className="grid-container">
      <div className="List">
        <ul>
          {ItemsList.map((i) => {
          return <li>{i}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default List;
