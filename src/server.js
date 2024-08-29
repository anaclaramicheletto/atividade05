import express from "express";
import { config } from "dotenv";

config();

const serverPort = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const emocoes = [
        {
       id:1,
       nome:"Nojinho",
       cor:"verde"         
        },
        {
          id:2,
          nome:"amor",
          cor: "vermelho"
        },
{
          id:3,
          nome:"raiva",
          cor: "vermelho"
        }
      ]

      const personagem = [
        {
         id: 100,
         nome:"totoro",
         studio: "ghibli",
         vivo: true
        },
        {
         id:101,
         nome:"moana",
         studio: "marvel",
         vivo: true
        },
        {           
         id:102,
         nome:"Barbie",
         studio: "mattel",
         vivo: true
     }
]

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello, World!" });
});

app.get("/2tds2", (req, res) => {
  return res.status(200).json({ message: "Hello, 2tds2!" });
});

app.get("/emocoes", (req, res) => {
  return res.status(200).send(emocoes);
});

app.get("/personagens", (req, res) => {
  return res.status(200).send(personagem);
});


app.listen(serverPort, () => {
  console.log(`⚡ Server started on http://localhost:${serverPort}`);
});