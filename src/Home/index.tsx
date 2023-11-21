import React, { memo } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import MediaCard from "./components";

function Home() {
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
        <Typography variant="h5" style={{ margin: 20, paddingTop: 10 }}>
          Diagrama Estrutural
        </Typography>
        <Grid container spacing={2} columns={4} style={{ margin: 20 }}>
          <Grid item xs={1}>
            <MediaCard
              nome="Classe"
              texto="Representa a estrutura de um sistema, mostrando as classes, atributos, operações e a relação entre eles."
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Componente"
              texto="Apresenta uma visão estática de como o sistema será implementado e quais os componentes utilizados."
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Estrutura composta"
              texto="Representa a visão de um conjunto de entidades que cooperam entre si para executar uma função específica."
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Implantação"
              texto="Descreve a implementação física de informações geradas pelo programa de software em componentes de hardware."
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Objeto"
              texto="Representa um retrato, em tempo de execução, dos objetos do software e seus inter-relacionamentos."
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Pacote"
              texto="Agrupa elementos de modelagem relacionados, como classes, interfaces e outros pacotes."
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Perfil"
              texto="Define extensões personalizadas da UML para um domínio específico."
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
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Caso de uso"
              texto="Descreve a funcionalidade fornecida por um sistema em termos de atores, seus objetivos e interações."
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Interação"
              texto="Descreve como um conjunto de objetos colabora em algum comportamento."
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Máquina de Estado"
              texto="Descreve uma representação gráfica do comportamento de um objeto, mostrando como ele muda de um estado para outro em resposta a eventos 1."
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default memo(Home)