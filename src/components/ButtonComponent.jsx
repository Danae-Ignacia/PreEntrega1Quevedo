export default function ButtonComponent({ name, click }) {
  return (
    <>
    <button className="button-header" onClick={click}>
      {name}
    </button>
    </>
  );
}
