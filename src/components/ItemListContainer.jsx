export default function ItemListContainer({greeting, textGreeting }) {
    return (
        <>
        <div className="container text-center">
        <h2 className="pt-2 text-center">{greeting}</h2>
        <p className="text-center">{textGreeting}</p>
        </div>
        </>
    );
    
}