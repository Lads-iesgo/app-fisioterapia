import MenuHome from '../components/MenuHome';
import ButtonMenu from '../components/buttonMenu';
import BackPageNav from "../components/backPageNav";

// import icones
import iconAgendamento from "../../assets/menuIcons/Agendamento.png";
import iconCalendar from "../../assets/menuIcons/Calendar.png";




export default function HomePaciente() {
  return (
    
      <MenuHome nome='Paciente' navMenu={<BackPageNav />}>          
         

        <ButtonMenu
          texto="Solicitar atendimento"
          iconSrc={iconAgendamento}            
          />
          <ButtonMenu
          texto="Meus Agendamentos"
          iconSrc={iconCalendar}            
          />        
          <ButtonMenu
          texto="Suporte"
          iconSrc={iconAgendamento}            
          />        
          <ButtonMenu
          texto="Meu Perfil"
          iconSrc={iconAgendamento}            
          />       

      </MenuHome>

      
      
    
  );
}

