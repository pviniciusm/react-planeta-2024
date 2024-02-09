import { AppBar, Avatar, Switch, Toolbar, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { mudarTema } from "../config/modules/theme.slice";
import { ThemeSwitch } from "./ThemeSwitch";
import { useAppSelector } from "../config/hooks";

const ToolbarStyled = styled(Toolbar)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-family: "Protest Riot";
    }
`;

export const Header = () => {
    const dispatch = useDispatch();
    const theme = useAppSelector((state) => state.theme);

    const mudar = () => {
        dispatch(mudarTema());
    };

    return (
        <AppBar position="static">
            <ToolbarStyled>
                <Avatar src="https://res.cloudinary.com/netpdv/image/upload/c_fit,q_80/rw29rc5qicvxeova0dyr" />

                <div>
                    <h2>PLANETA ATLÂNTIDA 2024</h2>
                </div>

                <div>
                    <ThemeSwitch onChange={mudar} />
                    {theme ? "Default Theme" : "Dark Theme"}
                </div>
            </ToolbarStyled>
        </AppBar>
    );
};
