

 var knygos = {
     'Knyga1': {
         'ISBN': 1,
         'Leidimo metai': 2018,
         'Pavadinimas': 'Javascript',
         'Puslapiu skaicius': 300,
         'Kategorija' : 'Grozine literatura'
     },
     'Knyga2': {
         'ISBN': 2,
         'Leidimo metai': 2019,
         'Pavadinimas': 'Javascript',
         'Puslapiu skaicius': 400,
         'Kategorija' : 'Grozine literatura'
     },
     'Knyga3': {
         'ISBN': 3,
         'Leidimo metai': 2017,
         'Pavadinimas': 'Javascript',
         'Puslapiu skaicius': 245,
         'Kategorija' : 'Grozine literatura'
     },
     'Knyga4': {
         'ISBN': 4,
         'Leidimo metai': 2020,
         'Pavadinimas': 'Javascript',
         'Puslapiu skaicius': 500,
         'Kategorija' : 'Grozine literatura'
     },
     'Knyga5': {
         'ISBN': 5,
         'Leidimo metai': 2016,
         'Pavadinimas': 'Javascript',
         'Puslapiu skaicius': 300,
         'Kategorija' : 'Grozine literatura'
     },
     'Knyga6': {
         'ISBN': 6,
         'Leidimo metai': 2019,
         'Pavadinimas': 'Javascript',
         'Puslapiu skaicius': 450,
         'Kategorija' : 'Grozine literatura'
     },
     'Knyga7': {
         'ISBN': 7,
         'Leidimo metai': 2019,
         'Pavadinimas': 'Javascript',
         'Puslapiu skaicius': 255,
         'Kategorija' : 'Grozine literatura'
     },
     'Knyga8': {
         'ISBN': 8,
         'Leidimo metai': 2020,
         'Pavadinimas': 'Javascript',
         'Puslapiu skaicius': 400,
         'Kategorija' : 'Grozine literatura'
     },
     'Knyga9': {
         'ISBN': 9,
         'Leidimo metai': 2018,
         'Pavadinimas': 'Javascript',
         'Puslapiu skaicius': 250,
         'Kategorija' : 'Grozine literatura'
     },
     'Knyga10': {
         'ISBN': 10,
         'Leidimo metai': 2017,
         'Pavadinimas': 'Javascript',
         'Puslapiu skaicius': 480,
         'Kategorija' : 'Grozine literatura'
     },
     'Knyga11': {
         'ISBN': 11,
         'Leidimo metai': 2018,
         'Pavadinimas': 'Javascript',
         'Puslapiu skaicius': 350,
         'Kategorija' : 'Populiarioji psichologija'
     },
     'Knyga12': {
         'ISBN': 12,
         'Leidimo metai': 2020,
         'Pavadinimas': 'Javascript',
         'Puslapiu skaicius': 400,
         'Kategorija' : 'Dalykine literatura'
     }
 }

 for (var item in knygos) {
     console.log(item);

    for (var subitem in knygos[item])
    {
        console.log(subitem + ':' + knygos[item][subitem]);
        if (subitem === 'Leidimo metai')
        {
            if ('Leidimo metai' === '2020')
            {

            }
        }
    }
 }
