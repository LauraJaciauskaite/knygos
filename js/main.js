(function () {

    //dvieju dimensiju asociatyvus

    var studentai = {
        'Jonas': {
            'akodas': 1,
            'adresas': 'Pievu g. 1,Kaunas'
            'ivertinimai': {
                'php': 10,
                'js': 8,
                'Java': 9
            }
        },
        'Petras': {
            'akodas': 896,
            'adresas': 'Tilto g. 1,Kaunas'
            'ivertinimai': {
                'php': 9,
                'js': 6,
                'Java': 3
            }
        },
        'Andrius': {
            'akodas': 567,
            'adresas': 'Rutu g. 1,Kaunas'
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
        console.log(subitem + ':' + studentai[item][subitem]);
    }
        for (var subitem in studentai[item]){
            console.log(subitem + ':' + studentai[item][subitem]);
        }
 }


})();