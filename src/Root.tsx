import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import { CardAtracao } from "./components/CardAtracao";
import { useAppSelector } from "./config/hooks";
import { alternativeTheme } from "./config/themes/alternative.theme";
import { darkTheme } from "./config/themes/dark.theme";

export function Root() {
    const atracoes = useAppSelector((state) => state.atracoes);
    const isDefaultTheme = useAppSelector((state) => state.theme);

    const theme = isDefaultTheme ? alternativeTheme : darkTheme;

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Container>
                    <h1>Lineup</h1>

                    <Grid container spacing={2}>
                        {atracoes.map((item) => (
                            <Grid item xs={12} sm={4} md={3} xl={1} key={item.id}>
                                <CardAtracao atracao={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </ThemeProvider>
        </>
    );
}
