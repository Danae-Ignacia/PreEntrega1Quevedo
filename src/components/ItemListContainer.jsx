import "./ItemListContainer.css";
export default function ItemListContainer({ greeting, textGreeting }) {
  return (
    <>
      <div className="container">
        <h2 className="title-greeting">{greeting}</h2>
        <p className="text-greeting">{textGreeting}</p>
      </div>
    </>
  );
}
