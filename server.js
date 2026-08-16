const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/check-answer", (req, res) => {
    const answer = String(req.body.answer || "").trim().toLowerCase();

    if (answer === "martyr") {
        return res.json({
            correct: true,
            message: "CORRECT!!!"
        });
    }

    if (answer === "zuntata") {
        return res.json({
            correct: true,
            message: "WOW YOU DID IT OK ???????"
        });
    }

    return res.json({
        correct: false,
        message: "WRONG. try again."
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});