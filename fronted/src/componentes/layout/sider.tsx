const SideBar = () => {
  return (
    <>
      <div className="h-screen w-72 bg-base-150 p-6 flex flex-col gap-5">
        {/* Título */}
        <div className="text-2xl font-bold text-center mb-4">
          Noticias de Fútbol
        </div>

        {/* Últimos Resultados */}
        <div className="bg-base-100 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Últimos Resultados</h3>
          <p className="text-sm mb-1">Real Madrid 2 - 1 Barcelona</p>
          <p className="text-sm mb-1">Manchester City 3 - 0 Liverpool</p>
          <p className="text-sm">Bayern 1 - 1 Dortmund</p>
        </div>

        {/* Estadísticas Destacadas */}
        <div className="bg-base-100 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Estadísticas</h3>
          <p className="text-sm mb-1">
            Máximo goleador: Lionel Messi - 25 goles
          </p>
          <p className="text-sm mb-1">
            Jugador con más asistencias: Kevin De Bruyne - 18 asistencias
          </p>
          <p className="text-sm">
            Equipo más goleador: Manchester City - 68 goles
          </p>
        </div>

        {/* Noticias Rápidas */}
        <div className="bg-base-100 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Noticias Rápidas</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Messi anuncia su renovación con Inter Miami.</li>
            <li>Real Madrid ficha a un nuevo defensa.</li>
            <li>Bayern gana su 33° título de Bundesliga.</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-auto text-center text-gray-500 text-sm">
          Actualizado: 09/04/2026
        </div>
      </div>
    </>
  );
};

export default SideBar;
