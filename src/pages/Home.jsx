import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Tareas } from "../data/data";

function Home({todos}) {

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
          {
            todos.length === 0 ?
            <h2>No hay tareas</h2> :
            todos?.map((Tarea) => (
              <Cards tarea={Tarea} key={Tarea.name} />
            ))

          }
        </div>
      </div>
    </>
  );
}

export default Home;
