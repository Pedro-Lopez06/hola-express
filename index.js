import express from 'express'
import { engine } from 'express-handlebars'


const app = express()

const port = process.env.port || 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views','./views')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home')
})

const frases = [
    "No se trata de si van a derribarte, se trata de si vas a levantarte cuando lo hagan» —Vince Lombardi, entrenador de fúbol americano",
    "Nadie puede hacerte sentir inferior sin tu consentimiento» —Eleanor Roosevelt",
    "Qué maravilloso es que nadie tenga que esperar ni un segundo para empezar a mejorar el mundo» —Ana Frank",
    "El pesimista ve dificultades en cada oportunidad. El optimista ve oportunidades en cada dificultad» —Winston Churchill",    
    "Muchos piensan en cambiar el mundo, pero casi nadie piensa en cambiarse a sí mismo» —Leon Tolstoi"
]


app.get('/about',(req,res)=>{
    let fraseAleatoria = frases[Math.floor(Math.random()*frases.length)]
    res.render('about', {frase:fraseAleatoria})
    
})

const fraseBroma= [
    "Cásate por la tarde y así no habrás perdido todo el día.",
    "Todo es divertido... siempre y cuando le ocurra a otra persona.",
    "Las mejores cosas de la vida te deshacen el pelo.",
    "Siembra un árbol y harás feliz a un perro.",
    "Ríe y el mundo reirá contigo, ronca y dormirás solo."
]
app.get('/fraseBroma',(req,res)=>{
    let fraseAleatoriaDos = fraseBroma[Math.floor(Math.random()*fraseBroma.length)]
    res.render('fraseBroma', {fraseBroma:fraseAleatoriaDos})
    
})

const pelicula = [
    "Dallas Buyers Club",
    "Donnie Darko",
    "The Pursuit of Happyness",
    "Atrapados sin salida",
    "Into The Wild",
    "In Bruges",
    "Shutter Island"
]
app.get('/peliculas',(req,res)=>{
    let peliculaAleatoriaDos = pelicula[Math.floor(Math.random()*pelicula.length)]
    res.render('peliculas', {pelicula:peliculaAleatoriaDos})
    
})
const fraseMotivacional = [
    "No esperes. Nunca va a ser el momento adecuado —Napoleon Hill",

    "La creatividad es la inteligencia divirtiéndose —Albert Einstein",

    "Rodéate de personas que crean en tus sueños, animen tus ideas, apoyen tus ambiciones, y saquen lo mejor de ti —Roy T. Bennet",

    "No importa lo que te diga la gente, las palabras y las ideas pueden cambiar el mundo —Robin Williams",

    "Nunca eres demasiado viejo para marcarte otra meta o tener un nuevo sueño —C.S. Lewis"
]
app.get('/fraseMotivacionales',(req,res)=>{
    let fraseAleatoriaTres = fraseMotivacional[Math.floor(Math.random()*fraseMotivacional.length)]
    res.render('fraseMotivacionales', {fraseMotivacional:fraseAleatoriaTres})
    
})


app.use((req,res)=>{
    res.status(404)
    res.render('404')
})

app.use((err, req, res, next)=>{
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, ()=>{
    console.log(`Express se ha iniciado en el puerto ${port}- Press Ctrl+c para terminar`)
})
    