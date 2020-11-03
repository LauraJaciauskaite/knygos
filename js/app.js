 /*   (function () {

        //dvieju dimensiju asociatyvus

        var studentai = {
            'Jonas': {
                'akodas': 1,
                'adresas': 'Pievu g. 1,Kaunas',
                'ivertinimai': {
                    'php': 10,
                    'js': 8,
                    'Java': 9
                }
            },
            'Petras': {
                'akodas': 896,
                'adresas': 'Tilto g. 1,Kaunas',
                'ivertinimai': {
                    'php': 9,
                    'js': 6,
                    'Java': 3
                }
            },
            'Andrius': {
                'akodas': 567,
                'adresas': 'Rutu g. 1,Kaunas',
                'ivertinimai': {
                    'php': 9,
                    'js': 4,
                    'Java': 7
                }
            },
        }

        for (var item in studentai) {
            console.log(item);
            console.log('Duomenys');
            for (var subitem in studentai[item]){
                    if (subitem === 'ivertinimai'){
                         console.log("Ivertinimai:");
                    for(let subject in studentai[item][subitem]){
                        console.log(subject + ": "+ studentai[item][subitem][subject])
                    }
                }else{
                        console.log(subitem + ':' + studentai[item][subitem]);
                    }
            }
        }


    })();
  */

 var knygos = {
     'Knyga1': {
         'ISBN': 1,
         'Leidimo metai': 2018,
         'Pavadinimas': 'Mano mintys debesyse',
         'Puslapiu skaicius': 300
     },
     'Knyga2': {
         'ISBN': 2,
         'Leidimo metai': 2019,
         'Pavadinimas': 'Php',
         'Puslapiu skaicius': 400
     },
     'Knyga3': {
         'ISBN': 3,
         'Leidimo metai': 2017,
         'Pavadinimas': 'Javascript',
         'Puslapiu skaicius': 245
     }
 }

 for (var item in knygos) {
     console.log(item);
     console.log('Savybes');
     for (var subitem in knygos[item]) {
         console.log(subitem + ':' + knygos[item][subitem]);
     }
 }