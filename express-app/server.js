const express = require('express');
const app = express();
const router = express.Router();
const path = __dirname + '/views';
const filePath = `${__dirname}/views`;

router.use((req, res, next) => {
    console.log("/" + req.method);
    next();
});

router.get("/", (req, res) => res.sendFile(filePath+'/index.html'));
router.get("/about", (req, res) => res.sendFile(filePath+'/about.html'));
router.get("/contact", (req, res) => res.sendFile(filePath+'/contact.html'));

app.use("/", router);
app.use("*", (req, res) => res.sendFile(path + "/404.html"));
app.use('/static', express.static('public'));

app.listen(3000, () => console.log("Live at Port 3000"));