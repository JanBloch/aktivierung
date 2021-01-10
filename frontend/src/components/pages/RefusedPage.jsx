import react, { useState } from "react";
import { Card, CardContent, TextField, Button, CircularProgress } from "@material-ui/core";


const RefusedPage = ({ socket, setPage }) => {
    return (
        <>
            <Card>
                <CardContent>
                    <h1>Quiz Battle Royal</h1>
                    <p>Your connection has been refused!<br></br>There's either a game running and/or you have been disqualified!</p>
                </CardContent>
            </Card>
        </>);
}

export default RefusedPage;
