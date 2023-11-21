import React, { memo } from "react";
import { Box, Grid, Typography, CardMedia } from "@mui/material";
import Paper from "@mui/material/Paper";
import MediaCard from "./components";
import LogoIF from '../images/logoif.png';

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
        <img src={LogoIF} alt="Logo IF" style={{ width: '5%', padding: 30 }}/>
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
              texto=""
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Componente"
              texto=""
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Estrutura composta"
              texto=""
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Implantação"
              texto=""
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Objeto"
              texto=""
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Pacote"
              texto=""
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Perfil"
              texto=""
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
              texto=""
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Caso de uso"
              texto=""
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Interação"
              texto=""
            />
          </Grid>
          <Grid item xs={1}>
            <MediaCard
              nome="Máquina de Estado"
              texto=""
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default memo(Home)