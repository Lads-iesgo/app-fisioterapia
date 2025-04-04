export interface DadosPaciente {
  id: number,
  pacientes: string,
  dataConsulta: string,
  horaConsulta: string,
  fisioterapeuta: string,
  status: string,
}

export interface CardPacienteInterface {
  nomeFisio: string,
  data: string,
  hora: string,
}

export type RootStackParamList = {
  Login: undefined;
  StudentRegister: undefined;
  PasswordRecovery: undefined;
  CardPaciente: undefined;
}