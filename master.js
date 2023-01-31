
let modal = document.getElementById("myModal");

// let modalA = document.getElementById("myModalA");

let btn = document.getElementById("myBtn");

// let btnA = document.getElementById("btn");

const button = document.querySelector('btn');
const form = document.querySelector('okno');
    
// При клике на кнопку



let spanFirst = document.getElementsByClassName("closeFirst")[0];

// let spanSecond = document.getElementsByClassName("closeSecond")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

// btnA.onclick = function(){
//     modalA.style.display = "block";
// }


spanFirst.onclick = function() {
    modal.style.display = "none";
}

// spanSecond.onclick = function(){
//     modalA.style.display = "none";
// }

window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
}

// window.onclick = function(event){
//     if(event.target == modalA){
//         modalA.style.display = "none";
//     }
// }


// const canvas = document.getElementById("canvas");
// const context = canvas.getContext("2d");

// const login = "введите логин";
// const name = "введите имя";
// const seconName = "введите фамилие";
// const password = "введите пороль";
// const phoneNumber = "введите номер телефона";
// function make(){
//     context.fillText(login, 20, 20);

//     context.fillText(name, 20, 20);

//     context.fillText(seconName, 20, 20);

//     context.fillText(password, 20, 20);

//     context.fillText(phoneNumber, 20, 20);
// }

// let update = setInterval(make, 100);

const registerBtn = document.getElementById("register");

const okno = document.getElementById("okno");


registerBtn.onclick = function(event){
//    alert("вы зарегистрировались на сайте SHAHMATY.info" + 
//        "вы можете бросать ввызов другим пользователяи" + 
//        "а также прокачивать свой аккаунт, играя онлайн с другими пользователями")
    okno.innerHTML = "Регистрация прошла успешно";
}

const closeRegister = document.getElementById("closeRegister");

closeRegister.onclick = function(){
    okno.style.display = "none";
}

window.onclick = function(event){
    if(event.target == okno){
        okno.style.display = "none";
    }
}


window.onload = function(){  //грузим окно в последнюю очередь, после загрузки всего


    function bot(){     //пишем бота
        let approved = [];     //проверки ходов
        let actions = [];        //ходы  
        let effects = [];       //итоги ходов


        for(let n = 0; n < 64; n++){  //определяем ширину доски белых
            if("prnbqk".indexOf(values[n]) >= 0){  //ищем указанный элемент и возвращаем его позицию
                let scopes = white(n,values) || []; //создаём масссив и заполняем иго белыми
                for(let x = 0; x < scopes.length; x++){  //делаем проверку на длину списка
                    let tmp = []//values.join(',').split(',');   //создам новый массив
                    for(let xx = 0; xx < 64; xx++){  //сравиниваем новую переменную со значением доски
                        tmp[xx] = values[xx]  //заполняем массив фигурами
                    }
                    let effect = 0; //новая переменная со значением итога одного хода
                    let action = Math.random()*3; //задаём в качестве значения псевдослучайное число с плавющей точкой и умножаем его на3
                    let actionValue = tmp[scopes[x]];   //новому массиву в качестве значений задаём массив с фигурами беллых
                    if(actionValue === "l"){  //провернка движения короля
                        action = 100 + Math.random()*3;  //к массиву action задаём аргумент движения
                    }
                    else if(actionValue === "w"){  //проверка движения ферьзя
                        action = 50 + Math.random()*3;  //к массиву задаём значение движения
                    }
                    else if(actionValue === "v"){ //проверка движения слона
                        action = 30 + Math.random()*3;  //к массиву задаём значение движения
                    }
                    else if(actionValue === "m"){  //проверка движения конья 
                        action = 30 + Math.random()*3;  // к массиву задаём значение движения 
                    }
                    else if(actionValue === "t"){  //проверка движение ладьи
                        action = 30 + Math.random()*3;  //к массиву задаём значение движения
                    }
                    else if(actionValue === "o"){  //проверка движения пешок
                        action = 15 + Math.random()*3;  //к массиву задаём значение движения
                    }
                    
                    tmp[scopes[x]] = tmp[n];  //к заполненному белыми фигурами массиву задаём в качестве значения координаты доски 
                    tmp[n] = 0; //обнуляем его
                    for(let y = 0; y < 64; y++){ //определяем ширину доски чёрных
                        if("otmvlw".indexOf(values[y]) >= 0){   //делаем проверку, ищем указанный элемент и возвращаем его позицию 
                            let tmpScp = black(y,tmp) || [];    //создаём масссив и заполняем иго чёрными
                            for(let z = 0; z < tmpScp.length; z++){  //сравниваем новую переменную с длиной списка 
                                let effectValue = tmp[tmpScp[z]]; //создаём новый массив
                                if(effectValue == "k"){ //проверка движения короля чёрных
                                    if(effect < 100){
                                        effect = 100;   //к массиву задаём значение движения
                                    }
                                }
                                else if(effectValue == "q"){  //проверка движения ферьзя
                                    if(effect < 50){
                                        effect = 50;   //двигаем ферьзя
                                    }
                                }
                                else if(effectValue == "b"){  //проверка движения слона
                                    if(effect < 30){
                                        effect = 30;  //двигаем слонов
                                    }
                                }
                                else if(effectValue == "n"){  //проверка коней
                                    if(effect < 30){
                                        effect = 30;   //двигаем коней
                                    }
                                }
                                else if(effectValue == "r"){   //проверка ладьи 
                                    if(effect < 30){
                                        effect = 30;  //двигаем ладью
                                    }
                                }
                                else if(effectValue == "p"){   //проверка пешок
                                    if(effect < 15){  
                                        effect = 15;    //двигаем пешок
                                    }
                                }
                            }
                        }
                    }




                    actions.push(action);  //к массиву action добавляем новое значение и возвращаем новую длину
                    effects.push(effect);  // к массиву еffects добавляем новое значение и возврашаем новую длину
                    approved.push(n+"-"+scopes[x]);  // к массиву approved добавляем новое значение и возвращаем новую длину
                }
            }
        }

        
        let bestEffect = Math.min.apply(null,effects);  //к новому массиву лучших ходов привязываем наименьшее число из 0, а в качестве аргумента null или false и отоги ходов
      
        if(bestEffect >= 100){  //если ставится мат
            alert("поздравляю с победой, давай ещё партию");

            container.innerHTML = "поздравляю с победой, давай ещё партию";
            setTimeout(function(){  
                values = ['r','n','b','q','k','b','n','r','p','p','p','p','p','p','p','p',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'o','o','o','o','o','o','o','o','t','m','v','w','l','v','m','t'];
        },100); //вызываем новую функцию 100 раз в секунду 
        }

        let tmpA = [];  //нвоый массив
        let tmpB = [];  //новый массив
        let tmpC = [];  //новый массив
        let bestMove = "";  //список из лучших ходов

        for(let n = 0; n < effects.length; n++){    //пока n меньше длины списка effects
            if(effects[n] === bestEffect){   //если движение равна мату
                tmpA.push(actions[n]);  //к новому массиву добавляем новый ход и возвращаем новую длину
                tmpB.push(approved[n]);  //к другому новому массиву добавляем проверку хода и возвращем новую длину
                tmpC.push(effects[n]);   //к другому новому массиву добавляем итги хода и возвращаем новую длину массива 
            }
        }
        bestMove = tmpB[tmpA.indexOf(Math.max.apply(null,tmpA))];  //к списку лучших ходов задаём значение элемента наёденного в массиве с аргументом nul или false и tmpA



        if(bestMove){   //проверка лучших ходов  
            values[Number(bestMove.split("-")[1])] = values[Number(bestMove.split("-")[0])]; //в массиве возврашаем число миллисекнд в лучших ходах и разбиваем их -, задаём значение самого себя с аргументом 0
            values[Number(bestMove.split("-")[0])] = 0;  //в массиве возврашаем число миллисекнд в лучших ходах и разбиваем их -, и задаём значениеи 0
            if(values[Number(bestMove.split("-")[1])] === "p" && Number(bestMove.split("-")[1]) >= 56){  //проверка, дошла ли пешка до края
                values[Number(bestMove.split("-")[1])] = "q";
            }           //пешка становится фербзём, пацан поднялся


            for(let x = 0; x < 64; x++){
                sqs[x].innerHTML = fonts[values[x]];    //рисуем все фигуры на доске
                if(values[x] === 0){  //если фигур нет
                    sqs[x].innerHTML = "";  //на экран ничего не рисуем
                }
            }
            myTurn = true;  //задаём значение истины к переменной поворотов и движения
        }
        else {
            alert('Упс ты проиграл аххахаха');
            container.innerHTML = "Упс, ты проиграл! ахахах!!!"; 
                // проверка поражения
        }
    }
    

    let w = window.innerWidth || 700;  //задаём ширину модального окна
    let h = window.innerHeight || 500;  //задаём высоту модального окна
    
    let tsw = (w > h) ? h : w;  //формула для клеток
    
    let sw = (tsw - 16)/8;  //формула для клеток
    
    let container = document.getElementById("container");  //берём элемент из айдишника, это и есть наше второе модальное окно
    let time = document.getElementById("time");  //этот айдишник нужен для таймера
    for(let n = 0; n < 64; n++){ //
        let square = document.createElement("div");//
        square.classList.add("square"); //
        square.classList.add("s"+n); //
        square.style.height = sw + 'px'; // 
        square.style.width = sw + 'px'; //
        square.style.top = 7+(h-tsw)/2+sw*(Math.floor(n/8)) + 'px';  //
        square.style.left = 7+(w-tsw)/2+sw*(Math.floor(n%8)) + 'px';  //
        square.style.fontSize = sw*3/4 + 'px';  //
        container.appendChild(square);  // 
    }   //формула для разделения его по клеткам

    function updateSquarecolor(){     //рисуем доску
        for(let n = 0; n < 64; n++){
            if(Math.floor(n/8)%2 === 0){
                if(n%2 === 0){
                    sqs[n].style.background = 'white';  //задаём цвет клеткам
                }
                else {
                    sqs[n].style.background = 'grey';  //цвет клатка
                }
            }
            else {
                if(n%2 === 1){
                    sqs[n].style.background = 'white';
                }
                else {
                    sqs[n].style.background = 'grey';
                }
            }
        }
    }

    let fonts = {
        'k' : '&#9818;',  //король черных
        'q' : '&#9819;',  //ферзь черных
        'r' : '&#9820',   //ладья черных
        'b' : '&#9821',   //слоны черных
        'n' : '&#9822',   //коньи черных
        'p' : '&#9823',   //пешки черных
        'l' : '&#9812;',  //король белых
        'w' : '&#9813;',  //ферзь белых
        't' : '&#9814',  //ладья белых
        'v' : '&#9815',  //слон белых
        'm' : '&#9816', //конь белых
        'o' : '&#9817',  //пешки белых
        
    } //берём спрайты с ...
    
    let values = ['r','n','b','q','k','b','n','r','p','p','p','p','p','p','p','p',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'o','o','o','o','o','o','o','o','t','m','v','w','l','v','m','t'];
    let ck = true;
    let cr1 = true;
    let cr2 = true;
    let cl;
    
    let sqs = document.getElementsByClassName("square"); //создаём мссив и привязываем к нему блок с классом

    const lose = "вы проиграли!"; //константа поражения

    const win = "вы победили!";  //константа победы


    for(let n = 0; n < 64; n++){
        if(values[n] !== 0){
            sqs[n].innerHTML = fonts[values[n]];  //рисуем все фигуры на доске
        }
        sqs[n].addEventListener("click",check);    //создаем цикл со слушателем событий
    }


    

    
    updateSquarecolor();  //рисуем доску

    let moveable = false;
    let moveTarget = "";
    let moveScopes = [];



    function black(n,values){ //функция проверок чёрных
        let target = values[n]; //к новой переменной задаём фигур
        let scopes = [];  //новый массив отвечающий за масштаб
        let x = n;  //...
       
        if(target === "o"){ //движение пешки белых
            x -= 8;
            if("prnbkq".indexOf(values[x-1]) >= 0 && x%8 != 0){ 
                scopes.push(x-1);  //двигаем пешку
                //alert(1)
            }
            if("prnbkq".indexOf(values[x+1]) >= 0 && x%8 != 7){
                scopes.push(x+1);  //двигаем пешку
                //alert(2)
            }
            if(x >= 0 && values[x] === 0){
                scopes.push(x);  //кликание мыщькой по пешке
                //alert(3) 
                if(x >= 40){
                    //alert(4) //кликание по месту куда надо двинуться
                    if(x-8 >= 0 && values[x-8] === 0){
                        scopes.push(x-8);  //само передвижение
                        //alert(5)
                    }
                }
            }
        }
       
        else if(target === "t"){  //движение белой ладьи
            x = n;
            x -= 8;
            //alert(1)
            while(x >= 0){
                //alert(2)
                if(values[x] === 0){  //кликание по ладье
                    scopes.push(x);
                    //alert(3)
                }
                else if("prnbqk".indexOf(values[x]) >= 0){ //двигаем ладью
                    scopes.push(x);
                    //alert(4)
                    break;
                }
                else {
                    break;
                }
                x -= 8;
            }
            x = n;
            x += 8;
            while(x < 64){
                
                if(values[x] === 0){
                    scopes.push(x); //кликаем по клетке в которую надо двигатьь ладью
                    
                }
                else if("prnbqk".indexOf(values[x]) >= 0){  
                    scopes.push(x);  //проверка битья ладьёй другие фигуры противников
                    break; //прерываем проверку
                }
                else {
                    break;
                }
                x += 8;
            }
            x = n;
            x++;
            while(x%8 != 0){
                
                if(values[x] === 0){
                    scopes.push(x);  //перемещение ладьи
                }
                else if("prnbqk".indexOf(values[x]) >= 0){ 
                    scopes.push(x);  //фигуры противников кушают ладью
                    
                    break;  //препываем
                }
                else {
                    break;
                }
                x++;
            }
            x = n;
            x--;
            while(x%8 != 7){
                
                if(values[x] === 0){
                    scopes.push(x);  //последующие ходы ладьи
                    
                }
                else if("prnbqk".indexOf(values[x]) >= 0){
                    scopes.push(x);  //атака ладьи
                    
                    break;
                }
                else {
                    break;
                }
                x--;
            }
        }
        
        else if(target === "m"){  //движение коня
            x = n;
            if(x%8 > 1 && x%8 < 6){
                x -= 17;  //перемещение коня

                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x); //кликание по конью
                            //ждём пока двинется соперник
                }
                x = n;
                x -= 15;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);  //кликание по клетке куда надо переместить коня

                }

                x = n;
                x -= 10;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);  //само перемещение

                }
                x = n;
                x -= 6;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x); //еффект перемещения

                }
                x = n;
                x += 6;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);  //атака к коню

                }
                x = n;
                x += 10;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);  //фигуры противников кушают коня

                }
                x = n;
                x += 15;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x); //атака второго коня

                }
                x = n;
                x += 17;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x); //перемещение второго коня

                }
            }
            else {
                x = n;
                if(x%8 <= 1){
                    x = n;
                    x -= 15;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);  //кликание по месту куда надо двинуться

                    }
                    x = n;
                    x -= 6;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);  //атака первогго коня

                    }
                    x = n;
                    x += 10;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);  //атака к коню
                    }
                    x = n;
                    x += 17;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);  //атака первым конём
                    }
                }
                x = n;
                if(x%8 === 1){
                    x -= 17;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);   //кликание по первому коню
                    }
                    x = n;
                    x += 15;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);  //кликание по второму коню
                    }
                }
                if(x%8 >= 6){
                    x = n;
                    x -= 17;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);  //кликание по обеим коням
                    }
                    x = n;
                    x -= 10;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);  //атака второго коня
                    }
                    x = n;
                    x += 6;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);  //конь хавает
                    }
                    x = n;
                    x += 15;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);  //
                    }
                }
                x = n;
                if(x%8 === 6){
                    x = n;
                    x -= 15;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                    x = n;
                    x += 17;
                    if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                }
            }
        }
        
        else if(target === "v"){   //проверка слона 
            x = n;
            x -= 9;
            while(x >= 0 && x%8 !== 7){
                if(values[x] === 0){
                    scopes.push(x); //кликание мышькой по слону
                }
                else if("prnbqk".indexOf(values[x]) >= 0){
                    scopes.push(x); //кликоние мышькой по месту куда надо переместиться 
                    break;  //прерываем условие
                }
                else {
                    break;
                }
                x -= 9;
            }
            x = n;
            x += 7;
            while(x < 64 && x%8 !== 7){
                if(values[x] === 0){
                    scopes.push(x);  //перемещение
                }
                else if("prnbqk".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x += 7;
            }
            x = n;
            x += 9;
            while(x%8 != 0 && x%8 !== 0){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x += 9;
            }
            x = n;
            x -= 7;
            while(x%8 != 0){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x -= 7;
            }
        }
       
        else if(target === "w"){
            x = n;
            x -= 8;
            while(x >= 0){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x -= 8;
            }
            x = n;
            x += 8;
            while(x < 64){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x += 8;
            }
            x = n;
            x++;
            while(x%8 != 0){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x++;
            }
            x = n;
            x--;
            while(x%8 != 7){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x--;
            }
            x = n;
            x -= 9;
            while(x >= 0 && x%8 !== 7){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x -= 9;
            }
            x = n;
            x += 7;
            while(x < 64 && x%8 !== 7){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x += 7;
            }
            x = n;
            x += 9;
            while(x%8 != 0 && x%8 !== 0){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x += 9;
            }
            x = n;
            x -= 7;
            while(x%8 != 0){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("prnbqk".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x -= 7;
            }
        }
        
        else if(target === "l"){
            x = n;
            x += 8;
            if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                scopes.push(x);
            }
            x = n;
            x -= 8;
            if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                scopes.push(x);
            }
            x = n;
            if(x%8 > 0){
                x = n;
                x -= 1;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
                x = n;
                x -= 9;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }

                x = n;
                x += 7;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
            }
            x = n;
            if(x%8 < 7){
                x = n;
                x += 1;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
                x = n;
                x += 9;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
                x = n;
                x -= 7;
                if(("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
            }
            x = n;
            if(!ck){
                cl = false;
                if(!cr2){
                //    cl = false;
                    if(values[n+1] === 0 && values[n+2] === 0 && values[n+3] === "t"){
                        scopes.push(x+2);
                        cl = true;
                    }
                }
                if(!cr1){
                //    cl = false;
                    if(values[n-1] === 0 && values[n-2] === 0 && values[n-3] === 0 && values[n-4] === "t"){
                        scopes.push(x-2);
                        cl = true;
                    }
                }
            }
        }
        if(scopes.length) return scopes;
    }

    function white(n,values){
        let target = values[n];
        let scopes = [];
        let x = n;
        if(target === "p"){
            x += 8;
            if("otmvlw".indexOf(values[x-1]) >= 0 && x%8 != 0){
                scopes.push(x-1);
            }
            if("otmvlw".indexOf(values[x+1]) >= 0 && x%8 != 7){
                scopes.push(x+1);
            }
            if(x < 64 && values[x] === 0){
                scopes.push(x);
                if(x <= 23){
                    if(x+8 >= 0 && values[x+8] === 0){
                        scopes.push(x+8);
                    }
                }
            }
        }
        
        else if(target === "r"){
            x = n;
            x -= 8;
            while(x >= 0){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x -= 8;
            }
            x = n;
            x += 8;
            while(x < 64){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x += 8;
            }
            x = n;
            x++;
            while(x%8 != 0){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x++;
            }
            x = n;
            x--;
            while(x%8 != 7){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x--;
            }
        }
        
        else if(target === "n"){
            x = n;
            if(x%8 > 1 && x%8 < 6){
                x -= 17;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
                x = n;
                x -= 15;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }

                x = n;
                x -= 10;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
                x = n;
                x -= 6;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
                x = n;
                x += 6;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
                x = n;
                x += 10;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
                x = n;
                x += 15;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
                x = n;
                x += 17;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
            }
            else {
                x = n;
                if(x%8 <= 1){
                    x = n;
                    x -= 15;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                    x = n;
                    x -= 6;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                    x = n;
                    x += 10;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                    x = n;
                    x += 17;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                }
                x = n;
                if(x%8 === 1){
                    x -= 17;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                    x = n;
                    x += 15;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                }
                if(x%8 >= 6){
                    x = n;
                    x -= 17;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                    x = n;
                    x -= 10;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                    x = n;
                    x += 6;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                    x = n;
                    x += 15;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                }
                x = n;
                if(x%8 === 6){
                    x = n;
                    x -= 15;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                    x = n;
                    x += 17;
                    if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                        scopes.push(x);
                    }
                }
            }
        }
     
        else if(target === "b"){
            x = n;
            x -= 9;
            while(x >= 0 && x%8 !== 7){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x -= 9;
            }
            x = n;
            x += 7;
            while(x < 64 && x%8 !== 7){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x += 7;
            }
            x = n;
            x += 9;
            while(x%8 != 0 && x%8 !== 0){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x += 9;
            }
            x = n;
            x -= 7;
            while(x%8 != 0){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x -= 7;
            }
        }
        
        else if(target === "q"){
            x = n;
            x -= 8;
            while(x >= 0){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x -= 8;
            }
            x = n;
            x += 8;
            while(x < 64){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x += 8;
            }
            x = n;
            x++;
            while(x%8 != 0){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x++;
            }
            x = n;
            x--;
            while(x%8 != 7){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x--;
            }
            x = n;
            x -= 9;
            while(x >= 0 && x%8 !== 7){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x -= 9;
            }
            x = n;
            x += 7;
            while(x < 64 && x%8 !== 7){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x += 7;
            }
            x = n;
            x += 9;
            while(x%8 != 0 && x%8 !== 0){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x += 9;
            }
            x = n;
            x -= 7;
            while(x%8 != 0){
                if(values[x] === 0){
                    scopes.push(x);
                }
                else if("otmvlw".indexOf(values[x]) >= 0){
                    scopes.push(x);
                    break;
                }
                else {
                    break;
                }
                x -= 7;
            }
        }
        
        else if(target === "k"){
            x = n;
            x += 8;
            if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                scopes.push(x);
            }
            x = n;
            x -= 8;
            if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                scopes.push(x);
            }
            x = n;
            if(x%8 > 0){
                x = n;
                x -= 1;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
                x = n;
                x -= 9;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }

                x = n;
                x += 7;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
            }
            x = n;
            if(x%8 < 7){
                x = n;
                x += 1;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
                x = n;
                x += 9;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
                x = n;
                x -= 7;
                if(("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0){
                    scopes.push(x);
                }
            }
        }
        if(scopes.length) return scopes;
    }

    let Turn = true;

    function check(){
        if(Turn){
            let n = Number(this.classList[1].slice(1));
            let target = values[n];

            let scopes = black(n,values) || [];

            let x = n;

            if(!moveable){
                if(scopes.length > 0){
                    moveable = true;
                    moveTarget = n;
                    moveScopes = scopes.join(",").split(",");
                }
                else {

                }
            }
            else {
                if(moveScopes.indexOf(String(n)) >= 0){
                    let checkArr = [];
                    let saveKing = false;
                    for(let z = 0; z < 64; z++){
                        checkArr[z] = values[z];
                    }
                    
                    checkArr[n] = checkArr[moveTarget];
                    checkArr[moveTarget] = 0;
                    
                    for(let y = 0; y < 64; y++){
                        if("prnbkq".indexOf(checkArr[y]) >= 0){
                            let checkScp = white(y,checkArr) || [];
                            for(let z = 0; z < checkScp.length; z++){
                                if(checkArr[checkScp[z]] === 'l'){
                                    if(!saveKing){
                                        alert('это недоступный ход');
                                        saveKing = true;
                                    }
                                }
                            }
                        }
                    }
                    
                    if(!saveKing){
                        values[n] = values[moveTarget];
                        values[moveTarget] = 0;
                        if(cl){
                            if(n === 62 && moveTarget === 60){
                                values[63] = 0;
                                values[61] = "t";
                            }
                            else if(n === 58 && moveTarget === 60){
                                values[59] = "t";
                                values[56] = 0;
                            }
                        }
                        if(moveTarget === 60){
                            ck = true;
                        }
                        else if(moveTarget === 63){
                            cr2 = true;
                        }
                        else if(moveTarget === 56){
                            cr1 = true;
                        }
                        if(values[n] === "o" && n < 8){
                            values[n] = "w";
                        }
                        moveable = false;
                        scopes = [];
                        myTurn = false;
                        setTimeout(bot,1000); //вызываем бота
                    }
                }
                else {
                    moveScopes = [];
                    moveable = false;
                }
            }

            updateSquarecolor();
            
            for(let x = 0; x < 64; x++){
                sqs[x].innerHTML = fonts[values[x]];
                if(values[x] === 0){
                    sqs[x].innerHTML = "";
                }
            }

            
        }
    }


    let arr = [];

   
}




