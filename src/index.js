const btc = document.getElementById('btc')
const consulta = document.getElementById('consulta')

const api = axios.create({
    baseURL:'https://www.mercadobitcoin.net/api/BTC/ticker/'
});

async function consultar(){
    const response = await api.get();
    const bit = response.data.ticker.high;
    console.log(response.data.ticker.high);
    btc.innerHTML = response.data.ticker.high;
    btc.innerHTML = 'R$' + parseFloat(bit).toFixed(2)
}

consulta.onclick = ()=>{
    consultar();
};

// Previsão

const lblcidade = document.getElementById('lblcidade')
const previsao = document.getElementById('previsao')
const lbltemp = document.getElementById('lbltemp')
const lbldescrip = document.getElementById('lbldescrip')


const ApiWeather = axios.create({
    baseURL:'https://api.hgbrasil.com/weather?format=json-cors&key=7117786f&city_name=Volta_Redonda'
    
    
});

async function Consultarclima(){
    const response = await ApiWeather();
    console.log(response.data.results.city);
    lblcidade.innerHTML = response.data.results.city;

    console.log(response.data.results.temp);
    lbltemp.innerHTML = response.data.results.temp + '°C'

    console.log(response.data.results.description);
    lbldescrip.innerHTML = response.data.results.description
}



previsao.onclick = ()=>{
    Consultarclima();
}

//Cep 

const lblstate = document.getElementById('lblstate')
const encontrar = document.getElementById('encontrar')
const escreva = document.getElementById('escreva')
const lblcomple = document.getElementById('lblcomple')
const lblbair = document.getElementById('lblbair')
const lbllocal = document.getElementById('lbllocal')



const ApiCep = axios.create({
    baseURL:'https://viacep.com.br/ws'
});
 
async function encontre(){
    const cep = escreva.value;
    const response = await ApiCep.get( cep + /json/);
    console.log(response.data.logradouro);
    lblstate.innerHTML = response.data.logradouro;

    console.log(response.data.complemento);
    lblcomple.innerHTML = response.data.complemento;

    console.log(response.data.bairro);
    lblbair.innerHTML = response.data.bairro;

    console.log(response.data.localidade);
    lbllocal.innerHTML = response.data.localidade;
}

encontrar.onclick = ()=>{
    encontre();
}

//Dólar

const cotacao = document.getElementById('cotacao')
const dldolar = document.getElementById('dldolar')

const ApiDol = axios.create({
    baseURL:'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'
})

async function cot(){
    const response = await ApiDol.get();
    console.log(response.data.USDBRL.bid);
    const dol = response.data.USDBRL.bid;
    dldolar.innerHTML = response.data.USDBRL.bid;
    dldolar.innerHTML = 'R$' + parseFloat(dol).toFixed(2)
}

cotacao.onclick = ()=>{
    cot();
}
