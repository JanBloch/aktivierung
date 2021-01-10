import './App.css';
import HomePage from './components/pages/HomePage';
import { Grid } from "@material-ui/core";
import { useState, useEffect } from 'react';
import ErrorPage from './components/pages/ErrorPage';
import RefusedPage from './components/pages/RefusedPage';
import GamePage from "./components/pages/GamePage";
import WonPage from './components/pages/WonPage';
import LostPage from './components/pages/LostPage';
import socket from "./components/socket"
function App() {
    const [page, setPage] = useState("home");
    const [admin, setAdmin] = useState(false);
    const [place, setPlace] = useState(0);
    socket.on("refused", () => {
        setPage("refused");
    });
    socket.on("admin", () => {
        setAdmin(true);
    });
    socket.on("start", () => {
        setPage("game")
    });
    socket.on("wrong", (req) => {
        setPlace(req);
        setPage("lost");
    });
    socket.on("won", () => {
        setPage("won");
    });
    socket.on('disconnect', () => {
        socket.removeAllListeners();
    });
    const startCallback = () => {
        socket.emit("start");
    }
    useEffect(() => {
        console.log(page);
    }, [page])


    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center" style={{ textAlign: "center", minHeight: '100vh' }}>
            <Grid>
                {page == "home" ? <HomePage admin={admin} startCallback={startCallback} /> : null}
                {page == "refused" ? <RefusedPage /> : null}
                {page == "game" ? <GamePage socket={socket} /> : null}
                {page == "won" ? <WonPage /> : null}
                {page == "lost" ? <LostPage place={place} /> : null}
                <div class="copy">
                    <p>Quiz Battle Royal &copy; 2021 Ruben Kober</p>
                </div>
            </Grid>
        </Grid>
    );
}

export default App;
