const Demo = ()=>{

    // callbacks, dar viena funkcija kvieciama funkcijos viduje

    function count(a,b, callback){
        callback();
        return a * b;
    }
    const sayHello = function(){console.log('labas')};

    console.log(count(8,9, sayHello));

    const getData = ()=>{
        fetch()
    }
    const printData = () =>{ //error
        console.log(data);  //kodo blokavimas, nes Javascript vykdo viska viena gija, o dar negavo duomenu
    }
    const createData = ()=>{
        //
    }
    // asinchroninis programavimas

    const message = ()=>{
        console.log('Zinute atsiranda po 3 sekundziu')
    }
    setTimeout(message, 3000);

    const nav = document.querySelector('nav')
    console.log('nav')

    //norint perkelti scripta i <head> naudojam async(neuztikrina eiliskumo)
    // arba defer (uztikrina eiliskuma) <script src="app.js async"></script>
    // arba <script src="app.js defer"></script>

    //Promises
    //async, await

    const movies = ()=>{
        let data  = fetch('http://www.omdbapi.com/?i=tt3896198&apikey=18c1a865&t=matrix')
        .then(res => res.json());
        return data;
    }

    const showData = async ()=>{
        let data = await movies();
        console.log(data);
    }

    showData();

}

export default Demo