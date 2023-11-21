import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface MediaCardProps {
  nome: string;
  texto: string;
}

export default function MediaCard({ nome, texto }: MediaCardProps) {
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
        <Button size="small">PDF</Button>
        <Button size="small">Exemplo</Button>
      </CardActions>
    </Card>
  );
}
