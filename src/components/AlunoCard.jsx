import './AlunoCard.css';
function AlunoCard({ nome, curso, presente, aoAlternarPresenca }) {
  return (
    <article className={`aluno-card ${presente ? 'card-presente' : 'card-ausente'}`}>
      <div>
        <h2>{nome}</h2>
        <p>{curso}</p>
      </div>

      <div className="status">
        <p>
          Status:{' '}
          <strong>{presente ? 'Presente' : 'Ausente'}</strong>
        </p>

        <button onClick={aoAlternarPresenca}>
          {presente ? 'Marcar ausência' : 'Marcar presença'}
        </button>
      </div>
    </article>
  );
}

export default AlunoCard;