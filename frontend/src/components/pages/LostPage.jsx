import react, { useState } from "react";
import { Card, CardContent, TextField, Button, CircularProgress } from "@material-ui/core";


const LostPage = ({ socket, setPage, place }) => {
    return (
        <>
            <Card>
                <CardContent>
                    <h1>You lost!</h1>
                    <h4>You got in {place}. place</h4>
                </CardContent>
            </Card>
        </>);
}

export default LostPage;
