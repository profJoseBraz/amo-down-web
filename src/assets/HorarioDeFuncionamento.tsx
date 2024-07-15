import './HorarioDeFuncionamento.css';
import Logo3 from './amodown-logo3.png'

const schedule = [
  { day: 'Domingo', hours: 'Dia Todo', dayIndex: 0 },
  { day: 'Segunda-feira', hours: 'Dia Todo', dayIndex: 1 },
  { day: 'Terça-feira', hours: 'Dia Todo', dayIndex: 2 },
  { day: 'Quarta-feira', hours: 'Dia Todo', dayIndex: 3 },
  { day: 'Quinta-feira', hours: 'Dia Todo', dayIndex: 4 },
  { day: 'Sexta-feira', hours: 'Dia Todo', dayIndex: 5 },
  { day: 'Sábado', hours: 'Dia Todo', dayIndex: 6 },
];

function HorarioDeFuncionamento() {
  const todayIndex = new Date().getDay();

  return (
    <div className="container-table">
      <h1>Horário de Funcionamento</h1>
      <div className='table-all'>
        <div className='table-logo'>
          <img src={Logo3}></img> 
        </div>
        <table id="schedule">
          <thead>
            <tr>
              <th>Dia</th>
              <th>Horário</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item) => (
              <tr key={item.dayIndex} className={item.dayIndex === todayIndex ? 'today' : ''}>
                <td>{item.dayIndex === todayIndex ? item.day + ' (hoje)' : item.day}</td>
                <td>{item.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='table-logo'>
          <img src={Logo3}></img> 
        </div>
      </div>
    </div>
  );
}

export default HorarioDeFuncionamento;
