import React, { memo, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import MediaCard from "./components";
import CustomModal from "../components/Modal"

function Home() {
  const [isModalOpen, setOpenModal] = useState<boolean>(false)
  const [modalChild, setModalChild] = useState<React.ReactElement>(<></>)

  function handleClickTwo(img: string) {
    setOpenModal(true);
    setModalChild(<img src={require(`../images/ex_${img}.png`)} />)
  }

  function getPath(v: string): string {
    return process.env.PUBLIC_URL + v;
  }

  return (
    <Box style={{ padding: 10 }}>
      <Paper
        style={{
          width: '100%',
          height: 120,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        elevation={4}
      >
        <img src={require('../images/logoif.png')} alt="Logo IF" style={{ width: '5%', padding: 30 }}/>
        <Typography style={{ padding: 30 }}>Nicolas Ferreira - 2023</Typography>
      </Paper>
      <Box
        style={{
          width: '100%',
          height: (window.innerHeight / 4) * 3,
        }}
      >
        <CustomModal children={modalChild} handleClose={() => setOpenModal(false)} open={isModalOpen}/>
        <Typography variant="h5" style={{ margin: 20, paddingTop: 10 }}>
          Diagrama Estrutural
        </Typography>
        <Grid container spacing={2} columns={4} style={{ margin: 20 }}>
          <Grid item xs={1}>
            <MediaCard
              nome="Classe"
              texto="Representa a estrutura de um sistema, mostrando as classes, atributos, operações e a relação entre eles."
              onClickOne={getPath('/pdfs/classes.pdf')}
              onClickTwo={() => handleClickTwo('classe')}
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Componente"
              texto="Apresenta uma visão estática de como o sistema será implementado e quais os componentes utilizados."
              onClickOne={getPath('/pdfs/componentes.pdf')}
              onClickTwo={() => handleClickTwo('componente')}
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Estrutura composta"
              texto="Representa a visão de um conjunto de entidades que cooperam entre si para executar uma função específica."
              onClickOne={'https://medium.com/documenta%C3%A7ao-uml/diagrama-de-estrutura-composta-eeddded01802'}
              onClickTwo={() => handleClickTwo('est_composta')}
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Implantação"
              texto="Descreve a implementação física de informações geradas pelo programa de software em componentes de hardware."
              onClickOne={getPath('/pdfs/implantacao.pdf')}
              onClickTwo={() => handleClickTwo('implantacao')}
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Objeto"
              texto="Representa um retrato, em tempo de execução, dos objetos do software e seus inter-relacionamentos."
              onClickOne={getPath('/pdfs/objetos.pdf')}
              onClickTwo={() => handleClickTwo('objeto')}
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Pacote"
              texto="Agrupa elementos de modelagem relacionados, como classes, interfaces e outros pacotes."
              onClickOne={getPath('/pdfs/pacotes.pdf')}
              onClickTwo={() => handleClickTwo('pacote')}
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Perfil"
              texto="Define extensões personalizadas da UML para um domínio específico."
              onClickOne={getPath('/pdfs/perfil.pdf')}
              onClickTwo={() => handleClickTwo('perfil')}
            />
          </Grid>
        </Grid>
        <Typography variant="h5" style={{ margin: 20 }}>
          Diagrama de Comportamento
        </Typography>
        <Grid container spacing={2} columns={4} style={{ margin: 20 }}>
          <Grid item xs={1}>
            <MediaCard
              nome="Atividade"
              texto="Descreve fluxos de trabalho de um sistema em um nível mais alto de abstração."
              onClickOne={getPath('/pdfs/atividades.pdf')}
              onClickTwo={() => handleClickTwo('atividade')}
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Caso de uso"
              texto="Descreve a funcionalidade fornecida por um sistema em termos de atores, seus objetivos e interações."
              onClickOne={getPath('/pdfs/casos.pdf')}
              onClickTwo={() => handleClickTwo('caso')}
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Tempo"
              texto="Representa a evolução temporal das interações entre objetos em um sistema, destacando a duração de atividades e a ordem de execução."
              onClickOne={getPath('/pdfs/tempo.pdf')}
              onClickTwo={() => handleClickTwo('tempo')}
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Comunicação"
              texto="Ilustra as trocas de mensagens entre objetos em um sistema, enfatizando a colaboração e a estrutura das interações."
              onClickOne={getPath('/pdfs/comunicacao.pdf')}
              onClickTwo={() => handleClickTwo('comunicacao')}
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Sequência"
              texto="Mostra a ordem temporal das mensagens trocadas entre objetos em um sistema, proporcionando uma visão detalhada das interações ao longo do tempo."
              onClickOne={getPath('/pdfs/sequencia.pdf')}
              onClickTwo={() => handleClickTwo('sequencia')}
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Visão geral de interação"
              texto="Oferece uma perspectiva abrangente das relações e interações entre objetos em um sistema, destacando os principais elementos e suas conexões de forma simplificada."
              onClickOne={getPath('/pdfs/interacao.pdf')}
              onClickTwo={() => handleClickTwo('interacao')}
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Máquina de Estado"
              texto="Descreve uma representação gráfica do comportamento de um objeto, mostrando como ele muda de um estado para outro em resposta a eventos."
              onClickOne={getPath('/pdfs/mq_estados.pdf')}
              onClickTwo={() => handleClickTwo('mq_estado')}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default memo(Home)