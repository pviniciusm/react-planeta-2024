import { Favorite, ThumbDown } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography, styled } from "@mui/material";
import { Atracao } from "../models/atracao.model";
import { useAppDispatch } from "../config/hooks";
import { curtirAtracao, descurtirAtracao } from "../config/modules/atracoes.slice";

interface CardAtracaoProps {
    atracao: Atracao;
}

const HorarioStyled = styled(Box)`
    color: ${(props) => props.theme.palette.secondary.main};
`;

const CardActionsStyled = styled(CardActions)`
    span {
        font-size: 10px;
        margin-left: 4px;
    }
`;

export const CardAtracao = (props: CardAtracaoProps) => {
    const dispatch = useAppDispatch();

    const curtir = () => {
        dispatch(curtirAtracao(props.atracao.id));
    };

    const descurtir = () => {
        dispatch(descurtirAtracao(props.atracao.id));
    };

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

            <CardActionsStyled>
                <Button color="error" onClick={curtir}>
                    <Favorite /> <span>Curti ({props.atracao.curtidas})</span>
                </Button>
                <Button onClick={descurtir}>
                    <ThumbDown /> <span>Muito ruim ({props.atracao.descurtidas})</span>
                </Button>
            </CardActionsStyled>
        </Card>
    );
};
