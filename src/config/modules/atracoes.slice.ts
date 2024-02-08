import { createSlice } from "@reduxjs/toolkit";
import { Atracao } from "../../models/atracao.model";

const state: Atracao[] = [
    {
        id: "1",
        nome: "Fresno",
        curtidas: 0,
        descricao: "Teste",
        descurtidas: 0,
        horario: "20:00",
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-fresno.png",
    },
    {
        id: "2",
        nome: "Alok",
        curtidas: 0,
        descricao: "Teste",
        descurtidas: 0,
        horario: "20:00",
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-alok.png",
    },
    {
        id: "3",
        nome: "Luiza Sonza",
        curtidas: 0,
        descricao: "Teste",
        descurtidas: 0,
        horario: "20:00",
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-luisasonza.png",
    },
    {
        id: "4",
        nome: "NX Zero",
        curtidas: 0,
        descricao: "Teste",
        descurtidas: 0,
        horario: "20:00",
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-nxzero.png",
    },
    {
        id: "5",
        nome: "Paralamas do Sucesso",
        curtidas: 0,
        descricao: "Teste",
        descurtidas: 0,
        horario: "20:00",
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-osparalamas.png",
    },
    {
        id: "6",
        nome: "Armandinho",
        curtidas: 0,
        descricao: "Teste",
        descurtidas: 0,
        horario: "20:00",
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-armandinho.png",
    },
];

const atracoesSlice = createSlice({
    name: "atracoes",
    initialState: state,
    reducers: {},
});

export default atracoesSlice.reducer;
