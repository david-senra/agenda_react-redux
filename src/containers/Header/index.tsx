import { BotaoLink } from '../../styles'
import * as S from './styles'

const Home = () => (
  <S.Header>
    <S.DivHeader>
      <S.TitleHeader>Agenda de Contatos</S.TitleHeader>
      <BotaoLink to="/">Exibir</BotaoLink>
      <BotaoLink to="/cadastro">Cadastrar</BotaoLink>
    </S.DivHeader>
  </S.Header>
)

export default Home
