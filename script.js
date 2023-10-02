// function tempo(event){
//     event.prevenDefault();

//     let result = document.querySelector("container_tempo")
//     let input = document.querySelector("input").value

//     let dataV = document.querySelector("data")
//     let cidadeV = document.querySelector("cidade")
//     let tempoV = document.querySelector("tempo")
//     let descricaoV = document.querySelector("descricao")

//     if(input === '' || input === undefined){
//         alert("Preencha o nome da cidade.")
//         return;
//     }

//     const key = 'numero 1';
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input},BR&lang=pt_br&appid=${key}`)

// }

////////////////////////////////////////////////////////////////////
// function handleSearch(event){
//     event.preventDefault();
  
//     let contentResult = document.querySelector(".content");
//     let cityInput = document.getElementById("input").value;
    
//     let dateContent = document.getElementById("date");
//     let cityContent = document.getElementById("city");
//     let tempContent = document.getElementById("temp");
//     let descriptionContent = document.getElementById("description");
  
//     if(cityInput === '' || cityInput === undefined){
//       alert("Preenche o nome da cidade.")
//       return;
//     }
  
//     const key = 'COLOQUE_AQUI_SUA_KEY';
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput},BR&lang=pt_br&appid=${key}`)
//     .then(response => {
//         // console.log(response.data); << Retorno da requisição
  
//         dateContent.innerText = new Date().toLocaleDateString("pt-BR");
//         cityContent.innerText = response.data?.name;
//         tempContent.innerText = (response.data?.main?.temp - 273.15).toFixed(0); // Convertendo de Kelv para Celsius;
//         descriptionContent.innerText = response.data?.weather[0]?.description;
  
//         contentResult.classList.remove("hide")
//     })
//     .catch(error => {
//       alert("Ops, não encontramos essa cidade")
//       console.log(error)
//     });
  
    
//   }
  