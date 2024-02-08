import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import { CardAtracao } from "./components/CardAtracao";
import { useAppSelector } from "./config/hooks";
import { alternativeTheme } from "./config/themes/alternative.theme";

export function Root() {
    const atracoes = useAppSelector((state) => state.atracoes);

    return (
        <>
            <ThemeProvider theme={alternativeTheme}>
                <CssBaseline />
                <Header />
                <Container>
                    <h1>Lineup</h1>

                    <Grid container>
                        {atracoes.map((item) => (
                            <Grid item xs={12} sm={4} md={3} xl={1}>
                                <CardAtracao atracao={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </ThemeProvider>
        </>
    );
}
