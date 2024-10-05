let input = document.querySelector("input")
let btn = document.querySelector("button")
let detail = document.querySelector("#movie-details")
btn.addEventListener("click",()=>{
    let title = input.value
    console.log(title)
    fetch(`https://www.omdbapi.com/?apikey=ceaf13c4&t=${title}`)
    .then(response => response.json())
    .then((data)=>{
        if(data.Response==="True"){
            moviedetails(data)

        }else{
            detail.innerHTML = `<div><h1 class="title">${data.Error}</h1></div>`
            
        }
    })
})

function moviedetails(data){
    let detail = document.querySelector("#movie-details")
    detail.innerHTML = 
    `<div>
        <h1 class="title">${data.Title}</h1>
        <img class="movie-img" src="${data.Poster}"></img>
        <div class="details">
            <p class="movie-genre">Genre:- ${data.Genre}</p>
            <p class="movie-cast">Actors:-${data.Actors}</p>
            <p>${data.Plot}</p>
            </div> 
        
    </div>`
}









