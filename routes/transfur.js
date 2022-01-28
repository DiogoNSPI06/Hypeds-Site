const express = require("express");
const router = express.Router();

router.get("/transfur", (req, res) => {
  res.send(`Você clicou aqui pois se pergunta oq caralhos é TransFurmation, e bom. É o seguinte:
  
  TransFurmation é algo experimental, porém, funcional e comprovado. E que é o processo de transformação de 
  um ser humano normal(eca) em algo muito mais foda e bonito. O que no caso é um furry.
  
  As TransFurmations tem como objetivo te transformar em sua fursona. Por meio de células T. Descobertas á certo tempo atrás.
  Elas são capazes de realizar uma troca de função biológica...... Click Here To See More`)
})

module.exports = router;