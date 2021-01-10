import react, { useState } from "react";
import { Card, CardContent, TextField, Button, CircularProgress, Grid } from "@material-ui/core";
import socket from "../socket";

const GamePage = () => {
    const [timer, setTimer] = useState(null);
    const [data, setData] = useState(null);
    const [waiting, setWaiting] = useState(true);
    const [seconds, setSeconds] = useState(0);
    const time = 20;
    socket.on("question", (req) => {
        setData(req);
        setWaiting(false);
    });

    function fixUmlauts(value) {
        return atob(value);
    }
    const answer = (index) => {
        socket.emit("answer", index);
        setWaiting(true);
    }

    return (
        <>
            <Card>
                <CardContent>
                    {
                        waiting ?
                            <>
                                <CircularProgress />
                                <p>Waiting for question...</p>
                            </>
                            :
                            <>
                                <h1>{fixUmlauts(data.question).replace("%3F", "?")}</h1>
                                <Button size="large" variant="outlined" onClick={() => { answer(0) }} style={{ marginRight: 14 }}>{fixUmlauts(data.answers[0])}</Button>
                                <Button size="large" variant="outlined" onClick={() => { answer(1) }} style={{ marginRight: 14 }}>{fixUmlauts(data.answers[1])}</Button>
                                <Button size="large" variant="outlined" onClick={() => { answer(2) }} style={{ marginRight: 14 }}>{fixUmlauts(data.answers[2])}</Button>
                                <Button size="large" variant="outlined" onClick={() => { answer(3) }}>{fixUmlauts(data.answers[3])}</Button>
                            </>

                    }
                </CardContent>
            </Card>
        </>);
}

export default GamePage;
