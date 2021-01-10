const app = require('express')();
const express = require('express');
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const axios = require('axios');
const log = require('./log');

app.use(express.static('./build'));

const lobby = [];
let admin = null;
let hasStarted = false;
let answered = 0;
let correct = null;
let initial = 0;

async function getQuestion() {
    let difficulty = lobby.length > (initial / 3 * 2) ? "easy" : lobby.length > (initial / 3) ? "medium" : "hard";
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=1&difficulty=${difficulty}&type=multiple&encode=base64`);
    console.log(data);
    let answers = data.results[0].incorrect_answers;
    answers.push(data.results[0].correct_answer);
    answers = shuffle(answers);
    correct = answers.findIndex(element => element == data.results[0].correct_answer);
    return { "question": data.results[0].question, "answers": answers }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

io.on("connection", (socket) => {
    if (!hasStarted) {
        lobby.push(socket.id);
        if (admin == null) {
            admin = socket.id;
            socket.emit("admin")
        }
        console.log(socket.id);
        socket.on("start", () => {
            hasStarted = true;
            initial = lobby.length;
            io.emit("start");
            getQuestion().then((question) => io.emit("question", question));

        });
        socket.on("answer", (i) => {
            answered++;
            console.log(answered);
            console.log(lobby.length);
            if (lobby.length == 1) {
                socket.emit("won");
                socket.disconnect();
                return;
            }
            if (i !== correct) {
                socket.emit("wrong", lobby.length);
                if (answered >= lobby.length && lobby.length > 1) {
                    getQuestion().then((question) => io.emit("question", question));
                    answered = 0;
                }
                socket.disconnect();

            } else {
                if (answered >= lobby.length && lobby.length > 1) {
                    getQuestion().then((question) => io.emit("question", question));
                    answered = 0;
                } else if (lobby.length == 1) {
                    socket.emit("won");
                    answered = 0;
                    socket.disconnect();
                }
            }
            if (lobby.length == 1) {
                io.emit("won");
                answered = 0;
                return;
            }
        });

        socket.on("timeup", () => {
            if (lobby.length == 1) {
                io.emit("won");
                return;
            } else {
                socket.emit("wrong", lobby.length);
            }
            socket.disconnect();
            if (lobby.length == 1) {
                io.emit("won");
                return;
            }
        })
        socket.on("disconnect", () => {
            const index = lobby.findIndex(player => player == socket.id);
            if (index >= 0) {
                lobby.splice(index, 1);
                if (admin == socket.id) admin = null;
                console.log(socket.id + " disconnected");
            }
            if (lobby.length == 0) {
                hasStarted = false;
            }
        })
    } else {
        socket.emit("refused");
        console.log(socket.id + " has been refused")
        socket.disconnect();
    }
})

http.listen(3000, () => {
    log('listening on *:3000');
});
