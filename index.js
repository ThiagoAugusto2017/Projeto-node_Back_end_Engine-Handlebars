const express = require('express'); // pacote
const exphbs = require('express-handlebars'); // pacote handlebars
const app = express(); // express trocamos pela palavra app



const hbs = exphbs.create({
  partialsDir: ["views/partials/"], // pegamos a configuração
});


app.engine("handlebars", hbs.engine); //! como vamos usra o partials temos que alterar a configuração
//?app.engine('handlebars', exphbs.engine()); // puxamos o mesmo

app.set('view engine', 'handlebars');

app.use(express.static('public'))


app.get('/Deckboard', (req, res) => {

const items = ['itens1','itens2','itens3']

  res.render('Deckboard', {items})//! aqui falamos para o front oque sera mostrado pelo VIEWS

});

app.get('/', (req, res) => { //! ira redenrenciar a pasta que esta em home, cada pagina tem o seu app.get()

  const user = { //* dados que vai para o VIEWS sem tratamento
    name: 'thiago augusto',
    sobrenome: 'dos santos',
    age: 34,
  };
  const carro = {   //! temos que parametrizar no RENDER
    modelo: 'honda',
    cor: 'preto'
  };
  const autenticador = true //* se esta condição for false nao irei aparecer no front pois ela e uma condição
                          //! temos que parametrizar no RENDER

  const approved = true //* se esta condição

  res.render('home', {user: user,carro,autenticador,approved}); //! aqui falamos para o front oque sera mostrado pelo VIEWS, na pagina do HOME
                                      //! podemos adicionar mais dados do lado do user se quiser
})                                    // * res.render('home', {user: user}, <qualquer dado dinamico >)
                                     //* mas relacionamos o mesmo com o dentro do get
                                    //* app.get() // colocamos so os dados finais que ira para o front a logica fica fora


app.get("/blogpost", function (req, res) {
  const post = {
    title: "Aprender Node.js",
    category: "Node.js",
    body: "Node.js é muito utilizado na programação hoje em dia",
    comments: 4,
  };

  res.render("blogpost", { post });
});


app.get("/blog", function (req, res) {
  const posts = [
    {
      title: "Aprender Node.js",
      category: "Node.js",
      body: "Node.js é muito utilizado na programação hoje em dia",
      comments: 4,
    },
    {
      title: "PHP ainda vale a pena?",
      category: "PHP",
      body: "",
      comments: 12,
    },
    {
      title: "Os segredos de JavaScript",
      category: "JavaScript",
      body: "",
      comments: 5,
    },
  ];

  res.render("blog", { posts });
});





app.listen(3000,()=>{ console.log('listening on port 3000')});
