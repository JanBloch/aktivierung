import react, { useState } from "react";
import { Card, CardContent, TextField, Button } from "@material-ui/core";


const ErrorPage = ({ socket, setPage }) => {
    const [username, setUsername] = useState("");
    return (
        <>
            <Card>
                <CardContent>
                    <h1>Error</h1>
                    <h4>A critical error occured!</h4><p>This is my fault and I'm sorry that you had to experience this error.<br/>Please try to refresh the page.</p>
                    <Button variant="contained" color="primary" onClick={() => {window.location.reload()}} >Refresh</Button>
                </CardContent>
            </Card>
        </>);
}

export default ErrorPage;
