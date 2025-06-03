import { useEffect, useState } from "react";

interface Program {
    id: number;
    title: string;
    synopsis: string;
    poster: string;
    country: string;
    year: number;
}

function ProgramsPage () {
    const [programs, setPrograms] = useState<Program[]>([]);

    useEffect(() => {
        fetch("/api/programs")
        .then((resr) => resr.json())
        .then((data) => setPrograms(data))

    }, []);

    return (
<>
<div>
      <h1>Liste des séries</h1>
        {programs.map((program) => (
          <div key={program.id}>
            <img src={program.poster} alt={program.title} />
            <h2>{program.title}</h2>
            <p>{program.synopsis}</p>
            <p><strong>Pays :</strong> {program.country}</p>
            <p><strong>Année :</strong> {program.year}</p>
          </div>
        ))}
    </div>
</>
    );
}

export default ProgramsPage