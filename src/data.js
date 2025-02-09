 const data = [
    {
      "id": 1,
      "title": "Final de la Champions League: Real Madrid vs Liverpool",
      "image": "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "tags": ["Champions League", "Real Madrid", "Liverpool", "Fútbol"],
      "user": {
        "name": "Miguel Ángel Torres",
        "avatar": "https://randomuser.me/api/portraits/men/1.jpg"
      },
      "comments": [
        { "user": "Laura Sánchez", "comment": "¡Será un partido histórico!" },
        { "user": "Pedro Ramírez", "comment": "Los dos equipos están en gran forma" }
      ]
    },
    {
      "id": 2,
      "title": "La NBA se prepara para los playoffs",
      "image": "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "tags": ["NBA", "Playoffs", "Baloncesto", "Deportes"],
      "user": {
        "name": "Ana García",
        "avatar": "https://randomuser.me/api/portraits/women/2.jpg"
      },
      "comments": [
        { "user": "Carlos López", "comment": "Los Lakers son favoritos este año" },
        { "user": "María Jiménez", "comment": "No puedo esperar a ver los partidos" }
      ]
    },
    {
      "id": 3,
      "title": "Gran Premio de Fórmula 1 en Mónaco",
      "image": "https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "tags": ["Fórmula 1", "Mónaco", "Automovilismo", "Deportes"],
      "user": {
        "name": "Roberto Martínez",
        "avatar": "https://randomuser.me/api/portraits/men/3.jpg"
      },
      "comments": [
        { "user": "David González", "comment": "El circuito más emblemático" },
        { "user": "Elena Castro", "comment": "Verstappen está imparable" }
      ]
    },
    {
      "id": 4,
      "title": "Torneo de Tenis de Roland Garros",
      "image": "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "tags": ["Tenis", "Roland Garros", "Grand Slam", "Deportes"],
      "user": {
        "name": "Carmen Ruiz",
        "avatar": "https://randomuser.me/api/portraits/women/4.jpg"
      },
      "comments": [
        { "user": "José Luis", "comment": "Nadal es el rey de la tierra batida" },
        { "user": "Isabel Moreno", "comment": "El mejor torneo sobre arcilla" }
      ]
    },
    {
      "id": 5,
      "title": "Mundial de Atletismo 2024",
      "image": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "tags": ["Atletismo", "Mundial", "Deportes", "Competición"],
      "user": {
        "name": "Francisco Morales",
        "avatar": "https://randomuser.me/api/portraits/men/5.jpg"
      },
      "comments": [
        { "user": "Antonio Vega", "comment": "Esperando ver nuevos récords" },
        { "user": "Lucía Díaz", "comment": "El nivel está muy alto este año" }
      ]
    },
    {
      "id": 6,
      "title": "Copa América 2024: Brasil vs Argentina",
      "image": "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "tags": ["Copa América", "Fútbol", "Brasil", "Argentina"],
      "user": {
        "name": "Diego Sánchez",
        "avatar": "https://randomuser.me/api/portraits/men/6.jpg"
      },
      "comments": [
        { "user": "Raúl Jiménez", "comment": "El clásico sudamericano" },
        { "user": "Marina López", "comment": "Messi vs Neymar, duelo de estrellas" }
      ]
    },
    {
      "id": 7,
      "title": "Vuelta Ciclista a España",
      "image": "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "tags": ["Ciclismo", "Vuelta España", "Deportes", "Competición"],
      "user": {
        "name": "Pablo Hernández",
        "avatar": "https://randomuser.me/api/portraits/men/7.jpg"
      },
      "comments": [
        { "user": "Jorge Ruiz", "comment": "Las etapas de montaña serán decisivas" },
        { "user": "Sara Gómez", "comment": "Gran nivel de participantes este año" }
      ]
    },
    {
      "id": 8,
      "title": "Super Bowl LVIII: Chiefs vs 49ers",
      "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "tags": ["NFL", "Super Bowl", "Fútbol Americano", "Deportes"],
      "user": {
        "name": "Luis Torres",
        "avatar": "https://randomuser.me/api/portraits/men/8.jpg"
      },
      "comments": [
        { "user": "Daniel Martín", "comment": "Mahomes está en su mejor momento" },
        { "user": "Andrea Ruiz", "comment": "Será un partido muy reñido" }
      ]
    },
    {
      "id": 9,
      "title": "Mundial de MotoGP: Gran Premio de España",
      "image": "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "tags": ["MotoGP", "Motociclismo", "Deportes", "España"],
      "user": {
        "name": "Marta Rodríguez",
        "avatar": "https://randomuser.me/api/portraits/women/9.jpg"
      },
      "comments": [
        { "user": "Alberto García", "comment": "El circuito de Jerez siempre da espectáculo" },
        { "user": "Rosa Martínez", "comment": "Los pilotos españoles son favoritos" }
      ]
    },
    {
      "id": 10,
      "title": "Liga de Campeones de Voleibol",
      "image": "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "tags": ["Voleibol", "Champions", "Deportes", "Competición"],
      "user": {
        "name": "Cristina López",
        "avatar": "https://randomuser.me/api/portraits/women/10.jpg"
      },
      "comments": [
        { "user": "Manuel Pérez", "comment": "El nivel europeo está muy alto" },
        { "user": "Patricia Sanz", "comment": "Gran ambiente en los pabellones" }
      ]
    }
  ]


  export default data;