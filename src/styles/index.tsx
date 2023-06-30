import InputMask from "react-input-mask";

import { createGlobalStyle, styled } from 'styled-components'
import { Cores, Fontes } from './variaveis'
import { Link } from 'react-router-dom'

export type TituloType = {
  ativo: boolean
}

export type BotaoEditarCancelarType = {
  categoria: 'editar' | 'cancelar'
}

export type BotaoRemoverType = {
  categoria: string
}

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

@font-face {
  font-family: 'Rose Velt';
  src: local('Rose Velt'),
  url(../assets/fonts/Rose\ Velt\ Personal\ Use\ Only.ttf)
}
`

export const Container = styled.div`
  max-width: 1024px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 640px) {
    max-width: 70%;
  }
`

export const Titulo = styled.h2<TituloType>`
  font-family: ${Fontes.fonteRoseVelt};
  display: block;
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => !props.ativo? Cores.corOito : Cores.corNove};
`

export const TituloFormulario = styled.h2`
  font-family: ${Fontes.fonteRoseVelt};
  display: block;
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: bold;
  color: ${Cores.corOito};
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${Cores.corCinco};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoLink = styled(Link)`
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${Cores.corAzulEscura};
  border-radius: 8px;
  margin-right: 8px;
  text-decoration: none;

  &:hover {
    background-color: ${Cores.corAzulMaisEscura};
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${Cores.corVerdeClara};
`

export const BotaoEditarCancelar = styled(Botao)<BotaoEditarCancelarType>`
  background-color: ${(prop) => prop.categoria == 'editar'? Cores.corQuatro : Cores.corDoze};
`

export const BotaoRemover = styled(Botao)<BotaoRemoverType>`
  background-color: ${Cores.corNove};
`

export const BotaoLink2 = styled(BotaoLink)`
  background-color: ${Cores.corVerdeClara};
  font-size: 30px;
  padding-top: 10px;
  padding-bottom: 10px;

  &:hover {
    background-color: ${Cores.corVerdeMaisEscura};
  }
`

export const BotaoCadastrar = styled(Botao)`
  background-color: ${Cores.corVerdeClara};
  width: 150px;
  font-size: 18px;
  margin-top: 30px;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const Telefone = styled(InputMask)`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`


export default EstiloGlobal
