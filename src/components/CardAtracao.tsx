import { Favorite, ThumbDown } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography, styled } from "@mui/material";
import { Atracao } from "../models/atracao.model";

interface CardAtracaoProps {
    atracao: Atracao;
}

const HorarioStyled = styled(Box)`
    color: ${(props) => props.theme.palette.secondary.dark};
`;

export const CardAtracao = (props: CardAtracaoProps) => {
    return (
        <Card>
            <CardMedia component="img" height="194" image={props.atracao.urlFoto} />
            <CardContent>
                <Typography variant="h5" color="primary">
                    {props.atracao.nome}
                </Typography>
                <Typography variant="body1">{props.atracao.descricao}</Typography>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <HorarioStyled>
                    <Typography component={"span"} variant="button">
                        Horário:
                    </Typography>
                    <Typography component={"span"} variant="body2">
                        {props.atracao.horario}
                    </Typography>
                </HorarioStyled>
            </CardContent>

            <CardActions>
                <Button color="error">
                    <Favorite /> <span>Curti ({props.atracao.curtidas})</span>
                </Button>
                <Button>
                    <ThumbDown /> Muito ruim ({props.atracao.descurtidas})
                </Button>
            </CardActions>
        </Card>
    );
};
