const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors({
    origin: '*'
}));
const server = require("http").Server(app);
const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
    debug: true,
});
app.use("/peerjs", peerServer);
server.listen(process.env.PORT || 5000);