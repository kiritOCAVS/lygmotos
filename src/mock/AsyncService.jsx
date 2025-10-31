const productos = [
    {
        id:'01',
        name: 'Cubierta Michelin City Grip 90/90-14',
        description: 'Cubierta de moto Michelin City Grip 90/90-14, ideal para ciudad y carretera.',
        stock: 10,
        price: 109000,
        img:'../img/miche909014.jpg',
        category: 'cubiertas'
    },
    {
        id:'02',
        name: 'Cubierta Pirelli Angel Scooter 120/70-12',
        description: 'Cubierta de moto Pirelli Angel Scooter 120/70-12, ideal para ciudad y carretera.',
        stock: 10,
        price: 75000,
        img:'../img/pirelli207012.jpg',
        category: 'cubiertas'
    },
    {
        id:'03',
        name: 'Cubierta Firestone 90/90-14',
        description: 'Cubierta de moto Firestone 90/90-14, ideal para ciudad y carretera.',
        stock: 10,
        price: 59000,
        img:'../img/fire909014.jpg',
        category: 'cubiertas'
    },
    {
        id:'04',
        name: 'Cubierta IRC 90/90-14',
        description: 'Cubierta de moto IRC 90/90-14, ideal para ciudad y carretera.',
        stock: 10,
        price: 75000,
        img:'../img/irc909014.jpg',
        category: 'cubiertas'
    },
    {
        id:'05',
        name: 'Casco Vertigo V32 Vanguard',
        description: 'Vertigo está diseñado para brindarte una experiencia inolvidable en cada uno de tus viajes. Sus cascos cuentan con una estructura compacta y que se adapta a la perfección, preservando al máximo tu seguridad y garantizando travesías cómodas y divertidas.',
        stock: 10,
        price: 63300,
        img:'../img/vertigo.png',
        category: 'cascos'
    },
    {
        id:'06',
        name: 'Casco Moto Rebatible Peels Urban Dynamic Doble Visor',
        description: 'Además de ser extremadamente ligero, el modelo es extremadamente práctico para los motociclistas que no renuncian a la seguridad de un casco cerrado pero aman la practicidad de uno abierto. El casco está inyectado en termoplástico de alta absorción, lo que garantiza mucha seguridad en sus recorridos. El U-RB2 tiene decoración de calcas con barniz protector y pintura más resistente. Con un sistema de admisión de aire superior e inferior, el casco es ideal para uso urbano y en carretera.',
        stock: 10,
        price: 140000,
        img:'../img/peels.png',
        category: 'cascos'
    },
    {
        id:'07',
        name: 'Puños -manillares Honda Glh',
        description: 'Puños de manillar Honda GLH, ideales para mejorar el agarre y la comodidad en la conducción.',
        stock: 10,
        price: 41800,
        img:'../img/manillar1.png',
        category: 'accesorios'
    },
    {
        id:'08',
        name: 'Guantes Térmicos Impermeables Táctil Moto Touch',
        description: 'Guantes térmicos impermeables táctiles para moto, ideales para mantener tus manos calientes y secas en condiciones climáticas adversas.',
        stock: 10,
        price: 75000,
        img:'../img/guantes1.png',
        category: 'accesorios'
    }
]

export const getProductos = () => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Ups... algo salió mal')
            } else {
                resolve(productos)
            }
        }, 2000)
    })
}

export const getOneProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let prod= productos.find( p => p.id === id)
            resolve(prod)
        }, 2000)
    })
}