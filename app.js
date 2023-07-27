const express = require('express');
const app = express();
const port = 3000;

app.use('/css', express.static('public/assets/css'));
app.use('/css/cadastro', express.static('public/assets/css_Cadastro'));
app.use('/css/eletronicos', express.static('public/assets/css_Eletronicos'));
app.use('/css/pelucias', express.static('public/assets/css_Pelucias'));
app.use('/css/cards', express.static('public/assets/css_Cards'));


app.use('/js', express.static('public/assets/js'));

app.use('/img', express.static('public/assets/img'));
app.use('/img/eletronicos', express.static('public/assets/img_Eletronicos'));
app.use('/img/pelucias', express.static('public/assets/img_Pelucias'));
app.use('/img/cards', express.static('public/assets/img_Cards'));

/*Pagina Principal*/
app.get('/',function(req,res){

    res.sendFile(__dirname+'/public/index.html')
})
app.get('/contato',function(req,res){

    res.sendFile(__dirname+'/public/Cadastro/contato.html')
})

/*Logins*/
app.get('/empresa',function(req,res){

    res.sendFile(__dirname+'/public/Cadastro/empresa.html')
})
app.get('/usuarios',function(req,res){

    res.sendFile(__dirname+'/public/Cadastro/criar_conta.html')
})
app.get('/login',function(req,res){

    res.sendFile(__dirname+'/public/Cadastro/login.html')
})
app.get('/perfil',function(req,res){

    res.sendFile(__dirname+'/public/Cadastro/perfil.html')
})

/*Eletronicos*/
app.get('/Pagina_Eletronicos',function(req,res){

    res.sendFile(__dirname+'/public/Eletronicos/Pagina_Eletronicos.html')
})
app.get('/controlexboxone',function(req,res){

    res.sendFile(__dirname+'/public/Eletronicos/controlexboxone.html')
})
app.get('/cruiser',function(req,res){

    res.sendFile(__dirname+'/public/Eletronicos/cruiser.html')
})
app.get('/dualshock3',function(req,res){

    res.sendFile(__dirname+'/public/Eletronicos/dualshock3.html')
})
app.get('/dualshock4',function(req,res){

    res.sendFile(__dirname+'/public/Eletronicos/dualshock4.html')
})
app.get('/galaxys22',function(req,res){

    res.sendFile(__dirname+'/public/Eletronicos/galaxys22.html')
})
app.get('/iphone13',function(req,res){

    res.sendFile(__dirname+'/public/Eletronicos/iphone 13.html')
})
app.get('/iphonexr',function(req,res){

    res.sendFile(__dirname+'/public/Eletronicos/iphonexr.html')
})
app.get('/jbltour',function(req,res){

    res.sendFile(__dirname+'/public/Eletronicos/jbl tour.html')
})
app.get('/jbltune',function(req,res){

    res.sendFile(__dirname+'/public/Eletronicos/jbl tune.html')
})
app.get('/logitechgpro',function(req,res){

    res.sendFile(__dirname+'/public/Eletronicos/logitechgpro.html')
})
app.get('/xbox360',function(req,res){

    res.sendFile(__dirname+'/public/Eletronicos/xbox360.html')
})
app.get('/zflip',function(req,res){

    res.sendFile(__dirname+'/public/Eletronicos/zflip.html')
})

/*Pelucias*/
app.get('/Pagina_Pelucias',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/Pagina_Pelucias.html')
})
app.get('/anya',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/anya.html')
})
app.get('/basil',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/basil.html')
})
app.get('/bokuto',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/bokuto.html')
})
app.get('/frisk',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/frisk.html')
})
app.get('/itachi',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/itachi.html')
})
app.get('/kenma',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/kenma.html')
})
app.get('/mob',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/mob.html')
})
app.get('/oikawa',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/oikawa.html')
})
app.get('/omori',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/omori.html')
})
app.get('/power',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/power.html')
})
app.get('/rei',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/rei.html')
})
app.get('/saiki',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/saiki.html')
})
app.get('/saitama',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/saitama.html')
})
app.get('/sans',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/sans.html')
})
app.get('/sasuke',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/sasuke.html')
})
app.get('/scara',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/scara.html')
})
app.get('/shop',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/shop.html')
})
app.get('/tanjiro',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/tanjiro.html')
})
app.get('/toriel',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/torel.html')
})
app.get('/zenitsu',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/zenitsu.html')
})
app.get('/zerotwo',function(req,res){

    res.sendFile(__dirname+'/public/Pelucias/zerotwo.html')
})

/*Cards*/
app.get('/Pagina_Cards',function(req,res){

    res.sendFile(__dirname+'/public/Cards/Pagina_Cards.html')
})
app.get('/dbz',function(req,res){

    res.sendFile(__dirname+'/public/Cards/dbz.html')
})
app.get('/mk',function(req,res){

    res.sendFile(__dirname+'/public/Cards/mk.html')
})
app.get('/netflix70',function(req,res){

    res.sendFile(__dirname+'/public/Cards/netflix70.html')
})
app.get('/p20',function(req,res){

    res.sendFile(__dirname+'/public/Cards/p20.html')
})
app.get('/p150',function(req,res){

    res.sendFile(__dirname+'/public/Cards/p150.html')
})
app.get('/ps250',function(req,res){

    res.sendFile(__dirname+'/public/Cards/ps250.html')
})
app.get('/roblox',function(req,res){

    res.sendFile(__dirname+'/public/Cards/roblox.html')
})
app.get('/s50',function(req,res){

    res.sendFile(__dirname+'/public/Cards/s50.html')
})
app.get('/s100',function(req,res){

    res.sendFile(__dirname+'/public/Cards/s100.html')
})
app.get('/xbox50',function(req,res){

    res.sendFile(__dirname+'/public/Cards/xbox50.html')
})
app.get('/xbox100',function(req,res){

    res.sendFile(__dirname+'/public/Cards/xbox100.html')
})
app.get('/ps50',function(req,res){

    res.sendFile(__dirname+'/public/Cards/ps50.html')
})
app.get('/voltar',function(req,res){

    res.sendFile(__dirname+'/public/Cards/Pagina_Cards.html')
})


app.use(express.json());


const usuarios = require('./controllers/usuarios');
const empresas = require('./controllers/empresas');


app.use('/usuarios', usuarios);
app.use('/empresas', empresas);

app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`);
});

