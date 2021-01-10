import react, { useState } from "react";
import { Card, CardContent, TextField, Button, CircularProgress } from "@material-ui/core";


const HomePage = ({ socket, setPage, admin, startCallback }) => {
    return (
        <>
            <Card>
                <CardContent>
                    <h1>Quiz Battle Royal</h1>
                    {admin ? <>
                    <Button size="large" color="primary" variant="contained" onClick={startCallback}>Start Game</Button>
                    </> : <>
                        <CircularProgress></CircularProgress>
                        <p>Waiting for the host to start the game...</p>
                    </>
                    }
                </CardContent>
            </Card>
        </>);
}

export default HomePage;
