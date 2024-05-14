import "./SearchComponent.css";
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchComponent() {
  const refInput = useRef(null);

  useEffect(() => {
    console.log('SEARCHCOMPONENT-Efecto funcionando en el onMount');
  }, []);

  return (
    <>
      <section>
        <input
          type="text"
          placeholder="Que buscas?"
          ref={refInput}
        />
        <button className='input-header'> <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
      </section>
    </>
  );
}
