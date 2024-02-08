import { Provider } from "react-redux";
import "./App.css";
import { persistedStore, store } from "./config/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistedStore}>
                    <h1>Teste</h1>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
