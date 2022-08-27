const frases = [
    "No se trata de si van a derribarte, se trata de si vas a levantarte cuando lo hagan» —Vince Lombardi, entrenador de fúbol americano",
    "Nadie puede hacerte sentir inferior sin tu consentimiento» —Eleanor Roosevelt",
    "Qué maravilloso es que nadie tenga que esperar ni un segundo para empezar a mejorar el mundo» —Ana Frank",
    "El pesimista ve dificultades en cada oportunidad. El optimista ve oportunidades en cada dificultad» —Winston Churchill",    
    "Muchos piensan en cambiar el mundo, pero casi nadie piensa en cambiarse a sí mismo» —Leon Tolstoi"
]

const fraseBroma= [
    "Cásate por la tarde y así no habrás perdido todo el día.",
    "Todo es divertido... siempre y cuando le ocurra a otra persona.",
    "Las mejores cosas de la vida te deshacen el pelo.",
    "Siembra un árbol y harás feliz a un perro.",
    "Ríe y el mundo reirá contigo, ronca y dormirás solo."
]

const pelicula = [
    "Dallas Buyers Club",
    "Donnie Darko",
    "The Pursuit of Happyness",
    "Atrapados sin salida",
    "Into The Wild",
    "In Bruges",
    "Shutter Island"
]

const fraseMotivacional = [
    "No esperes. Nunca va a ser el momento adecuado —Napoleon Hill",

    "La creatividad es la inteligencia divirtiéndose —Albert Einstein",

    "Rodéate de personas que crean en tus sueños, animen tus ideas, apoyen tus ambiciones, y saquen lo mejor de ti —Roy T. Bennet",

    "No importa lo que te diga la gente, las palabras y las ideas pueden cambiar el mundo —Robin Williams",

    "Nunca eres demasiado viejo para marcarte otra meta o tener un nuevo sueño —C.S. Lewis"
]

export function getFrase(){
    
    return frases[idAleatorio(frases)]
}

export function getFraseBroma(){
    return fraseBroma[idAleatorio(fraseBroma)]
}

export function getFrasePelicula(){
    return pelicula[idAleatorio(pelicula)]
}

export function getFraseMotivacional(){
    return fraseMotivacional[idAleatorio(fraseMotivacional)]
}

function idAleatorio(listaFrases){
    const id = Math.floor(Math.random()*listaFrases.length)
    return id
}


