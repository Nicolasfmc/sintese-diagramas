import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface MediaCardProps {
  nome: string;
  texto: string;
  onClickOne: string;
  onClickTwo: () => void;
}

export default function MediaCard({ nome, texto, onClickOne, onClickTwo }: MediaCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={4}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {texto}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={onClickOne} target="_blank" rel="noopener noreferrer">PDF</Button>
        <Button size="small" onClick={onClickTwo}>Exemplo</Button>
      </CardActions>
    </Card>
  );
}
