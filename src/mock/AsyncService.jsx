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
        img:'../img/pirelli1207012.jpg',
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