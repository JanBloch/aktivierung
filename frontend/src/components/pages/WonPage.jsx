import react, { useState } from "react";
import { Card, CardContent, TextField, Button, CircularProgress } from "@material-ui/core";


const WonPage = ({ socket, setPage }) => {
    return (
        <>
            <Card>
                <CardContent>
                    <h1>You won!</h1>
                    <p>You are the winner!</p>
                </CardContent>
            </Card>
        </>);
}

export default WonPage;
